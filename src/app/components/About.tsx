import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import b5img from "../../../public/svg/b5.svg";
import PageSection from "./PageSection";

function About() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <PageSection id="about" title="Meet Dula" titleClassName="pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(150px,_auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={boxVariants}
            className="bg-box p-6 rounded-2xl col-span-full md:col-span-4 row-span-2 flex flex-col justify-between"
          >
            <p className="text-sm text-accent2 mb-4">
              Software Engineer | Curious Thinker | Problem Solver
            </p>
            <p className="text-sm md:text-base text-primary mb-4">
              With a foundation in Psychology and a passion for tech, I
              transitioned into software engineering to build solutions that are
              as functional as they are user-friendly. I thrive in
              collaborative, real-world projects where learning,
              experimentation, and creativity drive progress.
            </p>
            <p className="text-sm md:text-base text-primary mb-4">
              {`Whether it's refining user experiences or building backend systems,
            I love solving problems with thoughtful code. At the core, I'm
            driven by the belief that technology should serve people —> clearly,
            efficiently, and meaningfully.`}
            </p>
            <Link href="/about" className="button-style self-end mt-auto">
              Learn More →
            </Link>
          </motion.div>

          <motion.div
            variants={boxVariants}
            className="bg-box p-6 rounded-2xl col-span-full md:col-span-2 row-span-1"
          >
            <p className="italic text-sm mb-3 text-accent2">
              {`"Currently working with React, TypeScript, and curiosity as my
            stack."`}
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-primary">
              <span className="pill">React</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Node.js</span>
              <span className="pill">Sass</span>
              <span className="pill">Tailwind CSS</span>
              <span className="pill">MySQL</span>
              <span></span>
              <Link
                href="/about#skills"
                className="bg-accent1 text-background px-3 py-1 rounded-full text-xs font-semibold hover:bg-accent2 transition cursor-pointer"
              >
                More →
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={boxVariants}
            className="bg-box2 p-6 rounded-2xl col-span-full md:col-span-2 row-span-1"
          >
            <h3 className="text-sm font-semibold text-accent2 mb-1">
              Beyond the Code
            </h3>
            <p className="text-sm text-primary">
              I recharge through art, journaling, and crafts like crocheting.
              These creative breaks help me return to code with fresh energy and
              clarity.
            </p>
          </motion.div>

          <motion.div
            variants={boxVariants}
            className="hidden md:grid bg-box rounded-2xl col-span-full md:col-span-2 overflow-hidden relative"
          >
            <Image src={b5img} alt="code" className="object-cover" fill />
          </motion.div>

          <motion.div
            variants={boxVariants}
            className="bg-box2 p-6 rounded-2xl col-span-full md:col-span-2 flex items-center justify-center text-center text-lg font-semibold italic text-accent1"
          >
            “Rooted in curiosity. Grown through iteration.”
          </motion.div>

          <motion.div
            variants={boxVariants}
            className="bg-gradient-to-br from-accent1 to-accent2 text-box p-6 rounded-2xl col-span-full md:col-span-2 flex flex-col justify-between"
          >
            <h3 className="text-base font-semibold mb-2">Want to connect?</h3>
            <p className="text-sm mb-4">
              Let’s talk about building something meaningful together.
            </p>
            <Link
              href="#contact"
              className="font-semibold text-sm hover:font-bold"
            >
              Contact Me →
            </Link>
          </motion.div>
        </motion.div>
      </PageSection>
    </div>
  );
}

export default About;
