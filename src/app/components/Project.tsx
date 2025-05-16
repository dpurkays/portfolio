import { projectList } from "@/constants/ProjectList";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section id="projects" className="section-style">
      <h2 className="section-title pb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
