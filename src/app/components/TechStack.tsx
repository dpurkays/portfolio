import { techCategories } from "@/constants/TechCategories";
import Badge from "./Badge";

function TechStack() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {techCategories.map(({ title, bg, badges }) => (
        <section key={title} className={`${bg} rounded-xl p-4 shadow-md`}>
          <h3 className="section-subheader">{title}</h3>
          <div className="flex gap-1 flex-wrap">
            {badges.map((badge) => (
              <Badge
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                link={badge.link}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default TechStack;
