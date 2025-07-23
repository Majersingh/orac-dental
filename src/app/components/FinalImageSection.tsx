import { motion } from "framer-motion";

export default function FinalImageSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-pink-50 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
        alt="Happy dental patients"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">Join Our Family of Happy Smiles!</h2>
        <p className="text-lg text-white/90 font-semibold drop-shadow">We care for your smile as much as you do.</p>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#d72660]/60 to-white/80 z-0" />
    </section>
  );
} 