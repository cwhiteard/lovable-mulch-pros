import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  "My property is disappearing into brush and briars",
  "My land is unusable and unsafe",
  "Overgrown vegetation is lowering property value",
  "It's too steep for normal equipment",
];

const solutions = [
  "Industrial mulching destroys invasive brush",
  "Minimal ground disturbance, no hauling",
  "Immediate transformation, eco-friendly results",
  "Fully insured, professional operators",
];

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 md:p-10 border border-border">
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] font-semibold mb-2">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Sound Familiar?
            </h2>
            <ul className="space-y-5">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-body text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 md:p-10 border border-primary/30">
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] font-semibold mb-2">
              The Solution
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              H & L Delivers
            </h2>
            <ul className="space-y-5">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-body text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
