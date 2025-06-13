import { boxVariants } from "@/constants/Variant";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const [state, handleSubmit] = useForm("xovwdypp");

  useEffect(() => {
    if (state.succeeded) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <motion.section
      variants={boxVariants}
      className="flex flex-col gap-4 flex-1"
    >
      <h3 className="font-semibold text-lg text-primary">Send Me a Message</h3>
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm text-green-500"
            role="status"
            aria-live="polite"
          >
            ✅ Message sent successfully!
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <label className="flex flex-col gap-1 text-muted text-sm font-medium">
              Name
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-box2 text-primary rounded-md px-4 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-muted text-sm font-medium">
              Email
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jdoe@example.com"
                className="w-full bg-box2 text-primary rounded-md px-4 py-2 outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
            <label className="flex flex-col gap-1 text-muted text-sm font-medium">
              Your Message
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Awesome site!"
                className="w-full bg-box2 text-primary rounded-md px-4 py-2 outline-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>
            <button
              type="submit"
              className="flex items-center gap-2 bg-accent1 text-primary px-4 py-2 rounded-md font-semibold hover:bg-accent2 hover:text-box transition"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}{" "}
              <FaPaperPlane />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default ContactForm;
