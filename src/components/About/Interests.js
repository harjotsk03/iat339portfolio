import { motion } from "framer-motion";

export default function Interests() {
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
          my <span className="text-engineer-accentGreen">interests</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-engineer-bgSecondary rounded-xl p-6">
            <h3 className="text-engineer-accentGreen poppins-semibold text-xl mb-3">
              building apps
            </h3>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
              building apps for personal use as well as for others to solve
              complex problems and make life easier for the user.
            </p>
          </div>

          <div className="bg-engineer-bgSecondary rounded-xl p-6">
            <h3 className="text-engineer-accentGreen poppins-semibold text-xl mb-3">
              design
            </h3>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
              Studying interaction design principles and how thoughtful
              interfaces can create more intuitive and enjoyable user
              experiences.
            </p>
          </div>

          <div className="bg-engineer-bgSecondary rounded-xl p-6">
            <h3 className="text-engineer-accentGreen poppins-semibold text-xl mb-3">
              entrepreneurship
            </h3>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
              Building products that solve real problems and learning about
              startup ecosystems and business development.
            </p>
          </div>

          <div className="bg-engineer-bgSecondary rounded-xl p-6">
            <h3 className="text-engineer-accentOrange poppins-semibold text-xl mb-3">
              sports
            </h3>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
              i love playing and watching sports, i have played soccer for 19
              years. recently i've been learning how to play hockey.
            </p>
          </div>

          <div className="bg-engineer-bgSecondary rounded-xl p-6">
            <h3 className="text-engineer-accentOrange poppins-semibold text-xl mb-3">
              cooking
            </h3>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
              i love cooking and eating food, even though i dont have a lot of
              time to cook, i've learned a lot about food and nutrition.
            </p>
          </div>

          <div className="bg-engineer-bgSecondary rounded-xl p-6 ">
            <h3 className="text-engineer-accentOrange poppins-semibold text-xl mb-3">
              brain games
            </h3>
            <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
              i love playing brain games, wether its chess, sudoku or random
              mini games i find on the web i love the brain challenges.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
