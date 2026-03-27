import useFadeIn from "@/hooks/useFadeIn";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Tech Startup",
    period: "2024 – Present",
    desc: "Developing machine learning pipelines and deploying AI models for production use cases.",
  },
  {
    role: "Mobile Developer",
    company: "Freelance",
    period: "2023 – 2024",
    desc: "Built several cross-platform mobile applications for clients using Flutter and Kotlin.",
  },
  {
    role: "Full-Stack Developer",
    company: "University Project",
    period: "2022 – 2023",
    desc: "Designed and developed a campus information system using Laravel and modern web technologies.",
  },
];

const ExperienceSection = () => {
  const ref = useFadeIn();

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div ref={ref} className="container mx-auto max-w-3xl opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Professional journey and key milestones.
        </p>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              {/* dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="glass-card p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-heading font-semibold text-base">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-primary mb-2 flex items-center gap-1">
                  <Briefcase size={14} /> {exp.company}
                </p>
                <p className="text-sm text-muted-foreground">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
