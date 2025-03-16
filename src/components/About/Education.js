import { motion } from "framer-motion";

export default function Education() {
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
      <div className="rounded-3xl lowercase">
        <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
          my <span className="text-engineer-accentGreen">education</span>
        </h2>

        <div className="mb-10">
          <div className="flex items-start mb-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-engineer-accentGreen mr-3"></div>
            <div>
              <h3 className="text-engineer-text-primary poppins-semibold text-lg lg:text-xl">
                Simon Fraser University
              </h3>
              <p className="text-engineer-text-primary text-opacity-50 text-sm lg:text-base poppins-regular">
                BSc in Computer Science and Interactive Arts & Technology
              </p>
              <p className="text-engineer-text-primary text-opacity-50 poppins-light text-xs mt-1 lg:text-sm">
                2021 - Present
              </p>
            </div>
          </div>
          <div className="ml-5 mt-4">
            <p className="text-engineer-text-primary text-opacity-40 poppins-regular text-sm lg:text-base leading-relaxed">
              Focusing on the intersection of technology and design, with
              coursework in algorithms, data structures, user experience design,
              and interactive systems.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-start mb-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-engineer-accentOrange mr-3"></div>
            <div>
              <h3 className="text-engineer-text-primary poppins-semibold text-xl">
                Relevant Coursework
              </h3>
            </div>
          </div>
          <div className="ml-5 mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <p className="text-engineer-text-primary text-opacity-100 poppins-medium mb-1">
                Technical Courses
              </p>
              <ul className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-base leading-relaxed list-disc ml-5">
                <li>Data Structures and Algorithms</li>
                <li>Web Development</li>
                <li>Database Systems</li>
                <li>Computer Networks</li>
              </ul>
            </div>
            <div>
              <p className="text-engineer-text-primary text-opacity-100 poppins-medium mb-1">
                Design Courses
              </p>
              <ul className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-base leading-relaxed list-disc ml-5">
                <li>User Experience Design</li>
                <li>Interactive Systems Design</li>
                <li>Visual Analytics</li>
                <li>Human-Computer Interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
