import { Brain, Code2, Rocket } from "lucide-react";

export const About = () => {
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
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Full-Stack Developer</h3>
            <p className="text-muted-foreground">
              Experienced in building full-stack applications with modern frameworks like React, Node.js, and FastAPI, with a focus on performance and user experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI/ML Enthusiast</h3>
            <p className="text-muted-foreground">
              Passionate about artificial intelligence and machine learning, with hands-on experience in building intelligent systems using cutting-edge technologies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.4s" }}>
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Problem Solver</h3>
            <p className="text-muted-foreground">
              Driven by challenging problems and innovative solutions, constantly learning and adapting to new technologies to deliver impactful results.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a third-year Computer Science and Physics student at the University of Manitoba with a passion for technology and problem-solving. A highly motivated individual and strong communicator, I'm eager to learn new processes and contribute to innovative projects.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With experience in customer service and retail, I bring excellent interpersonal skills and attention to detail. I'm actively involved in university clubs and organizations, including participation in game development hackathons and the UMSATs space-related software initiatives. I'm committed to expanding my technical knowledge and making meaningful contributions to the technology community.
          </p>
        </div>
      </div>
    </section>
  );
};
