"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Zap, Shield, Settings, Code, ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  // Mock search data - in real implementation, this would come from your search service
  const searchData = [
    { title: "Installation Guide", href: "/docs/installation", content: "install setup download windows macos linux" },
    { title: "Quick Start Tutorial", href: "/docs/quickstart", content: "tutorial first scan getting started" },
    { title: "First Scan", href: "/docs/first-scan", content: "scan analyze code security vulnerabilities" },
    { title: "Understanding Results", href: "/docs/results", content: "results report findings security issues" },
    {
      title: "SQL Injection Detection",
      href: "/docs/sql-injection",
      content: "sql injection security vulnerability database",
    },
    { title: "XSS Prevention", href: "/docs/xss", content: "xss cross site scripting security web" },
    { title: "CSRF Protection", href: "/docs/csrf", content: "csrf cross site request forgery security" },
    { title: "Custom Security Rules", href: "/docs/custom-rules", content: "custom rules security configuration" },
    { title: "Configuration Files", href: "/docs/config", content: "configuration settings setup files" },
    { title: "IDE Integration", href: "/docs/ide", content: "ide integration vscode intellij editor" },
    { title: "CI/CD Setup", href: "/docs/cicd", content: "cicd continuous integration deployment pipeline" },
    { title: "Custom Workflows", href: "/docs/workflows", content: "workflows automation custom setup" },
    { title: "REST API", href: "/docs/api", content: "api rest endpoints integration" },
    { title: "CLI Commands", href: "/docs/cli", content: "cli command line interface terminal" },
    { title: "Webhooks", href: "/docs/webhooks", content: "webhooks integration notifications" },
    { title: "SDK Documentation", href: "/docs/sdk", content: "sdk software development kit integration" },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      setIsSearching(true)
      // Simulate search delay
      setTimeout(() => {
        const results = searchData
          .filter(
            (item) =>
              item.title.toLowerCase().includes(query.toLowerCase()) ||
              item.content.toLowerCase().includes(query.toLowerCase()),
          )
          .slice(0, 5)
        setSearchResults(results)
        setIsSearching(false)
      }, 300)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      router.push(searchResults[0].href)
    }
  }

  const docSections = [
    {
      title: "Getting Started",
      icon: Zap,
      color: "emerald",
      articles: [
        { title: "Installation Guide", href: "/docs/installation", time: "5 min read" },
        { title: "Quick Start Tutorial", href: "/docs/quickstart", time: "10 min read" },
        { title: "First Scan", href: "/docs/first-scan", time: "3 min read" },
        { title: "Understanding Results", href: "/docs/results", time: "8 min read" },
      ],
    },
    {
      title: "Security Scanning",
      icon: Shield,
      color: "red",
      articles: [
        { title: "SQL Injection Detection", href: "/docs/sql-injection", time: "12 min read" },
        { title: "XSS Prevention", href: "/docs/xss", time: "10 min read" },
        { title: "CSRF Protection", href: "/docs/csrf", time: "8 min read" },
        { title: "Custom Security Rules", href: "/docs/custom-rules", time: "15 min read" },
      ],
    },
    {
      title: "Configuration",
      icon: Settings,
      color: "blue",
      articles: [
        { title: "Configuration Files", href: "/docs/config", time: "7 min read" },
        { title: "IDE Integration", href: "/docs/ide", time: "12 min read" },
        { title: "CI/CD Setup", href: "/docs/cicd", time: "15 min read" },
        { title: "Custom Workflows", href: "/docs/workflows", time: "10 min read" },
      ],
    },
    {
      title: "API Reference",
      icon: Code,
      color: "purple",
      articles: [
        { title: "REST API", href: "/docs/api", time: "20 min read" },
        { title: "CLI Commands", href: "/docs/cli", time: "15 min read" },
        { title: "Webhooks", href: "/docs/webhooks", time: "12 min read" },
        { title: "SDK Documentation", href: "/docs/sdk", time: "25 min read" },
      ],
    },
  ]

  const popularArticles = [
    { title: "How to Fix SQL Injection Vulnerabilities", href: "/docs/fix-sql-injection", views: "12.5k" },
    { title: "Setting up CI/CD Integration", href: "/docs/cicd-setup", views: "8.2k" },
    { title: "Understanding Security Scan Results", href: "/docs/scan-results", views: "6.8k" },
    { title: "Custom Rule Configuration", href: "/docs/custom-rules-guide", views: "5.1k" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Documentation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">BaLS Hub</span> Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8">Everything you need to know about using BaLS Hub effectively</p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <form onSubmit={handleSearchSubmit}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              />
            </form>

            {/* Search Results Dropdown */}
            {(searchResults.length > 0 || isSearching) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                {isSearching ? (
                  <div className="p-4 text-center text-gray-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-400 mx-auto"></div>
                    <span className="ml-2">Searching...</span>
                  </div>
                ) : (
                  <div className="max-h-64 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        className="block p-3 hover:bg-gray-800 transition-colors border-b border-gray-800 last:border-b-0"
                        onClick={() => {
                          setSearchQuery("")
                          setSearchResults([])
                        }}
                      >
                        <div className="font-medium text-white">{result.title}</div>
                        <div className="text-sm text-gray-400 truncate">{result.href}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Zap className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2">Quick Start</h3>
                <p className="text-sm text-gray-400">Get up and running in 5 minutes</p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-gray-400">Complete API documentation</p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Settings className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Configuration</h3>
                <p className="text-sm text-gray-400">Customize BaLS Hub settings</p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-colors">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="font-semibold mb-2">Security Guide</h3>
                <p className="text-sm text-gray-400">Learn about security features</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Documentation</h2>
              <div className="space-y-8">
                {docSections.map((section, index) => (
                  <Card key={index} className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 bg-${section.color}-500/10 rounded-lg flex items-center justify-center mr-3`}
                        >
                          <section.icon className={`h-5 w-5 text-${section.color}-400`} />
                        </div>
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.articles.map((article, articleIndex) => (
                          <Link
                            key={articleIndex}
                            href={article.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div>
                              <div className="font-medium group-hover:text-emerald-400 transition-colors">
                                {article.title}
                              </div>
                              <div className="text-sm text-gray-400">{article.time}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Popular Articles</h3>
                  <div className="space-y-3">
                    {popularArticles.map((article, index) => (
                      <Link
                        key={index}
                        href={article.href}
                        className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="font-medium text-sm group-hover:text-emerald-400 transition-colors mb-1">
                          {article.title}
                        </div>
                        <div className="text-xs text-gray-400">{article.views} views</div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Need Help?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                      <Link href="/support">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Contact Support
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                      <Link href="/community">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Community Forum
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Latest Updates</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium mb-1">v2.1.0 Released</div>
                      <div className="text-gray-400 text-xs">New security rules added</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium mb-1">API v2 Documentation</div>
                      <div className="text-gray-400 text-xs">Updated with new endpoints</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium mb-1">CI/CD Integration Guide</div>
                      <div className="text-gray-400 text-xs">GitHub Actions support</div>
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
