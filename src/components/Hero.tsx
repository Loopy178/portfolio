import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 backdrop-blur-sm">
            Computer Science & Physics Student
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
        >
          Brijesh Patel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          Technology Enthusiast & Problem Solver
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          BSc in Computer Science & Physics @ University of Manitoba • Started Sept 2023
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
            asChild
          >
            <a href="https://github.com/Loopy178" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
            asChild
          >
            <a href="https://www.linkedin.com/in/brijesh-patel-43b7672a5" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
            asChild
          >
            <a href="mailto:brijjj213@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
};
