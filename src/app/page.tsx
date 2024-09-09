import Navbar from "../app/general/Navbar";
import Footer from "../app/general/Footer";
import Hero from "../app/components/Hero";
import PDFPreviewCards from "./components/pdf-preview-cards";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <PDFPreviewCards />
      <Footer />
    </div>
  );
};

export default Home;
