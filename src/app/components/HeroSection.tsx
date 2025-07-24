"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onBook: () => void;
}

const dentalImages = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern dental clinic interior",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80",
    alt: "Dental equipment and technology",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    alt: "Perfect smile close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    alt: "Advanced dental procedure",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981960afb4?auto=format&fit=crop&w=1200&q=80",
    alt: "Dental consultation",
  }
];


const FloatingParticles = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) return null; // prevents SSR issues

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};


export default function HeroSection({ onBook }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dentalImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={dentalImages[currentImage].src}
              alt={dentalImages[currentImage].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Futuristic Overlay with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/30 to-pink-500/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-purple-900/40" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" 
             style={{
               backgroundImage: `
                 linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%),
                 linear-gradient(0deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* 3D Holographic Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-30">
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 15, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full bg-gradient-to-br from-cyan-400/40 to-purple-600/40 rounded-lg backdrop-blur-sm border border-cyan-400/30"
          style={{
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(147, 51, 234, 0.2)'
          }}
        />
      </div>

      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-40">
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-to-tr from-pink-400/40 to-cyan-600/40 rounded-full backdrop-blur-sm border border-pink-400/30"
          style={{
            boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Glowing Background for Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          
          <motion.h1 
            className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 leading-tight"
            style={{
              textShadow: '0 0 50px rgba(6, 182, 212, 0.5), 0 0 100px rgba(147, 51, 234, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.4))'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            FUTURE OF
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DENTAL CARE
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Affordable • Advanced • Amazing
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative group"
        >
          {/* Button Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
          
          <motion.button
            onClick={onBook}
            whileTap={{ scale: 0.95 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(6, 182, 212, 0.6), 0 0 80px rgba(147, 51, 234, 0.4)'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="relative px-3 py-3 text-xs md:px-12 md:py-6 md:text-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl border border-cyan-400/30 backdrop-blur-sm overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.8), rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.8))',
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Button Animation Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                ⚡
              </motion.span>
              BOOK APPOINTMENT NOW
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl"
              >
                🦷
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {['AI-Powered Diagnostics', '3D Imaging', 'Painless Procedures', 'Same-Day Results'].map((feature, index) => (
            <motion.div
              key={feature}
              whileHover={{ scale: 1.05, y: -5 }}
              className="md:px-6 md:py-3 px-2 py-2 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm text-white font-semibold"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
              }}
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-transparent rounded-br-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="w-full h-full bg-gradient-to-tl from-pink-500/30 to-transparent rounded-tl-full" />
      </div>
    </section>
  );
}