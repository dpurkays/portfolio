import Fireflies from "./Fireflies"; // ✅ default import

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4">
      <Fireflies />
      <div className="text-center space-y-4 z-10">
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
      </div>
    </section>
  );
};

export default Hero;
