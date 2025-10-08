import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Reliable Pharmaceutical & Medical Equipment Distribution in{" "}
                <span className="text-gradient">Ethiopia</span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Quality, integrity and service you can trust. Serving healthcare
                facilities across Addis Ababa and beyond.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Products
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Modern pharmaceutical workspace with medical equipment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg">
              <div className="text-sm font-medium">Licensed by</div>
              <div className="text-2xl font-bold">EFDA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
