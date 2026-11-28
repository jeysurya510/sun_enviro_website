import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Reach Out</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Get In Touch</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-light p-8 md:p-10 rounded-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-lightblue text-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"><FaMapMarkerAlt /></div>
                <div><h4 className="font-bold text-brand-navy">Location</h4><p className="text-slate-600">No. 15/17, Nehru Street, Sholinganallur, Chennai - 600119.</p></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-lightblue text-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"><FaPhoneAlt /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Call Us</h4>
                  <a href="tel:7010471433" className="block text-slate-600 hover:text-brand-blue transition">+91 70104 71433</a>
                  <a href="tel:9444415824" className="block text-slate-600 hover:text-brand-blue transition">+91 94444 15824</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-lightblue text-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"><FaEnvelope /></div>
                <div><h4 className="font-bold text-brand-navy">Email Us</h4><a href="mailto:sunenviorse@gmail.com" className="text-slate-600 hover:text-brand-blue transition break-all">sunenviorse@gmail.com</a></div>
              </div>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Send an Enquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label><input type="text" className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-slate-50" placeholder="Your Name" /></div>
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label><input type="tel" className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-slate-50" placeholder="Your Phone" /></div>
              </div>
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label><input type="email" className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-slate-50" placeholder="Your Email" /></div>
              
              {/* Updated Service Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select Service</label>
                <select className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-slate-50 text-slate-700">
                  <option value="">-- Select a Service --</option>
                  <option>STP - Sewage Water Treatment Plant</option>
                  <option>ETP - Effluent Water Treatment Plant</option>
                  <option>Gray Water Treatment Plant</option>
                  <option>WTP - Water Treatment Plant</option>
                  <option>RO Reverse Osmosis Systems</option>
                  <option>DRO - Drinking Reverse Osmosis</option>
                  <option>UF Ultra Filter Systems</option>
                  <option>DM Plant & Evaporator</option>
                  <option>ZLS - Zero Liquid Discharge</option>
                  <option>SWM - Solid Waste Management</option>
                  <option>CTE & CTO Services</option>
                  <option>Automated Sustainable Equipment</option>
                </select>
              </div>

              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Message</label><textarea rows="3" className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-slate-50" placeholder="Your requirements..."></textarea></div>
              <button type="button" className="w-full bg-brand-blue text-white py-4 rounded font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg">Submit Enquiry</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;