import Fireflies from "./Fireflies"; // ✅ default import

function Hero() {
  return (
    <div className="relative w-full section-style items-center ">
      <Fireflies />
      <section className="flex flex-col items-center text-center space-y-4 z-10">
        <h1 className="text-3xl font-bold md:text-5xl">
          Hi, I'm <span className="text-accent1">Dula Purkaystha</span>
        </h1>
        <p className="text-base text-primary md:text-lg max-w-md mx-auto">
          a software engineer focused on thoughtful design, clean code, and
          staying curious.
          <span className="italic">(even when the bugs bite)</span>.
        </p>
        <p className="text-accent2 text-lg md:text-2xl">
          Grounded. Detail-driven. Always learning.
        </p>
        <div className="p-[2px] bg-gradient-to-r from-accent1 to-accent2 rounded-lg w-full md:w-fit">
          <a
            href="#about"
            className="bg-background text-accent1 rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 hover:scale-[1.3] transition-transform duration-300"
          >
            Explore <span className="animate-bounce">↓</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
