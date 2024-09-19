import Navbar from "../app/general/Navbar";
import Footer from "../app/general/Footer";
import Hero from "../app/components/Hero";
import PDFPreviewCards from "./components/pdf-preview-cards";
import BenefitsSection from "./components/BenifitsSection";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <PDFPreviewCards />
      <Footer />
    </div>
  );
};

export default Home;
