"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Zap, Eye, Download, ArrowRight, Star } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Advanced Code Analysis Tool
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Secure Your Code
              <br />
              <span className="gradient-text">Before Production</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              BaLS Hub scans your codebase for security vulnerabilities and logic errors, helping you ship safer
              software faster.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              <Link href="/download">
                <Download className="h-5 w-5 mr-2" />
                Download Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/features">
                View Features
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-gray-400">Vulnerabilities Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-400">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">BaLS Hub</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced scanning technology that integrates seamlessly into your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Shield className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Security Scanning</h3>
                  <p className="text-gray-400">
                    Detect SQL injection, XSS, and other security vulnerabilities before they reach production.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Eye className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Logic Analysis</h3>
                  <p className="text-gray-400">
                    Identify logical errors, dead code, and potential runtime issues with advanced static analysis.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">
                    Scan thousands of lines of code in seconds with our optimized analysis engine.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Developers Worldwide</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "BaLS Hub caught critical security issues that our manual reviews missed. It's now an essential part
                  of our CI/CD pipeline."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-400">Senior Developer at TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "The logic analysis feature is incredible. It found edge cases in our algorithms that would have
                  caused production issues."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    MJ
                  </div>
                  <div>
                    <div className="font-semibold">Maria Johnson</div>
                    <div className="text-sm text-gray-400">CTO at StartupXYZ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Easy to integrate, powerful results. BaLS Hub has significantly improved our code quality and
                  security posture."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    DL
                  </div>
                  <div>
                    <div className="font-semibold">David Lee</div>
                    <div className="text-sm text-gray-400">Lead Engineer at DevCorp</div>
                  </div>
                </div>
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
            Join thousands of developers who trust BaLS Hub to keep their applications secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              <Link href="/download">
                <Download className="h-5 w-5 mr-2" />
                Start Free Scan
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
