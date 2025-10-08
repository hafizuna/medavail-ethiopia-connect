import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import FeaturedProducts from "@/components/FeaturedProducts";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <FeaturedProducts />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
