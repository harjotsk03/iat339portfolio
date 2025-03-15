import React from "react";

export default function FooterLink({ title, link }) {
  return (
    <li>
      <button
        className="text-sm lg:text-base text-engineer-text-primary text-left poppins-regular hover:text-engineer-accentGreen bg-transparent p-0 cursor-pointer border-b-2 border-transparent hover:border-engineer-accentOrange focus:outline-none focus:text-engineer-accentGreen focus:border-engineer-accentOrange transition duration-700"
        onClick={() => window.open(link, "_blank")}
      >
        {title}
      </button>
    </li>
  );
}
