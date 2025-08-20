import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const OurStory = () => {
  const milestones = [
    { year: "2023", text: "Met at university & started research" },
    { year: "2023–2024", text: "Shaped the Zyxlar vision" },
    { year: "2025", text: "Zyxlar launched; first client project completed (happy client)" },
    { year: "Next", text: "Zyxlar Clothing launch (waitlist open)" },
  ];

  return (
    <section id="story" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
              Built by two founders with one vision.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-secondary-foreground max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  We are <strong>Baasil Sabry</strong> and <strong>Ashan Himantha</strong>, the founders of Zyxlar.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We met in 2023 at university, bonded over creativity and technology, and started researching ideas together.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  In 2023 the Zyxlar plan was born. In 2025 we launched — and completed our first client website successfully.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Zyxlar is our platform to build experiences people love — on the web, and soon, in what you wear.
                </p>
              </div>
              
              {/* Founders */}
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 glass-card hover-lift transition-smooth">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground font-heading">B</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-card-foreground">Baasil Sabry</h3>
                  <p className="text-muted-foreground mb-4">Co-Founder</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent/30 hover:bg-accent/5 transition-micro"
                    onClick={() => window.open('https://lk.linkedin.com/in/baasil-sabry-72a7a92ba', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
                
                <div className="text-center p-6 glass-card hover-lift transition-smooth">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground font-heading">A</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-card-foreground">Ashan Himantha</h3>
                  <p className="text-muted-foreground mb-4">Co-Founder</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent/30 hover:bg-accent/5 transition-micro"
                    onClick={() => window.open('https://lk.linkedin.com/in/ashanhimantha', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Milestones Timeline */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-8">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year} 
                    className="flex items-start gap-4 animate-stagger"
                    style={{ '--stagger': index } as any}
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="font-heading font-bold text-sm text-accent-foreground bg-accent/10 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-secondary-foreground">{milestone.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;