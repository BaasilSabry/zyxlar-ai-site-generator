import NewHero from "@/components/NewHero";
import WhatWeDo from "@/components/WhatWeDo";
import OurStory from "@/components/OurStory";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <NewHero />
      
      {/* What We Do Section */}
      <WhatWeDo />
      
      {/* Our Story Section */}
      <OurStory />
      
      {/* Contact Preview Section */}
      <ContactPreview />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
