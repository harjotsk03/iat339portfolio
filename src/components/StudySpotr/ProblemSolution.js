import { motion } from "framer-motion";

export default function ProblemSolution() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -90 },
    visible: {
      opacity: 2,
      y: 0,
      transition: {
        duration: 1.5,
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
      <div className="w-10/12 lg:w-2/3 mx-auto mb-12 mt-14 lg:mt-40">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Problem Section */}
          <div className="lg:w-1/2">
            <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
              project <span className="text-engineer-accentGreen">problem</span>
            </h2>
            <p className="text-engineer-text-primary text-opacity-60 lowercase poppins-regular text-sm lg:text-lg leading-relaxed">
              Before starting this project, I faced the challenge of not having
              built a fully{" "}
              <span className="text-engineer-primary poppins-medium">
                hosted full-stack application
              </span>{" "}
              accessible to real users. This made developing both the front-end
              and back-end from scratch a new experience for me. Additionally, I
              recognized a common issue that students frequently encounter: the
              question of{" "}
              <span className="text-engineer-primary poppins-medium">
                "where should we study today?"
              </span>{" "}
              Students often struggle to find study spots that meet their
              needs—whether it's having access to Wi-Fi, power outlets, or a
              quiet environment to focus.
            </p>
          </div>

          {/* Solution Section */}
          <div className="lg:w-1/2">
            <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
              project{" "}
              <span className="text-engineer-accentOrange">solution</span>
            </h2>
            <p className="text-engineer-text-primary text-opacity-60 lowercase poppins-regular text-sm lg:text-lg leading-relaxed">
              To address this, I created Study Spotr, an application that allows
              students to easily find the perfect study location nearby or{" "}
              <span className="text-engineer-primary poppins-medium">
                anywhere in the world
              </span>
              . This platform solves the problem by providing detailed
              information about study spots, including amenities like{" "}
              <span className="text-engineer-primary poppins-medium">
                WiFi, outlets, noise levels, and more
              </span>
              . With the ability to{" "}
              <span className="text-engineer-primary poppins-medium">
                rate and review locations, students can make informed decisions
                about where to study
              </span>
              , saving time and avoiding frustration. Built with the MERN stack
              (MongoDB, Express.js, React.js, and Node.js) and integrated with
              the Google Maps API, Study Spotr provides a seamless user
              experience, offering multiple ways to discover and explore ideal
              study environments.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
