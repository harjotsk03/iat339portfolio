import { motion } from "framer-motion";

export default function Takeway() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -90 },
    visible: {
      opacity: 2,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.1, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <div className="w-10/12 lg:w-2/3 mx-auto mb-12 mt-14 lg:mt-40">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Conclusion Section */}
          <div className="lg:w-1/2">
            <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
              project{" "}
              <span className="text-engineer-accentGreen">conclusion</span>
            </h2>
            <p className="text-engineer-text-primary text-opacity-60 lowercase poppins-regular text-sm lg:text-lg leading-relaxed">
              Building this application has been a highly rewarding experience,
              providing me with valuable insights into{" "}
              <span className="text-engineer-primary poppins-medium">
                full-stack development
              </span>{" "}
              and the intricacies of modern web applications. One major takeaway
              was the importance of securely managing user authentication,
              particularly how to properly store and handle tokens and cookies
              to ensure both security and seamless user experiences. I also
              learned how to effectively troubleshoot{" "}
              <span className="text-engineer-primary poppins-medium">
                CORS issues
              </span>
              , which often come up when working with separate frontend and
              backend deployments, especially when they're hosted on different
              platforms like Vercel and Render.
            </p>
          </div>

          {/* Takeaway Section */}
          <div className="lg:w-1/2">
            <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
              key <span className="text-engineer-accentOrange">takeaways</span>
            </h2>
            <p className="text-engineer-text-primary text-opacity-60 lowercase poppins-regular text-sm lg:text-lg leading-relaxed">
              Deploying the app across these platforms taught me the
              significance of configuring{" "}
              <span className="text-engineer-primary poppins-medium">
                environment variables
              </span>{" "}
              correctly and ensuring smooth integration between services. I
              gained a deeper understanding of how to manage{" "}
              <span className="text-engineer-primary poppins-medium">
                session persistence
              </span>{" "}
              and refresh tokens for a more user-friendly experience.
              Additionally, dealing with{" "}
              <span className="text-engineer-primary poppins-medium">
                deployment challenges
              </span>
              , such as optimizing performance for server-side rendering and
              addressing scalability, helped me appreciate the complexities of
              hosting and maintaining a live application. Overall, this project
              enhanced my technical skills and reinforced the importance of
              planning for{" "}
              <span className="text-engineer-primary poppins-medium">
                security, scalability, and user experience
              </span>{" "}
              from the very beginning.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
