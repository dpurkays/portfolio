import { techCategories } from "@/constants/TechCategories";
import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import Badge from "./Badge";

function TechStack() {
  return (
    <motion.div
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
      className="grid gap-3 md:grid-cols-2"
    >
      {techCategories.map(({ title, bg, badges }) => (
        <motion.section
          key={title}
          variants={boxVariants}
          className={`${bg} rounded-xl p-4 shadow-md`}
        >
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
        </motion.section>
      ))}
    </motion.div>
  );
}

export default TechStack;
