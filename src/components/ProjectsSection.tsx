import { ExternalLink } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const projects = [
  {
    title: "AI Chatbot Assistant",
    desc: "An intelligent conversational AI powered by NLP, capable of understanding context and providing relevant responses.",
    tags: ["Python", "TensorFlow", "NLP", "Flask"],
  },
  {
    title: "E-Commerce Mobile App",
    desc: "A full-featured shopping application with real-time inventory, payment integration, and push notifications.",
    tags: ["Flutter", "Firebase", "Stripe"],
  },
  {
    title: "Smart Campus Platform",
    desc: "A web-based campus management system handling attendance, grades, and scheduling for universities.",
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Health Monitoring IoT",
    desc: "Wearable-connected mobile app that monitors health metrics and provides predictive insights using ML.",
    tags: ["Kotlin", "ML Kit", "BLE"],
  },
];

const ProjectsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="container mx-auto max-w-5xl opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          A selection of projects I've built and contributed to.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass-card p-6 group hover:glow-border transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground mt-1 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
