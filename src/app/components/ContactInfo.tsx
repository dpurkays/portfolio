import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DividerLine from "./DividerLine";

function ContactInfo() {
  return (
    <motion.div
      variants={boxVariants}
      className="bg-box p-6 rounded-xl flex flex-col gap-4 md:w-1/2"
    >
      <div className="flex flex-col gap-4 flex-1">
        <div className="space-y-4 text-sm text-primary pt-4">
          <div className="flex items-center gap-4 pl-1">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <p className="font-semibold">
              Open to full-time roles & new opportunities
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-accent1 text-lg" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-muted">Greater Vancouver, Canada</p>
            </div>
          </div>
        </div>
      </div>
      <DividerLine direction="horizontal" />
      <section className="flex flex-col gap-4 flex-1">
        <h3 className="font-semibold text-lg text-primary">Follow Me</h3>
        <div className="flex gap-3 text-accent1 text-3xl">
          <a
            href="https://linkedin.com/in/dula-purkaystha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-accent2" />
          </a>
          <a
            href="https://github.com/dpurkays"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-accent2" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactInfo;
