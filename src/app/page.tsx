import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4">
      <Hero />
      <About />
    </main>
  );
}
