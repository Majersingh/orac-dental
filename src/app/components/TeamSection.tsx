import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="py-20 bg-pink-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#d72660] text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow p-8 flex flex-col items-center border-2 border-pink-200"
            >
              <div className="w-24 h-24 bg-pink-100 rounded-full mb-4 flex items-center justify-center text-3xl text-[#d72660] font-bold">
                T{i}
              </div>
              <div className="text-lg font-semibold text-[#d72660] mb-1">Dr. Name {i}</div>
              <div className="text-gray-500">Specialist (Placeholder)</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 