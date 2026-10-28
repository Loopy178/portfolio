import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  skills: string[];
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Summer Internship (Software Developer)",
    company: "University of Manitoba",
    location: "Winnipeg, MB",
    period: "May 2025 – Sept 2025",
    type: "Development",
    achievements: [
      "Working with Dr. Juliana to develop software for analyzing iceberg movement in the Arctic Ocean.",
      "Developing Python scripts for turning raw numerical model run data into readable, structured datasets.",
      "Developed an analytical tool for analyzing the post-processed oceanographic files using Machine Learning.",
    ],
    skills: ["Python", "Machine Learning", "Data Processing", "Scientific Computing"],
    color: "from-primary to-accent",
  },
  {
    title: "Team Leader",
    company: "West 49",
    location: "Winnipeg, MB",
    period: "Mar 2024 – Present",
    type: "Retail Leadership",
    achievements: [
      "Delivered strong customer service while handling transactions accurately and efficiently.",
      "Managed inventory operations and supported daily store organization and merchandising.",
      "Served as key-holder responsible for opening and closing the store and overseeing daily register reconciliation.",
    ],
    skills: ["Leadership", "Customer Service", "Inventory Management", "Operations"],
    color: "from-secondary to-primary",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background hidden md:block shadow-md" />

                <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-lg text-primary font-semibold mb-1">
                        <Briefcase className="h-5 w-5" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-lg self-start">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mt-4 mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`}
                        />
                        <span className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium bg-muted/70 text-foreground/80 rounded-md border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
