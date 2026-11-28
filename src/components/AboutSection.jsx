import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
            <img src="/about.png" alt="About Us" className="rounded-lg shadow-lg object-cover h-[400px] w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Mineral Water Plant Manufacturer</h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Sun Enviro Refine Solutions & Engineering, we believe that clean water is a fundamental right. We are a team of dedicated engineers and environmentalists committed to providing state-of-the-art water and wastewater treatment solutions.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              From advanced Reverse Osmosis (RO) plants for drinking water to complex Effluent Treatment Plants (ETP) for industries, we design, fabricate, and commission systems that are highly efficient, sustainable, and tailored to our clients' specific needs.
            </p>
            <Link to="/about" className="text-brand-blue font-bold hover:text-blue-700 flex items-center gap-2 group">
              Read More About Us <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;