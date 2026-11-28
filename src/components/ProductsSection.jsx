import { motion } from 'framer-motion';
import { FaArrowRight, FaWater, FaIndustry, FaCheckCircle, FaCogs, FaLeaf, FaShieldAlt, FaRecycle, FaTrash, FaFlask, FaHospital, FaBuilding, FaTree } from 'react-icons/fa';

const ProductsSection = () => {
  const products = [
    { title: "STP - Sewage Water Treatment Plant", desc: "Efficient domestic & commercial wastewater treatment.", icon: <FaLeaf /> },
    { title: "ETP - Effluent Water Treatment Plant", desc: "Industrial wastewater treatment for safe discharge.", icon: <FaIndustry /> },
    { title: "Gray Water Treatment Plant", desc: "Recycling water from sinks and showers for reuse.", icon: <FaRecycle /> },
    { title: "WTP - Water Treatment Plant", desc: "Purifying raw water for industrial and domestic use.", icon: <FaWater /> },
    { title: "RO Reverse Osmosis Systems", desc: "High-pressure membrane filtration for pure water.", icon: <FaShieldAlt /> },
    { title: "DRO - Drinking Reverse Osmosis", desc: "Safe and healthy drinking water solutions.", icon: <FaFlask /> },
    { title: "UF Ultra Filter Systems", desc: "Removes suspended solids & turbidity.", icon: <FaShieldAlt /> },
    { title: "DM Plant & Evaporator", desc: "Demineralized water and natural/mechanical evaporators.", icon: <FaCogs /> },
    { title: "ZLS - Zero Liquid Discharge", desc: "100% wastewater recycling with zero discharge.", icon: <FaRecycle /> },
    { title: "SWM - Solid Waste Management", desc: "Comprehensive waste management systems.", icon: <FaTrash /> },
    { title: "CTE & CTO Services", desc: "Consent to Establish and Operate assistance.", icon: <FaCheckCircle /> },
    { title: "Automated Sustainable Equipment", desc: "Project designing, erection & commissioning.", icon: <FaTree /> },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Products & Services</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">Total Water & Wastewater Solutions for diverse industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0, 59, 115, 0.1)" }}
              className="bg-white p-6 rounded-lg border border-slate-200 group transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-lightblue text-brand-blue rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{product.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;