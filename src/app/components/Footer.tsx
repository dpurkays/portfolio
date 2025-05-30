import { NavItem } from "@/constants/NavItems";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import DividerLine from "./DividerLine";
import Logo from "./Logo";

type FooterProps = {
  navItems: NavItem[];
};

function Footer({ navItems }: FooterProps) {
  return (
    <footer className="w-full bg-box text-xs text-muted py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <Logo />
          <p className="mt-1">Software Engineer</p>
        </div>

        <div className="flex flex-col md:items-end">
          <h4 className="font-semibold mb-2 uppercase self-start">
            Quick Links
          </h4>
          <ul className="flex gap-4">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="cursor-pointer hover:text-accent1">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="max-w-6xl self-start mt-2 flex gap-2 text-lg">
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
        </div>
      </div>

      <DividerLine />

      <div className="max-w-screen-xl mx-auto flex justify-center">
        <p>
          © {new Date().getFullYear()} Dula Purkaystha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
