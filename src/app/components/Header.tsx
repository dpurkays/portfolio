"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";

type NavItem = {
  label: string;
  href: string;
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex justify-between items-center bg-background gap-4 px-4 py-4 md:px-6">
        <div className="text-primary font-bold text-xl ">Dula P</div>
        <div
          className="lg:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon />
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 text-primary font-medium text-sm">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block px-4 py-2 rounded transition hover:bg-accent1 cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-background">
          <ul className="flex flex-col items-center py-4 space-y-2 text-primary font-medium text-sm">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded transition active:bg-accent1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
