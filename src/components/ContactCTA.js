import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
export default function ContactCTA() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
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
      <div className="w-10/12 lg:w-2/3 mx-auto mb-20 bg-engineer-bgSecondary rounded-3xl p-8 lg:p-12 text-center">
        <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-4">
          let's <span className="text-engineer-accentGreen">connect</span>
        </h2>
        <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          i'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <form className="max-w-xl mx-auto text-left">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-engineer-text-primary text-opacity-80 poppins-medium text-sm mb-2"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-engineer-bg text-engineer-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-engineer-accentGreen"
                placeholder="your name"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-engineer-text-primary text-opacity-80 poppins-medium text-sm mb-2"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-engineer-bg text-engineer-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-engineer-accentGreen"
                placeholder="your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-engineer-text-primary text-opacity-80 poppins-medium text-sm mb-2"
            >
              message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 bg-engineer-bg text-engineer-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-engineer-accentGreen"
              placeholder="what would you like to discuss?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="lg:px-8 px-5 py-2 lg:py-3 text-sm group lg:text-lg w-max bg-engineer-bg text-engineer-text-primary poppins-medium rounded-full hover:bg-engineer-text-primary focus:bg-engineer-text-primary hover:text-engineer-bgSecondary focus:text-engineer-bgSecondary transition duration-700 transform focus:scale-105 focus:outline-none focus:ring-none hover:scale-105"
          >
            send message{" "}
            <FiArrowUpRight
              size={20}
              className="inline-block ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700 text-engineer-text-primary rounded-full group-hover:text-engineer-bgSecondary"
            />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
