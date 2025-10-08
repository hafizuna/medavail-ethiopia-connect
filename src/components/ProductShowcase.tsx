import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import productMedicines from "@/assets/product-medicines.jpg";
import productEquipment from "@/assets/product-equipment.jpg";

const ProductShowcase = () => {
  const features1 = [
    "Wide range of prescription medications",
    "Over-the-counter pharmaceuticals",
    "Specialized treatment solutions",
    "Quality assured by international standards",
  ];

  const features2 = [
    "Advanced diagnostic equipment",
    "Patient monitoring systems",
    "Surgical instruments and tools",
    "Maintenance and calibration services",
  ];

  return (
    <>
      {/* First Showcase - Image Left */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={productMedicines}
                  alt="Pharmaceutical products"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Essential Medicines & Pharmaceuticals
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Comprehensive range of high-quality pharmaceutical products from trusted global manufacturers. We ensure every medicine meets strict quality standards and regulatory requirements.
                </p>
              </div>

              <ul className="space-y-3">
                {features1.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button size="lg">
                  View All Medicines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Showcase - Image Right */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Medical Equipment & Devices
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  State-of-the-art medical equipment and diagnostic devices for modern healthcare facilities. Complete with technical support and maintenance services.
                </p>
              </div>

              <ul className="space-y-3">
                {features2.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button size="lg">
                  Explore Equipment
                </Button>
              </div>
            </div>

            <div className="relative lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={productEquipment}
                  alt="Medical equipment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductShowcase;
