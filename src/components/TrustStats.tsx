import { Building2, Users, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "15+",
    label: "Years of Excellence",
    description: "Serving Ethiopia's healthcare sector",
  },
  {
    icon: Users,
    value: "500+",
    label: "Healthcare Partners",
    description: "Hospitals and clinics nationwide",
  },
  {
    icon: Award,
    value: "100%",
    label: "Quality Assured",
    description: "EFDA licensed and certified",
  },
  {
    icon: MapPin,
    value: "24/7",
    label: "Support Available",
    description: "Dedicated customer service",
  },
];

const TrustStats = () => {
  return (
    <section className="border-y bg-secondary/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transition-transform hover:scale-105"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-1 font-heading text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mb-2 font-heading text-lg font-semibold">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
