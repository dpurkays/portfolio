import Fireflies from "./Fireflies"; // ✅ default import

function Hero() {
  return (
    <div className="relative w-full h-screen min-h-screen md:min-h-[70vh] flex justify-center px-4 items-center ">
      <Fireflies />
      <section className="flex flex-col items-center text-center space-y-4 z-10">
        <h1 className="text-5xl font-bold md:text-7xl">
          {`Hi, I'm`}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">
            Dula Purkaystha
          </span>
        </h1>
        <p className="text-base text-primary md:text-lg max-w-md mx-auto">
          a software engineer focused on thoughtful design, clean code, and
          staying curious.
          <span className="italic">(even when the bugs bite)</span>.
        </p>
        <p className="text-accent2 text-lg md:text-2xl">
          Grounded. Detail-driven. Always learning.
        </p>
        <p className="text-sm md:text-base text-primary italic">
          Based in Greater Vancouver, Canada 🍁
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
