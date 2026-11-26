import { motion } from 'framer-motion';
import { FaCheckCircle, FaGlobe, FaLeaf, FaTint } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070')] bg-cover bg-center"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Sun Enviro Refine</h1>
          <p className="text-xl text-blue-100">Your Trusted Partner in Water & Environmental Solutions.</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888076898-830388866a1a?q=80&w=2070" 
              alt="Water Plant" 
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Building a Greener Tomorrow</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Sun Enviro Refine Solutions & Engineering, we believe that clean water is a fundamental right. We are a team of dedicated engineers and environmentalists committed to providing state-of-the-art water and wastewater treatment solutions.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              From advanced Reverse Osmosis (RO) plants for drinking water to complex Effluent Treatment Plants (ETP) for industries, we design, fabricate, and commission systems that are highly efficient, sustainable, and tailored to our clients' specific needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brand-green text-2xl" />
                <span className="font-bold text-slate-800">Expert Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brand-green text-2xl" />
                <span className="font-bold text-slate-800">Sustainable Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brand-green text-2xl" />
                <span className="font-bold text-slate-800">End-to-End Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <FaTint />, title: "Purity", desc: "Delivering high-purity water through advanced filtration technology." },
              { icon: <FaLeaf />, title: "Sustainability", desc: "Recycling and treating wastewater to protect our environment." },
              { icon: <FaGlobe />, title: "Global Standards", desc: "Following international quality standards in all our engineering." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-10 rounded-3xl shadow-md border border-slate-100"
              >
                <div className="w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;