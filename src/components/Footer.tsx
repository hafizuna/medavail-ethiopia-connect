import { Facebook, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-primary">
              Medavail Trading PLC
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in pharmaceutical and medical equipment
              distribution across Ethiopia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Human Medicines</li>
              <li className="text-muted-foreground">Medical Devices</li>
              <li className="text-muted-foreground">Laboratory Equipment</li>
              <li className="text-muted-foreground">Consumables</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Addis Ababa, Ethiopia</li>
              <li>Phone: +251 11 XXX XXXX</li>
              <li>Email: info@medavailtrading.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Medavail Trading PLC. All rights
            reserved. Licensed by EFDA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
