const skills = {
  "Customer Service": ["Customer Assistance", "Customer Relations", "Product Recommendations", "Customer Service"],
  "Retail Operations": ["Payment Collection", "Returns Processing", "Cash Handling", "Inventory Control"],
  "Technical & Communication": ["Strong Communicator", "Team Player", "Problem Solving", "Python"],
  "Languages": ["English", "Fluent Communication"],
};

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
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
