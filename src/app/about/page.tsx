import Image from "next/image";
import dulaImage from "../../../public/dulapfp.png";
import Milestones from "../components/Milestones";
import TechStack from "../components/TechStack";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4 py-12">
      <div className="section-style flex-col gap-4 md:gap-6 max-w-5xl">
        <section>
          <h2 id="about" className="section-title">
            Meet Dula
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
            <Image
              src={dulaImage}
              alt="Picture of Dula"
              width={200}
              height={200}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col gap-4 md:gap-6">
              <p>
                I began my journey in Psychology, fascinated by how people think
                and solve problems. But at some point, I felt lost... and that
                led me to revisit my lifelong passion for technology. Studying
                Computer Science and completing BrainStation’s Software
                Engineering Bootcamp helped me rebuild my path, this time
                through real-world projects, hands-on learning, and
                collaborative environments.
              </p>
              <p>
                What I enjoy most about this field is the constant evolution;
                there’s always something new to learn or improve. Whether it’s
                refining a user experience, fixing a tricky bug, or finding a
                more thoughtful way to approach a problem, I find joy in the
                process. I'm known for being detail-oriented, eager to grow, and
                motivated by the opportunity to turn ideas into something real.
              </p>
              <p>
                The transition into tech wasn’t always easy, but it’s been
                incredibly fulfilling. Outside of code, I like to get creative
                with hobbies like crocheting and other hands-on projects. They
                help me think differently and recharge. I’m excited to keep
                growing, collaborating, and creating work that makes a
                meaningful impact.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 id="about" className="section-title">
            Technical Skills
          </h2>
          <TechStack />
        </section>
        <Milestones />
      </div>
    </main>
  );
}
