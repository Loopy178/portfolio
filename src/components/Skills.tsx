import { Code2, Cpu, Layers, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: ["React", "Node.js", "FastAPI", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Developer Tools & AI Workflows",
    icon: Wrench,
    items: [
      "Git",
      "Docker",
      "GCP",
      "VS Code",
      "IntelliJ",
      "PyCharm",
      "Claude",
      "Cursor",
      "Markdown",
    ],
  },
  {
    title: "Hardware, Databases & Domain Tools",
    icon: Cpu,
    items: [
      "Arduino Uno",
      "InfluxDB",
      "Godot",
      "Machine Learning",
      "Data Processing",
      "Vercel",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
