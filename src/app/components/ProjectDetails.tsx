import { Project } from "@/constants/ProjectList";
import * as motion from "motion/react-client";
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
  challenge,
  solution,
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
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="min-h-screen flex flex-col items-center justify-center gap-4 text-center pb-16"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-accent1"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          {description}
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 pb-4 md:pb-8"
        >
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
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          initial="hidden"
          animate="visible"
        >
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
        </motion.div>
      </motion.section>
      <div
        id="details"
        className="flex flex-col gap-8 md:gap-12 scroll-mt-24 pt-8"
      >
        <ProjectDetailsSection
          title="Project Overview"
          cards={[
            { title: "🎯The Challenge", content: challenge },
            { title: "💡The Solution", content: solution },
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
