"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { PaymentInput } from "@/components/payment-input"
import Link from "next/link"
import { Crown, Shield, CreditCard, Lock, ArrowLeft, Check } from "lucide-react"
import { useState } from "react"

export default function ProCheckoutPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "",
    zip: "",
    state: "",
  })

  const pricing = {
    monthly: { price: 29, total: 29, savings: 0 },
    yearly: { price: 290, total: 290, savings: 58 },
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false)
      setPaymentSuccess(true)
      // In real implementation, integrate with Stripe, PayPal, etc.
      // Example:
      // const response = await fetch('/api/payments/process', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     plan: 'pro',
      //     cycle: billingCycle,
      //     ...formData,
      //     amount: pricing[billingCycle].total
      //   })
      // })
    }, 3000)
  }

  if (paymentSuccess) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
              <p className="text-gray-400 mb-6">Welcome to BaLS Hub Pro! Your subscription is now active.</p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/download">Download BaLS Hub</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" size="sm" className="mr-4">
              <Link href="/pricing">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Pricing
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
              Pro Plan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Your <span className="gradient-text">Pro</span> Purchase
            </h1>
            <p className="text-xl text-gray-300">Unlock advanced security scanning and premium features</p>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <Card className="glass-effect">
                <CardHeader>
                  <h2 className="text-2xl font-bold flex items-center">
                    <Crown className="h-6 w-6 text-emerald-400 mr-3" />
                    Order Summary
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Plan Selection */}
                  <div>
                    <h3 className="font-semibold mb-4">Billing Cycle</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant={billingCycle === "monthly" ? "default" : "outline"}
                        onClick={() => setBillingCycle("monthly")}
                        className={
                          billingCycle === "monthly" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-transparent"
                        }
                      >
                        Monthly
                      </Button>
                      <Button
                        variant={billingCycle === "yearly" ? "default" : "outline"}
                        onClick={() => setBillingCycle("yearly")}
                        className={billingCycle === "yearly" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-transparent"}
                      >
                        Yearly
                        <Badge className="ml-2 bg-orange-500 text-white text-xs">Save 17%</Badge>
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>BaLS Hub Pro ({billingCycle})</span>
                      <span>${pricing[billingCycle as keyof typeof pricing].price}</span>
                    </div>
                    {billingCycle === "yearly" && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Annual discount</span>
                        <span>-${pricing.yearly.savings}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${pricing[billingCycle as keyof typeof pricing].total}</span>
                  </div>

                  {/* Features Included */}
                  <div className="mt-6">
                    <h3 className="font-semibold mb-4">What's Included</h3>
                    <div className="space-y-2">
                      {[
                        "Advanced security scanning",
                        "Unlimited lines of code",
                        "Unlimited scans",
                        "Logic error detection",
                        "Performance analysis",
                        "CI/CD integration",
                        "Priority support",
                        "Custom rules",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="order-1 lg:order-2">
              <Card className="glass-effect">
                <CardHeader>
                  <h2 className="text-2xl font-bold flex items-center">
                    <CreditCard className="h-6 w-6 text-blue-400 mr-3" />
                    Payment Details
                  </h2>
                  <div className="flex items-center text-sm text-gray-400">
                    <Lock className="h-4 w-4 mr-2" />
                    <span>Secured by 256-bit SSL encryption</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <PaymentInput
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Card Information */}
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                        Card Number
                      </label>
                      <PaymentInput
                        id="cardNumber"
                        type="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange("cardNumber")}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                          Expiry Date
                        </label>
                        <PaymentInput
                          id="expiry"
                          type="expiry"
                          required
                          value={formData.expiry}
                          onChange={handleInputChange("expiry")}
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                          CVC
                        </label>
                        <PaymentInput
                          id="cvc"
                          type="cvc"
                          required
                          value={formData.cvc}
                          onChange={handleInputChange("cvc")}
                        />
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-2">
                        Country
                      </label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium mb-2">
                          ZIP Code
                        </label>
                        <PaymentInput
                          id="zip"
                          type="zip"
                          required
                          value={formData.zip}
                          onChange={handleInputChange("zip")}
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-2">
                          State/Province
                        </label>
                        <PaymentInput
                          id="state"
                          type="state"
                          value={formData.state}
                          onChange={handleInputChange("state")}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={paymentProcessing}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg"
                    >
                      {paymentProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <Shield className="h-5 w-5 mr-2" />
                          Complete Purchase - ${pricing[billingCycle as keyof typeof pricing].total}
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      By completing this purchase, you agree to our{" "}
                      <Link href="/terms" className="text-emerald-400 hover:text-emerald-300">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="glass-effect mt-6">
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Shield className="h-4 w-4 mr-2 text-emerald-400" />
                    <span>Your payment information is encrypted and secure. We never store your card details.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
