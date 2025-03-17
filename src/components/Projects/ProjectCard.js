import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function ProjectCard({ image, title, description, tools, type, link }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      className="w-full h-max bg-engineer-bg rounded-xl hover:bg-engineer-bgSecondary transition-all duration-700 hover:cursor-pointer flex flex-col overflow-hidden relative group"
    >
      {/* Arrow icon in top right */}

      {/* Image section - takes up top half with padding, bottom portion cut off */}
      <div className="w-full pt-2 pb-4 px-4 flex items-start justify-center bg-engineer-bgSecondary h-36 sm:h-72 md:h-80 lg:h-96 xl:h-[50vh] overflow-hidden">
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover object-top transform group-hover:-translate-y-1 transition-all duration-700"
          />
        </div>
      </div>

      {/* Content section - bottom half */}
      <div className="w-full px-6 py-6 text-left">
        <div className="flex items-center justify-between">
          {" "}
          <h3 className="text-lg leading-tight lg:text-2xl poppins-semibold mb-2 text-engineer-text-primary">
            {title || "Study Spotr"}
          </h3>
          <div className="text-engineer-accentGreen group-hover:text-engineer-accentOrange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700">
            <FiArrowUpRight size={20} />
          </div>
        </div>
        <p className="text-engineer-text-primary text-opacity-25 poppins-regular text-base mb-0.5">
          {type}
        </p>
        <p className="text-xs lg:text-base text-engineer-text-primary text-opacity-50 poppins-regular mb-4">
          {description ||
            "Start up to connect students with study spots and peers."}
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-engineer-accentGreen/50 poppins-regular text-xs bg-engineer-bgSecondary rounded-full px-3 py-1.5"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
