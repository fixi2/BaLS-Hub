"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Zap, Shield, ArrowLeft, Check, Download } from "lucide-react"
import { useState } from "react"

export default function BasicCheckoutPage() {
  const [downloadStarted, setDownloadStarted] = useState(false)

  const handleFreeDownload = () => {
    setDownloadStarted(true)
    // Redirect to download page after a short delay
    setTimeout(() => {
      window.location.href = "/download-starting?version=basic"
    }, 1500)
  }

  if (downloadStarted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Starting Download...</h1>
              <p className="text-gray-400 mb-6">Your free BaLS Hub Basic download is starting now!</p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400 mx-auto"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" size="sm" className="mr-4">
              <Link href="/pricing">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Pricing
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-blue-400/50 text-blue-400">
              Basic Plan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started with <span className="gradient-text">Basic</span>
            </h1>
            <p className="text-xl text-gray-300">Free security scanning for small projects</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Plan Details */}
            <div>
              <Card className="glass-effect">
                <CardHeader>
                  <h2 className="text-2xl font-bold flex items-center">
                    <Zap className="h-6 w-6 text-blue-400 mr-3" />
                    What's Included
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Basic security scanning",
                      "Up to 1,000 lines of code",
                      "5 scans per month",
                      "Common vulnerability detection",
                      "Basic reporting",
                      "Community support",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">FREE</div>
                    <p className="text-gray-400">No credit card required</p>
                  </div>
                </CardContent>
              </Card>

              {/* Upgrade Notice */}
              <Card className="glass-effect mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Need More Features?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Upgrade to Pro for unlimited scans, advanced detection, and priority support.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent border-emerald-400/50 text-emerald-400"
                  >
                    <Link href="/checkout/pro">
                      <Shield className="h-4 w-4 mr-2" />
                      Upgrade to Pro
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Download Action */}
            <div>
              <Card className="glass-effect">
                <CardHeader>
                  <h2 className="text-2xl font-bold flex items-center">
                    <Download className="h-6 w-6 text-emerald-400 mr-3" />
                    Download BaLS Hub Basic
                  </h2>
                  <p className="text-gray-400">Get started with free security scanning</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <Button
                      onClick={handleFreeDownload}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Free
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-emerald-400 mr-2" />
                      <span>No registration required</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-emerald-400 mr-2" />
                      <span>Works on Windows, Mac, and Linux</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-emerald-400 mr-2" />
                      <span>Easy installation</span>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-4">
                      By downloading, you agree to our{" "}
                      <Link href="/terms" className="text-emerald-400 hover:text-emerald-300">
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* System Requirements */}
              <Card className="glass-effect mt-6">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-sm">System Requirements</h3>
                  <div className="space-y-2 text-xs text-gray-400">
                    <div>• Windows 10+ / macOS 10.15+ / Linux (Ubuntu 18.04+)</div>
                    <div>• 4GB RAM minimum</div>
                    <div>• 500MB free disk space</div>
                    <div>• Internet connection for updates</div>
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
