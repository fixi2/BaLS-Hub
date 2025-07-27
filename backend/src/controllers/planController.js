const Plan = require('../models/Plan');

// Get all plans
exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a plan
exports.createPlan = async (req, res) => {
  const { name, price, features, isPro, stripePlanId } = req.body;
  try {
    const newPlan = new Plan({
      name,
      price,
      features,
      isPro,
      stripePlanId
    });

    const plan = await newPlan.save();
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a plan
exports.updatePlan = async (req, res) => {
  const { name, price, features, isPro, stripePlanId } = req.body;

  const planFields = {};
  if (name) planFields.name = name;
  if (price) planFields.price = price;
  if (features) planFields.features = features;
  if (isPro) planFields.isPro = isPro;
  if (stripePlanId) planFields.stripePlanId = stripePlanId;

  try {
    let plan = await Plan.findById(req.params.id);

    if (!plan) return res.status(404).json({ msg: 'Plan not found' });

    plan = await Plan.findByIdAndUpdate(
      req.params.id,
      { $set: planFields },
      { new: true }
    );
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a plan
exports.deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ msg: 'Plan not found' });
    }

    await plan.remove();
    res.json({ msg: 'Plan removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 