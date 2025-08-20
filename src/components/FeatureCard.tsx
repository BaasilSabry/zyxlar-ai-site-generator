import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Clock } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  isComingSoon?: boolean;
  onClick?: () => void;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  buttonText, 
  isComingSoon = false, 
  onClick,
  className = ""
}: FeatureCardProps) => {
  return (
    <Card className={`hover-lift transition-smooth shadow-card h-full ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-2 flex items-center gap-2">
          {title}
          {isComingSoon && <Clock className="w-5 h-5 text-red" />}
        </CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onClick}
          className={`w-full transition-smooth shadow-card hover-scale ${
            isComingSoon 
              ? 'gradient-red text-red-foreground hover:shadow-red' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          {buttonText}
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;