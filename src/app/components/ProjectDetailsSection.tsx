import * as motion from "motion/react-client";
import ContentCard, { type ContentCardProps } from "./ContentCard";

interface ProjectDetailsSectionProps {
  title: string;
  cards: ContentCardProps[];
}

function ProjectDetailsSection({ title, cards }: ProjectDetailsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center gap-4 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="details"
        className="section-title"
      >
        {title}
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col md:flex-row gap-6 w-full"
      >
        {cards.map((card, index) => (
          <ContentCard key={index} {...card} />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectDetailsSection;
