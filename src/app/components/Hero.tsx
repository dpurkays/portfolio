import * as motion from "motion/react-client";
import Fireflies from "./Fireflies";

function Hero() {
  return (
    <div className="relative w-full h-screen min-h-screen md:min-h-[70vh] flex justify-center px-4 items-center ">
      <Fireflies />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col items-center text-center space-y-4 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold md:text-7xl"
        >
          {`Hi, I'm`}{" "}
          <motion.span
            className="text-transparent bg-clip-text leading-[1.2]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #14B8A6, #D9A5B3, #14B8A6)",
              backgroundSize: "300% 100%",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Dula Purkaystha
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base text-primary md:text-lg max-w-md mx-auto"
        >
          a software engineer focused on thoughtful design, clean code, and
          staying curious.
          <span className="italic">(even when the bugs bite)</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-accent2 text-lg md:text-2xl"
        >
          Grounded. Detail-driven. Always learning.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm md:text-base text-primary italic"
        >
          Based in Greater Vancouver, Canada 🍁
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="p-[2px] bg-gradient-to-r from-accent1 to-accent2 rounded-lg w-full md:w-fit"
        >
          <a
            href="#about"
            className="bg-background text-accent1 rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 hover:scale-[1.3] transition-transform duration-300"
          >
            Explore <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Hero;
