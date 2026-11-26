import { motion } from 'framer-motion';

const ClientMarquee = () => {
  const clients = ["Manufacturing Co.", "Pharma Labs", "Textile Mills", "Power Plant", "Food Processing", "Chemical Industries", "Hotel Chains", "Hospitals", "Apartments"];

  return (
    <section className="py-16 bg-brand-navy text-white overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-slate-300">Trusted by Leading Industries</h3>
      </div>
      <div className="relative w-full overflow-hidden flex">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="mx-8 text-xl md:text-2xl font-bold text-slate-600 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-default">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;