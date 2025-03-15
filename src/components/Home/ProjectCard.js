import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ image, title, description }) {
  return (
    <button className="w-full h-max lg:min-h-52 bg-engineer-bg rounded-xl hover:bg-engineer-bgSecondary transition-all duration-700 hover:cursor-pointer flex overflow-hidden relative group">
      {/* Arrow icon in top right */}
      <div className="absolute bottom-2 top-auto lg:top-4 lg:bottom-auto right-4 text-engineer-accentGreen group-hover:text-engineer-accentOrange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700">
        <FiArrowUpRight size={20} />
      </div>

      {/* Image section - 1/5 width with white background */}
      <div className="w-1/4 lg:w-1/5 bg-white flex items-center justify-center p-2">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-700 object-contain"
        />
      </div>

      {/* Content section - 3/5 width */}
      <div className=" w-3/4 lg:w-3/5 h-full px-4 lg:px-10 py-4 lg:py-6 text-left flex flex-col justify-between">
        <div>
          <h3 className="text-lg leading-tight lg:text-2xl poppins-semibold mb-2 text-engineer-text-primary">
            {title || "Study Spotr"}
          </h3>
          <p className="text-xs lg:text-base text-engineer-text-primary text-opacity-50 poppins-regular mb-4">
            {description ||
              "Start up to connect students with study spots and peers."}
          </p>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
