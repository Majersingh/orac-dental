"use client";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Sarah Mitchell",
    text: "The future of dental care is here! The AI-powered diagnostics and laser treatments were incredible. My implant procedure was completely painless.",
    rating: 5,
    treatment: "Dental Implants",
    image: "https://images.unsplash.com/photo-1494790108755-2616c96541e2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "James Chen",
    text: "I was amazed by their 3D scanning technology. The precision and care exceeded all my expectations. My smile transformation is beyond what I imagined!",
    rating: 5,
    treatment: "Smile Makeover",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Rodriguez",
    text: "The virtual consultation and advanced sterilization protocols made me feel completely safe. Outstanding service and cutting-edge technology!",
    rating: 5,
    treatment: "Orthodontics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Thompson",
    text: "ORAC Dental's holographic treatment planning showed me exactly what to expect. The results speak for themselves - world-class care!",
    rating: 5,
    treatment: "Root Canal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Lisa Park",
    text: "The AI-assisted surgery and robotic precision made my complex procedure seamless. This is truly the future of dentistry!",
    rating: 5,
    treatment: "Oral Surgery",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];

// Floating particles component
const TestimonialParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`testimonial-particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 12 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.2 }}
        >
          <svg
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          rgba(15, 23, 42, 1) 0%, 
          rgba(88, 28, 135, 0.8) 30%,
          rgba(15, 23, 42, 1) 70%,
          rgba(30, 41, 59, 1) 100%
        )`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <TestimonialParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
            `,
          }} 
        />
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full text-cyan-400 text-sm font-semibold border border-cyan-500/30 backdrop-blur-sm">
              Patient Reviews
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text mb-6"
          >
            Patient Testimonials
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover what our patients say about their{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text font-semibold">
              transformative dental experiences
            </span>{" "}
            with cutting-edge technology
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
            {/* Carousel Container */}
            <div className="relative">
              {/* Custom Carousel Styling */}
              <style jsx global>{`
                .carousel .control-arrow {
                  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%) !important;
                  border-radius: 50% !important;
                  width: 50px !important;
                  height: 50px !important;
                  opacity: 0.8 !important;
                  transition: all 0.3s ease !important;
                }
                .carousel .control-arrow:hover {
                  opacity: 1 !important;
                  transform: scale(1.1) !important;
                }
                .carousel .control-arrow:before {
                  border-color: transparent transparent transparent white !important;
                  border-width: 8px 0 8px 12px !important;
                }
                .carousel .control-next.control-arrow:before {
                  border-color: transparent white transparent transparent !important;
                  border-width: 8px 12px 8px 0 !important;
                }
                .carousel .control-dots {
                  margin: 0 !important;
                  padding: 20px 0 !important;
                }
                .carousel .control-dots .dot {
                  background: linear-gradient(135deg, #06b6d4, #ec4899) !important;
                  width: 12px !important;
                  height: 12px !important;
                  border-radius: 50% !important;
                  margin: 0 8px !important;
                  opacity: 0.5 !important;
                  transition: all 0.3s ease !important;
                }
                .carousel .control-dots .dot.selected {
                  opacity: 1 !important;
                  transform: scale(1.3) !important;
                }
              `}</style>

              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={6000}
                showArrows={true}
                swipeable={true}
                emulateTouch={true}
                className="testimonial-carousel"
              >
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 sm:p-12 min-h-[400px] flex flex-col items-center justify-center text-center relative"
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-8 left-8 text-6xl text-cyan-400/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      "
                    </motion.div>

                    {/* Patient Image */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-pink-400 p-1 bg-gradient-to-r from-cyan-400 to-pink-400">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Floating badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xs"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        ✓
                      </motion.div>
                    </motion.div>

                    {/* Star Rating */}
                    <StarRating rating={testimonial.rating} />

                    {/* Testimonial Text */}
                    <motion.p
                      className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      "{testimonial.text}"
                    </motion.p>

                    {/* Patient Info */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <div className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text">
                        {testimonial.name}
                      </div>
                      
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30">
                        {testimonial.treatment}
                      </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-8 right-8 text-6xl text-cyan-400/20 rotate-180">
                      "
                    </div>

                    {/* Floating particles for each testimonial */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, particleIdx) => (
                        <motion.div
                          key={particleIdx}
                          className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-40"
                          style={{
                            left: `${20 + particleIdx * 30}%`,
                            top: `${30 + particleIdx * 20}%`,
                          }}
                          animate={{
                            y: [-10, -30, -10],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: particleIdx * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "98%", label: "Patient Satisfaction" },
              { number: "5000+", label: "Happy Patients" },
              { number: "4.9★", label: "Average Rating" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.2 + 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="group p-6 rounded-xl backdrop-blur-sm border border-cyan-500/20 hover:border-pink-400/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
