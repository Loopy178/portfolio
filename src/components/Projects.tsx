import { Calendar, ExternalLink, Github, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectItem {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
  award?: string;
  gradient: string;
}

const projects: ProjectItem[] = [
  {
    title: "ApexGameZone",
    subtitle: "POS System with Markov Chain Auto-Shopping",
    date: "Jul 2026",
    description:
      "A comprehensive course project for software development focused on building robust software architectures and integrating AI/ML features into a Point of Sale (POS) system.",
    tech: ["TypeScript", "Python", "AI/ML", "Markov Chains", "POS Systems"],
    highlights: [
      "Engineered a full-featured Point of Sale (POS) system applying modern software development patterns.",
      "Implemented a Markov Chain algorithm for automated shopping predictions and AI/ML-driven product recommendations.",
      "Focused on modular system design, clean APIs, and maintainable software architecture.",
    ],
    github: "https://github.com/Loopy178",
    gradient: "from-primary to-accent",
  },
  {
    title: "Propeller Boy",
    subtitle: "Interactive Hardware-Software Game",
    date: "Feb 2026",
    description:
      "Award-winning interactive physical-computing game built during the UMake hackathon, blending embedded hardware with Python game mechanics.",
    tech: ["Python", "Arduino Uno", "Embedded Systems", "Hardware Integration"],
    highlights: [
      "Developed an award-winning interactive game during the UMake hackathon under tight deadlines.",
      "Learned hardware-software integration and embedded systems concepts hands-on with Arduino Uno.",
      "Showcased at Ubisoft and retained by the Computer-Electrical Department for future university outreach initiatives.",
    ],
    award: "Showcased at Ubisoft & Dept. Outreach",
    github: "https://github.com/Loopy178",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio & Backend API",
    date: "Sept 2025",
    description:
      "Designed, developed, and deployed personal portfolio website with a responsive design, dynamic interactions, and an integrated contact system.",
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "Tailwind CSS", "Vercel"],
    highlights: [
      "Designed, developed, and deployed personal portfolio website to showcase projects, skills, and achievements.",
      "Implemented a full contact inquiry pipeline allowing direct visitor messaging.",
      "Optimized for smooth animations, dark/light themes, and full mobile responsiveness.",
    ],
    github: "https://github.com/Loopy178/portfolio",
    gradient: "from-primary to-secondary",
  },
  {
    title: "Flamslides",
    subtitle: "AI-Powered Slide Deck Generator",
    date: "Feb 2025",
    description:
      "A cutting-edge web application leveraging generative AI to automatically create polished, complete presentation slide decks from user prompts.",
    tech: ["JavaScript", "Next.js", "GPT-4", "DALL·E 3", "AI Integration"],
    highlights: [
      "Developed a web application leveraging GPT-4 and DALL·E 3 to automatically generate presentation slides.",
      "Integrated AI-generated written content and visuals into a streamlined, high-speed workflow.",
      "Designed an intuitive user interface to simplify slide creation, editing, and customization.",
    ],
    github: "https://github.com/Bhaulik/Flamslides",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Cooked",
    subtitle: "Game Development Jam Project",
    date: "Oct 2024",
    description:
      "An award-winning fast-paced collaborative game designed and created under pressure for the University of Manitoba hackathon.",
    tech: ["Godot", "GDScript", "Game Mechanics", "Team Collaboration"],
    highlights: [
      "Collaborated within a multidisciplinary team to design and develop the game 'Cooked'.",
      "Implemented core gameplay mechanics, physics interactions, and contributed to overall UX decisions.",
      "Received the Best Game Award for exceptional creativity and execution.",
    ],
    award: "Best Game Award Winner",
    github: "https://github.com/yenaing-oo/Cooked-CSSA-GameJam-2024",
    gradient: "from-accent to-primary",
  },
  {
    title: "UMSATs Software Team",
    subtitle: "CubeSat Satellite Systems Development",
    date: "Sept 2024 – Present",
    description:
      "Contributing to flight and ground software systems supporting satellite development within a premier student aerospace organization of 100+ members.",
    tech: ["Python", "C", "InfluxDB", "JavaScript", "HTML", "Aerospace Systems"],
    highlights: [
      "Contributed to software systems supporting satellite development within a 100+ member aerospace team.",
      "Utilized multiple programming languages and tools for telemetry data processing, monitoring, and subsystem functionality.",
      "Gained comprehensive experience across the complete software lifecycle, from dev and testing to deployment and maintenance.",
    ],
    github: "https://github.com/Loopy178",
    gradient: "from-primary to-accent",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}
              />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-medium text-muted-foreground mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label={`${project.title} GitHub link`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span>{project.date}</span>
                  </div>
                  {project.award && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-accent/15 text-accent border border-accent/30">
                      <Trophy className="h-3 w-3" />
                      {project.award}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} mt-1.5 flex-shrink-0`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5 pt-2 border-t border-border/40">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.github && (
                <div className="relative z-10 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group backdrop-blur-sm"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Code / Project
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
