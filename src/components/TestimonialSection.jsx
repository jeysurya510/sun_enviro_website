import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
  const testimonials = [
    { quote: "Sun Enviro successfully installed a high-performance Sewage Treatment Plant (STP) at our campus. The system is highly reliable and ensures compliance with environmental norms.", name: "Ratn Mittal", role: "Executive Director, Prateek Group" },
    { quote: "The Water Treatment Plant (WTP) installed by Sun Enviro provides a consistent supply of high-quality treated water for our industrial processes. Very satisfied with their service.", name: "Manas Sahu", role: "Manager, Jubilant Biosys Limited" },
    { quote: "Sun Enviro has supplied the first plant for our Hospital. The plant is working fine thus we have placed an order for another plant for our expansion project.", name: "R. B. Singh", role: "GM, Kailash Hospital" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-brand-light p-8 rounded-lg border border-slate-200 relative">
              <FaQuoteLeft className="text-4xl text-brand-blue/20 absolute top-6 left-6" />
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;