import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="currentColor"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
            </svg>
            <p className="text-xs">{date}</p>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="currentColor"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
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
