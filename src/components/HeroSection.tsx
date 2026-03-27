import { Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-heading text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up">
          Welcome to my portfolio
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-up-delay-1">
          Abdullah Ichsan{" "}
          <span className="text-gradient">Baihaqi</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 animate-fade-up-delay-2">
          Software Engineer · Mobile Developer · AI Engineer
        </p>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up-delay-3">
          Passionate about crafting elegant mobile apps and intelligent AI solutions that make a real impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
