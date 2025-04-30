import Fireflies from "./Fireflies"; // ✅ default import

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen md:min-h-[70vh] flex items-center justify-center px-4">
      <Fireflies />
      <div className="flex flex-col items-center text-center space-y-4 z-10">
        <h1 className="text-3xl font-bold md:text-5xl">
          Hi, I'm <span className="text-accent1">Dula Purkaystha</span>
        </h1>
        <p className="text-base text-primary md:text-lg max-w-md mx-auto">
          a software engineer who values thoughtful design, clean code, and
          staying curious{" "}
          <span className="italic">(even when the bugs bite)</span>.
        </p>
        <p className="text-accent2 text-lg md:text-2xl">
          Grounded. Detail-driven. Always learning.
        </p>
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-accent1 to-accent2 md:w-3/5">
          <a href="#about">
            <div className="bg-background text-accent1 dark:text-accent2 rounded-lg px-6 py-3 font-medium flex items-baseline justify-center gap-2 hover:scale-[1.3] transition-transform duration-300">
              Explore <span className="animate-bounce">↓</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
