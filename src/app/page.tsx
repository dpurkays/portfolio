import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-background text-primary flex flex-col items-center justify-center px-4 overflow-hidden">
      <Hero />
      <div className="text-center space-y-4 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        vero minima, debitis aspernatur vitae fugit provident eaque. Dolor amet
        obcaecati sequi sed similique fugit provident, corporis praesentium
        doloribus, aperiam commodi?
      </div>
    </main>
  );
}
