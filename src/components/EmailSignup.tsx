import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Check } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: "Welcome to the Zyxlar family!",
        description: "You'll be the first to know about Zyxlar Clothing launch.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">You're In!</h2>
            <p className="text-lg text-muted-foreground">
              Thank you for joining the Zyxlar Clothing waitlist. Get ready for something extraordinary.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center animate-slide-up">
          <Mail className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be the first to wear Zyxlar
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our exclusive waitlist and get early access to Zyxlar Clothing's launch collection.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 shadow-card"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="gradient-red text-red-foreground hover:shadow-red transition-smooth hover-scale"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, just updates on our fashion journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;