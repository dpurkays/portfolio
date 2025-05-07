import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div id="about" className="scroll-mt-24 w-full">
      <section className="section-style">
        <h2 className="section-title pb-4 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
