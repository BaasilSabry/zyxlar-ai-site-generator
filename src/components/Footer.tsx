import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold mb-4 block">
              ZYXLAR
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              From Vision to Reality. Building the future through design, technology, and innovation.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="hover:bg-primary-foreground/10 transition-micro">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-primary-foreground/10 transition-micro">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-micro text-sm">
                Home
              </Link>
              <Link to="/#story" className="block text-primary-foreground/80 hover:text-primary-foreground transition-micro text-sm">
                Our Story
              </Link>
              <Link to="/web" className="block text-primary-foreground/80 hover:text-primary-foreground transition-micro text-sm">
                Web Development
              </Link>
              <Link to="/clothing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-micro text-sm red-underline">
                Clothing (Coming Soon)
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-micro text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p className="text-sm">hello@ZYXLAR.com</p>
              <p className="text-sm">Ready to build something amazing?</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 ZYXLAR. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-micro">
              Privacy Policy
            </button>
            <button className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-micro">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;