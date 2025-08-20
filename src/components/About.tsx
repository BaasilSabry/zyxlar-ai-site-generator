import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The Story of ZYXLAR</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            ZYXLAR was founded by <strong>Baasil Sabry</strong> and <strong>Ashan Himantha</strong>, 
            two friends with a shared vision to build a brand that merges technology, creativity, and lifestyle. 
            With ZYXLAR Web, we create modern websites and digital solutions. Soon, we will launch ZYXLAR Clothing, 
            a bold new fashion brand. Our mission is simple: to create, to inspire, and to lead the future with design and innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Baasil Sabry */}
            <div className="text-center p-6 rounded-lg hover-lift transition-smooth">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">B</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Baasil Sabry</h3>
              <p className="text-muted-foreground mb-4">Co-Founder</p>
              <Button variant="outline" size="sm" className="hover-scale transition-fast">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
            
            {/* Ashan Himantha */}
            <div className="text-center p-6 rounded-lg hover-lift transition-smooth">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ashan Himantha</h3>
              <p className="text-muted-foreground mb-4">Co-Founder</p>
              <Button variant="outline" size="sm" className="hover-scale transition-fast">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;