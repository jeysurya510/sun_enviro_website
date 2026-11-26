import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-around p-3 md:hidden z-50 border-t border-gray-200">
      <a href="tel:7010471433" className="flex flex-col items-center text-brand-blue text-xs font-bold">
        <FaPhoneAlt className="text-xl mb-1 text-blue-600" /> Call
      </a>
      <a href="https://wa.me/917010471433" target="_blank" rel="noreferrer" className="flex flex-col items-center text-green-600 text-xs font-bold">
        <FaWhatsapp className="text-xl mb-1" /> WhatsApp
      </a>
      <a href="#enquiry" className="flex flex-col items-center text-brand-teal text-xs font-bold">
        <FaEnvelope className="text-xl mb-1" /> Enquiry
      </a>
    </div>
  );
};

export default MobileBottomBar;