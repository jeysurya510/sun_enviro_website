import { motion } from 'framer-motion';
import { FaComments, FaDraftingCompass, FaTools, FaWrench } from 'react-icons/fa';

const ProcessSection = () => {
  const steps = [
    { icon: <FaComments />, title: "Consultation", desc: "Understanding your water quality and specific requirements." },
    { icon: <FaDraftingCompass />, title: "Custom Design", desc: "Engineering a tailored treatment plant for your capacity." },
    { icon: <FaTools />, title: "Installation", desc: "Professional erection and commissioning at your site." },
    { icon: <FaWrench />, title: "Maintenance", desc: "Ongoing support, AMC, and quick service response." }
  ];

  return (
    <section id="process" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Process</h3>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl"
              >
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm border-4 border-white relative group hover:bg-brand-blue hover:text-white transition-all">
                  {step.icon}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;