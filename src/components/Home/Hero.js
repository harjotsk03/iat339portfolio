function Hero() {
  return (
    <div className="bg-engineer-bg flex flex-col items-center justify-center h-[88vh] lg:h-[93vh]">
      <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between w-10/12 lg:w-2/3 mb-2">
        <p className="text-engineer-text-muted poppins-regular w-full lg:w-auto text-center lg:text-left text-sm lg:text-base leading-snug lowercase">
          harjot singh.
        </p>
        <p className="hidden lg:block text-engineer-text-muted poppins-regular text-sm lg:text-base leading-snug lowercase text-right pr-8">
          computer science + interactive technology student @ sfu.
        </p>
      </div>
      <h1 className="text-engineer-text-secondary poppins-semibold text-4xl lg:text-6xl leading-tight lg:leading-snug w-11/12 lg:w-2/3 cursor-crosshair text-center lg:text-left">
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          aspiring
        </span>{" "}
        <span className="text-engineer-accentGreen">software</span>{" "}
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          engineer
        </span>{" "}
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          creating
        </span>{" "}
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          experiences
        </span>{" "}
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          that
        </span>{" "}
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          make
        </span>{" "}
        <span className="hover:text-engineer-text-primary transition-colors duration-300">
          an
        </span>{" "}
        <span className="text-engineer-accentOrange">impact</span>.
      </h1>
      <p className="flex lg:hidden text-engineer-text-muted w-10/12 mt-4 lg:w-auto text-center items-center justify-center lg:text-left poppins-regular text-sm lg:text-base leading-snug lowercase">
        computer science + interactive technology student @ sfu.
      </p>
    </div>
  );
}

export default Hero;
