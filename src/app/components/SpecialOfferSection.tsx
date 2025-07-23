import { motion } from "framer-motion";

interface SpecialOfferSectionProps {
  onBook: () => void;
}

export default function SpecialOfferSection({ onBook }: SpecialOfferSectionProps) {
  return (
    <section className="py-20 bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-[#d72660]/90 rounded-2xl shadow-lg p-10 text-center text-white border-4 border-pink-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">LOOKING FOR A SMILE WHICH CAN LAST LONG???</h2>
          <p className="text-lg mb-6 font-semibold">GET YOUR ROUTINE DENTAL CHECKUP FOR FREE.</p>
          <button
            onClick={onBook}
            className="mt-2 px-8 py-3 bg-white text-[#d72660] text-lg font-bold rounded-xl shadow hover:bg-pink-100 border-2 border-white transition-all"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </motion.div>
    </section>
  );
} 