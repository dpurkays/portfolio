import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface PageSectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function PageSection({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
}: PageSectionProps) {
  return (
    <motion.section
      id={id}
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
      className={`section-style ${className}`}
    >
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`section-title ${titleClassName}`}
        >
          {title}
        </motion.h2>
      )}

      {children}
    </motion.section>
  );
}
