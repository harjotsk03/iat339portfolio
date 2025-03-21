import Hero from "../components/Home/Hero";
import Experience from "../components/Home/Experience";
import AboutBlurb from "../components/Home/AboutBlurb";
import Projects from "../components/Home/Projects";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeInVariants1 = {
  hidden: { opacity: 0, y: -90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.1, 1],
    },
  },
};

const fadeInVariants2 = {
  hidden: { opacity: 0, y: -90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.1, 1],
    },
  },
};

export default function Home() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants1}
        className="hidden lg:block"
      >
        <Hero />
        <Experience />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants2}
        className="block lg:hidden"
      >
        <Hero />
        <Experience />
      </motion.div>

      <AboutBlurb />
      <Projects />
      <Footer />
    </div>
  );
}
