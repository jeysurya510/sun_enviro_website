import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Products', path: '/#products' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Contact', path: '/#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen || location.pathname !== '/' 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="/" onClick={(e) => handleNavClick(e, '/#home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-aqua rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform">
              S
            </div>
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled || isOpen || location.pathname !== '/' ? 'text-brand-navy' : 'text-white'
            }`}>
              SUN ENVIRO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.path} 
                onClick={(e) => handleNavClick(e, item.path)}
                className={`font-semibold relative group transition-colors duration-300 ${
                  scrolled || location.pathname !== '/' 
                    ? 'text-slate-700 hover:text-brand-blue' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <a 
              href="tel:7010471433" 
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden text-2xl transition-colors duration-300 ${
              scrolled || isOpen || location.pathname !== '/' ? 'text-brand-navy' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-xl overflow-hidden border-t border-slate-100"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.path} 
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-lg font-bold text-slate-800 hover:text-brand-blue"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="tel:7010471433" 
                onClick={() => setIsOpen(false)}
                className="bg-brand-blue text-white text-center px-6 py-3 rounded-full font-bold shadow-lg"
              >
                Call: 7010471433
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;