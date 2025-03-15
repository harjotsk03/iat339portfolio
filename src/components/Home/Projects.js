import ProjectCard from "./ProjectCard";
import cognerisLogo from "../../assets/cognerisLogo.png";
import studySpotrLogo from "../../assets/studyspotrLogo.png";
import sfurs from "../../assets/sfursLogo.png";
import ecoGrowLogo from "../../assets/ecogrowlogo.png";
import binThereDumpedThatLogo from "../../assets/bintheredumpedthat.jpg";

export default function Projects() {
  const projects = [
    {
      image: studySpotrLogo,
      title: "Study Spotr",
      description: "Start up to connect students with study spots and peers.",
    },
    {
      image: sfurs,
      title: "SFU Robot Soccer Website",
      description:
        "Redesigned and developed a website for the SFU Robot Soccer.",
    },
    {
      image: binThereDumpedThatLogo,
      title: "Bin There, Dumped That",
      description: "Hackathon project to improve garbage collection.",
    },
    {
      image: ecoGrowLogo,
      title: "EcoGrow",
      description: "Garden simulation game built with Java.",
    },
  ];

  return (
    <div className="bg-engineer-bg py-16">
      <div className="w-10/12 lg:w-2/3 mx-auto">
        <h2 className="text-engineer-text-primary poppins-semibold text-3xl lg:text-5xl mb-4 lg:mb-8 text-left w-full">
          my <span className="text-engineer-accentGreen">work</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
