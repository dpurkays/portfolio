import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DividerLine from "./DividerLine";

function ContactInfo() {
  return (
    <div className="bg-box p-6 rounded-xl flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg text-primary">
          Contact Information
        </h3>
        <div className="space-y-4 text-sm text-primary">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent1 text-lg" />
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:dpurkays@gmail.com"
                className="text-accent1 hover:underline cursor-pointer"
              >
                dpurkays@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-accent1 text-lg" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-muted">Greater Vancouver Metropolitan Area</p>
            </div>
          </div>
        </div>
      </section>
      <DividerLine />
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg text-primary">Follow Me</h3>
        <div className="flex gap-3 text-accent1 text-3xl">
          <a
            href="https://linkedin.com/in/dula-purkaystha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dpurkays"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactInfo;
