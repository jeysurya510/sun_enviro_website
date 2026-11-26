import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-slate-50 pt-20">
      {/* Header */}
      <section className="bg-brand-blue text-white py-16 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-xl text-blue-100">Get a Free Consultation & Quotation</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-blue mb-8">Get In Touch</h2>
            <p className="text-slate-600 mb-10 text-lg">Ready to discuss your water treatment needs? Our engineering team is here to help you find the best solution.</p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl shadow-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    No. 15/17, Nehru Street,<br />
                    Sholinganallur, Chennai - 600119,<br />
                    Tamil Nadu, India.
                  </p>
                  <p className="text-sm text-slate-400 mt-2">GSTIN: 33BBIPA5693K2ZG</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl shadow-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Call Us</h4>
                  <a href="tel:7010471433" className="block text-slate-600 hover:text-brand-teal transition">+91 70104 71433</a>
                  <a href="tel:9444415824" className="block text-slate-600 hover:text-brand-teal transition">+91 94444 15824</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl shadow-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Email Us</h4>
                  <a href="mailto:sunenviorse@gmail.com" className="text-slate-600 hover:text-brand-teal transition break-all">sunenviorse@gmail.com</a>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/917010471433" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-12 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Send an Enquiry</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal bg-slate-50" placeholder="Your Name" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal bg-slate-50" placeholder="Your Phone" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal bg-slate-50" placeholder="Your Email" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select Service</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal bg-slate-50 text-slate-700">
                  <option>Drinking RO Plant</option>
                  <option>Sewage Treatment Plant (STP)</option>
                  <option>Effluent Treatment Plant (ETP)</option>
                  <option>Ultra Filtration (UF) Plant</option>
                  <option>DM Plant</option>
                  <option>Other Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal bg-slate-50" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-teal transition-colors shadow-lg">
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Map Embed (Chennai Sholinganallur) */}
      <section className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.76478571705!2d80.2209596!3d12.9010779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525da6df9d2825%3A0x6e0d0e0b5d5c5f0!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sun Enviro Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;