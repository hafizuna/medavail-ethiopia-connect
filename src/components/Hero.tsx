import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroDevice from "@/assets/hero-device.png";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 items-center min-h-[600px]">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                Reliable pharmaceutical distribution{" "}
                <span className="text-primary">for Ethiopia's healthcare</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg max-w-lg">
                Quality medicines, medical equipment, and laboratory supplies delivered with integrity and trust. Serving healthcare facilities nationwide.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="group">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Products
              </Button>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                ⭐ 4.9 Rating
              </Badge>
              <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                ✓ EFDA Licensed
              </Badge>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={heroDevice}
                alt="Medical monitoring device"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
