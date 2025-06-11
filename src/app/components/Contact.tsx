import { boxVariants } from "@/constants/Variant";
import * as motion from "motion/react-client";
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
      {/* <div className="flex flex-col md:flex-row gap-4"> */}
      <motion.div variants={boxVariants} className="lg:mx-auto">
        <ContactInfo />
        {/* <ContactForm /> */}
      </motion.div>
    </PageSection>
  );
}

export default Contact;
