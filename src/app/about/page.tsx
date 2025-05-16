import { aboutNavItems } from "@/constants/NavItems";
import Image from "next/image";
import dulaImage from "../../../public/images/dula-pfp.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Milestones from "../components/Milestones";
import TechStack from "../components/TechStack";

export default function AboutPage() {
  return (
    <>
      <Header navItems={aboutNavItems} />
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center">
        <div className="min-h-screen md:min-h-[70vh] flex justify-center px-4 py-20 flex-col gap-4 md:gap-6 max-w-5xl">
          <section className="section-style">
            <h2 className="section-title pb-6">Meet Dula</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
              <Image
                src={dulaImage}
                alt="Picture of Dula"
                width={200}
                height={200}
                className="object-cover rounded-3xl hidden md:block bg-box2 ring-2 ring-accent1 shadow-lg shadow-accent1/20"
              />
              <div className="flex flex-col gap-4 md:gap-6">
                <section className="bg-box rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold mb-2 text-lg"> 🚀 My Journey</h3>
                  <p className="mt-1">
                    I began my journey in Psychology, fascinated by how people
                    think and solve problems. But at some point, I felt lost...
                    and that led me to revisit my lifelong passion for
                    technology. Studying Computer Science and completing
                    BrainStation’s Software Engineering Bootcamp helped me
                    rebuild my path, this time through real-world projects,
                    hands-on learning, and collaborative environments.
                  </p>
                </section>
                <section className="bg-box2 rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold mb-2 text-lg">💻 Why Code</h3>
                  <p className="mt-1">
                    What I enjoy most about this field is the constant evolution
                    — there’s always something new to learn or improve. Whether
                    it’s refining a user experience, fixing a tricky bug, or
                    developing an interactive feature, I find joy in turning
                    complex problems into clear, thoughtful solutions. My
                    attention to detail and ability to resolve issues quickly
                    have been recognized in fast-paced, team-driven projects,
                    where I thrive on collaboration and shared learning.
                  </p>
                </section>
                <section className="bg-box rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold mb-2 text-lg">
                    🎨 Outside of Code
                  </h3>
                  <p className="mt-1">
                    Outside of code, I like to get creative with hobbies like
                    crocheting and other hands-on projects. They help me think
                    differently and recharge. I’m excited to keep growing,
                    collaborating, and creating work that makes a meaningful
                    impact.
                  </p>
                </section>
              </div>
            </div>
          </section>
          <section id="skills" className="scroll-mt-24 section-style">
            <h2 className="section-title pb-6">Technical Skills</h2>
            <TechStack />
          </section>
          <Milestones />
          <Contact />
        </div>
      </main>
      <Footer navItems={aboutNavItems} />
    </>
  );
}
