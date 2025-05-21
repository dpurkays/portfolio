import { Project } from "@/constants/ProjectList";

function ProjectDetails({
  title,
  description,
  image,
  video,
  github,
  live,
  techStack,
  features,
  challenges,
  learnings,
}: Project) {
  return (
    <section className="section-style">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export default ProjectDetails;
