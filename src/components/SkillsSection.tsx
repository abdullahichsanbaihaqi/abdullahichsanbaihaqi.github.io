import useFadeIn from "@/hooks/useFadeIn";

const skills = [
  { name: "Kotlin", level: 90 },
  { name: "Flutter", level: 85 },
  { name: "Python", level: 88 },
  { name: "Laravel", level: 80 },
  { name: "Machine Learning", level: 82 },
  { name: "TensorFlow", level: 75 },
  { name: "Firebase", level: 78 },
  { name: "Git & CI/CD", level: 85 },
];

const SkillsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div ref={ref} className="container mx-auto max-w-3xl opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Technologies and tools I work with daily.
        </p>

        <div className="space-y-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-300 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
