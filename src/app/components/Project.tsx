import { projectList } from "@/constants/ProjectList";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

function Project() {
  const featured = projectList.find((p) => p.isFeatured);
  const others = projectList.filter((p) => !p.isFeatured);
  return (
    <div id="projects" className="scroll-mt-24">
      <section className="section-style">
        <h2 className="section-title pb-4">Featured Projects</h2>
        {featured && <FeaturedProject {...featured} />}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {others.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
