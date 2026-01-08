import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Game Development - 'Cooked'",
    description: "Participated in a hackathon at the University of Manitoba where our team created a game based on the theme 'under pressure' with no prior game development experience.",
    tech: ["Game Development", "Team Collaboration", "Problem Solving"],
    highlights: [
      "Worked in a team with no prior game development experience to create 'Cooked' game.",
      "Won the People's Choice Award at the University of Manitoba hackathon.",
      "Learned game development fundamentals and collaborative problem-solving under time constraints.",
    ],
    github: "https://github.com/yenaing-oo/Cooked-CSSA-GameJam-2024",
    gradient: "from-primary to-accent",
  },
  {
    title: "FlamSlides",
    description: "Created a presentation tool using React and Tailwind CSS that allows users to create and share presentations with ease.",
    tech: ["React", "Tailwind CSS", "Presentation Tool"],
    highlights: [
      "Created a presentation tool using React and Tailwind CSS.",
      "Allowed users to create and share presentations with ease using the power of AI.",
      "Implemented features like slide navigation and presentation sharing.",
    ],
    github: "https://github.com/Bhaulik/Flamslides",
    gradient: "from-primary to-accent",
  },
  {
    title: "UMSATs - Software Team",
    description: "Actively engaged with UMSATs organization on space-related projects and initiatives, contributing to the software team developing tools using Python.",
    tech: ["Python", "Space Technology", "Software Development"],
    highlights: [
      "Gained knowledge of what it takes from launch to maintaining satellites.",
      "Contributing to the software team developing software tools using Python.",
      "Participating in advancing space-related projects and initiatives.",
    ],
    gradient: "from-secondary to-primary",  
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
              whileHover={{ y: -5 }}
              className="group relative bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} mt-1.5 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group backdrop-blur-sm"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
