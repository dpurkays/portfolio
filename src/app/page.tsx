import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4">
        <Hero />
        <About />
        <Milestones styles="section-style" />
      </main>
      <Footer />
    </>
  );
}
