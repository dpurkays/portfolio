import * as motion from "motion/react-client";
import Link from "next/link";
import DividerLine from "./DividerLine";
import MilestoneCard from "./MilestoneCard";
import PageSection from "./PageSection";
import TechTags from "./TechTags";

interface MilestonesProps {
  styles?: string;
}

function Milestones({ styles = "" }: MilestonesProps) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row-reverse justify-between gap-8 ${styles}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <PageSection
        id="experience"
        title="Experience"
        className="md:w-1/2 space-y-4"
      >
        <MilestoneCard
          title="Software Engineer Intern"
          subtitle="Bhaktivedanta Book Trust"
          date="May – Aug 2024"
          location="Remote"
          description={
            <div className="flex flex-col gap-2">
              <p>
                Contributed to a full-stack MVP by developing frontend features,
                backend APIs, and implementing basic ETL logic to organize and
                process data effectively.
              </p>
              <DividerLine />
              <TechTags
                stack={[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "Chart.js",
                  "Bootstrap",
                ]}
              />
            </div>
          }
        />
      </PageSection>
      <PageSection
        id="education"
        title="Education"
        className="md:w-1/2 space-y-4"
      >
        <MilestoneCard
          title="Diploma, Software Engineering"
          subtitle="BrainStation"
          date="Mar 2025"
          location="Remote"
          description={
            <div className="flex flex-col gap-2">
              <p>
                Completed a 12-week intensive bootcamp focused on {}
                modern web development technologies and best practices. Worked
                on multiple solo projects, participated in hackathons and one
                group project.
              </p>
              <p>
                Final capstone: {}
                <Link
                  href="https://animematchmaker.netlify.app/"
                  className="font-medium text-accent2 hover:font-bold"
                >
                  Anime Matchmaker
                </Link>
                .
              </p>
              <DividerLine />
              <TechTags
                stack={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "Sass",
                  "Knex.js",
                  "MySQL",
                  "Rest APIs",
                  "Git",
                  "Agile",
                  "Responsive Design",
                  "DOM manipulation",
                  "Fetching APIs",
                ]}
              />
            </div>
          }
        />
        <MilestoneCard
          title="BSc, Computer Science"
          subtitle="Simon Fraser University"
          date="Oct 2023"
          location="Burnaby, BC"
          description={
            <div className="flex flex-col gap-2">
              <p className="text-sm text-primary mt-2">
                Earned a Bachelor of Science in Computer Science with a focus on
                applied software development and system design. Gained hands-on
                experience across full-stack web development, Android
                application development, and data-driven computing through a
                combination of coursework, labs, and collaborative projects.
              </p>
              <div>
                <DividerLine />
                <h4 className="font-semibold text-sm">Core Areas of Study</h4>
                <ul className="list-disc list-inside text-sm text-primary mt-2 space-y-1">
                  <li>Software Engineering Principles</li>
                  <li>Object-Oriented Programming & Data Structures</li>
                  <li>Android and Mobile Computing</li>
                  <li>User Interface Design</li>
                  <li>Databases and Operating Systems</li>
                  <li>Computational Data Science</li>
                  <li>Compilers and Programming Languages</li>
                </ul>
              </div>
            </div>
          }
        />
        <MilestoneCard
          title="BSc, Psychology"
          subtitle="University of Calgary"
          location="Calgary, AB"
        />
      </PageSection>
    </motion.div>
  );
}

export default Milestones;
