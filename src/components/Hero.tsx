import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            ZYXLAR
          </h1>
          <p className="text-2xl md:text-4xl text-primary-foreground/90 mb-4 font-light">
            From Web to Wear
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            A vision by <span className="font-semibold">Baasil Sabry</span> & <span className="font-semibold">Ashan Himantha</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth shadow-elegant hover-lift"
            >
              Explore ZYXLAR Web
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              Join Clothing Waitlist
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;