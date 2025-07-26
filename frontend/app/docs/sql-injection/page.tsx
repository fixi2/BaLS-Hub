import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, AlertTriangle, CheckCircle, ArrowRight, Code } from "lucide-react"

export default function SqlInjectionPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Security Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SQL Injection <span className="gradient-text">Detection</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn how BaLS Hub detects and prevents SQL injection vulnerabilities in your applications.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            {/* What is SQL Injection */}
            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                  What is SQL Injection?
                </h2>

                <p className="text-gray-300 mb-4">
                  SQL injection is a code injection technique that exploits security vulnerabilities in an application's
                  database layer. It occurs when user input is incorrectly filtered for string literal escape characters
                  embedded in SQL statements or when user input is not strongly typed.
                </p>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Why It's Dangerous</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Unauthorized access to sensitive data</li>
                    <li>Data manipulation or deletion</li>
                    <li>Authentication bypass</li>
                    <li>Complete system compromise</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Vulnerable Code Example</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-red-400">
                    {`// VULNERABLE - Never do this!
const query = "SELECT * FROM users WHERE id = " + userId;
const result = await db.query(query);

// Also vulnerable
const query = \`SELECT * FROM users WHERE name = '\${userName}'\`;`}
                  </code>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Secure Code Example</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <code className="text-emerald-400">
                    {`// SECURE - Use parameterized queries
const query = "SELECT * FROM users WHERE id = ?";
const result = await db.query(query, [userId]);

// Or with named parameters
const query = "SELECT * FROM users WHERE name = :name";
const result = await db.query(query, { name: userName });`}
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* How BaLS Hub Detects */}
            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-emerald-400 mr-3" />
                  How BaLS Hub Detects SQL Injection
                </h2>

                <p className="text-gray-300 mb-6">
                  BaLS Hub uses advanced static analysis techniques to identify potential SQL injection vulnerabilities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-400 mb-2">Pattern Recognition</h3>
                    <p className="text-sm text-gray-300">
                      Identifies dangerous patterns like string concatenation in SQL queries
                    </p>
                  </div>

                  <div className="bg-gray-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-400 mb-2">Data Flow Analysis</h3>
                    <p className="text-sm text-gray-300">Tracks user input from source to database query execution</p>
                  </div>

                  <div className="bg-gray-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-400 mb-2">Context Awareness</h3>
                    <p className="text-sm text-gray-300">Understands different database contexts and query types</p>
                  </div>

                  <div className="bg-gray-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-400 mb-2">Framework Support</h3>
                    <p className="text-sm text-gray-300">
                      Recognizes ORM patterns and framework-specific vulnerabilities
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Detection Examples</h3>

                <div className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="font-medium text-red-400 mb-2">❌ String Concatenation</h4>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
                      <code className="text-red-400">
                        {`query = "SELECT * FROM products WHERE category = '" + category + "'"`}
                      </code>
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="font-medium text-red-400 mb-2">❌ Template Literals</h4>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
                      <code className="text-red-400">{`query = \`DELETE FROM users WHERE id = \${userId}\``}</code>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                    <h4 className="font-medium text-emerald-400 mb-2">✅ Parameterized Query</h4>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
                      <code className="text-emerald-400">{`query = "SELECT * FROM products WHERE category = ?"`}</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prevention Strategies */}
            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mr-3" />
                  Prevention Strategies
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">1. Use Parameterized Queries</h3>
                    <p className="text-gray-300 mb-3">
                      Always use parameterized queries or prepared statements instead of string concatenation:
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                      <code className="text-emerald-400">
                        {`// Node.js with MySQL
const query = "SELECT * FROM users WHERE email = ? AND status = ?";
const results = await connection.query(query, [email, 'active']);

// Python with SQLAlchemy
query = "SELECT * FROM users WHERE email = :email AND status = :status"
results = session.execute(query, {"email": email, "status": "active"})`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">2. Input Validation</h3>
                    <p className="text-gray-300 mb-3">Validate and sanitize all user inputs:</p>
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                      <code className="text-emerald-400">
                        {`// Validate input format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  throw new Error('Invalid email format');
}

// Whitelist allowed characters
const allowedChars = /^[a-zA-Z0-9_-]+$/;
if (!allowedChars.test(username)) {
  throw new Error('Invalid username characters');
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">3. Use ORM/Query Builders</h3>
                    <p className="text-gray-300 mb-3">Modern ORMs provide built-in protection against SQL injection:</p>
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                      <code className="text-emerald-400">
                        {`// Sequelize (Node.js)
const users = await User.findAll({
  where: {
    email: userEmail,
    status: 'active'
  }
});

// Django ORM (Python)
users = User.objects.filter(email=user_email, status='active')`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">4. Principle of Least Privilege</h3>
                    <p className="text-gray-300 mb-3">Limit database user permissions:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Use separate database users for different application components</li>
                      <li>Grant only necessary permissions (SELECT, INSERT, UPDATE, DELETE)</li>
                      <li>Avoid using database admin accounts for application connections</li>
                      <li>Implement database-level access controls</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration */}
            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Code className="h-6 w-6 text-blue-400 mr-3" />
                  Configuring SQL Injection Detection
                </h2>

                <p className="text-gray-300 mb-4">
                  You can customize BaLS Hub's SQL injection detection in your configuration file:
                </p>

                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-blue-400">
                    {`// bals-hub.config.json
{
  "security": {
    "sqlInjection": {
      "enabled": true,
      "severity": "high",
      "checkStringConcatenation": true,
      "checkTemplateLiterals": true,
      "checkDynamicQueries": true,
      "frameworks": ["express", "django", "rails"],
      "databases": ["mysql", "postgresql", "sqlite", "mongodb"],
      "customPatterns": [
        "executeQuery\\\\s*\\\\(\\\\s*[\"'].*\\\\+.*[\"']",
        "rawQuery\\\\s*\\\\(\\\\s*\`.*\\\\$\\\\{.*\\\\}\`"
      ]
    }
  }
}`}
                  </code>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Configuration Options</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">enabled</strong>
                      <span className="text-gray-400"> - Enable/disable SQL injection detection</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">severity</strong>
                      <span className="text-gray-400">
                        {" "}
                        - Set detection severity level (low, medium, high, critical)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">frameworks</strong>
                      <span className="text-gray-400"> - Specify frameworks to analyze</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">customPatterns</strong>
                      <span className="text-gray-400"> - Add custom regex patterns for detection</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <ArrowRight className="h-6 w-6 text-emerald-400 mr-3" />
                  Next Steps
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-emerald-400">Related Security Topics</h3>
                    <div className="space-y-3">
                      <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Link href="/docs/xss">
                          XSS Prevention
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Link href="/docs/csrf">
                          CSRF Protection
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Link href="/docs/custom-rules">
                          Custom Security Rules
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-emerald-400">Configuration & Setup</h3>
                    <div className="space-y-3">
                      <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Link href="/docs/config">
                          Configuration Files
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Link href="/docs/cicd">
                          CI/CD Integration
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Link href="/docs/api">
                          API Documentation
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
