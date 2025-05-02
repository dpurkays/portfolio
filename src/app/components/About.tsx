import Image from "next/image";
import Link from "next/link";
import dulaImage from "../../../public/dulapfp.png";

function About() {
  return (
    <section
      id="about"
      className="section-style flex-col justify-center items-center gap-4 md:gap-6 mx-auto p-8 pb-20"
    >
      <h2 id="about" className="section-title">
        Meet Dula
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 xl:w-3/5">
        <Image
          src={dulaImage}
          alt="Picture of Dula"
          width={200}
          height={200}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg">
            With a foundation in Psychology and a passion for tech, I
            transitioned into software engineering to build solutions that are
            as functional as they are user-friendly. I thrive in collaborative,
            real-world projects where learning, experimentation, and creativity
            drive progress.
          </p>
          <Link href="/about" className="button-style self-end">
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
