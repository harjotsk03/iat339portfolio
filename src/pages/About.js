import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "../components/Footer";
import Personal from "../components/About/Personal";
import { motion } from "framer-motion";
import Hero from "../components/About/Hero.js";
export default function About() {
  const [activeTab, setActiveTab] = useState("personal");

  const fadeInVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
    },
    {
      category: "Frameworks",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "TailwindCSS",
        "Bootstrap",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Firebase", "Figma", "Adobe XD"],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "User Research",
      ],
    },
  ];

  return (
    <div className="bg-engineer-bg min-h-screen pt-24">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>

      {/* Tabs Navigation */}
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="w-10/12 lg:w-2/3 mx-auto mb-20">
          {activeTab === "personal" && <Personal />}

          {activeTab === "education" && (
            <div className="rounded-3xl">
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
                    coursework in algorithms, data structures, user experience
                    design, and interactive systems.
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
          )}

          {/* Skills Section */}
          {activeTab === "skills" && (
            <div className="bg-engineer-bgSecondary rounded-3xl p-8 lg:p-12">
              <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-6">
                my <span className="text-engineer-accentGreen">skills</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-engineer-text-secondary poppins-semibold text-xl mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-engineer-bg text-engineer-text-primary text-opacity-80 poppins-regular text-sm rounded-full hover:bg-engineer-accentGreen hover:text-engineer-bg transition-all duration-300"
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
                  {[
                    "Three.js",
                    "WebGL",
                    "Machine Learning",
                    "UI Animation",
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-engineer-bg text-engineer-accentOrange poppins-regular text-sm rounded-full hover:bg-engineer-accentOrange hover:text-engineer-bg transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Interests Section */}
          {activeTab === "interests" && (
            <div className="bg-engineer-bgSecondary rounded-3xl p-8 lg:p-12">
              <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-6">
                my <span className="text-engineer-accentOrange">interests</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-engineer-bg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-engineer-accentGreen poppins-semibold text-xl mb-3">
                    Technology
                  </h3>
                  <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
                    Exploring emerging technologies, from AR/VR to AI and
                    machine learning applications that enhance human
                    experiences.
                  </p>
                </div>

                <div className="bg-engineer-bg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-engineer-accentGreen poppins-semibold text-xl mb-3">
                    Design
                  </h3>
                  <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
                    Studying interaction design principles and how thoughtful
                    interfaces can create more intuitive and enjoyable user
                    experiences.
                  </p>
                </div>

                <div className="bg-engineer-bg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-engineer-accentGreen poppins-semibold text-xl mb-3">
                    Entrepreneurship
                  </h3>
                  <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
                    Building products that solve real problems and learning
                    about startup ecosystems and business development.
                  </p>
                </div>

                <div className="bg-engineer-bg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-engineer-accentOrange poppins-semibold text-xl mb-3">
                    Photography
                  </h3>
                  <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
                    Capturing moments and exploring visual storytelling through
                    digital and film photography.
                  </p>
                </div>

                <div className="bg-engineer-bg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-engineer-accentOrange poppins-semibold text-xl mb-3">
                    Hiking
                  </h3>
                  <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
                    Exploring nature trails and mountains around British
                    Columbia to disconnect and find inspiration.
                  </p>
                </div>

                <div className="bg-engineer-bg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-engineer-accentOrange poppins-semibold text-xl mb-3">
                    Reading
                  </h3>
                  <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm leading-relaxed">
                    Diving into books on technology, design thinking,
                    psychology, and science fiction to expand my perspectives.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact CTA */}
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

        <Footer />
      </motion.div>
    </div>
  );
}
