import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#d72660] text-white py-8 px-4 mt-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-center md:text-left">
          <div className="font-bold text-xl mb-1">ORAC Dental Clinic</div>
          <div className="text-sm">123 Smile Street, Happy Town, India</div>
          <div className="text-sm">Phone: +91 12345 67890</div>
          <div className="text-sm">Email: info@oracdental.com</div>
        </div>
        <nav className="flex gap-6 text-sm mt-4 md:mt-0">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#team" className="hover:underline">Our Team</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="text-xs mt-4 md:mt-0">&copy; {new Date().getFullYear()} ORAC Dental Clinic. All rights reserved.</div>
      </motion.div>
    </footer>
  );
} 