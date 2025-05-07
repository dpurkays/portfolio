export type NavItem = {
  label: string;
  href: string;
};

export const homeNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
