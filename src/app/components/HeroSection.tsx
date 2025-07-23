"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onBook: () => void;
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Smiling dental patient 1",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Smiling dental patient 2",
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    alt: "Dental clinic team",
  },
];

export default function HeroSection({ onBook }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pink-50 overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showStatus={true}
        showArrows={false}
        showIndicators={true}
        swipeable={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full h-screen object-cover object-center opacity-90"
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </Carousel>
      <div className="absolute inset-0 bg-gradient-to-b from-[#d72660]/60 to-white/10 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white drop-shadow-lg mb-6">
          LOOKING FOR QUALITY DENTAL TREATMENT AT AN AFFORDABLE PRICE???<br />HERE YOU GO
        </h1>
        <motion.button
          onClick={onBook}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="px-6 py-3 mt-8 rounded-lg bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700"
        >
          Book Appointment Now
        </motion.button>
      </div>
    </section>
  );
} 