import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import TechTags from "./TechTags";

export interface ContentCardProps {
  title: string;
  content?: string;
  items?: string[];
  type?: "tech" | "features";
}

function ContentCard({ title, content, items, type }: ContentCardProps) {
  return (
    <motion.section
      variants={boxVariants}
      className="bg-box rounded-lg p-4 shadow-md w-full flex flex-col gap-4"
    >
      <h3 className="section-subheader">{title}</h3>
      {type === "tech" && items && <TechTags stack={items} />}

      {type === "features" && items && (
        <ul className="list-disc list-inside space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {!type && content && <p>{content}</p>}
    </motion.section>
  );
}

export default ContentCard;
