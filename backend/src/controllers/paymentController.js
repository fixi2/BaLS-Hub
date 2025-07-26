const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const Plan = require('../models/Plan');

exports.createSubscriptionCheckoutSession = async (req, res) => {
  const { planId } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    const plan = await Plan.findById(planId);

    if (!plan) {
      return res.status(404).json({ msg: 'Plan not found' });
    }

    let stripeCustomerId = user.stripeCustomerId;

    // Create a new Stripe customer if one doesn't exist
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: {
          mongoUserId: user._id.toString()
        }
      });
      stripeCustomerId = customer.id;
      user.stripeCustomerId = stripeCustomerId;
      await user.save();
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer: stripeCustomerId,
      line_items: [{
        price: plan.stripePlanId,
        quantity: 1,
      }],
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/pricing`,
      metadata: {
        mongoUserId: user._id.toString(),
        planId: plan._id.toString()
      }
    });

    res.json({ id: session.id });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;

      // This is where you'd fulfill the purchase, e.g., update the user's subscription in your DB
      const user = await User.findOne({ stripeCustomerId: session.customer });
      if (user) {
        user.subscription.status = 'active';
        user.subscription.stripeSubscriptionId = session.subscription;
        user.subscription.plan = session.metadata.planId;
        // You might want to get the subscription details to set the currentPeriodEnds
        await user.save();
        console.log(`Subscription updated for user: ${user.email}`);
      }
      break;
    
    // ... handle other event types, e.g., 'invoice.payment_succeeded', 'invoice.payment_failed'
    
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({received: true});
}; 