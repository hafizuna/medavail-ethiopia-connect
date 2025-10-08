import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users, Building2, Globe } from "lucide-react";
import aboutWarehouse from "@/assets/about-warehouse.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on the quality of products we distribute",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your healthcare needs drive everything we do",
    },
    {
      icon: Building2,
      title: "Reliability",
      description: "Consistent, timely delivery you can count on",
    },
    {
      icon: Globe,
      title: "Integrity",
      description: "Transparent business practices and ethical standards",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                About <span className="text-primary">Medavail Trading PLC</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Leading pharmaceutical distributor in Ethiopia, committed to
                delivering quality healthcare solutions since 2008
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Medavail Trading PLC was established in 2008 with a clear
                    mission: to provide healthcare facilities across Ethiopia with
                    reliable access to quality pharmaceuticals and medical
                    equipment.
                  </p>
                  <p>
                    Over the years, we have grown to become one of the most
                    trusted names in pharmaceutical distribution, serving hundreds
                    of hospitals, clinics, and healthcare centers throughout Addis
                    Ababa and regional areas.
                  </p>
                  <p>
                    Our commitment to quality, integrity, and exceptional service
                    has earned us partnerships with leading international
                    manufacturers and the trust of healthcare professionals
                    nationwide.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={aboutWarehouse}
                    alt="Medavail warehouse facility"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-border bg-background p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide healthcare facilities with reliable access to
                  high-quality pharmaceuticals, medical equipment, and laboratory
                  supplies while maintaining the highest standards of service,
                  integrity, and regulatory compliance.
                </p>
              </Card>

              <Card className="border-border bg-background p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Ethiopia's leading pharmaceutical distributor, recognized
                  for excellence in quality, service, and innovation. We aspire to
                  contribute significantly to improving healthcare accessibility
                  and outcomes across the nation.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Our Core Values
              </h2>
              <p className="text-base text-muted-foreground">
                The principles that guide every decision we make
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Licensing & Certification */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Licensed & Certified
              </h2>
              <p className="mb-8 text-muted-foreground">
                Medavail Trading PLC is fully licensed by the Ethiopian Food and
                Drug Administration (EFDA) and complies with all regulatory
                requirements for pharmaceutical distribution in Ethiopia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Card className="border-border bg-background px-6 py-4">
                  <div className="font-semibold">EFDA Licensed</div>
                  <div className="text-sm text-muted-foreground">
                    Pharmaceutical Distributor
                  </div>
                </Card>
                <Card className="border-border bg-background px-6 py-4">
                  <div className="font-semibold">ISO Compliant</div>
                  <div className="text-sm text-muted-foreground">
                    Quality Management
                  </div>
                </Card>
                <Card className="border-border bg-background px-6 py-4">
                  <div className="font-semibold">GMP Certified</div>
                  <div className="text-sm text-muted-foreground">
                    Good Manufacturing Practice
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
