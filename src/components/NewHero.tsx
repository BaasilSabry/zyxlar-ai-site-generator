import { Button } from "@/components/ui/button";
import ClothingWaitlistModal from "./ClothingWaitlistModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewHero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative gradient-hero overflow-hidden">
      {/* Floating Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:40px_40px] animate-pulse"></div>
      </div>
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            ZYXLAR
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light mb-4">
            From Vision to Reality.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Founded by <span className="font-semibold">Baasil Sabry</span> & <span className="font-semibold">Ashan Himantha</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/web">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-lift hover-lift"
              >
                Explore Web Development
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setIsWaitlistOpen(true)}
              className="border-red text-red hover:bg-red/10 transition-smooth red-underline"
            >
              Join Clothing Waitlist
            </Button>
          </div>
        </div>
      </div>
      
      <ClothingWaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  );
};

export default NewHero;