"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Building, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "forever",
      description: "Perfect for getting started with code security",
      icon: Star,
      popular: false,
      features: [
        "Basic security scanning",
        "Up to 10,000 lines of code",
        "5 scans per month",
        "Basic vulnerability detection",
        "Community support",
        "Desktop application",
      ],
      checkoutUrl: "/checkout/basic",
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Advanced features for professional developers",
      icon: Crown,
      popular: true,
      features: [
        "Advanced security scanning",
        "Unlimited lines of code",
        "Unlimited scans",
        "Logic error detection",
        "Performance analysis",
        "CI/CD integration",
        "Priority support",
        "Custom rules",
      ],
      checkoutUrl: "/checkout/pro",
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      icon: Building,
      popular: false,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "SSO integration",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "Compliance support",
      ],
      checkoutUrl: "/checkout/enterprise",
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Security Plan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Start free and scale as your security needs grow. All plans include our core scanning engine.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-effect relative ${
                  plan.popular ? "ring-2 ring-emerald-500/50 scale-105" : "hover:bg-white/10"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      plan.popular ? "bg-emerald-500/20" : "bg-gray-800/50"
                    }`}
                  >
                    <plan.icon className={`h-8 w-8 ${plan.popular ? "text-emerald-400" : "text-gray-400"}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-1">{plan.price}</div>
                    <div className="text-gray-400 text-sm">{plan.period}</div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    variant={plan.buttonVariant}
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : "bg-transparent border-gray-600 hover:bg-gray-800"
                    }`}
                  >
                    <Link href={plan.checkoutUrl}>
                      {plan.buttonText}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade anytime?</h3>
                <p className="text-gray-400 text-sm">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate the billing.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a free trial for Pro?</h3>
                <p className="text-gray-400 text-sm">
                  Yes! Pro plan comes with a 14-day free trial. No credit card required to start your trial.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-400 text-sm">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-400 text-sm">
                  Yes! We offer a 30-day money-back guarantee for all paid plans. No questions asked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Code?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who trust BaLS Hub to keep their code secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              <Link href="/checkout/basic">
                <Star className="h-5 w-5 mr-2" />
                Start Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/checkout/pro">
                Try Pro Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
