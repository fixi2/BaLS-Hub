"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, Bell, CheckCircle, FileText, Clock, Users } from "lucide-react"

export default function BlogComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Here you would integrate with your email service
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-gray-400 hover:text-white">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            Coming Soon
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Blog Articles Coming Soon</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're working hard to bring you high-quality security and development content. Our blog will feature
            in-depth tutorials, security insights, and best practices.
          </p>
        </div>

        {/* What to Expect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-900/30 rounded-lg">
                  <FileText className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white">In-Depth Tutorials</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Step-by-step guides on security implementation, code analysis, and vulnerability prevention.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Expert Insights</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Articles from security professionals and experienced developers sharing their knowledge.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-900/30 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Regular Updates</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Fresh content published weekly covering the latest security trends and BaLS Hub features.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Planned Content */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-400" />
              Planned Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Security Topics</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Advanced SQL Injection Detection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    XSS Prevention in Modern Frameworks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    CSRF Protection Best Practices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Secure API Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Authentication & Authorization
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Development Topics</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    BaLS Hub Integration Guides
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    CI/CD Security Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Code Review Best Practices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Security Testing Strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Team Security Workflows
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border-emerald-800/30 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="gradient-text text-2xl mb-2">Get Notified When We Launch</CardTitle>
            <p className="text-gray-400">Be the first to read our security insights and development tutorials.</p>
          </CardHeader>
          <CardContent>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap">
                  <Bell className="h-4 w-4 mr-2" />
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-900/30 text-emerald-400 px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                  Successfully subscribed! We'll notify you when articles are published.
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Alternative Resources */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle>In the Meantime</CardTitle>
            <p className="text-gray-400">While we're preparing our blog content, check out these resources:</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 bg-transparent"
              >
                <Link href="/docs">
                  <FileText className="h-4 w-4 mr-2" />
                  Documentation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 bg-transparent"
              >
                <Link href="/support">
                  <Users className="h-4 w-4 mr-2" />
                  Get Support
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
