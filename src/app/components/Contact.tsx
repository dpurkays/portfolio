import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div id="contact" className="scroll-mt-24 w-full">
      <section className="section-style">
        <h2 className="section-title pb-4">Get In Touch</h2>
        <p className="text-center text-muted max-w-2xl mx-auto mb-6">
          Open to meaningful collaborations, new opportunities, or just a
          friendly hello. Feel free to reach out. I’d love to hear from you!
        </p>
        {/* <div className="flex flex-col md:flex-row gap-4"> */}
        <div className="lg:mx-auto">
          <ContactInfo />
          {/* <ContactForm /> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;
