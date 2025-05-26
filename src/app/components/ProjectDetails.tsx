import { Project } from "@/constants/ProjectList";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ContentCardProps } from "./ContentCard";
import ProjectDetailsSection from "./ProjectDetailsSection";
import VideoDemo from "./VideoDemo";

function ProjectDetails({
  title,
  description,
  image,
  video,
  github,
  live,
  techStack,
  features,
  obstacles,
  learnings,
  screenshots,
  improvements,
}: Project) {
  const hasScreenshots = screenshots && screenshots.length > 0;

  const insightCards = [
    obstacles && {
      title: "⚠️ Obstacles",
      content: obstacles,
    },
    learnings && {
      title: "📚 Lessons Learned",
      content: learnings,
    },
    improvements && {
      title: "🔮 Future Improvements",
      content: improvements,
    },
  ].filter(Boolean) as ContentCardProps[];

  const hasInsights = insightCards.length > 0;

  return (
    <div className="section-style flex flex-col gap-4">
      <section className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-accent1">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pb-4 md:pb-8">
          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent1 bg-accent1 text-primary font-medium hover:font-bold px-6 py-2 rounded-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              🚀 Live Link
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center button-style transform hover:-translate-y-1"
            >
              <FaGithub />
              See code
            </Link>
          )}
          <Link
            href="#details"
            className="flex gap-2 items-center justify-center button-style transform hover:-translate-y-1"
          >
            📊 Project Breakdown
          </Link>
        </div>
        {video ? (
          <VideoDemo video={video} />
        ) : (
          <Image
            src={image}
            alt={`image of ${title} app`}
            width={800}
            height={450}
            className="object-contain rounded-md"
          />
        )}
      </section>
      <div id="details" className="flex flex-col gap-8 md:gap-12 scroll-mt-24">
        <ProjectDetailsSection
          title="Project Overview"
          cards={[
            { title: "🎯The Challenge", content: description },
            { title: "💡The Solution", content: description },
          ]}
        />
        <ProjectDetailsSection
          title="Technical Implementation"
          cards={[
            { title: "🛠️ Tech Stack", items: techStack, type: "tech" },
            { title: "🔑 Features", items: features, type: "features" },
          ]}
        />
        {hasScreenshots && (
          <section className="flex flex-col items-center justify-center gap-4">
            <h2 className="section-title">Screenshots</h2>
            {/* screenshots */}
          </section>
        )}
        {hasInsights && (
          <ProjectDetailsSection
            title="Insights & Iterations"
            cards={insightCards}
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/#projects" className="button-style mt-12">
          Explore more projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;
