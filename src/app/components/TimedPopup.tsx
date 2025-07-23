"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimedPopupProps {
  onBook: () => void;
}

export default function TimedPopup({ onBook }: TimedPopupProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 6000); // 1 minute
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border-4 border-pink-200 relative">
            <button
              className="absolute top-2 right-2 text-[#d72660] text-2xl font-bold hover:text-pink-400"
              onClick={() => setShow(false)}
              aria-label="Close popup"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-2 text-[#d72660]">Get your premium dental cleaning and polishing session for just ₹499!</h3>
            <button
              onClick={() => { setShow(false); onBook(); }}
              className="mt-4 px-8 py-3 bg-[#d72660] text-white text-lg font-bold rounded-xl shadow hover:bg-pink-600 transition-all"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 