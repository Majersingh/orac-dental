import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Manan Badala",
    specialty: "Founder & Owner",
    image: "/manadp.jpeg", // replace with actual photo
    experience: "Founder, B.D.S. (Microendodontist & Implantologist)",
    expertise: [
      "Visionary behind Orac Dental",
      "Patient-centered, compassionate care",
      "Affordable & accountable dentistry"
    ],
    bio: "Dr. Manan is the founder and owner of Orac Dental. With a vision to deliver exceptional oral healthcare, he has built a practice that prioritizes quality, compassion, and patient-centered values. As a leader in the field, Dr. Manan ensures dental care remains affordable, accessible, and accountable. He leads a team dedicated to comfort, trust, and satisfaction."
  },
  {
    id: 2,
    name: "Dr. Shrishi Jain",
    specialty: "Oral Surgeon",
    image: "https://via.placeholder.com/400x400?text=Dr+Shrishi+Jain", // replace with actual photo
    experience: "B.D.S., M.D.S. (Oral & Maxillofacial Surgery)",
    expertise: [
      "Oral & maxillofacial surgery",
      "Hospital affiliations across Surat",
      "Skilled in complex extractions & treatments"
    ],
    bio: "Dr. Shrishi is a committed Oral and Maxillofacial Surgeon based in Surat. Actively practicing and affiliated with several hospitals in the city, she brings expertise and a dedication to accessible oral healthcare. Her presence enhances the surgical capabilities of our dental practice."
  }
];

// Floating particles component
const TeamParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`team-particle-${i}`}
          className="absolute w-1 h-1 bg-teal-300 rounded-full opacity-30"
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
            duration: Math.random() * 10 + 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function TeamSection() {
  return (
    <section 
      id="team" 
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <TeamParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} 
        />
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
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
            <span className="px-6 py-3 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-full text-teal-300 text-sm font-semibold border border-teal-400/30 backdrop-blur-sm">
              Meet Our Experts
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-6"
          >
            Our Expert Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Meet our world-class dental professionals dedicated to providing you with{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text font-semibold">
              exceptional care
            </span>{" "}
            and innovative treatments
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl border border-teal-400/30 group-hover:border-teal-300/50 transition-all duration-300">
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, 
                       #0f766e 30%, 
                      #134e4a 30%,
                      #0f766e 70%,
                      #0f766e 100%
                    )`
                  }}
                />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-teal-300/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  {/* Profile Image */}
                  <motion.div
                    className="relative mx-auto mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-300 to-white p-1 bg-gradient-to-r from-teal-300 to-white">
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      ✓
                    </motion.div>
                  </motion.div>
                  
                  {/* Name */}
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-white group-hover:bg-clip-text transition-all duration-300 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  {/* Specialty */}
                  <div className="text-teal-300 font-semibold mb-2">
                    {member.specialty}
                  </div>
                  
                  {/* Experience */}
                  <div className="text-gray-400 text-sm mb-4">
                    {member.experience} Experience
                  </div>
                  
                  {/* Animated Divider */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.5 }}
                  />
                  
                  {/* Expertise */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="text-gray-300 text-sm font-medium mb-2">Expertise:</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-full text-xs text-teal-300 border border-teal-400/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(4)].map((_, particleIdx) => (
                    <motion.div
                      key={particleIdx}
                      className="absolute w-2 h-2 bg-teal-300 rounded-full"
                      style={{
                        left: `${20 + particleIdx * 20}%`,
                        top: `${30 + particleIdx * 15}%`,
                      }}
                      animate={{
                        y: [-10, -25, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: particleIdx * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
