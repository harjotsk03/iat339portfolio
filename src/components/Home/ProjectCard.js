import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ image, title, description }) {
  return (
    <button className="w-full h-max bg-engineer-bg rounded-xl hover:bg-engineer-bgSecondary transition-all duration-700 hover:cursor-pointer flex flex-col overflow-hidden relative group">
      {/* Arrow icon in top right */}

      {/* Image section - takes up top half with padding, bottom portion cut off */}
      <div className="w-full pt-2 pb-4 px-4 flex items-start justify-center bg-engineer-bgSecondary h-32 sm:h-72 md:h-40 lg:h-52 xl:h-60 overflow-hidden">
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

        <p className="text-xs lg:text-base text-engineer-text-primary text-opacity-50 poppins-regular">
          {description ||
            "Start up to connect students with study spots and peers."}
        </p>
      </div>
    </button>
  );
}

export default ProjectCard;
