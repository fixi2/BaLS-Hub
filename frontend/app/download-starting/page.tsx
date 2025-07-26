"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Download, AlertCircle } from "lucide-react"

export default function DownloadStartingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const version = searchParams.get("version") || "latest"
  const platform = searchParams.get("platform") || "windows"

  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"preparing" | "downloading" | "completed" | "error">("preparing")
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  useEffect(() => {
    const startDownload = async () => {
      try {
        // Simulate preparation phase
        setStatus("preparing")
        setProgress(10)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Simulate getting download URL from backend
        setProgress(30)
        // const response = await fetch(`/api/download?version=${version}&platform=${platform}`)
        // const data = await response.json()

        // For demo purposes, simulate the download URL
        const simulatedUrl = `/downloads/bals-hub-${version}-${platform}.exe`
        setDownloadUrl(simulatedUrl)

        setStatus("downloading")
        setProgress(50)

        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Start actual download
        const link = document.createElement("a")
        link.href = simulatedUrl
        link.download = `bals-hub-${version}-${platform}.exe`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setProgress(100)
        setStatus("completed")
      } catch (error) {
        console.error("Download failed:", error)
        setStatus("error")
      }
    }

    startDownload()
  }, [version, platform])

  const getStatusMessage = () => {
    switch (status) {
      case "preparing":
        return "Preparing your download..."
      case "downloading":
        return "Starting download..."
      case "completed":
        return "Download completed!"
      case "error":
        return "Download failed"
      default:
        return "Initializing..."
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case "preparing":
      case "downloading":
        return <Download className="h-8 w-8 text-blue-400 animate-bounce" />
      case "completed":
        return <CheckCircle className="h-8 w-8 text-green-400" />
      case "error":
        return <AlertCircle className="h-8 w-8 text-red-400" />
      default:
        return <Download className="h-8 w-8 text-blue-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">{getStatusIcon()}</div>
          <CardTitle className="text-2xl text-white">
            {status === "completed" ? "Download Ready!" : "Downloading BaLS Hub"}
          </CardTitle>
          <CardDescription className="text-gray-300">
            Version {version} for {platform}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>{getStatusMessage()}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-700" />
          </div>

          {status === "completed" && (
            <div className="space-y-4">
              <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <p className="text-green-300 text-sm">
                  Your download should start automatically. If it doesn't, click the button below.
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={() => {
                    if (downloadUrl) {
                      const link = document.createElement("a")
                      link.href = downloadUrl
                      link.download = `bals-hub-${version}-${platform}.exe`
                      link.click()
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Again
                </Button>

                <Button
                  variant="outline"
                  onClick={() => router.push("/download")}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Back to Downloads
                </Button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                <p className="text-red-300 text-sm">Something went wrong with your download. Please try again.</p>
              </div>

              <Button onClick={() => window.location.reload()} className="w-full bg-red-600 hover:bg-red-700">
                Try Again
              </Button>
            </div>
          )}

          {(status === "preparing" || status === "downloading") && (
            <div className="text-center">
              <p className="text-sm text-gray-400">Please don't close this window...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
