import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Plus, Bug, Shield, ArrowUp } from "lucide-react"

export default function ChangelogPage() {
  const releases = [
    {
      version: "2.1.0",
      date: "January 15, 2025",
      type: "major",
      changes: [
        {
          type: "feature",
          title: "Advanced Logic Error Detection",
          description: "New AI-powered engine that detects complex logical errors and edge cases in your code.",
        },
        {
          type: "feature",
          title: "GitHub Actions Integration",
          description: "Official GitHub Actions plugin for seamless CI/CD integration.",
        },
        {
          type: "improvement",
          title: "Performance Optimization",
          description: "Scanning speed improved by 40% for large codebases.",
        },
        {
          type: "security",
          title: "Enhanced Security Rules",
          description: "Added 15 new security vulnerability patterns including OWASP Top 10 2023 updates.",
        },
        {
          type: "fix",
          title: "False Positive Reduction",
          description: "Reduced false positives by 25% through improved pattern matching.",
        },
      ],
    },
    {
      version: "2.0.5",
      date: "December 20, 2024",
      type: "patch",
      changes: [
        {
          type: "fix",
          title: "TypeScript Analysis Bug",
          description: "Fixed issue where generic types were not properly analyzed.",
        },
        {
          type: "fix",
          title: "Memory Leak in Large Files",
          description: "Resolved memory leak when scanning files larger than 10MB.",
        },
        {
          type: "improvement",
          title: "Better Error Messages",
          description: "More descriptive error messages with suggested fixes.",
        },
      ],
    },
    {
      version: "2.0.4",
      date: "December 10, 2024",
      type: "patch",
      changes: [
        {
          type: "feature",
          title: "Python 3.12 Support",
          description: "Full support for Python 3.12 syntax and features.",
        },
        {
          type: "improvement",
          title: "IDE Plugin Updates",
          description: "Updated VS Code and IntelliJ plugins with better performance.",
        },
        {
          type: "fix",
          title: "Configuration File Loading",
          description: "Fixed issue where custom configuration files were not loaded properly.",
        },
      ],
    },
    {
      version: "2.0.3",
      date: "November 25, 2024",
      type: "patch",
      changes: [
        {
          type: "security",
          title: "SQL Injection Pattern Updates",
          description: "Enhanced SQL injection detection with new patterns for modern ORMs.",
        },
        {
          type: "feature",
          title: "Custom Rule Templates",
          description: "Pre-built templates for common custom security rules.",
        },
        {
          type: "fix",
          title: "CLI Output Formatting",
          description: "Fixed formatting issues in CLI output for certain terminal types.",
        },
      ],
    },
    {
      version: "2.0.2",
      date: "November 10, 2024",
      type: "patch",
      changes: [
        {
          type: "improvement",
          title: "Scanning Performance",
          description: "Optimized scanning algorithm for better performance on multi-core systems.",
        },
        {
          type: "feature",
          title: "SARIF Export",
          description: "Added support for exporting results in SARIF format.",
        },
        {
          type: "fix",
          title: "Windows Path Handling",
          description: "Fixed path handling issues on Windows systems.",
        },
      ],
    },
    {
      version: "2.0.1",
      date: "October 28, 2024",
      type: "patch",
      changes: [
        {
          type: "fix",
          title: "License Validation",
          description: "Fixed issue with Pro license validation in offline mode.",
        },
        {
          type: "improvement",
          title: "Startup Time",
          description: "Reduced application startup time by 30%.",
        },
      ],
    },
    {
      version: "2.0.0",
      date: "October 15, 2024",
      type: "major",
      changes: [
        {
          type: "feature",
          title: "Complete UI Redesign",
          description: "Brand new user interface with improved usability and modern design.",
        },
        {
          type: "feature",
          title: "Multi-Language Support",
          description: "Added support for Go, Rust, and Kotlin programming languages.",
        },
        {
          type: "feature",
          title: "Team Collaboration",
          description: "New team features including shared projects and collaborative reviews.",
        },
        {
          type: "improvement",
          title: "API v2",
          description: "Completely rewritten API with better performance and new endpoints.",
        },
        {
          type: "security",
          title: "Zero-Trust Architecture",
          description: "Implemented zero-trust security model for enterprise deployments.",
        },
      ],
    },
  ]

  const getChangeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Plus className="h-4 w-4 text-emerald-400" />
      case "improvement":
        return <ArrowUp className="h-4 w-4 text-blue-400" />
      case "security":
        return <Shield className="h-4 w-4 text-purple-400" />
      case "fix":
        return <Bug className="h-4 w-4 text-orange-400" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case "major":
        return "bg-emerald-500 text-white"
      case "minor":
        return "bg-blue-500 text-white"
      case "patch":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Product Updates
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Changelog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Stay up to date with new features, improvements, and bug fixes in BaLS Hub.
          </p>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {releases.map((release, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <h2 className="text-2xl font-bold">Version {release.version}</h2>
                      <Badge className={getVersionBadgeColor(release.type)}>{release.type}</Badge>
                    </div>
                    <p className="text-gray-400">{release.date}</p>
                  </div>

                  <div className="space-y-4">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">{getChangeIcon(change.type)}</div>
                        <div>
                          <h3 className="font-semibold mb-1">{change.title}</h3>
                          <p className="text-gray-400 text-sm">{change.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Legend */}
          <Card className="glass-effect mt-12">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Plus className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-gray-300">New Feature</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowUp className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Improvement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bug className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-gray-300">Bug Fix</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
