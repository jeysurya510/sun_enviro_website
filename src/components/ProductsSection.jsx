import { motion } from 'framer-motion';
import { FaArrowRight, FaWater, FaIndustry, FaCheckCircle, FaCogs, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const ProductsSection = () => {
  const products = [
    { title: "Drinking RO Plant", desc: "Advanced Reverse Osmosis for safe & healthy drinking water.", icon: <FaWater /> },
    { title: "Ultra Filtration", desc: "Removes suspended solids & turbidity for high purity output.", icon: <FaShieldAlt /> },
    { title: "Sewage Treatment", desc: "Efficient STP solutions for cleaner and greener communities.", icon: <FaLeaf /> },
    { title: "Effluent Treatment", desc: "Treating industrial wastewater for a cleaner tomorrow.", icon: <FaIndustry /> },
    { title: "DM Plant", desc: "High-purity demineralized water for industrial processes.", icon: <FaCogs /> },
    { title: "Fabrication", desc: "MS and FRO Vessel fabrication and custom engineering works.", icon: <FaCheckCircle /> },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Solutions We Deliver</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div key={index} whileHover={{ y: -10 }} className="bg-white rounded-lg overflow-hidden shadow-md border-t-4 border-brand-blue group">
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-lightblue text-brand-blue rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.desc}</p>
                <a href="#contact" className="text-brand-blue font-bold flex items-center gap-2 text-sm hover:gap-3 transition-all">
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;