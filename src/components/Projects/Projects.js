import ProjectCard from "./ProjectCard";
import studySpotrLogo from "../../assets/studySpotr.png";
import sfurs from "../../assets/sfurs.png";
import ecoGrowLogo from "../../assets/ecoGrow.png";
import binThereDumpedThatLogo from "../../assets/binThere.png";
import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      image: studySpotrLogo,
      title: "Study Spotr",
      description: "Start up to connect students with study spots and peers.",
      tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      type: "Full Stack App",
      link: "/studyspotr-case-study",
    },
    {
      image: sfurs,
      title: "SFU Robot Soccer Website",
      description:
        "Redesigned and developed a website for the SFU Robot Soccer.",
      tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      type: "Website Design & Development",
    },
    {
      image: binThereDumpedThatLogo,
      title: "Bin There, Dumped That",
      description: "Hackathon project to improve garbage collection.",
      tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      type: "Full Stack App",
    },
    {
      image: ecoGrowLogo,
      title: "EcoGrow",
      description: "Garden simulation game built with Java.",
      tools: ["Java"],
      type: "Single-player Game",
    },
  ];
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
      <div className="bg-engineer-bg">
        <div className="w-10/12 lg:w-2/3 mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
