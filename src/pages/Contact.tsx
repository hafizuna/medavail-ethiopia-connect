import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+251 11 XXX XXXX", "+251 91 XXX XXXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@medavailtrading.com", "sales@medavailtrading.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Addis Ababa", "Ethiopia"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    },
  ];

  const departments = [
    {
      name: "Sales Inquiries",
      email: "sales@medavailtrading.com",
      description: "For product information and orders",
    },
    {
      name: "Technical Support",
      email: "support@medavailtrading.com",
      description: "Equipment maintenance and service",
    },
    {
      name: "General Inquiries",
      email: "info@medavailtrading.com",
      description: "Questions and partnership opportunities",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're here to help with your pharmaceutical and medical equipment
                needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-border bg-background p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-semibold">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </Card>
                );
              })}
            </div>

            {/* Contact Form & Departments */}
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-border p-8">
                  <h2 className="mb-6 font-heading text-2xl font-bold">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+251 91 XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">
                        Organization / Hospital
                      </Label>
                      <Input
                        id="organization"
                        placeholder="Your healthcare facility"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Departments */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="mb-6 font-heading text-2xl font-bold">
                    Departments
                  </h2>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <Card key={index} className="border-border p-5">
                        <h3 className="mb-1 font-heading text-base font-semibold">
                          {dept.name}
                        </h3>
                        <a
                          href={`mailto:${dept.email}`}
                          className="mb-2 block text-sm text-primary hover:underline"
                        >
                          {dept.email}
                        </a>
                        <p className="text-xs text-muted-foreground">
                          {dept.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <Card className="border-border p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:info@medavailtrading.com"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-secondary/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Card className="border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Map integration available
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
              <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
                Need Immediate Assistance?
              </h2>
              <p className="mb-6 text-muted-foreground">
                For urgent matters or emergency orders, please call our hotline
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline">
                  Request Quote
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
