import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-[120px] md:pt-[140px] h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1541888076898-830388866a1a?q=80&w=2070">
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-navy/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Saviour of Mother Earth</h4>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Effective Water <br /> Treatment Solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto mb-10">
            A trusted name in the industry with its remarkable presence in Water & Wastewater Treatment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg">
              Get a Free Quote
            </a>
            <a href="#products" className="bg-white text-brand-navy hover:bg-slate-100 px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg">
              Our Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;