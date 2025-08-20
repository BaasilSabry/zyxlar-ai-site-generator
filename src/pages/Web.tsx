import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Monitor, Palette, Search, Settings, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

const Web = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    goals: "",
    budget: "",
  });

  const services = [
    {
      icon: Monitor,
      title: "Websites & Web Apps",
      description: "High-performance, mobile-first builds.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean interfaces that convert.",
    },
    {
      icon: Shield,
      title: "Brand & Identity",
      description: "Logos, style guides, design systems.",
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Technical SEO, Core Web Vitals.",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing care, updates, and improvements.",
    },
  ];

  const process = [
    { step: "01", title: "Discover", description: "We understand your goals and audience." },
    { step: "02", title: "Design", description: "Create beautiful, user-focused interfaces." },
    { step: "03", title: "Build", description: "Develop with modern, scalable technology." },
    { step: "04", title: "Launch & Support", description: "Deploy and provide ongoing care." },
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most websites take 2-6 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What technology stack do you use?",
      answer: "We use modern technologies like React, TypeScript, Tailwind CSS, and various backend solutions depending on your needs.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages to keep your website updated, secure, and performing optimally.",
    },
    {
      question: "How many revisions are included?",
      answer: "We include up to 3 rounds of revisions in our standard packages. Additional revisions can be discussed if needed.",
    },
    {
      question: "Who owns the final website?",
      answer: "You own all the code, design, and content. We provide full ownership and can transfer everything to your preferred hosting.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received — thank you!",
      description: "We'll reply within 24-48h.",
    });
    setContactForm({ name: "", email: "", company: "", goals: "", budget: "" });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              We build websites that build your future.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Design, development, and digital solutions — fast, modern, and reliable.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lift hover-lift transition-smooth"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we handle every aspect of your digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.title} className="glass-card hover-lift transition-smooth" style={{ '--stagger': index } as any}>
                <CardHeader className="pb-4">
                  <service.icon className="w-8 h-8 text-accent-foreground mb-4" />
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">Featured Work</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card hover-lift transition-smooth">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-card-foreground">First Client Project (2025)</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Modern e-commerce platform with custom CMS
                </CardDescription>
              </CardHeader>
              <CardContent className="text-card-foreground">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">Client needed a fast, modern online store with inventory management.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">Built with React, headless CMS, and integrated payment processing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result</h4>
                    <p className="text-sm text-muted-foreground">40% increase in conversions, 60% faster loading times.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={item.step} className="text-center animate-stagger" style={{ '--stagger': index } as any}>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-6 text-secondary-foreground">Ready to Start?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Custom quotes available. Let's discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="gradient-red text-red-foreground hover:shadow-red transition-smooth hover-lift"
              >
                Start a Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToContact}
                className="border-accent hover:bg-accent/5 text-secondary-foreground"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-accent/30">
                  <AccordionTrigger className="font-heading text-left hover:text-accent-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Inline Contact */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-8 text-center text-secondary-foreground">Let's Work Together</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-input border-accent/30"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-input border-accent/30"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Your company"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                  className="bg-input border-accent/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals">Project Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="Tell us about your project..."
                  value={contactForm.goals}
                  onChange={(e) => setContactForm({...contactForm, goals: e.target.value})}
                  className="bg-input border-accent/30 min-h-[100px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={contactForm.budget} onValueChange={(value) => setContactForm({...contactForm, budget: value})}>
                  <SelectTrigger className="bg-input border-accent/30">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-plus">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lift hover-lift transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Web;