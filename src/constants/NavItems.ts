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
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Projects", href: "/#projects" },
];

export const projectNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/about/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "#contact" },
];
