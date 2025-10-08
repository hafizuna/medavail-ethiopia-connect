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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Your Ultimate Pharmaceutical Companion
          </h2>
          <p className="text-base text-muted-foreground">
            Comprehensive solutions for all your healthcare supply needs
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mb-4 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-background border-2 border-border transition-all group-hover:border-primary group-hover:bg-primary/5">
                  <Icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
