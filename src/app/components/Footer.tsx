import { homeNavItems as navItems } from "@/constants/NavItems";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import DividerLine from "./DividerLine";

function Footer() {
  return (
    <footer className="w-full bg-box text-xs text-muted py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold">
            <span className="text-accent1">Dula</span>{" "}
            <span className="text-accent2">P</span>
          </h3>
          <p className="mt-1">Software Engineer</p>
        </div>

        <div className="flex flex-col md:items-end">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="flex gap-4">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="cursor-pointer">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 flex md:justify-end gap-2 text-lg">
        <a
          href="https://github.com/dpurkays"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent1 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/dula-purkaystha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent1 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:dpurkays@gmail.com"
          className="hover:text-accent1 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <DividerLine />

      <div className="max-w-6xl mx-auto flex justify-center">
        <p>
          © {new Date().getFullYear()} Dula Purkaystha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
