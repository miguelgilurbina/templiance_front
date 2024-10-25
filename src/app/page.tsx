import Hero from "./components/Hero";
import Preview from "./components/Preview";
import Benefits from "./components/Benifits";
import HowItWorksSection from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorksSection />
      <Preview />
      <Benefits />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
