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
    <section id={id} className={`section-style ${className}`}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} // lower amount = more reliable on mobile
          transition={{ duration: 0.6 }}
          className={`section-title ${titleClassName}`}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
}
