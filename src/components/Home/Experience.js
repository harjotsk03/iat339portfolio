import cognerisLogo from "../../assets/cognerisLogo.png";
import studySpotrLogo from "../../assets/studyspotrLogo.png";
import sfurs from "../../assets/sfursLogo.png";
import sfucsss from "../../assets/sfucsssLogo.png";
import stormhacksLogo from "../../assets/stormhacksLogo.png";
import { useState } from "react";

function Experience() {
  // State to track which tooltip is currently visible
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="w-2/3 h-max px-8 py-10 lg:px-28 lg:py-16 bg-engineer-bgSecondary rounded-3xl ml-auto mr-auto mb-0 lg:mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-0">
        <div className="text-center">
          <p className="text-engineer-text-primary poppins-semibold text-5xl lg:text-6xl font-bold text-left">
            +2
          </p>
          <p className="text-engineer-accentGreen poppins-regular text-sm lg:text-base leading-snug lowercase text-left">
            Startups
            <br />
            Founded
          </p>
          <div className="flex justify-start mt-4">
            <div className="flex -space-x-4">
              <div className="relative">
                <img
                  src={studySpotrLogo}
                  alt="Study Spotr Logo"
                  className="w-10 h-10 rounded-full border-2 border-engineer-text-muted cursor-default"
                  onMouseEnter={() => setActiveTooltip("studySpotr")}
                  onMouseLeave={() => setActiveTooltip(null)}
                />
                {activeTooltip === "studySpotr" && (
                  <div className="absolute transition-all duration-700 ease-in-out top-full mt-2 left-1/2 transform poppins-regular -translate-x-1/2 mb-2 px-3 py-1 bg-engineer-bgSecondary text-engineer-text-primary text-xs rounded-full whitespace-nowrap z-10 border-2 border-engineer-text-muted">
                    Study Spotr
                  </div>
                )}
              </div>
              <div className="relative">
                <img
                  src={cognerisLogo}
                  alt="Cogneris Logo"
                  className="w-10 h-10 rounded-full border-2 border-engineer-text-muted cursor-default"
                  onMouseEnter={() => setActiveTooltip("cogneris")}
                  onMouseLeave={() => setActiveTooltip(null)}
                />
                {activeTooltip === "cogneris" && (
                  <div className="absolute transition-all duration-700 ease-in-out top-full mt-2 left-1/2 transform poppins-regular -translate-x-1/2 mb-2 px-3 py-1 bg-engineer-bgSecondary text-engineer-text-primary text-xs rounded-full whitespace-nowrap z-10 border-2 border-engineer-text-muted">
                    Cogneris Studio
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-engineer-text-primary poppins-semibold text-5xl lg:text-6xl font-bold text-left">
            +3
          </p>
          <p className="text-engineer-accentOrange poppins-regular text-sm lg:text-base leading-snug lowercase text-left">
            leadership
            <br />
            roles
          </p>
          <div className="flex justify-start mt-4">
            <div className="flex -space-x-4">
              <div className="relative">
                <img
                  src={sfucsss}
                  alt="SFUCSSS Logo"
                  className="w-10 h-10 rounded-full border-2 border-engineer-text-muted cursor-default"
                  onMouseEnter={() => setActiveTooltip("sfucsss")}
                  onMouseLeave={() => setActiveTooltip(null)}
                />
                {activeTooltip === "sfucsss" && (
                  <div className="absolute transition-all duration-700 ease-in-out top-full mt-2 left-1/2 transform poppins-regular -translate-x-1/2 mb-2 px-3 py-1 bg-engineer-bgSecondary text-engineer-text-primary text-xs rounded-full whitespace-nowrap z-10 border-2 border-engineer-text-muted">
                    {" "}
                    SFU Computing Science Student Society
                  </div>
                )}
              </div>
              <div className="relative">
                <img
                  src={sfurs}
                  alt="SFURS Logo"
                  className="w-10 h-10 rounded-full border-2 border-engineer-text-muted cursor-default"
                  onMouseEnter={() => setActiveTooltip("sfurs")}
                  onMouseLeave={() => setActiveTooltip(null)}
                />
                {activeTooltip === "sfurs" && (
                  <div className="absolute transition-all duration-700 ease-in-out top-full mt-2 left-1/2 transform poppins-regular -translate-x-1/2 mb-2 px-3 py-1 bg-engineer-bgSecondary text-engineer-text-primary text-xs rounded-full whitespace-nowrap z-10 border-2 border-engineer-text-muted">
                    {" "}
                    SFU Robot Soccer Club
                  </div>
                )}
              </div>
              <div className="relative">
                <img
                  src={studySpotrLogo}
                  alt="Study Spotr Logo"
                  className="w-10 h-10 rounded-full border-2 border-engineer-text-muted cursor-default"
                  onMouseEnter={() => setActiveTooltip("studySpotrLead")}
                  onMouseLeave={() => setActiveTooltip(null)}
                />
                {activeTooltip === "studySpotrLead" && (
                  <div className="absolute transition-all duration-700 ease-in-out top-full mt-2 left-1/2 transform poppins-regular -translate-x-1/2 mb-2 px-3 py-1 bg-engineer-bgSecondary text-engineer-text-primary text-xs rounded-full whitespace-nowrap z-10 border-2 border-engineer-text-muted">
                    {" "}
                    Study Spotr
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-engineer-text-primary poppins-semibold text-5xl lg:text-6xl font-bold text-left">
            +1
          </p>
          <p className="text-engineer-accentGreen poppins-regular text-sm lg:text-base leading-snug lowercase text-left">
            hackathon
            <br />
            victories
          </p>
          <div className="flex justify-start mt-4">
            <div className="flex -space-x-4">
              <div className="relative">
                <img
                  src={stormhacksLogo}
                  alt="StormHacks Logo"
                  className="w-10 h-10 rounded-full border-2 border-engineer-text-muted cursor-default"
                  onMouseEnter={() => setActiveTooltip("stormhacks")}
                  onMouseLeave={() => setActiveTooltip(null)}
                />
                {activeTooltip === "stormhacks" && (
                  <div className="absolute transition-all duration-700 ease-in-out top-full mt-2 left-1/2 transform poppins-regular -translate-x-1/2 mb-2 px-3 py-1 bg-engineer-bgSecondary text-engineer-text-primary text-xs rounded-full whitespace-nowrap z-10 border-2 border-engineer-text-muted">
                    StormHacks 2024
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
