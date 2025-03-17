import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    // { name: "Contact", href: "#contact" },
    { name: "download cv", href: "/Harjot Singh CV.pdf" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-50`}
    >
      <div
        className={`mx-auto transition-all duration-500 py-4 lg:py-5 mt-3 px-4 lg:mt-6 ${
          scrolled
            ? "w-11/12 bg-engineer-bgSecondary rounded-full"
            : "w-full bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              navigate("/");
              document.activeElement.blur();
            }}
            className={`text-engineer-text-primary hover:text-engineer-accentGreen focus:text-engineer-accentGreen focus:outline-none focus:ring-none poppins-medium text-1xl transition-all duration-500 ${
              scrolled ? "ml-6" : "ml-7 lg:ml-14"
            }`}
          >
            harjot singh<span className="text-engineer-accentGreen">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 mr-14">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.href);
                  document.activeElement.blur();
                }}
                className="text-engineer-text-primary poppins-medium hover:text-engineer-accentGreen hover:border-b-engineer-accentOrange focus:text-engineer-accentGreen focus:outline-none border-b-2 border-transparent focus:border-b-engineer-accentGreen transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden mr-6 text-engineer-text-primary  focus:text-engineer-accentGreen hover:text-engineer-accentGreen focus:outline-none focus:ring-none rounded"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                e.preventDefault();
                toggleMobileMenu();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-full bg-engineer-bgSecondary transform transition-transform duration-700 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col p-8 pt-20">
          <button
            className="absolute top-4 right-4 text-engineer-text-primary focus:text-engineer-accentGreen hover:text-engineer-accentGreen focus:outline-none focus:ring-none rounded"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                e.preventDefault();
                toggleMobileMenu();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-engineer-text-primary flex items-center justify-between bg-engineer-bg poppins-medium focus:text-engineer-accentGreen focus:outline-none focus:ring-none border-b-2 border-transparent focus:border-b-engineer-accentGreen px-5 hover:text-engineer-accentGreen transition-colors duration-300 py-3 rounded-lg"
                onClick={(e) => {
                  if (link.href.startsWith("/")) {
                    e.preventDefault();
                    toggleMobileMenu();
                    navigate(link.href);
                    document.activeElement.blur();
                  } else {
                    toggleMobileMenu();
                  }
                }}
              >
                {link.name}{" "}
                <FiArrowUpRight className="inline-block text-engineer-accentGreen" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
