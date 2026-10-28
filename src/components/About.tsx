import { Brain, Code2, GraduationCap, Atom } from "lucide-react";

export const About = () => {
  const coursework = [
    "Algorithms and Analysis",
    "Data Structures",
    "Software Development I & II",
    "Machine Learning",
    "Object-Oriented Programming",
    "Programming Paradigms",
    "Quantum Mechanics I",
    "Classical Mechanics",
    "Thermodynamics",
    "Energy Resources",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Software & Systems Developer</h3>
            <p className="text-muted-foreground">
              Skilled in building scalable applications and embedded systems using Python, TypeScript, React, Node.js, FastAPI, and C/C++, with a focus on clean architecture.
            </p>
          </div>

          <div
            className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI / ML & Research</h3>
            <p className="text-muted-foreground">
              Experienced in applying machine learning and data processing pipelines to real-world research problems, from oceanographic iceberg tracking to automated AI workflows.
            </p>
          </div>

          <div
            className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Atom className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Physics & Aerospace Mindset</h3>
            <p className="text-muted-foreground">
              Blending rigorous analytical physics problem-solving with software engineering, satellite subsystem development (UMSATs), and academic peer tutoring.
            </p>
          </div>
        </div>

        {/* Bio & Education Card */}
        <div
          className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Education & Background</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I am a <strong className="text-foreground">Computer Science and Physics</strong> student at the <strong className="text-foreground">University of Manitoba</strong> (Sept 2023 – Present). My work bridges analytical modeling, computational physics, and modern software engineering.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Currently, I conduct research with Dr. Juliana developing software and ML models to analyze Arctic Ocean iceberg movement, contribute to satellite software development within the UMSATs aerospace initiative, and tutor university students in university physics at OPUS.
          </p>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Relevant University Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-muted/60 border border-border rounded-lg text-sm text-foreground/90 font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
