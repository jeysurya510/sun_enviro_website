import { motion } from 'framer-motion';
import { FaCheckCircle, FaWater, FaIndustry, FaLeaf, FaShieldAlt, FaCogs, FaFlask } from 'react-icons/fa';

const Products = () => {
  const productList = [
    {
      title: "Drinking RO Plant",
      icon: <FaWater />,
      desc: "Advanced Reverse Osmosis Technology for Safe and Healthy Drinking Water.",
      features: ["Removes Harmful Impurities (TDS, Heavy Metals, Bacteria)", "Crystal Clear & Great Taste", "Safe & Healthy Drinking Water", "Energy Efficient & Low Maintenance"],
      ideal: "Homes, Apartments, Offices, Schools, Hospitals"
    },
    {
      title: "Sewage Treatment Plant (STP)",
      icon: <FaLeaf />,
      desc: "Recycle for a Sustainable Future. Advanced biological treatment for domestic and commercial wastewater.",
      features: ["Primary & Secondary Clarifiers", "Biological Treatment (Activated Sludge)", "Tertiary Filtration & Disinfection", "Reused for Gardening, Toilet Flushing, Cooling Towers"],
      ideal: "Apartments, Commercial Complexes, Municipalities"
    },
    {
      title: "Effluent Treatment Plant (ETP)",
      icon: <FaIndustry />,
      desc: "Clean Effluent for a Healthier Tomorrow. Treating industrial wastewater for safe discharge.",
      features: ["Customized treatment for specific industrial effluents", "COD and BOD Reduction", "Chemical & Biological Treatment", "Ensures environmental compliance"],
      ideal: "Manufacturing, Textile, Chemical, Pharma Industries"
    },
    {
      title: "Ultra Filtration (UF) Plant",
      icon: <FaShieldAlt />,
      desc: "Ultrafiltration Technology for Cleaner & Safer Water.",
      features: ["Removes Suspended Solids & Turbidity", "High Purity Water Output", "Low Maintenance & Easy Operation", "Energy Efficient & Cost Effective"],
      ideal: "RO Feed Pre-Treatment, Industrial Process Water, Municipal Water"
    },
    {
      title: "DM with Mixed Bed Plant",
      icon: <FaCogs />,
      desc: "High-purity demineralized water for critical industrial processes.",
      features: ["Removes dissolved minerals", "High resistivity water output", "Regeneration systems", "Corrosion prevention"],
      ideal: "Power Plants, Pharmaceuticals, Electronics Manufacturing"
    },
    {
      title: "Chemical Supply & Fabrication",
      icon: <FaFlask />,
      desc: "Total water plant accessories, MS & FRO Vessels, and chemical supply.",
      features: ["Water Treatment Chemicals", "MS and FRO Vessel Fabrication", "Service and Revamping", "Erection & Commissioning"],
      ideal: "All Water Treatment Facilities"
    }
  ];

  return (
    <div className="bg-slate-50 pt-20">
      {/* Header */}
      <section className="bg-brand-blue text-white py-16 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Our Products & Services
        </motion.h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">Total Water & Wastewater Solutions</p>
      </section>

      {/* Product List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {productList.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-green text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  {product.icon}
                </div>
                <h2 className="text-2xl font-bold text-brand-blue mb-3">{product.title}</h2>
                <p className="text-slate-600 mb-6">{product.desc}</p>
                
                <h4 className="font-bold text-slate-800 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <FaCheckCircle className="text-brand-green mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-500 mb-2">IDEAL FOR:</p>
                <p className="text-brand-teal font-medium">{product.ideal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;