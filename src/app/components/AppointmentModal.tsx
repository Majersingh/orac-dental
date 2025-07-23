"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ open, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", message: "" });
      onClose();
    }, 2000);
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border-4 m-4 border-pink-200 relative"
          >
            <button
              className="absolute top-2 right-2 text-[#d72660] text-2xl font-bold hover:text-pink-400"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-3xl mb-4">🎉</div>
                <div className="text-xl font-bold text-[#d72660] mb-2">Thank you!</div>
                <div className="text-gray-700">Your appointment request has been received.</div>
              </div>
            ) : (
              <form
              name="appointment"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="appointment" />
              <input type="hidden" name="bot-field" />
            
              <h3 className="text-2xl font-bold mb-2 text-[#d72660] text-center">Book Appointment</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d72660]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d72660]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d72660]"
              />
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d72660]"
              />
              <button
                type="submit"
                className="mt-2 px-8 py-3 bg-[#d72660] text-white text-lg font-bold rounded-xl shadow hover:bg-pink-600 transition-all"
              >
                Submit
              </button>
            </form>            
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 