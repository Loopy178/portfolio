import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center animate-float">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">My Resume</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-center">
            View or download a comprehensive overview of my education, experience, projects, and technical skills.
          </p>

          <div className="mb-6 rounded-lg overflow-hidden border border-border bg-background">
            <iframe
              src="/brij resume.pdf"
              className="w-full h-[600px] md:h-[800px]"
              title="Brijesh Patel Resume"
            />
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="/brij resume.pdf" download>
              <Download className="h-5 w-5 mr-2" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
