"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { MessageCircle, Mail, Book, Users, Clock, CheckCircle, ArrowRight, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  // Add state for form submission
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Here you would integrate with your backend/email service
    // Example: await submitSupportRequest(formData)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 5000)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Support Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're Here to <span className="gradient-text">Help</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Get the support you need to make the most of BaLS Hub</p>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Book className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-gray-400 mb-4">Find answers in our comprehensive docs</p>
                <Button variant="ghost" size="sm" asChild className="text-emerald-400 hover:text-emerald-300">
                  <Link href="/docs">
                    Browse Docs
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-400 mb-4">Connect with other developers</p>
                <Button variant="ghost" size="sm" asChild className="text-blue-400 hover:text-blue-300">
                  <Link href="/community">
                    Join Community
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-gray-400 mb-4">Chat with our support team</p>
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                  Start Chat
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-gray-400 mb-4">Send us a detailed message</p>
                <Button variant="ghost" size="sm" asChild className="text-orange-400 hover:text-orange-300">
                  <Link href="mailto:fixich88@gmail.com">
                    Send Email
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Support</h2>
            <p className="text-gray-400">Can't find what you're looking for? Send us a message.</p>
          </div>

          {formSubmitted ? (
            <Card className="glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for contacting us. We've received your message and will respond within 24-48 hours.
                </p>
                <p className="text-sm text-gray-400">
                  For urgent issues, please email us directly at fixich88@gmail.com
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-effect">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-gray-800/50 border-gray-700 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white"
                      placeholder="Describe your issue or question in detail..."
                    />
                  </div>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I install BaLS Hub?",
                answer:
                  "Download the installer for your operating system from our download page and run it. The installation process is straightforward and requires no additional configuration.",
              },
              {
                question: "What programming languages are supported?",
                answer:
                  "BaLS Hub supports JavaScript, TypeScript, Python, Java, C#, PHP, Ruby, Go, and many other popular programming languages.",
              },
              {
                question: "Can I integrate BaLS Hub with my CI/CD pipeline?",
                answer:
                  "Yes! BaLS Hub provides plugins and integrations for popular CI/CD platforms including GitHub Actions, Jenkins, GitLab CI, and Azure DevOps.",
              },
              {
                question: "How accurate are the vulnerability detections?",
                answer:
                  "BaLS Hub maintains a 99.9% accuracy rate with minimal false positives. Our advanced static analysis engine is continuously updated with the latest security patterns.",
              },
              {
                question: "Is there a free trial for Pro features?",
                answer:
                  "Yes, we offer a 14-day free trial for all Pro features. No credit card required to start your trial.",
              },
            ].map((faq, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Response Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">Free Plan</h3>
              <p className="text-gray-400">48-72 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Pro Plan</h3>
              <p className="text-gray-400">12-24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-400">2-4 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
