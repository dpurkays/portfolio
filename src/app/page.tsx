import About from "./components/About";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4">
      <Hero />
      <About />
      <Milestones styles="xl:w-3/5" />
    </main>
  );
}
