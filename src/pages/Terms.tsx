import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="shadow-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-foreground mb-4">
              Terms and Conditions
            </CardTitle>
            <p className="text-muted-foreground">
              Welcome to Krayons Convergence Pvt Ltd. Please read these terms carefully.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                By using our website or making a payment, you agree to be bound by these Terms. 
                If you do not agree with any part of these Terms, please do not proceed with payment or use our services.
              </p>
              
              <Separator className="my-6" />
              
              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">1. General Information</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>This website is owned and operated by Krayons Convergence Pvt Ltd (Krayons), a service provider offering Digital Marketing and Event Services.</p>
                  <p>All payments made through this website are securely processed via a third-party payment gateway provider.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">2. Payment Terms</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>All payments made through the website are subject to the terms, conditions, and privacy policy of payment gateway provider.</p>
                  <p>You agree to provide accurate and complete payment information.</p>
                  <p>By initiating a transaction, you authorize Krayons and payment gateway provider to process the payment via your selected mode (credit/debit card, net banking, UPI, wallets, etc.).</p>
                  <p>Payments once made are non-refundable, unless explicitly stated or agreed upon under a separate agreement.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">3. Refund and Cancellation Policy</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Refunds, if applicable, will be processed in accordance with the Refund Policy provided on the website or as communicated via email.</p>
                  <p>Cancellation of services must be requested in writing and may be subject to approval and applicable deductions.</p>
                  <p>Any refund processed will be credited to the original payment method and may take 7–10 working days to reflect.</p>
                  <p>We are not liable for any issues arising from payment failures, transaction delays, or service outages caused by payment gateway provider.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">4. Service Delivery</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Upon successful payment, services will be delivered/provided as per the agreed schedule or terms mentioned in the respective service description.</p>
                  <p>Krayons is not responsible for delays caused by factors beyond our control.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">5. Limitation of Liability</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>To the maximum extent permitted by applicable law, Krayons shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to, loss of data or profits arising out of or in connection with the use of the website or payment services.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">6. Changes to Terms</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with a revised effective date. Your continued use of the website after such updates constitutes acceptance of the revised terms.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">7. Refund & Cancellation Policy</h3>
                
                <h4 className="text-lg font-medium text-foreground mt-4">a. Service-Based Refunds</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>Refunds are processed only in cases where services have not been delivered, or there is a verifiable deficiency in service.</p>
                  <p>If you believe you are eligible for a refund, please email us at <strong>mail@krayons.co.in</strong> with your payment details, reason for refund, and supporting documents (if any).</p>
                  <p>Approved refunds will be processed within 7–10 business days, and the amount will be credited back to the original mode of payment.</p>
                </div>

                <h4 className="text-lg font-medium text-foreground mt-4">b. Cancellation Policy</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>Cancellations must be requested via email to <strong>mail@krayons.co.in</strong> within 24 hours of payment. Requests made after the service has commenced are not eligible for cancellation.</p>
                  <p>Any approved cancellation may be subject to applicable deductions or administrative charges.</p>
                </div>

                <h4 className="text-lg font-medium text-foreground mt-4">c. No Refund Conditions</h4>
                <div className="text-muted-foreground">
                  <p>Refunds are not provided in the following cases:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Change of mind after the payment is made</li>
                    <li>Delay in service due to incomplete or incorrect information provided by the client</li>
                    <li>Services that are already delivered or in progress</li>
                    <li>Digital/consultation services once initiated</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">8. Contact Information</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>If you have any questions or concerns about these Terms, or require assistance with a payment, please contact:</p>
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

export default Terms;