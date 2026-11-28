import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-lightblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Reliable & Sustainable Solutions</h3>
            <p className="text-slate-600 mb-4 text-lg">We combine advanced technology with sustainable engineering to deliver reliable and energy-efficient water solutions.</p>
            
            {/* Client specific industries line */}
            <div className="bg-white p-4 rounded-lg border-l-4 border-brand-orange mb-8">
              <p className="text-brand-navy font-bold text-sm md:text-base">
                Industries We Serve: <span className="text-brand-blue">Industrial Effluent / Sewage / Municipal Sewage / Hospital</span>
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "High Purity Water", desc: "Removes harmful impurities, TDS, and bacteria." },
                { title: "Energy Efficient", desc: "Low maintenance and cost-effective operations." },
                { title: "Reliable Performance", desc: "Long-term support and quick service response." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2 w-full">
            <div className="bg-brand-navy p-10 md:p-14 rounded-lg text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-blue opacity-20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to get started?</h3>
              <p className="text-slate-300 mb-8 relative z-10">Contact us today for a free consultation and quotation for your water treatment needs.</p>
              <a href="tel:7010471433" className="inline-block bg-brand-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition-colors relative z-10 shadow-lg">
                Call Now: 7010471433
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;