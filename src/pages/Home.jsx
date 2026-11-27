import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ProcessSection from '../components/ProcessSection';
import WhyUsSection from '../components/WhyUsSection';
import TestimonialSection from '../components/TestimonialSection';
import ClientMarquee from '../components/ClientMarquee';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="bg-white overflow-hidden font-sans">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialSection />
      <ClientMarquee />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;