import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="flex flex-col gap-4 flex-1">
      <h3 className="font-semibold text-lg text-primary">Send Me a Message</h3>
      <form className="space-y-4">
        <label className="flex flex-col gap-1 text-muted text-sm font-medium">
          Name
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-box2 text-primary rounded-md px-4 py-2 outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-muted text-sm font-medium">
          Email
          <input
            type="email"
            placeholder="jdoe@example.com"
            className="w-full bg-box2 text-primary rounded-md px-4 py-2 outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-muted text-sm font-medium">
          Your Message
          <textarea
            rows={5}
            placeholder="Awesome site!"
            className="w-full bg-box2 text-primary rounded-md px-4 py-2 outline-none"
          />
        </label>
        <button
          type="submit"
          className="flex items-center gap-2 bg-accent1 text-primary px-4 py-2 rounded-md font-semibold hover:bg-accent2 hover:text-box transition"
        >
          Send Message <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
