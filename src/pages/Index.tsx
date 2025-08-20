import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import About from "@/components/About";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleWebClick = () => {
    toast({
      title: "Zyxlar Web",
      description: "Redirecting to our web services division...",
    });
    // In a real app, you would redirect to web.zyxlar.com
  };

  const handleClothingClick = () => {
    toast({
      title: "Zyxlar Clothing",
      description: "Join our waitlist to be notified when we launch!",
    });
    // Scroll to email signup section
    document.querySelector('#email-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Feature Cards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Divisions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zyxlar operates across two innovative sectors, each driving excellence in their respective fields.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              title="Zyxlar Web"
              description="Professional websites and digital solutions that elevate your brand. From concept to launch, we create digital experiences that convert."
              buttonText="Explore Services"
              onClick={handleWebClick}
            />
            <FeatureCard
              title="Zyxlar Clothing"
              description="Bold fashion for the modern generation. Premium streetwear and lifestyle apparel designed for those who dare to stand out."
              buttonText="Join Waitlist"
              isComingSoon={true}
              onClick={handleClothingClick}
              className="border-red/20 hover:border-red/40"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <About />
      
      {/* Email Signup Section */}
      <div id="email-signup">
        <EmailSignup />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
