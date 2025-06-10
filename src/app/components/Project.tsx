import { projectList } from "@/constants/ProjectList";
import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import FeaturedProject from "./FeaturedProject";
import PageSection from "./PageSection";
import ProjectCard from "./ProjectCard";

function Project() {
  const featured = projectList.find((p) => p.isFeatured);
  const others = projectList.filter((p) => !p.isFeatured);
  return (
    <PageSection id="projects" title="Featured Projects" titleClassName="pb-8">
      {featured && (
        <motion.div variants={boxVariants}>
          <FeaturedProject {...featured} />{" "}
        </motion.div>
      )}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {others.map((project) => (
          <motion.div key={project.id} variants={boxVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </PageSection>
  );
}

export default Project;
