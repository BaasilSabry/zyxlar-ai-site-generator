import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ClothingWaitlistModal from "./ClothingWaitlistModal";
import { useState } from "react";

const WhatWeDo = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ZYXLAR operates across two innovative sectors, each driving excellence in their respective fields.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Web Development Card */}
          <Card className="glass-card hover-lift transition-smooth h-full">
            <CardHeader>
              <CardTitle className="font-heading text-2xl font-bold mb-2">
                Web Development
              </CardTitle>
              <CardDescription className="text-base">
                Modern websites & digital solutions that grow brands.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1">
              <p className="text-muted-foreground mb-6">
                High-performance, mobile-first builds designed to convert visitors into customers. 
                From concept to launch, we create digital experiences that matter.
              </p>
              <Link to="/web" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-lift hover-lift">
                  Explore Web Development
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Clothing Card */}
          <Card className="glass-card hover-lift transition-smooth h-full border-red/10 hover:border-red/20">
            <CardHeader>
              <CardTitle className="font-heading text-2xl font-bold mb-2 flex items-center gap-2">
                Clothing — Coming Soon
                <span className="text-xs bg-red/10 text-red px-2 py-1 rounded-full">NEW</span>
              </CardTitle>
              <CardDescription className="text-base">
                ZYXLAR Clothing — bold minimal streetwear.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1">
              <p className="text-muted-foreground mb-6">
                Premium streetwear and lifestyle apparel designed for those who dare to stand out. 
                Minimal designs, maximum impact.
              </p>
              <Button 
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full gradient-red text-red-foreground hover:shadow-red transition-smooth hover-lift red-underline"
              >
                Join Waitlist
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ClothingWaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  );
};

export default WhatWeDo;