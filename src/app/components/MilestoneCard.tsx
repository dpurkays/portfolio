import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface MilestoneCardProps {
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  description?: React.ReactNode;
}

export default function MilestoneCard({
  title,
  subtitle,
  date,
  location,
  description,
}: MilestoneCardProps) {
  return (
    <motion.div
      className="bg-box rounded-2xl p-6 space-y-2 hover:-translate-y-1 transform transition duration-200"
      variants={boxVariants}
    >
      <h3 className="font-medium text-xl text-primary">{title}</h3>
      <p className="text-base text-accent2">{subtitle}</p>
      <div className="flex gap-16 text-muted">
        {date && (
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <p className="text-xs">{date}</p>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-1">
            <FaLocationDot />
            <p className="text-xs">{location}</p>
          </div>
        )}
      </div>
      {description && (
        <div className="text-sm text-primary mt-2">{description}</div>
      )}
    </motion.div>
  );
}
