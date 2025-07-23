import { motion } from "framer-motion";

const highlights = [
  {
    title: "World Class Treatment",
    items: [
      "Only Asian member of the Royal Society of Medicine, UK",
      "Globally certified partners",
      "Premium materials & cutting-edge tools",
      "Advanced tech: Laser dentistry & 3D intraoral scanning",
    ],
  },
  {
    title: "Doctor-Led Patient Care",
    items: [
      "Helpline managed by 50+ dentists",
      "1300+ doctors delivering consistent care",
      "Treatments reviewed for quality assurance",
      "Structured post-treatment follow-up plans",
    ],
  },
  {
    title: "14 Years Of Experience",
    items: [
      "1300+ experienced dental specialists",
      "3 Lakh+ successful root canal treatments",
      "50,000+ implants placed with precision",
      "20,000+ completed orthodontic treatment",
    ],
  },
  {
    title: "Unmatched Safety Standards",
    items: [
      "10X safety protocols across all clinics",
      "AI-powered sterilization (AIPS from USA)",
      "4-step process ensuring deep sterilization",
      "Spotless, safe, and hygienic environment",
    ],
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-10  px-4 text-center border-2  md:p-24 bg-pink-100/95 m-4 rounded-4xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#d72660] leading-tight">Why Trust <span className="text-[#1e293b]">Orac Dental</span></h2>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full text-center md:text-left"
      >
        <div className="space-y-6 space-x-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
          {highlights.map((group, idx) => (
            <div key={group.title} className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-200 shadow md:w-1/2 w-full">
              <div className="font-bold text-[#d72660] mb-2 text-lg flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#d72660] rounded-full"></span>
                {group.title}
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base text-left">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 