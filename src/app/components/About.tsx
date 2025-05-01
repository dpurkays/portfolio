import Image from "next/image";
import dulaImage from "../../../public/dulapfp.png";

function About() {
  return (
    <section className="section-style flex-col gap-4 md:gap-6 mx-auto p-8 pb-20 sm:p-20">
      <h2 id="about" className="text-2xl font-bold md:text-4xl">
        About Me
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
            My path into software development wasn’t exactly traditional, but
            it’s been a rewarding one. I started with a degree in Psychology,
            drawn to understanding how people think and solve problems. That
            same curiosity eventually led me to explore how systems
            work—bringing me back to a lifelong interest in technology. I
            deepened that interest through Computer Science studies and hands-on
            learning at BrainStation’s Software Engineering Bootcamp, where I
            collaborated on real-world projects in fast-paced, team-based
            environments. What I enjoy most about this field is the constant
            evolution—there’s always something new to learn or improve. Whether
            it’s refining a user experience, fixing a tricky bug, or finding a
            more thoughtful way to approach a problem, I find joy in the
            process. I'm known for being detail-oriented, eager to grow, and
            motivated by the opportunity to turn ideas into something real.
          </p>
          <p>
            What I enjoy most about this field is the constant evolution—there’s
            always something new to learn or improve. Whether it’s refining a
            user experience, fixing a tricky bug, or finding a more thoughtful
            way to approach a problem, I find joy in the process. I'm known for
            being detail-oriented, eager to grow, and motivated by the
            opportunity to turn ideas into something real.
          </p>
          <p>
            The transition into tech wasn’t always easy, but it’s been
            incredibly fulfilling. Outside of code, I like to get creative with
            hobbies like crocheting and other hands-on projects—they help me
            think differently and recharge. I’m excited to keep growing,
            collaborating, and creating work that makes a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
