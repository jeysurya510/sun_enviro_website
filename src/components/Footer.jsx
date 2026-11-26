import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/#home' }, { name: 'About Us', path: '/#about' }, { name: 'Products', path: '/#products' }, { name: 'Why Us', path: '/#why-us' }, { name: 'Contact', path: '/#contact' }
  ];
  const solutions = ["Drinking RO Plant", "Sewage Treatment (STP)", "Effluent Treatment (ETP)", "Ultra Filtration (UF)", "DM Plant", "Fabrication"];

  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-aqua rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
              <h2 className="text-2xl font-extrabold text-white">SUN ENVIRO</h2>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">Your trusted partner in Water & Wastewater Solutions. We deliver advanced engineering for a sustainable tomorrow.</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition"><FaFacebook /></a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition"><FaLinkedin /></a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition"><FaInstagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => <li key={index}><a href={link.path} className="hover:text-brand-blue transition flex items-center gap-2"><span className="text-brand-blue text-xs">▹</span> {link.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              {solutions.map((solution, index) => <li key={index} className="hover:text-brand-blue transition flex items-center gap-2"><span className="text-brand-blue text-xs">▹</span> {solution}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-slate-400"><FaMapMarkerAlt className="mt-1 flex-shrink-0 text-brand-blue" /><span>No. 15/17, Nehru Street, Sholinganallur, Chennai - 600119.</span></li>
              <li className="flex gap-3 text-slate-400"><FaPhoneAlt className="mt-1 flex-shrink-0 text-brand-blue" /><div><a href="tel:7010471433" className="hover:text-white block">+91 70104 71433</a><a href="tel:9444415824" className="hover:text-white block">+91 94444 15824</a></div></li>
              <li className="flex gap-3 text-slate-400"><FaEnvelope className="mt-1 flex-shrink-0 text-brand-blue" /><a href="mailto:sunenviorse@gmail.com" className="hover:text-white break-all">sunenviorse@gmail.com</a></li>
            </ul>
            <a href="https://wa.me/917010471433" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition"><FaWhatsapp className="text-lg" /> Chat Now</a>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sun Enviro Refine Solutions & Engineering. All rights reserved.</p>
          <span>GSTIN: 33BBIPA5693K2ZG</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;