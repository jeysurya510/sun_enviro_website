import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: "What is the difference between RO and UF plants?", answer: "RO removes dissolved salts and bacteria making it safe for drinking. UF removes suspended solids but not dissolved salts. UF is often used as pre-treatment for RO." },
    { question: "How much space is required for a Sewage Treatment Plant?", answer: "It depends on the capacity (KLD) and technology. We offer compact designs that fit in basements or terraces." },
    { question: "Do you provide Annual Maintenance Contracts?", answer: "Yes, we provide comprehensive AMC services including regular maintenance, chemical supply, and quick breakdown support." },
    { question: "How long does it take to install a new plant?", answer: "Standard RO/UF plants take 1-2 weeks. Larger STP/ETP projects depend on civil work, typically 3 to 6 weeks." }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                <span className="font-bold text-brand-navy text-lg">{faq.question}</span>
                <span className="text-brand-blue ml-4 flex-shrink-0">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;