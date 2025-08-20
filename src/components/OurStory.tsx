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
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Two founders, one vision — building experiences people love
            </p>
          </div>

          {/* Story Content */}
          <div className="mb-20">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
              <p className="text-2xl font-medium text-card-foreground mb-8 leading-relaxed">
                We are <span className="text-primary font-bold">Baasil Sabry</span> and <span className="text-primary font-bold">Ashan Himantha</span>, the founders of <span className="font-heading text-3xl text-primary">ZYXLAR</span>.
              </p>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We met in 2023 at university, bonded over creativity and technology, and started researching ideas together.
                </p>
                <p>
                  In 2023 the <span className="font-semibold text-card-foreground">ZYXLAR</span> plan was born. In 2025 we launched — and completed our first client website successfully.
                </p>
                <p>
                  Today, <span className="font-semibold text-card-foreground">ZYXLAR</span> is our platform to build experiences people love — on the web, and soon, in what you wear.
                </p>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-20">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">
              Meet the Founders
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Baasil */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border hover-lift transition-smooth">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary-foreground font-heading">B</span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-2 text-card-foreground">Baasil Sabry</h4>
                  <p className="text-muted-foreground mb-6 text-lg">Co-Founder & Visionary</p>
                  <Button variant="outline" className="w-full">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>

              {/* Ashan */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border hover-lift transition-smooth">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary-foreground font-heading">A</span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-2 text-card-foreground">Ashan Himantha</h4>
                  <p className="text-muted-foreground mb-6 text-lg">Co-Founder & Innovator</p>
                  <Button variant="outline" className="w-full">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">
              Our Journey
            </h3>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                      <span className="font-heading font-bold text-sm text-primary-foreground">
                        {milestone.year === "Next" ? "🚀" : milestone.year.slice(-2)}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-card rounded-xl p-6 shadow-md border">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-heading font-bold text-primary text-lg">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-card-foreground font-medium">{milestone.text}</p>
                      </div>
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