export default function MyRole() {
  return (
    <div className="w-10/12 lg:w-2/3 mx-auto bg-engineer-bgSecondary rounded-3xl px-14 py-12 mt-14 lg:mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* My Role Section */}
        <div>
          <h3 className="text-engineer-text-primary poppins-semibold text-xl mb-4">
            My Role
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Founder
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Software Developer
              </span>
            </li>
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-engineer-text-primary poppins-semibold text-xl mb-4">
            Tools
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                React.js
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                MapBox API
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Node.js
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                MongoDB
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                AWS
              </span>
            </li>
          </ul>
        </div>

        {/* Project Type Section */}
        <div>
          <h3 className="text-engineer-text-primary poppins-semibold text-xl mb-4">
            Project Type
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Start Up
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Personal Project
              </span>
            </li>
          </ul>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-engineer-text-primary poppins-semibold text-xl mb-4">
            Timeline
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Ongoing
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-engineer-accentGreen mr-2">›</span>
              <span className="text-engineer-text-primary text-opacity-80 poppins-regular">
                Close to full launch
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
