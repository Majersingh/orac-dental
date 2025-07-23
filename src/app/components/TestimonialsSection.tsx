"use client";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Patient 1",
    text: "Amazing experience! The staff was so friendly and professional. Highly recommend ORAC Dental Clinic!",
  },
  {
    name: "Patient 2",
    text: "I was nervous about my treatment, but the team made me feel at ease. My smile has never looked better!",
  },
  {
    name: "Patient 3",
    text: "Affordable and top-quality care. I will definitely come back for my next checkup!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-10 bg-white px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#d72660]">Patient Testimonials</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="rounded-xl shadow-lg bg-pink-50"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 min-h-[180px] flex flex-col items-center justify-center"
            >
              <p className="text-lg text-gray-700 mb-4">"{t.text}"</p>
              <div className="font-bold text-[#d72660]">- {t.name}</div>
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
} 