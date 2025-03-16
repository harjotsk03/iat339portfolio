import { useState } from "react";
import Footer from "../components/Footer";
import Personal from "../components/About/Personal";
import Hero from "../components/About/Hero.js";
import SelectorTabs from "../components/About/SelectorTabs";
import Education from "../components/About/Education.js";
import Skills from "../components/About/Skills.js";
import Interests from "../components/About/Interests.js";
import ContactCTA from "../components/ContactCTA.js";

export default function About() {
  const [activeTab, setActiveTab] = useState("personal");

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
    },
    {
      category: "Frameworks",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "TailwindCSS",
        "Bootstrap",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Firebase", "Figma", "Adobe XD"],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "User Research",
      ],
    },
  ];

  return (
    <div className="bg-engineer-bg min-h-screen pt-24">
      <Hero />

      <SelectorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-10/12 lg:w-2/3 mx-auto mb-20">
        {activeTab === "personal" && <Personal />}

        {activeTab === "education" && <Education />}

        {/* Skills Section */}
        {activeTab === "skills" && <Skills skills={skills} />}

        {/* Interests Section */}
        {activeTab === "interests" && <Interests />}
      </div>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
}
