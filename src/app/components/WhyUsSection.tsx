import { motion } from "framer-motion";

const highlights = [
  {
    title: "World Class Treatment",
    icon: "🌟",
    items: [
      "Only Asian member of the Royal Society of Medicine, UK",
      "Globally certified partners",
      "Premium materials & cutting-edge tools",
      "Advanced tech: Laser dentistry & 3D intraoral scanning",
    ],
  },
  {
    title: "Doctor-Led Patient Care",
    icon: "👨‍⚕️",
    items: [
      "Helpline managed by 50+ dentists",
      "1300+ doctors delivering consistent care",
      "Treatments reviewed for quality assurance",
      "Structured post-treatment follow-up plans",
    ],
  },
  {
    title: "14 Years Of Experience",
    icon: "⏳",
    items: [
      "1300+ experienced dental specialists",
      "3 Lakh+ successful root canal treatments",
      "50,000+ implants placed with precision",
      "20,000+ completed orthodontic treatment",
    ],
  },
  {
    title: "Unmatched Safety Standards",
    icon: "🛡️",
    items: [
      "10X safety protocols across all clinics",
      "AI-powered sterilization (AIPS from USA)",
      "4-step process ensuring deep sterilization",
      "Spotless, safe, and hygienic environment",
    ],
  },
];

// Floating particles component
const WhyUsParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`whyus-particle-${i}`}
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

export default function WhyUsSection() {
  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          #08445c 0%, 
          rgb(18,98,92) 30%,
          #08445c 70%,
          #08445c 100%
        )`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <WhyUsParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
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
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4"
          >
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text">
              Why Trust{" "}
            </span>
            <span className="text-white">
              Orac Dental
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience excellence in dental care with our{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text font-semibold">
              world-class standards
            </span>{" "}
            and cutting-edge technology
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {highlights.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl border border-cyan-500/30 group-hover:border-pink-400/50 transition-all duration-300">
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, 
                      #08445c 0%, 
                      rgb(18,88,92) 50%,
                      #08445c 100%
                    )`
                  }}
                />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center text-2xl group-hover:bg-gradient-to-r group-hover:from-cyan-500/30 group-hover:to-pink-500/30 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {group.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {group.title}
                      </h3>
                      
                      {/* Animated Underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mt-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                      />
                    </div>
                  </div>
                  
                  {/* Items List */}
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: idx * 0.2 + i * 0.1 + 0.6 
                        }}
                        className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 group/item"
                      >
                        {/* Custom Bullet */}
                        <motion.div
                          className="flex-shrink-0 mt-2"
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/50 transition-all duration-300" />
                        </motion.div>
                        
                        {/* Item Text */}
                        <span className="text-sm sm:text-base leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(6)].map((_, particleIdx) => (
                    <motion.div
                      key={particleIdx}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${15 + particleIdx * 15}%`,
                        top: `${20 + particleIdx * 12}%`,
                      }}
                      animate={{
                        y: [-5, -20, -5],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: particleIdx * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1300+", label: "Expert Doctors" },
              { number: "3L+", label: "Treatments Done" },
              { number: "50K+", label: "Implants Placed" },
              { number: "14", label: "Years Experience" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1 + 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="group"
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
