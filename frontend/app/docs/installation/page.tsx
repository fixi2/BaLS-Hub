"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Terminal,
  CheckCircle,
  AlertCircle,
  Copy,
  ComputerIcon as Windows,
  Apple,
  Monitor,
} from "lucide-react"

export default function InstallationPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Installation Guide</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get BaLS Hub up and running on your system in minutes. Choose your platform and follow the step-by-step
            instructions.
          </p>
        </div>

        {/* System Requirements */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-emerald-400" />
              System Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Minimum</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 4GB RAM</li>
                  <li>• 500MB disk space</li>
                  <li>• Node.js 16+</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Recommended</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 8GB RAM</li>
                  <li>• 2GB disk space</li>
                  <li>• Node.js 18+</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Supported OS</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Windows 10/11</li>
                  <li>• macOS 10.15+</li>
                  <li>• Linux (Ubuntu 18+)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Installation Methods */}
        <Tabs defaultValue="npm" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50">
            <TabsTrigger value="npm">NPM</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="binary">Binary</TabsTrigger>
            <TabsTrigger value="docker">Docker</TabsTrigger>
          </TabsList>

          <TabsContent value="npm" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-emerald-400" />
                  Install via NPM
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Global installation</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("npm install -g bals-hub", "npm-global")}
                    >
                      {copiedCommand === "npm-global" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">npm install -g bals-hub</code>
                </div>

                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Project-specific installation</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("npm install --save-dev bals-hub", "npm-dev")}
                    >
                      {copiedCommand === "npm-dev" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">npm install --save-dev bals-hub</code>
                </div>

                <div className="bg-blue-950/20 border border-blue-800/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-1">Note</h4>
                      <p className="text-sm text-gray-300">
                        Global installation allows you to use <code className="bg-gray-800 px-1 rounded">bals</code>{" "}
                        command anywhere. Project-specific installation is recommended for CI/CD integration.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="yarn" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-emerald-400" />
                  Install via Yarn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Global installation</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("yarn global add bals-hub", "yarn-global")}
                    >
                      {copiedCommand === "yarn-global" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">yarn global add bals-hub</code>
                </div>

                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Project-specific installation</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("yarn add --dev bals-hub", "yarn-dev")}
                    >
                      {copiedCommand === "yarn-dev" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">yarn add --dev bals-hub</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="binary" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Windows className="h-5 w-5 text-blue-400" />
                    Windows
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download .exe
                  </Button>
                  <div className="text-sm text-gray-400">
                    <p>• Windows 10/11 (64-bit)</p>
                    <p>• Size: ~45MB</p>
                    <p>• Auto-updater included</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-5 w-5 text-gray-400" />
                    macOS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download .dmg
                  </Button>
                  <div className="text-sm text-gray-400">
                    <p>• macOS 10.15+ (Intel/M1)</p>
                    <p>• Size: ~42MB</p>
                    <p>• Notarized by Apple</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-orange-400" />
                    Linux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download .AppImage
                  </Button>
                  <div className="text-sm text-gray-400">
                    <p>• Ubuntu 18.04+ (x64)</p>
                    <p>• Size: ~48MB</p>
                    <p>• Portable executable</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="docker" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-emerald-400" />
                  Docker Installation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Pull the latest image</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("docker pull balshub/bals-hub:latest", "docker-pull")}
                    >
                      {copiedCommand === "docker-pull" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">docker pull balshub/bals-hub:latest</code>
                </div>

                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400"># Run container</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard("docker run -v $(pwd):/workspace balshub/bals-hub scan", "docker-run")
                      }
                    >
                      {copiedCommand === "docker-run" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <code className="text-emerald-400">docker run -v $(pwd):/workspace balshub/bals-hub scan</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Verification */}
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              Verify Installation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">After installation, verify that BaLS Hub is working correctly:</p>

            <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400"># Check version</span>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard("bals --version", "verify")}>
                  {copiedCommand === "verify" ? (
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <code className="text-emerald-400">bals --version</code>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-1">Expected Output</h4>
                  <code className="text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded">BaLS Hub v2.1.0</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border-emerald-800/30">
          <CardHeader>
            <CardTitle className="gradient-text">What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Quick Start</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Run your first scan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Configure scan rules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Set up IDE integration
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-3">Advanced Setup</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    CI/CD integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Custom security rules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Team collaboration
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <a href="/docs/quickstart">Quick Start Tutorial</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 bg-transparent"
              >
                <a href="/docs">Browse Documentation</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
