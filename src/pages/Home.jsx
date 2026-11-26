import HeroSection from '../components/HeroSection';       // S capital
import AboutSection from '../components/AboutSection';     // A capital
import ProductsSection from '../components/ProductsSection'; // P capital
import ProcessSection from '../components/ProcessSection'; // P capital
import WhyUsSection from '../components/WhyUsSection';     // W capital
import ClientMarquee from '../components/ClientMarquee';   // C capital
import FAQSection from '../components/FAQSection';         // FAQ capital
import ContactSection from '../components/ContactSection'; // C capital

const Home = () => {
  return (
    <div className="bg-white overflow-hidden font-sans">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <WhyUsSection />
      <ClientMarquee />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;