import { homeNavItems } from "@/constants/NavItems";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";

export default function Home() {
  return (
    <>
      <Header navItems={homeNavItems} />
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4">
        <Hero />
        <About />
        <Milestones styles="section-style" />
        <Contact />
      </main>
      <Footer navItems={homeNavItems} />
    </>
  );
}
