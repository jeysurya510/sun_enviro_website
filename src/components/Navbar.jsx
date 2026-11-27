import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About Us', path: '/#about' },
    { name: 'Products', path: '/#products' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Contact', path: '/#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    const [route, hash] = path.split('#');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top Info Bar (Netsol Style) */}
      <div className="bg-brand-navy text-white py-2 px-4 sm:px-6 lg:px-8 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><FaPhoneAlt /> +91 70104 71433 / 94444 15824</span>
            <span className="flex items-center gap-2"><FaEnvelope /> sunenviorse@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-orange transition"><FaFacebook /></a>
            <a href="#" className="hover:text-brand-orange transition"><FaTwitter /></a>
            <a href="#" className="hover:text-brand-orange transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="/" onClick={(e) => handleNavClick(e, '/#home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-2xl font-extrabold text-brand-navy tracking-tight">SUN ENVIRO</span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <a key={item.name} href={item.path} onClick={(e) => handleNavClick(e, item.path)} className="font-semibold text-slate-700 hover:text-brand-blue transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="bg-brand-orange text-white px-6 py-2 rounded font-bold hover:bg-orange-600 transition shadow-sm">
              Get a Quote
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-brand-navy">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((item) => (
                <a key={item.name} href={item.path} onClick={(e) => handleNavClick(e, item.path)} className="text-slate-800 font-semibold border-b border-slate-50 pb-2">
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;