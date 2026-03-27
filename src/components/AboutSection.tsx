import { Code, Cpu, Smartphone } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const highlights = [
  { icon: Smartphone, title: "Mobile Development", desc: "Building performant cross-platform apps with Flutter & Kotlin" },
  { icon: Cpu, title: "AI / Machine Learning", desc: "Developing intelligent models with Python and modern ML frameworks" },
  { icon: Code, title: "Full-Stack Engineering", desc: "End-to-end web solutions using Laravel and modern tooling" },
];

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="section-padding">
      <div ref={ref} className="container mx-auto max-w-5xl opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          I'm a versatile engineer with a strong focus on mobile development and AI. I love turning complex problems into simple, beautiful, and intuitive solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <h.icon size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
