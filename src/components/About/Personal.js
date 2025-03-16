import { motion } from "framer-motion";

export default function Personal() {
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
      <div>
        <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
          who i <span className="text-engineer-accentGreen">am</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-6">
              i'm a{" "}
              <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
                passionate technologist
              </span>{" "}
              who believes in the power of software to transform lives. my
              journey in tech began with a curiosity about how digital tools
              shape our experiences and has evolved into a mission to create
              intuitive, impactful solutions.
            </p>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed">
              when i'm not coding, you'll find me{" "}
              <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
                exploring new hiking trails
              </span>
              , experimenting with photography, or diving into a good book on
              design thinking.
            </p>
          </div>
          <div>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-6">
              i approach problems with a{" "}
              <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
                user-centered mindset
              </span>
              , always asking how technology can better serve human needs. this
              perspective has guided my work on projects ranging from
              educational platforms to community-building applications.
            </p>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed">
              my goal is to continue growing as a{" "}
              <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
                developer and designer
              </span>
              , creating experiences that are not just functional but delightful
              and meaningful.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
