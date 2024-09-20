import Navbar from "../app/general/Navbar";
import Footer from "../app/general/Footer";
import Hero from "../app/components/Hero";
import Preview from "./components/Preview";
import Benefits from "./components/Benifits";
import HowItWorksSection from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <Preview />
      <Benefits />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
