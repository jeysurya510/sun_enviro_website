import { motion } from 'framer-motion';
import { FaArrowRight, FaWater, FaIndustry, FaCheckCircle, FaCogs, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const ProductsSection = () => {
  const products = [
    { title: "Drinking RO Plant", desc: "Advanced Reverse Osmosis for crystal clear & safe drinking water.", icon: <FaWater /> },
    { title: "Ultra Filtration", desc: "Removes suspended solids & turbidity for high purity output.", icon: <FaShieldAlt /> },
    { title: "Sewage Treatment Plant", desc: "Efficient STP solutions for cleaner and greener communities.", icon: <FaLeaf /> },
    { title: "Effluent Treatment Plant", desc: "Treating industrial wastewater for a cleaner tomorrow.", icon: <FaIndustry /> },
    { title: "DM with Mixed Bed Plant", desc: "High-purity demineralized water for industrial processes.", icon: <FaCogs /> },
    { title: "Fabrication & Vessels", desc: "MS and FRO Vessel fabrication and custom engineering works.", icon: <FaCheckCircle /> },
  ];

  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Our Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Products & Services</h3>
          <div className="w-16 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(15,23,42,0.08)" }}
              className="bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {product.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{product.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{product.desc}</p>
              <div className="mt-6 flex items-center text-brand-blue font-bold text-sm group-hover:gap-2 transition-all">
                Learn More <FaArrowRight className="ml-2 text-xs" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;