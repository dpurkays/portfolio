import { Project } from "@/constants/ProjectList";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TechTags from "./TechTags";

function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  techStack,
}: Project) {
  return (
    <section className="bg-box rounded-lg p-4 shadow-md flex flex-col gap-4 hover:-translate-y-1 transform transition duration-200">
      <Image
        src={image}
        alt={`image of ${title} app`}
        width="200"
        height="200"
      />
      <h3 className="section-subheader">{title}</h3>
      <p className="text-sm">{description}</p>
      <TechTags stack={techStack} />
      <div className="mt-auto flex justify-between text-sm pt-2">
        {github && (
          <Link
            href={github}
            className="font-medium flex gap-2 items-center text-accent1 hover:text-accent2"
          >
            See code
            <FaGithub />
          </Link>
        )}

        {live && (
          <Link
            href={live}
            className="font-medium flex gap-2 items-center text-accent1 hover:text-accent2"
          >
            Live
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
    </section>
  );
}

export default ProjectCard;
