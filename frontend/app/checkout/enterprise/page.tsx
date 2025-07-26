"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Building, Users, Shield, ArrowLeft, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function EnterpriseCheckoutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    requirements: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Here you would integrate with your CRM/sales system
    // Example: await submitEnterpriseInquiry(formData)
  }

  if (formSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
              <p className="text-gray-400 mb-6">
                We've received your enterprise inquiry. Our sales team will contact you within 24 hours to discuss your
                requirements.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/docs">Browse Documentation</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/pricing">Back to Pricing</Link>
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
              Enterprise Plan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300">Get a custom quote tailored to your organization's needs</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enterprise Features */}
            <div>
              <Card className="glass-effect">
                <CardHeader>
                  <h2 className="text-2xl font-bold flex items-center">
                    <Building className="h-6 w-6 text-emerald-400 mr-3" />
                    Enterprise Features
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Everything in Pro</h3>
                        <p className="text-gray-400 text-sm">All Pro features included</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Team Collaboration</h3>
                        <p className="text-gray-400 text-sm">Advanced team management and collaboration tools</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">SSO Integration</h3>
                        <p className="text-gray-400 text-sm">SAML, LDAP, and OAuth integration</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">On-Premise Deployment</h3>
                        <p className="text-gray-400 text-sm">Deploy BaLS Hub in your own infrastructure</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Custom Integrations</h3>
                        <p className="text-gray-400 text-sm">Tailored integrations with your existing tools</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Dedicated Support</h3>
                        <p className="text-gray-400 text-sm">24/7 priority support with dedicated account manager</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Advanced Analytics</h3>
                        <p className="text-gray-400 text-sm">Comprehensive reporting and analytics dashboard</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Compliance Support</h3>
                        <p className="text-gray-400 text-sm">SOC 2, GDPR, HIPAA compliance assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Training & Onboarding</h3>
                        <p className="text-gray-400 text-sm">Comprehensive training for your team</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Pricing</h3>
                  <p className="text-gray-300 mb-4">
                    Enterprise pricing is customized based on your specific requirements, team size, and usage needs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Starting from</span>
                      <span className="font-semibold">$500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Volume discounts</span>
                      <span className="text-emerald-400">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual billing</span>
                      <span className="text-emerald-400">20% discount</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="glass-effect">
                <CardHeader>
                  <h2 className="text-2xl font-bold">Get Custom Quote</h2>
                  <p className="text-gray-400">Tell us about your requirements and we'll create a tailored solution.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="bg-gray-800/50 border-gray-700 text-white"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="bg-gray-800/50 border-gray-700 text-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-2">
                        Your Role *
                      </label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) => setFormData({ ...formData, role: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="engineering-manager">Engineering Manager</SelectItem>
                          <SelectItem value="security-lead">Security Lead</SelectItem>
                          <SelectItem value="devops-lead">DevOps Lead</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
                        Team Size *
                      </label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-50">10-50 developers</SelectItem>
                          <SelectItem value="50-100">50-100 developers</SelectItem>
                          <SelectItem value="100-500">100-500 developers</SelectItem>
                          <SelectItem value="500+">500+ developers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium mb-2">
                        Requirements & Use Case
                      </label>
                      <Textarea
                        id="requirements"
                        rows={4}
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="Tell us about your security requirements, compliance needs, integration requirements, etc."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Request Custom Quote
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form, you agree to our{" "}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
