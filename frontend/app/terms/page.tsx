import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-emerald-400/50 text-emerald-400">
            Legal Agreement
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            These Terms of Service ("Terms") govern your access to and use of BaLS Hub services. Please read them
            carefully.
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
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>

                <p className="text-gray-300 mb-4">
                  By accessing, downloading, installing, or using BaLS Hub ("Service," "Software," or "Application"),
                  you ("User," "you," or "your") agree to be bound by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any part of these terms, you must not use our Service.
                </p>

                <p className="text-gray-300 mb-4">
                  These Terms constitute a legally binding agreement between you and BaLS Hub ("Company," "we," "us," or
                  "our"). By using our Service, you represent that you are at least 18 years old and have the legal
                  capacity to enter into this agreement.
                </p>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Important Notice</h4>
                  <p className="text-gray-300">
                    These Terms include important provisions such as a binding arbitration clause and class action
                    waiver, which affect your legal rights. Please review them carefully.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Service Overview</h3>
                <p className="text-gray-300 mb-4">BaLS Hub is a comprehensive code analysis platform that provides:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Static code analysis for security vulnerabilities</li>
                  <li>Logic error detection and code quality assessment</li>
                  <li>Performance optimization recommendations</li>
                  <li>Integration tools for development workflows</li>
                  <li>Reporting and analytics capabilities</li>
                  <li>API access and automation features</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.2 Service Availability</h3>
                <p className="text-gray-300 mb-4">
                  We strive to maintain high service availability but do not guarantee uninterrupted access. The Service
                  may be temporarily unavailable due to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Scheduled maintenance and updates</li>
                  <li>Emergency repairs and security patches</li>
                  <li>Third-party service dependencies</li>
                  <li>Force majeure events beyond our control</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.3 Service Modifications</h3>
                <p className="text-gray-300 mb-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or
                  without notice. We will make reasonable efforts to provide advance notice of significant changes that
                  may materially affect your use of the Service.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">3. User Accounts and Registration</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Account Creation</h3>
                <p className="text-gray-300 mb-4">
                  To access certain features of the Service, you must create an account. When creating an account, you
                  agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Choose a secure password and keep it confidential</li>
                  <li>Accept full responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.2 Account Security</h3>
                <p className="text-gray-300 mb-4">
                  You are solely responsible for maintaining the confidentiality of your account credentials. We
                  recommend using strong, unique passwords and enabling two-factor authentication when available.
                </p>

                <h3 className="text-xl font-semibold mb-3">3.3 Account Termination</h3>
                <p className="text-gray-300 mb-4">
                  We may suspend or terminate your account at our sole discretion if you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Violate these Terms or our policies</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Compromise the security or integrity of our Service</li>
                  <li>Fail to pay applicable fees when due</li>
                  <li>Remain inactive for an extended period</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Permitted Uses</h3>
                <p className="text-gray-300 mb-4">
                  You may use the Service only for lawful purposes and in accordance with these Terms. Permitted uses
                  include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Analyzing your own source code for security vulnerabilities</li>
                  <li>Integrating the Service into your development workflow</li>
                  <li>Using our API within documented rate limits</li>
                  <li>Sharing scan results within your organization</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">4.2 Prohibited Uses</h3>
                <p className="text-gray-300 mb-4">You agree not to use the Service to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Reverse engineer, decompile, or disassemble the Software</li>
                  <li>Use the Service for competitive analysis without explicit permission</li>
                  <li>Exceed rate limits or abuse our API</li>
                  <li>Share your account credentials with unauthorized parties</li>
                  <li>Use the Service to analyze code you do not own or have permission to analyze</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Circumvent any security measures or access controls</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">4.3 Content Responsibility</h3>
                <p className="text-gray-300 mb-4">
                  You are solely responsible for any code, data, or content you submit to the Service. You represent and
                  warrant that you have all necessary rights to submit such content and that it does not violate any
                  laws or third-party rights.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Our Intellectual Property</h3>
                <p className="text-gray-300 mb-4">
                  The Service, including all software, algorithms, databases, designs, text, graphics, and other
                  content, is owned by BaLS Hub and is protected by copyright, trademark, patent, and other intellectual
                  property laws. All rights not expressly granted to you are reserved.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.2 Limited License</h3>
                <p className="text-gray-300 mb-4">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Use the Service for your internal business purposes</li>
                  <li>Download and install the Software on authorized devices</li>
                  <li>Access and use our API within documented limits</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.3 Your Content Rights</h3>
                <p className="text-gray-300 mb-4">
                  You retain all rights to your source code and content. By using the Service, you grant us a limited
                  license to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Process your code for analysis purposes</li>
                  <li>Store scan results and configurations</li>
                  <li>Use aggregated, anonymized data for service improvement</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.4 Feedback and Suggestions</h3>
                <p className="text-gray-300 mb-4">
                  Any feedback, suggestions, or ideas you provide about the Service become our property, and we may use
                  them without restriction or compensation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">6. Subscription Plans and Payment Terms</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Subscription Plans</h3>
                <p className="text-gray-300 mb-4">
                  We offer various subscription plans with different features and usage limits. Current plans and
                  pricing are available on our website and may be updated from time to time.
                </p>

                <h3 className="text-xl font-semibold mb-3">6.2 Payment Terms</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>
                    <strong>Billing Cycle:</strong> Subscription fees are billed in advance on a monthly or annual basis
                  </li>
                  <li>
                    <strong>Payment Methods:</strong> We accept major credit cards and other payment methods as
                    specified
                  </li>
                  <li>
                    <strong>Automatic Renewal:</strong> Subscriptions automatically renew unless cancelled before the
                    renewal date
                  </li>
                  <li>
                    <strong>Price Changes:</strong> We may change pricing with 30 days' advance notice
                  </li>
                  <li>
                    <strong>Taxes:</strong> You are responsible for all applicable taxes
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.3 Refund Policy</h3>
                <p className="text-gray-300 mb-4">
                  We offer a 30-day money-back guarantee for new subscriptions. Refund requests must be submitted within
                  30 days of initial purchase. Refunds are not available for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Subscription renewals</li>
                  <li>Accounts terminated for Terms violations</li>
                  <li>Partial billing periods</li>
                  <li>Third-party fees or charges</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.4 Cancellation</h3>
                <p className="text-gray-300 mb-4">
                  You may cancel your subscription at any time through your account settings or by contacting support.
                  Cancellation takes effect at the end of your current billing period. You will retain access to paid
                  features until the end of the paid period.
                </p>

                <h3 className="text-xl font-semibold mb-3">6.5 Failed Payments</h3>
                <p className="text-gray-300 mb-4">
                  If payment fails, we will attempt to collect payment using updated payment information. If payment
                  remains unsuccessful after reasonable attempts, we may suspend or downgrade your account.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">7. Privacy and Data Protection</h2>

                <p className="text-gray-300 mb-4">
                  Your privacy is important to us. Our collection, use, and protection of your personal information is
                  governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Data Processing</h3>
                <p className="text-gray-300 mb-4">
                  By using the Service, you consent to the processing of your data as described in our Privacy Policy.
                  This includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Collection of account and usage information</li>
                  <li>Processing of code for analysis purposes</li>
                  <li>Storage of scan results and configurations</li>
                  <li>Use of aggregated data for service improvement</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">7.2 Data Security</h3>
                <p className="text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your data. However, no system is
                  completely secure, and you acknowledge that you use the Service at your own risk.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">8. Disclaimers and Limitations of Liability</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Service Disclaimers</h3>
                <p className="text-gray-300 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                  IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                  <li>NON-INFRINGEMENT OF THIRD-PARTY RIGHTS</li>
                  <li>ACCURACY, COMPLETENESS, OR RELIABILITY OF ANALYSIS RESULTS</li>
                  <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                  <li>SECURITY OF DATA TRANSMISSION OR STORAGE</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">8.2 Analysis Results Disclaimer</h3>
                <p className="text-gray-300 mb-4">
                  BaLS Hub is a tool to assist in code analysis and security assessment. We do not guarantee that our
                  analysis will identify all vulnerabilities or issues in your code. You acknowledge that:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Code analysis tools have limitations and may produce false positives or negatives</li>
                  <li>Our Service should be used as part of a comprehensive security strategy</li>
                  <li>You are responsible for validating and acting upon analysis results</li>
                  <li>We are not responsible for any security breaches or issues in your code</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">8.3 Limitation of Liability</h3>
                <p className="text-gray-300 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BALS HUB BE LIABLE FOR ANY:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                  <li>LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL</li>
                  <li>SERVICE INTERRUPTIONS OR SECURITY BREACHES</li>
                  <li>ERRORS IN ANALYSIS RESULTS OR RECOMMENDATIONS</li>
                  <li>THIRD-PARTY ACTIONS OR INTEGRATIONS</li>
                </ul>

                <p className="text-gray-300 mb-4">
                  OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE SHALL NOT EXCEED THE AMOUNT
                  PAID BY YOU FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
                </p>

                <h3 className="text-xl font-semibold mb-3">8.4 Jurisdictional Limitations</h3>
                <p className="text-gray-300 mb-4">
                  Some jurisdictions do not allow the exclusion or limitation of certain warranties or damages. In such
                  jurisdictions, our liability will be limited to the maximum extent permitted by law.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>

                <p className="text-gray-300 mb-4">
                  You agree to indemnify, defend, and hold harmless BaLS Hub, its officers, directors, employees,
                  agents, and affiliates from and against any and all claims, damages, losses, costs, and expenses
                  (including reasonable attorney fees) arising from or relating to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Your use of the Service or violation of these Terms</li>
                  <li>Your content, code, or data submitted to the Service</li>
                  <li>Your violation of any law or regulation</li>
                  <li>Your infringement of any third-party rights</li>
                  <li>Any claim that your use of the Service caused damage to a third party</li>
                </ul>

                <p className="text-gray-300 mb-4">
                  This indemnification obligation will survive termination of these Terms and your use of the Service.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution and Arbitration</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Informal Resolution</h3>
                <p className="text-gray-300 mb-4">
                  Before initiating any formal dispute resolution, you agree to first contact us at
                  <a href="mailto:fixich88@gmail.com" className="text-emerald-400 hover:text-emerald-300 mx-1">
                    fixich88@gmail.com
                  </a>
                  to attempt to resolve the dispute informally. We will work in good faith to resolve any disputes.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.2 Binding Arbitration</h3>
                <p className="text-gray-300 mb-4">
                  If we cannot resolve a dispute informally, any dispute arising from or relating to these Terms or the
                  Service will be resolved through binding arbitration rather than in court, except as otherwise
                  provided herein.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.3 Class Action Waiver</h3>
                <p className="text-gray-300 mb-4">
                  YOU AND BALS HUB AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
                  CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.4 Exceptions</h3>
                <p className="text-gray-300 mb-4">
                  Either party may seek injunctive or other equitable relief in court to protect intellectual property
                  rights or confidential information.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">11.1 Termination by You</h3>
                <p className="text-gray-300 mb-4">
                  You may terminate your account and stop using the Service at any time by:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Cancelling your subscription through account settings</li>
                  <li>Contacting our support team</li>
                  <li>Ceasing to use the Service</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">11.2 Termination by Us</h3>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to the Service immediately, without prior notice, if:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>You breach these Terms or our policies</li>
                  <li>We reasonably believe termination is necessary to protect our interests or other users</li>
                  <li>Required by law or court order</li>
                  <li>Your account remains inactive for an extended period</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">11.3 Effect of Termination</h3>
                <p className="text-gray-300 mb-4">Upon termination:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Your right to use the Service immediately ceases</li>
                  <li>We may delete your account and associated data</li>
                  <li>You remain liable for any outstanding fees</li>
                  <li>Provisions that should survive termination will continue to apply</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">12. General Provisions</h2>

                <h3 className="text-xl font-semibold mb-3 mt-6">12.1 Governing Law</h3>
                <p className="text-gray-300 mb-4">
                  These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without
                  regard to conflict of law principles.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.2 Entire Agreement</h3>
                <p className="text-gray-300 mb-4">
                  These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the
                  entire agreement between you and BaLS Hub regarding the Service.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.3 Severability</h3>
                <p className="text-gray-300 mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.4 Waiver</h3>
                <p className="text-gray-300 mb-4">
                  Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or
                  any other provision.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.5 Assignment</h3>
                <p className="text-gray-300 mb-4">
                  You may not assign or transfer these Terms or your account without our written consent. We may assign
                  these Terms without restriction.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.6 Force Majeure</h3>
                <p className="text-gray-300 mb-4">
                  We will not be liable for any delay or failure to perform due to causes beyond our reasonable control,
                  including natural disasters, war, terrorism, labor disputes, or government actions.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>

                <p className="text-gray-300 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Posting updated Terms on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying notices within the Service</li>
                  <li>Updating the "Last Updated" date</li>
                </ul>

                <p className="text-gray-300 mb-4">
                  Changes will become effective 30 days after posting, unless we specify a different effective date.
                  Your continued use of the Service after the effective date constitutes acceptance of the updated
                  Terms.
                </p>

                <p className="text-gray-300 mb-4">
                  If you do not agree to the updated Terms, you must stop using the Service and may terminate your
                  account.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>

                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>

                <div className="bg-gray-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">BaLS Hub Legal Team</h3>
                  <ul className="list-none text-gray-300 space-y-2">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:fixich88@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                        fixich88@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong>Subject Line:</strong> "Terms of Service Inquiry"
                    </li>
                    <li>
                      <strong>Response Time:</strong> We will respond within 5 business days
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-400 mb-2">Legal Notice</h4>
                  <p className="text-gray-300">
                    These Terms of Service were last updated on January 1, 2025. We recommend reviewing these Terms
                    periodically for any changes.
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
