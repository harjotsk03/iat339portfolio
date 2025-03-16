import { motion } from "framer-motion";

export default function SelectorTabs({ activeTab, setActiveTab }) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        delay: 0.2,
        ease: [0.25, 0.1, 0.1, 1],
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <div className="w-10/12 lg:w-2/3 mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {["personal", "education", "skills", "interests"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`lg:px-6 lg:py-2 px-5 py-2 rounded-full poppins-medium text-xs lg:text-base transition-all duration-500 ${
                activeTab === tab
                  ? "bg-engineer-text-primary text-engineer-bg"
                  : "bg-engineer-bgSecondary text-engineer-text-primary hover:bg-engineer-text-primary/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
