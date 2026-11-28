import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About Us', path: '/#about' },
    { name: 'Products', path: '/#products' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Contact Us', path: '/#contact' }
  ];

  const solutions = [
    "STP - Sewage Treatment Plant",
    "ETP - Effluent Treatment Plant",
    "Gray Water Treatment Plant",
    "WTP - Water Treatment Plant",
    "RO Reverse Osmosis Systems",
    "DRO - Drinking Reverse Osmosis",
    "UF Ultra Filter Systems",
    "DM Plant & Evaporator",
    "ZLS - Zero Liquid Discharge",
    "SWM - Solid Waste Management",
    "CTE & CTO Services",
    "Automated Sustainable Equipment"
  ];

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white text-brand-navy rounded flex items-center justify-center font-bold text-xl">S</div>
              <h2 className="text-2xl font-bold text-white">SUN ENVIRO</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner in Water & Wastewater Solutions. Delivering advanced engineering for a sustainable tomorrow.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-brand-orange transition"><FaFacebook /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-brand-orange transition"><FaTwitter /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-brand-orange transition"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="hover:text-brand-orange transition">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Our Solutions</h3>
            <ul className="space-y-2 text-sm">
              {solutions.map((solution, index) => (
                <li key={index} className="hover:text-brand-orange transition">{solution}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-brand-orange mt-1 flex-shrink-0" />
                <span>No. 15/17, Nehru Street, Sholinganallur, Chennai - 600119.</span>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p>+91 70104 71433</p>
                  <p>+91 94444 15824</p>
                </div>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-brand-orange mt-1 flex-shrink-0" />
                <a href="mailto:sunenviorse@gmail.com" className="break-all hover:text-white transition">sunenviorse@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-xs">
          <p>&copy; {currentYear} Sun Enviro Refine Solutions &amp; Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;