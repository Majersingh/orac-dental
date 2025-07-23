import { motion, scale } from "framer-motion";

const services = [
  {
    name: "Regular Check-up",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dental Implants",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kids Dentistry",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Braces & Aligners",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Follow Appointment",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tooth Pain",
    image: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tooth Cleaning",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emergency Care",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 bg-pink-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-[#d72660] text-center">How can we help you today?</h2>
        <p className="text-lg text-gray-700 mb-10 text-center">Select one option that best describes your need, then click ‘Continue’</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-xl shadow-lg h-44 flex items-end overflow-hidden group cursor-pointer border-2 border-pink-200"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-[#d72660]/60 transition-all duration-300" />
              <div className="relative z-10 w-full text-center p-4">
                <span className="text-white text-xl font-bold drop-shadow-lg">{service.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 