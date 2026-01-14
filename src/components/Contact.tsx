import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      fd.append("access_key", "4bae47da-57ad-4a35-ae04-cd20c392de50");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Let's Connect!</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities and selected topics of physics. I also like hiking so we can also talk about that!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
