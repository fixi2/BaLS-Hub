"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  Terminal,
  CheckCircle,
  AlertTriangle,
  Copy,
  FileText,
  Settings,
  Zap,
  ArrowRight,
  Clock,
} from "lucide-react"

export default function QuickStartPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const totalSteps = 5

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const steps = [
    {
      id: 1,
      title: "Initialize Your Project",
      description: "Set up BaLS Hub configuration in your project directory",
      time: "2 min",
    },
    {
      id: 2,
      title: "Run Your First Scan",
      description: "Perform a basic security scan",
      time: "1 min",
    },
    {
      id: 3,
      title: "Review Results",
      description: "Understand the scan output and findings",
      time: "3 min",
    },
    {
      id: 4,
      title: "Configure Rules",
      description: "Customize scan rules to match your project's specific requirements and coding standards",
      time: "5 min",
    },
    {
      id: 5,
      title: "Integrate with Workflow",
      description: "Set up automated scanning in your development workflow for continuous security monitoring",
      time: "10 min",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Quick Start Tutorial</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Get up and running with BaLS Hub in under 20 minutes. Follow this step-by-step guide to perform your first
            security scan.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="bg-emerald-900/30 text-emerald-400 border-emerald-400/30">
              <Clock className="h-3 w-3 mr-1" />
              ~20 minutes
            </Badge>
            <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 border-blue-400/30">
              Beginner Friendly
            </Badge>
          </div>
        </div>

        {/* Progress */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-300">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2 bg-gray-800" />
            <div className="flex justify-between mt-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center cursor-pointer transition-colors ${
                    step.id <= currentStep ? "text-emerald-400" : "text-gray-500"
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                      step.id < currentStep
                        ? "bg-emerald-600 text-white"
                        : step.id === currentStep
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {step.id < currentStep ? <CheckCircle className="h-4 w-4" /> : step.id}
                  </div>
                  <span className="text-xs text-center hidden sm:block">{step.title}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        {currentStep === 1 && (
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-emerald-400" />
                Step 1: Initialize Your Project
              </CardTitle>
              <p className="text-gray-400">
                Set up BaLS Hub configuration in your project directory. This creates the necessary config files and
                prepares your project for scanning.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Navigate to Your Project</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Change to your project directory</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("cd /path/to/your/project", "cd-project")}
                    >
                      {copiedCommand === "cd-project" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">cd /path/to/your/project</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Initialize BaLS Hub</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Initialize configuration</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard("bals init", "bals-init")}>
                      {copiedCommand === "bals-init" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">bals init</code>
                </div>
              </div>

              <div className="bg-blue-950/20 border border-blue-800/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">What gets created:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>
                        • <code className="bg-gray-800 px-1 rounded">.bals/config.json</code> - Main configuration file
                      </li>
                      <li>
                        • <code className="bg-gray-800 px-1 rounded">.bals/rules/</code> - Custom security rules
                        directory
                      </li>
                      <li>
                        • <code className="bg-gray-800 px-1 rounded">.balsignore</code> - Files to exclude from scanning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setCurrentStep(2)} className="bg-emerald-600 hover:bg-emerald-700">
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-emerald-400" />
                Step 2: Run Your First Scan
              </CardTitle>
              <p className="text-gray-400">
                Execute a basic security scan to identify potential vulnerabilities in your codebase.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Basic Scan Command</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Run a basic scan</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard("bals scan", "bals-scan")}>
                      {copiedCommand === "bals-scan" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">bals scan</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Scan with Verbose Output</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Detailed scan output</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("bals scan --verbose", "bals-verbose")}
                    >
                      {copiedCommand === "bals-verbose" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">bals scan --verbose</code>
                </div>
              </div>

              <div className="bg-yellow-950/20 border border-yellow-800/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">First Scan Tips:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• The first scan may take longer as it builds the analysis cache</li>
                      <li>• Large projects (1000+ files) may take 2-5 minutes</li>
                      <li>
                        • Use <code className="bg-gray-800 px-1 rounded">--fast</code> flag for quick scans during
                        development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)} className="border-gray-600 text-gray-300">
                  Previous Step
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="bg-emerald-600 hover:bg-emerald-700">
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-400" />
                Step 3: Review Results
              </CardTitle>
              <p className="text-gray-400">Learn how to interpret scan results and understand the security findings.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Understanding the Output</h4>
                <div className="bg-gray-950 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2"># Example scan output:</div>
                  <div className="space-y-1 font-mono">
                    <div className="text-emerald-400">✓ Scanned 247 files in 12.3s</div>
                    <div className="text-red-400">✗ Found 3 high-severity issues</div>
                    <div className="text-yellow-400">⚠ Found 7 medium-severity issues</div>
                    <div className="text-blue-400">ℹ Found 12 low-severity issues</div>
                    <div className="text-gray-300">📊 Generated report: ./bals-report.html</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Severity Levels</h4>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 p-3 bg-red-950/20 border border-red-800/30 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <span className="font-semibold text-red-400">High:</span>
                      <span className="text-gray-300 ml-2">
                        Critical security vulnerabilities that need immediate attention
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-950/20 border border-yellow-800/30 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <span className="font-semibold text-yellow-400">Medium:</span>
                      <span className="text-gray-300 ml-2">Potential security issues that should be reviewed</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-950/20 border border-blue-800/30 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <span className="font-semibold text-blue-400">Low:</span>
                      <span className="text-gray-300 ml-2">Code quality improvements and best practices</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">View Detailed Report</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Open HTML report in browser</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("open bals-report.html", "open-report")}
                    >
                      {copiedCommand === "open-report" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">open bals-report.html</code>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)} className="border-gray-600 text-gray-300">
                  Previous Step
                </Button>
                <Button onClick={() => setCurrentStep(4)} className="bg-emerald-600 hover:bg-emerald-700">
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-emerald-400" />
                Step 4: Configure Rules
              </CardTitle>
              <p className="text-gray-400">
                Customize scan rules to match your project's specific requirements and coding standards.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Edit Configuration</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Open config file</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("code .bals/config.json", "edit-config")}
                    >
                      {copiedCommand === "edit-config" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">code .bals/config.json</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Example Configuration</h4>
                <div className="bg-gray-950 rounded-lg p-4 text-sm">
                  <pre className="text-gray-300 overflow-x-auto">
                    {`{
  "rules": {
    "sql-injection": "error",
    "xss-prevention": "error", 
    "csrf-protection": "warn",
    "insecure-random": "warn",
    "hardcoded-secrets": "error"
  },
  "exclude": [
    "node_modules/**",
    "dist/**",
    "*.test.js"
  ],
  "severity": {
    "threshold": "medium"
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Test Configuration</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Test with new config</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("bals scan --dry-run", "test-config")}
                    >
                      {copiedCommand === "test-config" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">bals scan --dry-run</code>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(3)} className="border-gray-600 text-gray-300">
                  Previous Step
                </Button>
                <Button onClick={() => setCurrentStep(5)} className="bg-emerald-600 hover:bg-emerald-700">
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 5 && (
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-400" />
                Step 5: Integrate with Workflow
              </CardTitle>
              <p className="text-gray-400">
                Set up automated scanning in your development workflow for continuous security monitoring.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Git Pre-commit Hook</h4>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Install pre-commit hook</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("bals install-hook", "install-hook")}
                    >
                      {copiedCommand === "install-hook" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">bals install-hook</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Package.json Script</h4>
                <div className="bg-gray-950 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2"># Add to package.json:</div>
                  <pre className="text-gray-300 overflow-x-auto">
                    {`{
  "scripts": {
    "security-scan": "bals scan",
    "security-check": "bals scan --fast",
    "pre-commit": "bals scan --changed-only"
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">CI/CD Integration</h4>
                <div className="bg-gray-950 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2"># GitHub Actions example:</div>
                  <pre className="text-gray-300 overflow-x-auto text-xs">
                    {`name: Security Scan
on: [push, pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install -g bals-hub
      - run: bals scan --ci`}
                  </pre>
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Congratulations!</h4>
                    <p className="text-sm text-gray-300 mb-3">
                      You've successfully set up BaLS Hub and integrated it into your development workflow. Your code is
                      now protected by continuous security monitoring.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        <a href="/docs">Explore Documentation</a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-emerald-400/50 text-emerald-400 bg-transparent"
                      >
                        <a href="/support">Get Support</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(4)} className="border-gray-600 text-gray-300">
                  Previous Step
                </Button>
                <Button
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
                >
                  Start Over
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border-emerald-800/30">
          <CardHeader>
            <CardTitle className="gradient-text">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                asChild
                variant="outline"
                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 bg-transparent"
              >
                <a href="/docs">
                  <FileText className="h-4 w-4 mr-2" />
                  Documentation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 bg-transparent"
              >
                <a href="/support/chat">
                  <Terminal className="h-4 w-4 mr-2" />
                  Live Chat
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 bg-transparent"
              >
                <a href="/community">
                  <Play className="h-4 w-4 mr-2" />
                  Community
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
