import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-brand-navy overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue rounded-full blur-[120px] opacity-20 -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green rounded-full blur-[120px] opacity-10 -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
              <span className="text-slate-200 font-medium text-sm">Trusted Water Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Pure Water for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua to-brand-green">
                Better Tomorrow
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto lg:mx-0">
              Advanced Reverse Osmosis & Wastewater Treatment Solutions. We build sustainable engineering for a cleaner future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]">
                Get a Free Quote <FaArrowRight className="text-sm" />
              </a>
              <a href="#products" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                Explore Solutions
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541888076898-830388866a1a?q=80&w=2070" 
                alt="Water Plant" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
                    <FaCheck />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">100% Safe</p>
                    <p className="text-slate-300 text-xs">Drinking Water</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;