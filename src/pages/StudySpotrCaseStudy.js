import Footer from "../components/Footer";
import Hero from "../components/StudySpotr/Hero";
import ProjectOverview from "../components/StudySpotr/ProjectOverview.js";
import MyRole from "../components/StudySpotr/MyRole.js";
import ProblemSolution from "../components/StudySpotr/ProblemSolution.js";
import Iterations from "../components/StudySpotr/Iterations.js";
import PhotoGallery from "../components/StudySpotr/PhotoGallery.js";
import Takeway from "../components/StudySpotr/Takeway.js";

export default function StudySpotrCaseStudy() {
  return (
    <div className="bg-engineer-bg min-h-screen pt-24">
      <Hero />
      <ProjectOverview />
      <MyRole />
      <ProblemSolution />
      {/* <Iterations /> */}
      <PhotoGallery />
      <Takeway />
      <Footer />
    </div>
  );
}
