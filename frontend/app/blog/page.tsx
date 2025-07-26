"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Search, Mail, CheckCircle, Shield, Bug, Code, Zap } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Here you would integrate with your email service
    }
  }

  const blogPosts = [
    {
      id: 1,
      title: "Advanced SQL Injection Detection Techniques",
      excerpt:
        "Learn about the latest methods for detecting and preventing SQL injection attacks in modern web applications.",
      category: "Security",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["SQL", "Security", "Web Development"],
    },
    {
      id: 2,
      title: "Building Secure APIs: Best Practices Guide",
      excerpt:
        "A comprehensive guide to building secure REST APIs with proper authentication, validation, and error handling.",
      category: "Development",
      author: "Mike Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["API", "Security", "Backend"],
    },
    {
      id: 3,
      title: "XSS Prevention in React Applications",
      excerpt:
        "Protect your React applications from Cross-Site Scripting attacks with these proven techniques and tools.",
      category: "Frontend",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "XSS", "Frontend Security"],
    },
    {
      id: 4,
      title: "Automated Security Testing in CI/CD Pipelines",
      excerpt:
        "Integrate security testing into your continuous integration workflow for better code quality and security.",
      category: "DevOps",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["CI/CD", "Automation", "Testing"],
    },
    {
      id: 5,
      title: "Understanding CSRF Attacks and Protection",
      excerpt:
        "Deep dive into Cross-Site Request Forgery attacks and how to implement effective protection mechanisms.",
      category: "Security",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["CSRF", "Web Security", "Authentication"],
    },
    {
      id: 6,
      title: "Code Review Best Practices for Security",
      excerpt:
        "Learn how to conduct effective security-focused code reviews that catch vulnerabilities before deployment.",
      category: "Process",
      author: "Alex Thompson",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Code Review", "Security", "Team Process"],
    },
  ]

  const categories = [
    { name: "All", count: 24, icon: Code },
    { name: "Security", count: 12, icon: Shield },
    { name: "Development", count: 8, icon: Bug },
    { name: "DevOps", count: 4, icon: Zap },
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Security & Development Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest security insights, development best practices, and BaLS Hub tutorials.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-gray-900/50 border-gray-800 hover:border-emerald-400/30 transition-all duration-300 group"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-emerald-900/30 text-emerald-400">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-400 gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        <Link href="/blog/coming-soon">{post.title}</Link>
                      </h2>

                      <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-300">By {post.author}</span>
                        </div>
                        <Button asChild variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
                          <Link href="/blog/coming-soon">
                            Read More
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <Card className="bg-gray-900/50 border-gray-800 text-center py-12">
                <CardContent>
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No articles found</h3>
                  <p className="text-gray-400">Try adjusting your search terms or browse all categories.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border-emerald-800/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 gradient-text">
                  <Mail className="h-5 w-5" />
                  Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubscribed ? (
                  <>
                    <p className="text-gray-300 text-sm mb-4">
                      Get the latest security insights and tutorials delivered to your inbox weekly.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                      />
                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Subscribe
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <p className="text-emerald-400 font-medium">Successfully subscribed!</p>
                    <p className="text-gray-400 text-sm mt-1">
                      You'll receive our weekly newsletter with the latest security insights.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={category.name}
                      href="/blog/coming-soon"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-emerald-400" />
                        <span className="text-gray-300 group-hover:text-white">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-gray-800 text-gray-400">
                        {category.count}
                      </Badge>
                    </Link>
                  )
                })}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Security",
                    "React",
                    "API",
                    "SQL",
                    "XSS",
                    "CSRF",
                    "CI/CD",
                    "Testing",
                    "Authentication",
                    "Encryption",
                  ].map((tag) => (
                    <Link key={tag} href="/blog/coming-soon">
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400 hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <Link href="/blog/coming-soon" className="text-emerald-400 hover:text-emerald-300">
                    New tutorial: Setting up BaLS Hub with Docker
                  </Link>
                  <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <Link href="/blog/coming-soon" className="text-emerald-400 hover:text-emerald-300">
                    Security update: CVE-2024-0001 analysis
                  </Link>
                  <p className="text-gray-400 text-xs mt-1">1 day ago</p>
                </div>
                <div className="text-sm">
                  <Link href="/blog/coming-soon" className="text-emerald-400 hover:text-emerald-300">
                    Community spotlight: Top contributors
                  </Link>
                  <p className="text-gray-400 text-xs mt-1">3 days ago</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
