import { FiArrowUpRight } from "react-icons/fi";

export default function AboutBlurb() {
  return (
    <div className="flex flex-col py-16 lg:py-32 justify-start w-10/12 lg:w-2/3 mx-auto">
      <h2 className="text-engineer-text-primary poppins-semibold text-3xl lg:text-5xl mb-4 lg:mb-8 text-left w-full">
        about <span className="text-engineer-accentGreen">me</span>
      </h2>
      <div className="flex lg:flex-row flex-col justify-between gap-4 lg:gap-16">
        <div className="text-left w-full lg:w-1/2">
          <h4 className="text-engineer-text-secondary poppins-semibold text-2xl lg:text-3xl mb-4">
            academic
          </h4>
          <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-4">
            currently pursuing a bachelors of science in{" "}
            <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
              computer science
            </span>{" "}
            and interactive arts and technology at simon fraser university. i
            enjoy learning about the{" "}
            <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
              intersection of software and design
            </span>
            , exploring ways to use technology to create meaningful and engaging
            experiences.
          </p>
        </div>
        <div className="text-left w-full lg:w-1/2">
          <h4 className="text-engineer-text-secondary poppins-semibold text-2xl lg:text-3xl mb-4">
            professional
          </h4>
          <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-4">
            recently founded{" "}
            <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
              study spotr
            </span>
            , a platform connecting students with study spots and peers.
            currently developing{" "}
            <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
              cogneris
            </span>
            , a tech consultancy aiming to improve digital experiences for
            startups and small businesses through{" "}
            <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
              innovative design and development solutions
            </span>
            .
          </p>
        </div>
      </div>

      <button className="lg:px-8 px-5 py-2 mt-4 lg:py-3 text-sm group lg:text-lg w-max bg-engineer-bgSecondary text-engineer-text-primary poppins-medium rounded-full hover:bg-engineer-text-primary focus:bg-engineer-text-primary hover:text-engineer-bgSecondary focus:text-engineer-bgSecondary transition duration-700 transform focus:scale-105 focus:outline-none focus:ring-none hover:scale-105">
        more about me{" "}
        <FiArrowUpRight
          size={20}
          className="inline-block ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700  text-engineer-text-primary rounded-full group-hover:text-engineer-bgSecondary"
        />
      </button>
    </div>
  );
}
