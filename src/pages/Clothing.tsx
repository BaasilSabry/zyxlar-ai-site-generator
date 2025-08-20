import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Clothing = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) return;

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "You're on the list — we'll be in touch soon.",
        description: "Welcome to the ZYXLAR Clothing family!",
      });
      setFormData({ name: "", email: "", instagram: "", consent: false });
    }, 1000);
  };

  const mockups = [
    { name: "Essential Hoodie", type: "hoodie" },
    { name: "Logo Tee", type: "tee" },
    { name: "ZYXLAR Cap", type: "cap" },
    { name: "Minimal Tote", type: "tote" },
    { name: "Track Pants", type: "pants" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              ZYXLAR Clothing — Coming Soon.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Minimal, modern, built for everyday.
            </p>
            <div className="inline-block">
              <span className="text-sm text-muted-foreground bg-accent/10 px-4 py-2 rounded-full">
                Launching after final sampling & QA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-6 text-secondary-foreground">
              Be the first to wear ZYXLAR.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Join our exclusive waitlist for early access to our launch collection.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg p-8 shadow-glass">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-input border-accent/30"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-input border-accent/30"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-sm font-medium">
                  Instagram (optional)
                </Label>
                <Input
                  id="instagram"
                  placeholder="@yourusername"
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                  className="bg-input border-accent/30"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                  className="border-accent/50"
                />
                <Label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground leading-5"
                >
                  I agree to receive ZYXLAR updates.
                </Label>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading || !formData.name || !formData.email || !formData.consent}
                className="w-full gradient-red text-red-foreground hover:shadow-red transition-smooth hover-lift"
                size="lg"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Launch Note */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground-dark">Our Journey</h2>
            <p className="text-lg text-foreground-dark/70 leading-relaxed">
              We started planning in 2023. Launching after final sampling & QA. 
              Join the list for early drops and be part of the ZYXLAR story from day one.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clothing;