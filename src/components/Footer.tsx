import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zyxlar</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              From Web to Wear. Building the future through design, technology, and innovation.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="p-0 h-auto font-normal text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent">
                About Us
              </Button>
              <Button variant="ghost" className="p-0 h-auto font-normal text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent">
                Zyxlar Web
              </Button>
              <Button variant="ghost" className="p-0 h-auto font-normal text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent">
                Zyxlar Clothing
              </Button>
              <Button variant="ghost" className="p-0 h-auto font-normal text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent">
                Contact
              </Button>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@zyxlar.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Zyxlar. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Button variant="ghost" className="p-0 h-auto text-sm text-primary-foreground/60 hover:text-primary-foreground hover:bg-transparent">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-sm text-primary-foreground/60 hover:text-primary-foreground hover:bg-transparent">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;