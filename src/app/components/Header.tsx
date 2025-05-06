import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

function Header() {
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
      <div className="flex justify-between items-center bg-accent2 gap-4 px-4 py-4 md:px-6">
        <div className="text-primary font-bold text-xl ">Dula P</div>
        <nav>
          <ul className="flex space-x-6 text-primary font-medium text-sm">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:underline cursor-pointer">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
