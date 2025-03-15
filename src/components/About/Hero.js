export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-0 lg:py-16 pb-4">
      <h1 className="text-engineer-text-primary poppins-semibold text-4xl lg:text-6xl mb-6 text-center">
        about <span className="text-engineer-accentGreen">me</span>
      </h1>
      <p className="text-engineer-text-primary text-opacity-60 poppins-regular text-sm lg:text-lg leading-relaxed mb-8 w-10/12 lg:w-1/2 text-center">
        i'm a{" "}
        <span className="text-engineer-text-primary text-opacity-100 poppins-semibold">
          computer science and interactive technology student
        </span>{" "}
        with a passion for creating meaningful digital experiences that make an
        impact.
      </p>
    </div>
  );
}
