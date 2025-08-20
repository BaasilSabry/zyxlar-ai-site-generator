import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const OurStory = () => {
  const milestones = [
    { year: "2023", text: "Met at university & started research" },
    { year: "2023–2024", text: "Shaped the ZYXLAR vision" },
    { year: "2025", text: "ZYXLAR launched; first client project completed (happy client)" },
    { year: "Next", text: "ZYXLAR Clothing launch (waitlist open)" },
  ];

  return (
    <section id="story" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-secondary-foreground bg-gradient-to-r from-secondary-foreground to-secondary-foreground/70 bg-clip-text text-transparent">
              Built by two founders with one vision.
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="prose prose-lg text-secondary-foreground max-w-none">
                <p className="text-xl leading-relaxed mb-8 font-medium">
                  We are <strong className="text-primary">Baasil Sabry</strong> and <strong className="text-primary">Ashan Himantha</strong>, the founders of <strong className="font-heading text-2xl">ZYXLAR</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  We met in 2023 at university, bonded over creativity and technology, and started researching ideas together.
                </p>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  In 2023 the <strong>ZYXLAR</strong> plan was born. In 2025 we launched — and completed our first client website successfully.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  Today, <strong>ZYXLAR</strong> is our platform to build experiences people love — on the web, and soon, in what you wear.
                </p>
              </div>
            </div>
            
            {/* Founders Cards */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-8">Meet the Founders</h3>
              
              <div className="space-y-4">
                <div className="p-8 glass-card hover-lift transition-smooth">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground font-heading">B</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-xl font-semibold mb-1 text-card-foreground">Baasil Sabry</h4>
                      <p className="text-muted-foreground mb-3">Co-Founder & Visionary</p>
                      <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10 transition-micro">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 glass-card hover-lift transition-smooth">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground font-heading">A</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-xl font-semibold mb-1 text-card-foreground">Ashan Himantha</h4>
                      <p className="text-muted-foreground mb-3">Co-Founder & Innovator</p>
                      <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10 transition-micro">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Milestones Timeline */}
          <div className="mt-20">
            <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-8 text-center">Our Journey</h3>
            <div className="max-w-3xl mx-auto space-y-6">
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
    </section>
  );
};

export default OurStory;