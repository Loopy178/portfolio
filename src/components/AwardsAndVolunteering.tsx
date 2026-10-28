import { Award, Calendar, HeartHandshake, MapPin, Users, Sparkles, Music } from "lucide-react";
import { motion } from "framer-motion";

interface VolunteeringItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  icon: typeof Users;
  highlights: string[];
}

const volunteeringData: VolunteeringItem[] = [
  {
    role: "Physics Tutor",
    organization: "OPUS (Organization of Physics Undergraduate Students)",
    period: "Sept 2024 – Present",
    icon: Users,
    highlights: [
      "Assisting 50+ students with university physics concepts, assignments, and exam preparation through both one-on-one and group tutoring.",
      "Helped students solve rigorous textbook problems and strengthen their mathematical and analytical problem-solving skills.",
    ],
  },
  {
    role: "Volunteer",
    organization: "Science Rendezvous",
    period: "May 2025",
    icon: Sparkles,
    highlights: [
      "Assisted at the Math Mania booth running interactive STEM and math games for youth and families.",
      "Introduced children to foundational mathematics concepts through engaging, hands-on activities.",
    ],
  },
  {
    role: "Volunteer & Trumpet Performer",
    organization: "Pramukh Swami Maharaj Centennial Celebration",
    period: "Dec 2022 – Jan 2023",
    icon: Music,
    highlights: [
      "Performed as a trumpet player in a historic band founded in Nairobi, Kenya.",
      "Participated in a massive 30-day international cultural celebration attended by thousands of daily visitors.",
      "Supported ceremonial events, community processions, and live performances in coordination with a large event team.",
    ],
  },
];

export const AwardsAndVolunteering = () => {
  return (
    <section id="awards-volunteering" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Awards & Volunteering
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Awards Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-transparent border border-primary/30 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-foreground">
                      Undergraduate Research Award
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                      Scholarship Award
                    </span>
                  </div>
                  <p className="text-lg text-primary font-medium mt-1">
                    University of Manitoba
                  </p>
                  <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                    Awarded a cash research scholarship in a competitive university-wide program open to all students, recognizing academic excellence and research potential.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground bg-muted/60 px-4 py-2 rounded-xl self-start md:self-center border border-border">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Apr 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Volunteering Header */}
        <div className="flex items-center gap-3 mb-8">
          <HeartHandshake className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Community & Volunteering Leadership</h3>
        </div>

        {/* Volunteering Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {volunteeringData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md">
                      <Calendar className="h-3 w-3 text-primary" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-primary mb-4">
                    {item.organization}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

