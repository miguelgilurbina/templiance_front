import Navbar from "../app/general/Navbar";
import Footer from "../app/general/Footer";
import Hero from "../app/components/Hero";
import PDFPreviewCards from "./components/pdf-preview-cards";
import BenefitsSection from "./components/BenifitsSection";
import HowItWorksSection from "./components/HowItWorks";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <HowItWorksSection />
      <PDFPreviewCards />
      <Footer />
    </div>
  );
};

export default Home;
