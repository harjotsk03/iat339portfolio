import { FiArrowUpRight } from "react-icons/fi";
import FooterLink from "./FooterLink";

export default function Footer() {
  const connectLinks = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/harjotsingh7/" },
    { title: "Email", link: "mailto:hsa192@sfu.ca" },
    { title: "Instagram", link: "https://www.instagram.com/7harjotsk" },
  ];

  const resourceLinks = [
    { title: "GitHub", link: "https://github.com/harjotsk03" },
    {
      title: "DevPost",
      link: "https://devpost.com/harjotsk03?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    },
  ];

  return (
    <div className="bg-engineer-bgSecondary py-10 lg:py-20 mt-24 relative">
      <div className="w-10/12 lg:w-2/3 mx-auto mb-12">
        <div className="flex items-center gap-2">
          <span className="text-white text-xl poppins-semibold">
            harjot singh.
          </span>
        </div>
      </div>

      <div className="w-10/12 lg:w-2/3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="text-engineer-text-primary/50 poppins-medium uppercase text-sm tracking-wider mb-4">
              Contact Me
            </h3>
            <div className="mt-2">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col justify-start xl:flex-row gap-3 h-10">
                  <input
                    type="text"
                    placeholder="Your message"
                    className="bg-engineer-bgPrimary poppins-medium text-sm w-full text-engineer-bg py-3 px-5 rounded-full focus:outline-none border-2 border-transparent hover:border-engineer-accentOrange focus:ring-1 focus:ring-engineer-accentOrange transition-all duration-700 ease-in-out"
                  />
                  <button
                    type="submit"
                    className="bg-engineer-bg text-xs text-white group py-3 px-5 whitespace-nowrap rounded-full hover:bg-engineer-text-primary hover:text-engineer-bg transition-all poppins-medium duration-700 ease-in-out"
                  >
                    Send Message{" "}
                    <FiArrowUpRight
                      className="inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-700"
                      size={16}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <h3 className="text-engineer-text-primary/50 poppins-medium uppercase text-sm tracking-wider mb-4">
              Get Connected
            </h3>
            <ul className="space-y-2 lg:space-y-4">
              {connectLinks.map((link, index) => (
                <FooterLink key={index} title={link.title} link={link.link} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-engineer-text-primary/50 poppins-medium uppercase text-sm tracking-wider mb-4">
              My Work
            </h3>
            <ul className="space-y-2 lg:space-y-4">
              {resourceLinks.map((link, index) => (
                <FooterLink key={index} title={link.title} link={link.link} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-engineer-accentGreen flex flex-col md:flex-row justify-between items-center">
          <div className="text-engineer-secondary poppins-light text-sm">
            ©2025 Harjot Singh Designed & Developed from scratch using React,
            TailwindCSS, Framer Motion, and Figma.
          </div>
        </div>
      </div>
    </div>
  );
}
