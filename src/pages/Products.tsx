import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Pill, Stethoscope, FlaskConical, Wrench } from "lucide-react";
import { useState } from "react";
import productMedicines from "@/assets/product-medicines.jpg";
import productEquipment from "@/assets/product-equipment.jpg";
import productLab from "@/assets/product-lab.jpg";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const productCategories = [
    {
      id: "medicines",
      icon: Pill,
      title: "Human Medicines",
      description: "Comprehensive pharmaceutical products",
      items: [
        {
          name: "Antibiotics & Anti-infectives",
          description: "Wide range of antibacterial and antiviral medications",
          image: productMedicines,
        },
        {
          name: "Cardiovascular Medications",
          description: "Heart and blood pressure management drugs",
          image: productMedicines,
        },
        {
          name: "Pain Management",
          description: "Analgesics and anti-inflammatory medications",
          image: productMedicines,
        },
        {
          name: "Diabetes Care",
          description: "Insulin and oral hypoglycemic agents",
          image: productMedicines,
        },
      ],
    },
    {
      id: "equipment",
      icon: Stethoscope,
      title: "Medical Equipment",
      description: "Advanced diagnostic and treatment devices",
      items: [
        {
          name: "Diagnostic Equipment",
          description: "X-ray, ultrasound, and imaging systems",
          image: productEquipment,
        },
        {
          name: "Patient Monitors",
          description: "Vital signs monitoring systems",
          image: productEquipment,
        },
        {
          name: "Surgical Instruments",
          description: "High-quality surgical tools and equipment",
          image: productEquipment,
        },
        {
          name: "Laboratory Equipment",
          description: "Analyzers and diagnostic instruments",
          image: productEquipment,
        },
      ],
    },
    {
      id: "laboratory",
      icon: FlaskConical,
      title: "Laboratory Supplies",
      description: "Reagents and consumables",
      items: [
        {
          name: "Clinical Chemistry Reagents",
          description: "For blood chemistry analysis",
          image: productLab,
        },
        {
          name: "Hematology Reagents",
          description: "Complete blood count testing",
          image: productLab,
        },
        {
          name: "Microbiology Supplies",
          description: "Culture media and testing materials",
          image: productLab,
        },
        {
          name: "Laboratory Consumables",
          description: "Tubes, slides, and general supplies",
          image: productLab,
        },
      ],
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
                Our <span className="text-primary">Products</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Comprehensive range of pharmaceuticals, medical equipment, and
                laboratory supplies
              </p>

              {/* Search Bar */}
              <div className="mx-auto max-w-xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="medicines" className="w-full">
              <TabsList className="mb-12 grid w-full max-w-3xl mx-auto grid-cols-3">
                {productCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {productCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="mb-12 text-center">
                    <h2 className="mb-3 font-heading text-3xl font-bold">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {category.items.map((item, index) => (
                      <Card
                        key={index}
                        className="group overflow-hidden border-border transition-all hover:shadow-lg"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="mb-2 font-heading text-lg font-semibold">
                            {item.name}
                          </h3>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Request Info
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold">
                Can't Find What You're Looking For?
              </h2>
              <p className="mb-6">
                Our product catalog is extensive. Contact us for specific product
                inquiries or custom orders.
              </p>
              <Button size="lg" variant="secondary">
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
