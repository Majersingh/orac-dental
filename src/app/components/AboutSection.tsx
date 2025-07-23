import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white px-4 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Image for desktop, top for mobile */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Dental clinic team"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </motion.div>
      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 max-w-xl text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#d72660] leading-tight">Experience the Art of Smiling with <span className="text-[#1e293b]">ORAC Dental Clinic!</span></h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Our mission is to provide top-notch dental care that combines cutting-edge technology with personalized attention. Our expert team is dedicated to helping you achieve optimal oral health and a confident smile.
        </p>
        <div className="mx-auto md:mx-0 max-w-md bg-pink-50 rounded-xl p-6 border-l-4 border-[#d72660] shadow mb-4">
          <h3 className="font-bold text-[#d72660] mb-2 text-lg">Our Core Values</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base">
            <li><b>ACCESSIBLE</b>: Care for all, regardless of background or financial situation</li>
            <li><b>AFFORDABLE</b>: Quality care at prices that won't break the bank</li>
            <li><b>ACCOUNTABLE</b>: Transparent, honest, and responsible service that puts your needs first</li>
          </ul>
        </div>
        <p className="mt-6 text-[#d72660] font-bold text-lg">Schedule your appointment now and discover a healthier, happier you!</p>
      </motion.div>
    </section>
  );
} 