import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Shield,
  CheckCircle,
  FileCheck,
  Truck,
  ThermometerSun,
  ClipboardCheck,
} from "lucide-react";
import qualityLab from "@/assets/quality-lab.jpg";

const Quality = () => {
  const qualityStandards = [
    {
      icon: Shield,
      title: "EFDA Licensed",
      description:
        "Fully licensed by Ethiopian Food and Drug Administration with regular compliance audits",
    },
    {
      icon: FileCheck,
      title: "ISO Certified",
      description:
        "ISO 9001:2015 certified quality management system for pharmaceutical distribution",
    },
    {
      icon: CheckCircle,
      title: "GMP Compliant",
      description:
        "Adherence to Good Manufacturing Practice and Good Distribution Practice standards",
    },
    {
      icon: ThermometerSun,
      title: "Temperature Control",
      description:
        "Advanced cold chain management for temperature-sensitive products",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Assurance",
      description:
        "Rigorous testing and verification of all products before distribution",
    },
    {
      icon: Truck,
      title: "Supply Chain Integrity",
      description:
        "Complete traceability from manufacturer to end user with secure logistics",
    },
  ];

  const processes = [
    {
      step: "01",
      title: "Source Verification",
      description:
        "All products sourced from EFDA-approved manufacturers with proper documentation",
    },
    {
      step: "02",
      title: "Quality Testing",
      description:
        "Independent laboratory testing to verify product quality and authenticity",
    },
    {
      step: "03",
      title: "Storage Management",
      description:
        "Climate-controlled warehouses with real-time monitoring systems",
    },
    {
      step: "04",
      title: "Distribution Control",
      description:
        "Secure transportation maintaining product integrity throughout delivery",
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
                Quality & <span className="text-primary">Compliance</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Committed to the highest standards of pharmaceutical quality and
                regulatory compliance
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Commitment to Quality
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Medavail Trading PLC, quality is not just a goal—it's our
                    foundation. We maintain rigorous quality control processes at
                    every stage of our operation, from sourcing to delivery.
                  </p>
                  <p>
                    Our quality management system ensures that every product we
                    distribute meets or exceeds international standards and
                    Ethiopian regulatory requirements.
                  </p>
                  <p>
                    We invest continuously in training, technology, and
                    infrastructure to maintain the integrity of pharmaceutical
                    products throughout the supply chain.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={qualityLab}
                    alt="Quality assurance laboratory"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Certifications & Standards
              </h2>
              <p className="text-base text-muted-foreground">
                Recognized compliance with international and local quality standards
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {qualityStandards.map((standard, index) => {
                const Icon = standard.icon;
                return (
                  <Card key={index} className="border-border bg-background p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      {standard.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {standard.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Our Quality Process
              </h2>
              <p className="text-base text-muted-foreground">
                Systematic approach to ensuring product quality and safety
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processes.map((process, index) => (
                <div key={index} className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-bold">
                      {process.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="mb-2 font-heading text-lg font-semibold">
                        {process.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Card className="border-border bg-background p-8 md:p-12">
                <h2 className="mb-6 font-heading text-2xl font-bold sm:text-3xl">
                  Regulatory Compliance
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Medavail Trading PLC maintains full compliance with all
                    Ethiopian pharmaceutical regulations as set forth by the
                    Ethiopian Food and Drug Administration (EFDA).
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Regular EFDA inspections and audits</li>
                    <li>Proper licensing for all product categories</li>
                    <li>Adherence to import and distribution regulations</li>
                    <li>Proper documentation and record-keeping</li>
                    <li>Pharmacovigilance and adverse event reporting</li>
                    <li>Recall procedures and product tracking systems</li>
                  </ul>
                  <p className="pt-4 text-sm">
                    Our regulatory compliance team stays updated with all changes
                    in pharmaceutical regulations to ensure continuous compliance
                    and the highest standards of patient safety.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quality;
