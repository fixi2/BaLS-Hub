"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Eye, Zap, Lock, AlertTriangle, CheckCircle, Code, Terminal, ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export default function FeaturesPage() {
  const [activeDemo, setActiveDemo] = useState("security")

  const demoCode = {
    security: `// Vulnerable SQL Query
const query = "SELECT * FROM users WHERE id = " + userId;

// BaLS Hub Detection:
⚠️  SQL Injection vulnerability detected
💡 Suggestion: Use parameterized queries`,

    logic: `// Potential Logic Error
function calculateDiscount(price, discount) {
  if (discount > 100) {
    return price * discount; // Logic error!
  }
  return price * (1 - discount / 100);
}

// BaLS Hub Detection:
⚠️  Logic error: discount > 100% increases price
💡 Suggestion: Add validation for discount range`,

    performance: `// Performance Issue
const results = [];
for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items.length; j++) {
    if (items[i].id === items[j].parentId) {
      results.push(items[i]);
    }
  }
}

// BaLS Hub Detection:
⚠️  O(n²) complexity detected
💡 Suggestion: Use Map for O(n) lookup`,
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
              Advanced Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Code Analysis
              <br />
              <span className="gradient-text">Built for Developers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how BaLS Hub's advanced scanning technology helps you write safer, more reliable code with
              real-time analysis and intelligent suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See BaLS Hub in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-gray-300">Interactive demos showing real vulnerability detection</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button
                  variant={activeDemo === "security" ? "default" : "outline"}
                  onClick={() => setActiveDemo("security")}
                  className={activeDemo === "security" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </Button>
                <Button
                  variant={activeDemo === "logic" ? "default" : "outline"}
                  onClick={() => setActiveDemo("logic")}
                  className={activeDemo === "logic" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Logic
                </Button>
                <Button
                  variant={activeDemo === "performance" ? "default" : "outline"}
                  onClick={() => setActiveDemo("performance")}
                  className={activeDemo === "performance" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Performance
                </Button>
              </div>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Terminal className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="font-mono text-sm text-gray-400">demo.js</span>
                  </div>
                  <pre className="code-block text-sm overflow-x-auto">
                    <code>{demoCode[activeDemo as keyof typeof demoCode]}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mr-3">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Real-time Detection</h3>
                      <p className="text-sm text-gray-400">Instant feedback as you code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Smart Suggestions</h3>
                      <p className="text-sm text-gray-400">AI-powered fix recommendations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-3">
                      <Code className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Multi-language Support</h3>
                      <p className="text-sm text-gray-400">JavaScript, Python, Java, and more</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Feature <span className="gradient-text">Suite</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security Scanning",
                description: "Detect SQL injection, XSS, CSRF, and 50+ other security vulnerabilities",
                color: "emerald",
              },
              {
                icon: Eye,
                title: "Logic Analysis",
                description: "Find logical errors, dead code, and potential runtime issues",
                color: "cyan",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Identify performance bottlenecks and suggest optimizations",
                color: "purple",
              },
              {
                icon: Lock,
                title: "Data Flow Analysis",
                description: "Track sensitive data flow and prevent data leaks",
                color: "orange",
              },
              {
                icon: Code,
                title: "Code Quality Metrics",
                description: "Comprehensive code quality scoring and improvement suggestions",
                color: "blue",
              },
              {
                icon: Terminal,
                title: "CI/CD Integration",
                description: "Seamless integration with popular CI/CD platforms",
                color: "pink",
              },
            ].map((feature, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-${feature.color}-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${feature.color}-500/20 transition-colors`}
                  >
                    <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-300 mb-8">Download BaLS Hub and start scanning your code in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              <Link href="/download">
                <Play className="h-5 w-5 mr-2" />
                Try It Now
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
