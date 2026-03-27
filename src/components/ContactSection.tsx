import { Mail, Github, Linkedin } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const ContactSection = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="container mx-auto max-w-xl text-center opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:abdullahibaihaqi@gmail.com"
            className="inline-flex items-center gap-3 glass-card px-6 py-3 w-full max-w-xs hover:glow-border transition-all duration-300 justify-center"
          >
            <Mail size={18} className="text-primary" />
            <span className="text-sm">abdullahibaihaqi@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card px-6 py-3 w-full max-w-xs hover:glow-border transition-all duration-300 justify-center"
          >
            <Linkedin size={18} className="text-primary" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card px-6 py-3 w-full max-w-xs hover:glow-border transition-all duration-300 justify-center"
          >
            <Github size={18} className="text-primary" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
