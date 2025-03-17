import { useState } from "react";
import studySpotrHome from "../../assets/studyspotrhome1.png";
import { motion } from "framer-motion";
import { del } from "framer-motion/client";

export default function ProjectOverview() {
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
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <motion.div className="w-10/12 lg:w-2/3 mx-auto">
        <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
          project <span className="text-engineer-accentGreen">overview</span>
        </h2>

        {/* First paragraph with image */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="lg:w-1/2">
            <p className="text-engineer-text-primary text-opacity-60 lowercase poppins-regular text-sm lg:text-lg leading-relaxed">
              I created Study Spotr, a{" "}
              <span className="text-engineer-primary poppins-medium">
                full-stack application
              </span>{" "}
              that helps students easily find ideal study spots, whether nearby
              or anywhere around the world. The inspiration came from a common
              problem I and many students face—finding the{" "}
              <span className="text-engineer-primary poppins-medium">
                perfect place to study
              </span>{" "}
              with the right amenities like WiFi, power outlets, quiet spaces,
              and whiteboards. With Study Spotr, users can search for spots by
              location, use an{" "}
              <span className="text-engineer-primary poppins-medium">
                interactive map powered by Mapbox
              </span>
              , or browse a list of study spots to find exactly what they need.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={studySpotrHome}
              alt="Study Spotr homepage"
              className="w-full h-auto rounded-xl hover:opacity-100 cursor-zoom-in"
              onClick={() => handleImageClick(studySpotrHome)}
            />
          </div>
        </div>

        {/* Second paragraph with image */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <img
              src={studySpotrHome}
              alt="Study Spotr application"
              className="w-full h-auto rounded-xl hover:opacity-100 cursor-zoom-in"
              onClick={() => handleImageClick(studySpotrHome)}
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <p className="text-engineer-text-primary text-opacity-60 lowercase poppins-regular text-sm lg:text-lg leading-relaxed">
              Each location provides important details, including whether ID is
              required, and users can leave ratings and reviews based on their
              experience, ensuring future visitors get accurate feedback. I
              built this project using the{" "}
              <span className="text-engineer-primary poppins-medium">
                MERN stack (MongoDB, Express.js, React.js, and Node.js)
              </span>
              , which allowed me to create a{" "}
              <span className="text-engineer-primary poppins-medium">
                scalable and interactive platform
              </span>
              . My goal is to grow the app with over{" "}
              <span className="text-engineer-primary poppins-medium">
                100+ active study spots
              </span>{" "}
              in the coming months and make it a useful tool for students
              everywhere.
            </p>
          </div>
        </div>

        {/* Image Zoom Overlay */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeZoomedImage}
          >
            <div className="max-w-[90vw] max-h-[90vh] relative">
              <img
                src={zoomedImage}
                alt="Zoomed view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg lg:rounded-3xl"
              />
              <button
                className="absolute lg:top-4 lg:right-4 top-2 right-2 text-engineer-bg poppins-medium text-base lg:text-2xl bg-engineer-accentGreen bg-opacity-100 lg:w-10 lg:h-10 w-7 h-7 rounded-full flex items-center justify-center"
                onClick={closeZoomedImage}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
