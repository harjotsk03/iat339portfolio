import Footer from "../components/Footer";
import Hero from "../components/Projects/Hero";
import Projects from "../components/Projects/Projects";

export default function ProjectsPage() {
  return (
    <div className="bg-engineer-bg min-h-screen pt-24">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
