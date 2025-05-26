import { Project } from "@/constants/ProjectList";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaVideo } from "react-icons/fa";
import TechTags from "./TechTags";

function ProjectCard({
  title,
  slug,
  description,
  image,
  video,
  github,
  live,
  techStack,
}: Project) {
  return (
    <Link href={`/projects/${slug}`}>
      <section className="bg-box rounded-lg p-4 shadow-md h-full flex flex-col gap-4 cursor-pointer hover:scale-[1.02] transition duration-200 ">
        <div className="relative w-full h-[250px] rounded-md overflow-hidden">
          <Image
            src={image}
            alt={`image of ${title} app`}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <h3 className="section-subheader">{title}</h3>
        <p className="text-sm">{description}</p>
        <TechTags stack={techStack} />
        <div className="mt-auto flex justify-between text-sm pt-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium flex gap-2 items-center text-accent1 hover:text-accent2"
            >
              See code
              <FaGithub />
            </Link>
          )}

          {live && (
            <Link
              href={live}
              rel="noopener noreferrer"
              className="font-medium flex gap-2 items-center text-accent1 hover:text-accent2"
            >
              Live
              <FaExternalLinkAlt />
            </Link>
          )}

          {video && (
            <Link
              href={`/projects/${slug}?autoplay=true#video`}
              className="flex gap-1 items-center text-accent1 hover:text-accent2"
            >
              Watch demo <FaVideo />
            </Link>
          )}
        </div>
      </section>
    </Link>
  );
}

export default ProjectCard;
