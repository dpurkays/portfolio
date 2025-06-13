"use client";

import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import PageSection from "./PageSection";

function Contact() {
  return (
    <PageSection id="contact" title="Get In Touch" className="w-full">
      <motion.p
        variants={boxVariants}
        className="text-center text-muted max-w-2xl mx-auto my-6"
      >
        Open to meaningful collaborations, new opportunities, or just a friendly
        hello. Feel free to reach out. I’d love to hear from you!
      </motion.p>
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-center md:gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </PageSection>
  );
}

export default Contact;
