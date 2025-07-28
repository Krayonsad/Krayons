import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="shadow-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </CardTitle>
            <p className="text-muted-foreground">
              Our commitment to protecting your privacy and personal data.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="prose max-w-none">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Commitment</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Krayons Group is committed to protecting your privacy and personal data. We collect only essential information needed to provide better services and inform you about our Services and Events. This includes data gathered through our digital marketing affiliates and performance marketing campaigns to better understand your interests and improve our outreach efforts. We ensure our employees receive regular training on data protection and security.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Data We Collect</h3>
                
                <h4 className="text-lg font-medium text-foreground">Access Data</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Your Internet service provider</li>
                    <li>Your country of origin</li>
                    <li>Referring website and search terms</li>
                    <li>Pages visited on our site</li>
                    <li>Browser and operating system details</li>
                    <li>Downloaded files</li>
                    <li>Visit duration, date, and time</li>
                    <li>IP address (stored for 30 days for security purposes)</li>
                  </ul>
                </div>

                <h4 className="text-lg font-medium text-foreground mt-4">Personal Data</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>We collect personal information only when you voluntarily provide it through:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Registration forms</li>
                    <li>Contact inquiries</li>
                    <li>Newsletter subscriptions</li>
                    <li>Online orders</li>
                    <li>Surveys or competitions</li>
                  </ul>
                </div>

                <h4 className="text-lg font-medium text-foreground mt-4">Sensitive Personal Data</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>We may collect sensitive data including passwords, financial information, health records, and biometric data only with your explicit consent and for lawful purposes connected to our services.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">How We Use Your Data</h3>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Optimize and personalize our website content</li>
                    <li>Process your requests and orders</li>
                    <li>Send you relevant information about our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Enhance security and prevent fraud</li>
                    <li>Access limited to authorized, trained employees only</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Data Sharing</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>We share personal data only:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>With select partners under strict data protection agreements</li>
                    <li>With government agencies when legally required</li>
                    <li>To countries with equivalent data protection standards</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Your Rights</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Request cessation of data use</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Cookies & Tracking</h3>
                
                <h4 className="text-lg font-medium text-foreground">Essential Cookies</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>We use cookies to enhance website functionality and personalize your experience. Our cookies don't contain personal data and can only be read by our servers.</p>
                </div>

                <h4 className="text-lg font-medium text-foreground mt-4">Conversion Tracking</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>We track advertising effectiveness through third-party cookies, collecting anonymous data about clicks, device information, and user behavior without identifying individual users.</p>
                </div>

                <h4 className="text-lg font-medium text-foreground mt-4">Your Cookie Choices</h4>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Disable cookies in your browser settings</li>
                    <li>Use "Do Not Track" options</li>
                    <li>Install opt-out browser extensions</li>
                  </ul>
                  <p className="mt-2"><strong>Note:</strong> Disabling cookies may limit website functionality</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Third-Party Links</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Our website may contain links to external sites. We're not responsible for their content or privacy practices. Each linked site has its own privacy policy.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Technical Elements</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>JavaScript and ActiveX can be disabled in your browser for security. Our website remains functional without these elements.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Policy Updates</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>We reserve the right to update this privacy policy in compliance with data protection laws. Please review periodically for changes.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Contact Us</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>For privacy-related questions or to exercise your rights, contact our grievance officer via email.</p>
                  <div className="bg-muted/50 p-4 rounded-lg mt-4">
                    <p><strong>Krayons Convergence Private Limited</strong></p>
                    <p>Plot A-09, 711, ITL Towers, Netaji Subhash Place, Pitampura, Delhi 110034</p>
                    <p>Email: mail@krayons.co.in</p>
                    <p>Landline: +91 11 41103510</p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;