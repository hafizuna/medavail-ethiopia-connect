import { Card } from "@/components/ui/card";
import { Pill, Stethoscope, FlaskConical, Wrench, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Human Medicines",
    description:
      "Comprehensive range of pharmaceutical products from leading international manufacturers, ensuring quality and efficacy.",
  },
  {
    icon: Stethoscope,
    title: "Medical Devices & Equipment",
    description:
      "State-of-the-art diagnostic and treatment equipment for modern healthcare facilities and practices.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Reagents",
    description:
      "High-quality consumables and reagents for accurate diagnostic testing and research applications.",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    description:
      "Comprehensive maintenance, calibration, and technical support for all medical equipment we supply.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensuring compliance with international and local regulatory standards.",
  },
  {
    icon: Truck,
    title: "Reliable Distribution",
    description:
      "Efficient logistics network ensuring timely delivery across Addis Ababa and regional facilities.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Your Ultimate Pharmaceutical Companion
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions for all your healthcare supply needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer border-border p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
