import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import productMedicines from "@/assets/product-medicines.jpg";
import productEquipment from "@/assets/product-equipment.jpg";
import productLab from "@/assets/product-lab.jpg";

const products = [
  {
    image: productMedicines,
    category: "Pharmaceuticals",
    title: "Essential Medicines",
    description:
      "Wide range of prescription and over-the-counter medications from trusted global manufacturers.",
  },
  {
    image: productEquipment,
    category: "Medical Equipment",
    title: "Diagnostic Equipment",
    description:
      "Advanced diagnostic tools and medical devices for accurate patient assessment and care.",
  },
  {
    image: productLab,
    category: "Laboratory",
    title: "Lab Consumables & Reagents",
    description:
      "Premium quality laboratory supplies and testing reagents for clinical diagnostics.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Product Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of healthcare solutions
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border transition-all hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold">
                  {product.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Products
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
