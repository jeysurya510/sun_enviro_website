import HeroSection from '../components/Herosection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ProcessSection from '../components/ProcessSection'; // Add pannu
import WhyUsSection from '../components/WhyUsSection';
import ClientMarquee from '../components/ClientMarquee'; // Add pannu
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div className="bg-white overflow-hidden font-sans">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />    {/* New Section */}
      <WhyUsSection />
      <ClientMarquee />   
      <FAQSection />  {/* New Section */}
      <ContactSection />
    </div>
  );
};

export default Home;