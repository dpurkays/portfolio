interface MilestonesProps {
  styles?: string;
}

import MilestoneCard from "./MilestoneCard";
function Milestones({ styles = "" }: MilestonesProps) {
  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-between gap-8 ${styles}`}
    >
      <section className="md:w-1/2 space-y-4">
        <h2 id="experience" className="section-title">
          Experience
        </h2>
        <MilestoneCard
          title="Software Engineer Intern"
          subtitle="Bhaktivedanta Book Trust"
          date="May – Aug 2024"
          description="Contributed to a full-stack web app by developing dynamic
                        components, designing backend APIs, and collaborating in an
                        agile team to ship an MVP."
        />
      </section>
      <section className="md:w-1/2 space-y-4">
        <h2 id="education" className="section-title">
          Education
        </h2>
        <MilestoneCard
          title="BrainStation"
          subtitle="Diploma, Software Engineering"
          date="Mar 2025"
        />
        <MilestoneCard
          title="Simon Fraser University"
          subtitle="BSc, Computer Science"
          date="Oct 2023"
        />
        <MilestoneCard
          title="University of Calgary"
          subtitle="BSc, Psychology"
        />
      </section>
    </div>
  );
}

export default Milestones;
