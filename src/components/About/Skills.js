import { motion } from "framer-motion";

export default function Skills({ skills }) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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
      <motion.div className="lowercase rounded-3xl">
        <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-6">
          my <span className="text-engineer-accentGreen">skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-engineer-text-secondary poppins-semibold text-xl mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-engineer-bgSecondary text-engineer-text-primary poppins-medium text-sm rounded-full cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-engineer-text-secondary poppins-semibold text-xl mb-4">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Three.js", "WebGL", "Machine Learning", "UI Animation"].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-engineer-bgSecondary text-engineer-text-primary poppins-medium text-sm rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
