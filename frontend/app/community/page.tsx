"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Star, Bell, CheckCircle, Calendar, Zap, Heart } from "lucide-react"

export default function CommunityPage() {
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-900/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            Coming Soon
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">BaLS Hub Community Forum</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow developers, share security insights, and get help from the community. Our forum is
            launching soon with exciting features!
          </p>
        </div>

        {/* Preview Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-900/30 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white">Discussion Forums</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Dedicated spaces for security discussions, code reviews, and best practices sharing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Expert Network</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Connect with security experts and experienced developers from around the world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-900/30 rounded-lg">
                  <Star className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Knowledge Base</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Searchable repository of solutions, tutorials, and community-contributed content.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-900/30 rounded-lg">
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white">Live Q&A Sessions</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Regular live sessions with BaLS Hub team and security professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-red-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-900/30 rounded-lg">
                  <Heart className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-white">Community Challenges</h3>
              </div>
              <p className="text-gray-400 text-sm">Monthly security challenges and coding competitions with prizes.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-900/30 rounded-lg">
                  <Bell className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Smart Notifications</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Get notified about topics you care about and replies to your posts.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border-emerald-800/30 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="gradient-text text-2xl mb-2">Be the First to Know</CardTitle>
            <p className="text-gray-400">
              Get notified when the community forum launches and receive exclusive early access.
            </p>
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
                  Successfully subscribed! We'll notify you when the forum launches.
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-400" />
              Launch Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div className="w-px h-12 bg-gray-700"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="bg-emerald-900/30 text-emerald-400">
                      Completed
                    </Badge>
                    <span className="text-sm text-gray-400">Q4 2024</span>
                  </div>
                  <h4 className="font-semibold text-white">Platform Development</h4>
                  <p className="text-sm text-gray-400">Core forum infrastructure and user authentication system.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-px h-12 bg-gray-700"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="bg-yellow-900/30 text-yellow-400">
                      In Progress
                    </Badge>
                    <span className="text-sm text-gray-400">Q1 2025</span>
                  </div>
                  <h4 className="font-semibold text-white">Beta Testing</h4>
                  <p className="text-sm text-gray-400">
                    Closed beta with selected community members and feedback integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Planned
                    </Badge>
                    <span className="text-sm text-gray-400">Q2 2025</span>
                  </div>
                  <h4 className="font-semibold text-white">Public Launch</h4>
                  <p className="text-sm text-gray-400">
                    Full community forum launch with all features and integrations.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Alternatives */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle>Connect With Us Now</CardTitle>
            <p className="text-gray-400">
              While we're building the forum, you can still connect with the BaLS Hub community:
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 bg-transparent"
              >
                <a href="https://discord.gg/balshub">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discord
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 bg-transparent"
              >
                <a href="/support">
                  <Users className="h-4 w-4 mr-2" />
                  Get Support
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
