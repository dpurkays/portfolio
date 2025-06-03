"use client";

import { Project } from "@/constants/ProjectList";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TechTags from "./TechTags";

interface FeaturedProjectProps extends Project {}

function FeaturedProject({
  title,
  slug,
  description,
  features,
  image,
  techStack,
  github,
  live,
}: FeaturedProjectProps) {
  const router = useRouter();

  return (
    <section
      onClick={() => router.push(`/projects/${slug}`)}
      className="bg-box2 rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6 hover:-translate-y-1 transform transition duration-200 cursor-pointer"
    >
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image
          src={image}
          alt={`Image of ${title} app`}
          width={1000}
          height={5000}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 justify-between w-full md:w-1/2 ">
        <div className="flex-grow flex flex-col gap-2">
          <h3 className="section-subheader">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="px-4 pb-4">
            <h4 className="text-sm font-medium">Key Features:</h4>
            <ul className="list-disc list-inside text-sm">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <TechTags stack={techStack} />
        </div>

        <div className="flex justify-between gap-6 text-sm">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium flex gap-2 items-center text-accent1 hover:text-accent2"
            >
              See code <FaGithub />
            </Link>
          )}
          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium flex gap-2 items-center text-accent1 hover:text-accent2"
            >
              Live <FaExternalLinkAlt />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
