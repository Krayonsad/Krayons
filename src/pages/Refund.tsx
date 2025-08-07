import { ArrowLeft, RefreshCw, XCircle, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Refund = () => {
  const refundTimelines = [
    {
      service: "Digital Marketing Services",
      timeline: "7 days",
      conditions: "Before campaign launch",
      icon: <RefreshCw className="w-5 h-5" />
    },
    {
      service: "Affiliate Marketing Setup",
      timeline: "14 days",
      conditions: "If no active partnerships established",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      service: "Event Management Services",
      timeline: "30 days",
      conditions: "Before event confirmation",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const nonRefundableItems = [
    "Services already delivered or completed",
    "Custom creative work that has been approved",
    "Third-party advertising costs already incurred",
    "Event bookings made with vendors",
    "Domain and hosting fees",
    "Services used for more than 30 days"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Button 
            variant="ghost" 
            className="mb-6 p-0 h-auto text-muted-foreground hover:text-primary"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              Effective Date: August 8, 2025
            </Badge>
            <h1 className="text-4xl font-bold text-foreground">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Clear and fair policies for refunds and cancellations of our digital marketing, 
              affiliate marketing, and event management services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              <span>Policy Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              At KRAYONS GROUP, we understand that business needs can change. This policy outlines 
              our approach to refunds and cancellations for all our services including digital marketing, 
              affiliate marketing, and event management solutions.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium text-primary mb-2">Important Note:</p>
              <p className="text-sm text-muted-foreground">
                All refund requests must be submitted in writing to krayonsad@gmail.com with your 
                service agreement details and reason for cancellation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Refund Timelines */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Refund Timelines by Service</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {refundTimelines.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    {item.icon}
                    <span>{item.service}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Timeline:</span>
                    <Badge variant="secondary">{item.timeline}</Badge>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Conditions:</span>
                    <p className="text-sm font-medium text-foreground mt-1">{item.conditions}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Cancellation Policy */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Cancellation Policy</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Before Service Commencement</h3>
                <p className="text-muted-foreground mb-3">
                  You may cancel your service agreement before work begins and receive a full refund, 
                  minus any setup fees or third-party costs already incurred.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">During Active Service Period</h3>
                <p className="text-muted-foreground mb-3">
                  Services may be cancelled with 30 days written notice. Refunds will be calculated 
                  based on unused service periods and work not yet delivered.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Event Management Cancellations</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• <span className="font-medium">90+ days before event:</span> 80% refund</p>
                  <p>• <span className="font-medium">60-89 days before event:</span> 60% refund</p>
                  <p>• <span className="font-medium">30-59 days before event:</span> 40% refund</p>
                  <p>• <span className="font-medium">Less than 30 days:</span> No refund (subject to vendor costs)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Non-Refundable Items */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Non-Refundable Items</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span>What Cannot Be Refunded</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {nonRefundableItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Refund Process */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Request a Refund</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Submit Request</h3>
                    <p className="text-muted-foreground">
                      Email your refund request to krayonsad@gmail.com with your service agreement 
                      number and detailed reason for cancellation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Review Process</h3>
                    <p className="text-muted-foreground">
                      Our team will review your request within 3-5 business days and respond 
                      with the refund amount and timeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Processing</h3>
                    <p className="text-muted-foreground">
                      Approved refunds will be processed within 7-10 business days to your 
                      original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Questions About This Policy?</h3>
              <p className="text-muted-foreground">
                Contact our customer service team for clarification on any refund or cancellation matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:krayonsad@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  krayonsad@gmail.com
                </a>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <a 
                  href="tel:+919111455351" 
                  className="text-primary hover:underline font-medium"
                >
                  +91 91114553510
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            This policy was last updated on August 8, 2025. We reserve the right to modify 
            this policy at any time with reasonable notice to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;