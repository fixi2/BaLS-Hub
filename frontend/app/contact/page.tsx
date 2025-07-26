"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Mail, Send, Building, Users, Zap } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Ready to secure your code? Let's discuss how BaLS Hub can help your team.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-effect text-center hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-gray-400 mb-6">Send us a message and we'll respond within 24 hours</p>
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Link href="mailto:fixich88@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    fixich88@gmail.com
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Sales</h3>
                <p className="text-gray-400 mb-6">Discuss custom solutions for your organization</p>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                  <Link href="https://calendly.com/">Schedule Call</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-gray-400 mb-6">Join our developer community for support</p>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                  <Link href="https://discord.com/">Join Discord</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <Card className="glass-effect">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
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
                          className="bg-gray-800/50 border-gray-700 text-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-medium mb-2">
                        Inquiry Type *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        required
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose BaLS Hub?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Lightning Fast</h4>
                      <p className="text-gray-400">
                        Scan thousands of lines of code in seconds with our optimized engine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Building className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Enterprise Ready</h4>
                      <p className="text-gray-400">
                        Scalable solutions with SSO, custom integrations, and dedicated support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Team Collaboration</h4>
                      <p className="text-gray-400">
                        Built-in tools for team workflows and collaborative security reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM UTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span>10:00 AM - 4:00 PM UTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Response Time</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span className="text-sm">Sales inquiries: Within 2 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">Support requests: Within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-sm">General inquiries: Within 48 hours</span>
                    </div>
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
