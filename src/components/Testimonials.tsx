import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Medavail Trading has been our trusted partner for over 5 years. Their commitment to quality and timely delivery is exceptional.",
    author: "Dr. Abebe Bekele",
    role: "Chief Medical Officer",
    hospital: "St. Paul's Hospital",
  },
  {
    quote:
      "The range of products and professional service we receive from Medavail makes them our first choice for medical supplies.",
    author: "Sr. Marta Tesfaye",
    role: "Procurement Manager",
    hospital: "Black Lion Hospital",
  },
  {
    quote:
      "Reliable distribution and excellent technical support. Medavail truly understands the needs of healthcare facilities.",
    author: "Dr. Solomon Haile",
    role: "Director",
    hospital: "Tikur Anbessa Specialized Hospital",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Our Customers Speak for Themselves
          </h2>
          <p className="text-base text-muted-foreground">
            Trusted by leading healthcare facilities across Ethiopia
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border p-8 bg-background">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="mb-6 text-sm leading-relaxed text-foreground">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.hospital}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
