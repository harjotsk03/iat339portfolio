import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: -90 },
  visible: {
    opacity: 2,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.1, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <div className="flex flex-col items-center justify-center py-0 lg:py-16 pb-4">
        <h1 className="text-engineer-text-primary poppins-semibold text-4xl lg:text-6xl mb-6 text-center">
          study <span className="text-engineer-accentGreen">spotr</span>
        </h1>
        <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-8 w-10/12 lg:w-1/2 text-center">
          a startup to connect students with study spots and peers.
        </p>
      </div>
    </motion.div>
  );
}
