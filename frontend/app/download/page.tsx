"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Shield, Zap, Users, CheckCircle, Monitor, Smartphone, Globe } from "lucide-react"

export default function DownloadPage() {
  const router = useRouter()
  const [selectedPlatform, setSelectedPlatform] = useState("windows")

  const handleDownload = (version: string, platform: string) => {
    router.push(`/download-starting?version=${version}&platform=${platform}`)
  }

  const platforms = [
    {
      id: "windows",
      name: "Windows",
      icon: <Monitor className="h-5 w-5" />,
      versions: [
        { name: "Windows 10/11 (64-bit)", file: "windows-x64", recommended: true },
        { name: "Windows 10/11 (32-bit)", file: "windows-x86", recommended: false },
      ],
    },
    {
      id: "macos",
      name: "macOS",
      icon: <Smartphone className="h-5 w-5" />,
      versions: [
        { name: "macOS (Intel)", file: "macos-intel", recommended: true },
        { name: "macOS (Apple Silicon)", file: "macos-arm64", recommended: true },
      ],
    },
    {
      id: "linux",
      name: "Linux",
      icon: <Globe className="h-5 w-5" />,
      versions: [
        { name: "Ubuntu/Debian (64-bit)", file: "linux-deb", recommended: true },
        { name: "CentOS/RHEL (64-bit)", file: "linux-rpm", recommended: false },
        { name: "Generic Linux (64-bit)", file: "linux-generic", recommended: false },
      ],
    },
  ]

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Advanced Security Scanning",
      description: "Detect SQL injection, XSS, and other vulnerabilities",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Scan thousands of lines of code in seconds",
    },
    {
      icon: <Users className="h-6 w-6 text-green-400" />,
      title: "Team Collaboration",
      description: "Share reports and collaborate with your team",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700 rounded-full px-4 py-2 mb-6">
            <Download className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Latest Version: 2.1.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Download BaLS Hub
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with the most advanced code security scanner. Protect your applications from vulnerabilities and
            logic errors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-4 py-2">
                {feature.icon}
                <span className="text-gray-300 text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-gray-700">
              {platforms.map((platform) => (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600"
                >
                  {platform.icon}
                  {platform.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {platforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id} className="mt-8">
                <div className="grid gap-4">
                  {platform.versions.map((version, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CardTitle className="text-white">{version.name}</CardTitle>
                            {version.recommended && <Badge className="bg-blue-600 text-white">Recommended</Badge>}
                          </div>
                          <Button
                            onClick={() => handleDownload("2.1.0", version.file)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                        <CardDescription className="text-gray-400">
                          Compatible with {version.name} • Size: ~45 MB
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* System Requirements */}
          <Card className="mt-12 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                System Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Windows</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Windows 10 or later</li>
                    <li>• 4 GB RAM minimum</li>
                    <li>• 100 MB free disk space</li>
                    <li>• .NET Framework 4.8+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">macOS</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• macOS 10.15 or later</li>
                    <li>• 4 GB RAM minimum</li>
                    <li>• 100 MB free disk space</li>
                    <li>• Intel or Apple Silicon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Linux</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Ubuntu 18.04+ / CentOS 7+</li>
                    <li>• 4 GB RAM minimum</li>
                    <li>• 100 MB free disk space</li>
                    <li>• glibc 2.17+</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation Instructions */}
          <Card className="mt-8 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Installation</CardTitle>
              <CardDescription className="text-gray-400">Get up and running in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Download the installer</p>
                    <p className="text-gray-400 text-sm">Choose your platform and click download</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Run the installer</p>
                    <p className="text-gray-400 text-sm">Follow the setup wizard instructions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Start scanning</p>
                    <p className="text-gray-400 text-sm">Launch BaLS Hub and scan your first project</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
