import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface ClothingWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClothingWaitlistModal = ({ isOpen, onClose }: ClothingWaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "You're on the list — we'll be in touch soon.",
        description: "Welcome to the Zyxlar Clothing family!",
      });
      
      // Reset form and close modal after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", instagram: "", consent: false });
        onClose();
      }, 2000);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-accent/30 shadow-glass">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            Zyxlar Clothing — Be first to know.
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join our exclusive waitlist for early access to our launch collection.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Your name *
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
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
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-input border-accent/30"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="instagram" className="text-sm font-medium">
              Instagram (optional)
            </Label>
            <Input
              id="instagram"
              placeholder="@yourusername"
              value={formData.instagram}
              onChange={(e) => handleInputChange("instagram", e.target.value)}
              className="bg-input border-accent/30"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
              className="border-accent/50"
            />
            <Label
              htmlFor="consent"
              className="text-sm text-muted-foreground leading-5"
            >
              I agree to receive Zyxlar updates.
            </Label>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-accent/30 hover:bg-accent/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !formData.name || !formData.email || !formData.consent}
              className="flex-1 gradient-red text-red-foreground hover:shadow-red transition-smooth"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClothingWaitlistModal;