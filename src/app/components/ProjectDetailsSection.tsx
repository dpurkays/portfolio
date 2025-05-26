import ContentCard, { type ContentCardProps } from "./ContentCard";

interface ProjectDetailsSectionProps {
  title: string;
  cards: ContentCardProps[];
}

function ProjectDetailsSection({ title, cards }: ProjectDetailsSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <h2 id="details" className="section-title">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {cards.map((card, index) => (
          <ContentCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default ProjectDetailsSection;
