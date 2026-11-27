import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Projects Completed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "20+", label: "Team Members" },
    { number: "16+", label: "Years of Experience" },
  ];

  return (
    <section className="py-12 bg-brand-lightblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-2">{stat.number}</h3>
              <p className="text-brand-navy font-semibold text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;