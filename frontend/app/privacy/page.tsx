import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Legal Document
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            This Privacy Policy describes how BaLS Hub ("we," "our," or "us") collects, uses, and protects your
            information when you use our service.
          </p>
          <p className="text-gray-400">Effective Date: January 1, 2025 | Last Updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">1.1 Personal Information</h3>
                <p className="text-gray-300 mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Create an account or register for our services</li>
                  <li>Subscribe to our paid plans or make purchases</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Participate in surveys, contests, or promotional activities</li>
                </ul>

                <p className="text-gray-300 mb-4">This information may include:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Company information (organization name, role, industry)</li>
                  <li>Communication preferences and marketing consent</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">1.2 Technical Information</h3>
                <p className="text-gray-300 mb-4">
                  We automatically collect certain technical information when you use our service:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Device information (operating system, browser type, device identifiers)</li>
                  <li>Usage data (features used, time spent, click patterns)</li>
                  <li>Log data (IP address, access times, error logs)</li>
                  <li>Performance metrics and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">1.3 Code Analysis Data</h3>
                <p className="text-gray-300 mb-4">When you use BaLS Hub to analyze your code, we may process:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Source code snippets for analysis purposes (processed locally when possible)</li>
                  <li>Scan results and vulnerability reports</li>
                  <li>Configuration files and project settings</li>
                  <li>Metadata about your codebase (file types, sizes, structure)</li>
                  <li>Custom rules and security configurations</li>
                </ul>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">Important Note About Code Privacy</h4>
                  <p className="text-gray-300">
                    We prioritize the security of your source code. BaLS Hub processes code locally on your machine
                    whenever possible. For cloud-based features, only necessary code snippets are temporarily processed
                    on our secure servers and are never stored permanently. We never retain complete source code files.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Service Provision</h3>
                <p className="text-gray-300 mb-4">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Provide, operate, and maintain our code analysis services</li>
                  <li>Process your account registration and manage user accounts</li>
                  <li>Execute code scans and generate security reports</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Send service-related notifications and updates</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.2 Service Improvement</h3>
                <p className="text-gray-300 mb-4">We may use aggregated, anonymized data to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Analyze usage patterns and improve our algorithms</li>
                  <li>Develop new features and enhance existing functionality</li>
                  <li>Conduct research and development activities</li>
                  <li>Generate statistical insights about security trends</li>
                  <li>Optimize performance and user experience</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.3 Legal Compliance</h3>
                <p className="text-gray-300 mb-4">We may process your information when necessary to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Comply with applicable laws, regulations, and legal processes</li>
                  <li>Respond to lawful requests from public authorities</li>
                  <li>Protect our rights, property, and safety</li>
                  <li>Prevent fraud, abuse, and security incidents</li>
                  <li>Enforce our terms of service and other agreements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>

                <p className="text-gray-300 mb-4">
                  We do not sell, rent, or trade your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Service Providers</h3>
                <p className="text-gray-300 mb-4">
                  We may share information with trusted third-party service providers who assist us in operating our
                  business, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Cloud hosting and infrastructure providers</li>
                  <li>Payment processors and billing services</li>
                  <li>Customer support and communication platforms</li>
                  <li>Analytics and monitoring services</li>
                  <li>Security and fraud prevention services</li>
                </ul>
                <p className="text-gray-300 mb-6">
                  These service providers are contractually obligated to protect your information and use it only for
                  the specific services they provide to us.
                </p>

                <h3 className="text-xl font-semibold mb-3">3.2 Legal Requirements</h3>
                <p className="text-gray-300 mb-4">
                  We may disclose your information if required to do so by law or in response to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Valid legal process (subpoenas, court orders, search warrants)</li>
                  <li>Government or regulatory investigations</li>
                  <li>Requests from law enforcement agencies</li>
                  <li>National security requirements</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.3 Business Transfers</h3>
                <p className="text-gray-300 mb-4">
                  In the event of a merger, acquisition, reorganization, or sale of assets, your information may be
                  transferred as part of that transaction. We will provide notice before your personal information is
                  transferred and becomes subject to a different privacy policy.
                </p>

                <h3 className="text-xl font-semibold mb-3">3.4 Consent</h3>
                <p className="text-gray-300 mb-4">
                  We may share your information with your explicit consent for purposes not covered by this Privacy
                  Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security and Protection</h2>

                <p className="text-gray-300 mb-4">
                  We implement comprehensive security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction:
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Technical Safeguards</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Industry-standard encryption for data in transit and at rest (AES-256, TLS 1.3)</li>
                  <li>Secure authentication mechanisms and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Intrusion detection and monitoring systems</li>
                  <li>Secure development practices and code reviews</li>
                  <li>Regular security updates and patch management</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">4.2 Administrative Safeguards</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Employee background checks and security training</li>
                  <li>Principle of least privilege access controls</li>
                  <li>Incident response and breach notification procedures</li>
                  <li>Regular security awareness training</li>
                  <li>Third-party security assessments</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">4.3 Physical Safeguards</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Secure data centers with restricted access</li>
                  <li>Environmental controls and monitoring</li>
                  <li>Backup and disaster recovery procedures</li>
                  <li>Secure disposal of hardware and media</li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Security Disclaimer</h4>
                  <p className="text-gray-300">
                    While we implement robust security measures, no method of transmission over the internet or
                    electronic storage is 100% secure. We cannot guarantee absolute security but are committed to
                    protecting your information using industry best practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>

                <p className="text-gray-300 mb-4">
                  Depending on your location and applicable laws, you may have the following rights regarding your
                  personal information:
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Access and Portability</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Right to access your personal information we hold</li>
                  <li>Right to receive a copy of your data in a portable format</li>
                  <li>Right to information about how your data is processed</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.2 Correction and Updates</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Right to correct inaccurate or incomplete information</li>
                  <li>Right to update your account information and preferences</li>
                  <li>Right to complete incomplete personal data</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.3 Deletion and Erasure</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Right to request deletion of your personal information</li>
                  <li>Right to erasure when data is no longer necessary</li>
                  <li>Right to deletion when consent is withdrawn</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.4 Processing Restrictions</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Right to restrict processing of your personal information</li>
                  <li>Right to object to processing for direct marketing</li>
                  <li>Right to object to automated decision-making</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.5 Exercising Your Rights</h3>
                <p className="text-gray-300 mb-4">To exercise any of these rights, please contact us at:</p>
                <ul className="list-none text-gray-300 space-y-2 mb-6">
                  <li>
                    Email:{" "}
                    <a href="mailto:fixich88@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                      fixich88@gmail.com
                    </a>
                  </li>
                  <li>Subject Line: "Privacy Rights Request"</li>
                  <li>Include: Your name, email address, and specific request</li>
                </ul>

                <p className="text-gray-300 mb-4">
                  We will respond to your request within 30 days (or as required by applicable law). We may need to
                  verify your identity before processing your request.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>

                <p className="text-gray-300 mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Retention Periods</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>
                    <strong>Account Information:</strong> Retained while your account is active and for 3 years after
                    account closure
                  </li>
                  <li>
                    <strong>Payment Data:</strong> Retained for 7 years for tax and accounting purposes
                  </li>
                  <li>
                    <strong>Support Communications:</strong> Retained for 3 years for quality assurance
                  </li>
                  <li>
                    <strong>Usage Analytics:</strong> Aggregated data retained indefinitely; personal identifiers
                    removed after 2 years
                  </li>
                  <li>
                    <strong>Code Analysis Data:</strong> Scan results retained for 1 year; source code snippets deleted
                    immediately after processing
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.2 Deletion Procedures</h3>
                <p className="text-gray-300 mb-4">
                  When we no longer need your personal information, we securely delete or anonymize it using
                  industry-standard methods. Some information may be retained in backup systems for up to 90 days after
                  deletion from active systems.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>

                <p className="text-gray-300 mb-4">
                  BaLS Hub operates globally, and your information may be transferred to and processed in countries
                  other than your country of residence. These countries may have different data protection laws than
                  your country.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Transfer Safeguards</h3>
                <p className="text-gray-300 mb-4">
                  When we transfer your personal information internationally, we ensure appropriate safeguards are in
                  place:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Standard Contractual Clauses approved by relevant authorities</li>
                  <li>Adequacy decisions by competent data protection authorities</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules for intra-group transfers</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">7.2 Data Processing Locations</h3>
                <p className="text-gray-300 mb-4">Your data may be processed in the following regions:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>United States (primary data centers)</li>
                  <li>European Union (for EU users)</li>
                  <li>Other regions as necessary for service provision</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>

                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience and collect information
                  about how you use our service.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Types of Cookies</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic functionality and security
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us understand how you use our service
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">8.2 Cookie Management</h3>
                <p className="text-gray-300 mb-4">
                  You can control cookies through your browser settings. However, disabling certain cookies may affect
                  the functionality of our service. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close your browser</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>

                <p className="text-gray-300 mb-4">
                  BaLS Hub is not intended for use by children under the age of 13 (or the minimum age in your
                  jurisdiction). We do not knowingly collect personal information from children under 13.
                </p>

                <p className="text-gray-300 mb-4">
                  If we become aware that we have collected personal information from a child under 13 without parental
                  consent, we will take steps to delete that information as quickly as possible.
                </p>

                <p className="text-gray-300 mb-4">
                  If you are a parent or guardian and believe your child has provided us with personal information,
                  please contact us at{" "}
                  <a href="mailto:fixich88@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                    fixich88@gmail.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>

                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Notification of Changes</h3>
                <p className="text-gray-300 mb-4">We will notify you of material changes to this Privacy Policy by:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Posting the updated Privacy Policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices within our application</li>
                  <li>Updating the "Last Updated" date at the top of this policy</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">10.2 Effective Date</h3>
                <p className="text-gray-300 mb-4">
                  Changes to this Privacy Policy will become effective 30 days after we post the revised policy, unless
                  we specify a different effective date. Your continued use of our service after the effective date
                  constitutes acceptance of the updated Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>

                <p className="text-gray-300 mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>

                <div className="bg-gray-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">BaLS Hub Privacy Team</h3>
                  <ul className="list-none text-gray-300 space-y-2">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:fixich88@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                        fixich88@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong>Subject Line:</strong> "Privacy Policy Inquiry"
                    </li>
                    <li>
                      <strong>Response Time:</strong> We will respond within 5 business days
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 mb-4">
                  For privacy-related complaints or concerns that we cannot resolve directly, you may have the right to
                  contact your local data protection authority.
                </p>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-400 mb-2">Data Protection Officer</h4>
                  <p className="text-gray-300">
                    For users in the European Union, you may contact our Data Protection Officer at the email address
                    above with "DPO Inquiry" in the subject line.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
