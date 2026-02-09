import { CheckCircle } from "lucide-react";

const highlights = [
  "Locally owned & operated",
  "Free estimates on all projects",
  "No hauling, no burning — mulch stays on-site",
  "Fully insured and licensed",
  "Minimal ground disturbance",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-sand">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-body text-sm uppercase tracking-[0.25em] font-semibold mb-3">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Clear the Brush,
              <br />
              <span className="text-primary">Keep the Land</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8">
              H & L Solutions specializes in forestry mulching — the most efficient, eco-friendly way to
              reclaim overgrown land. Our equipment grinds underbrush and small trees into natural mulch
              that stays on-site, enriching your soil and preventing erosion. No burning, no hauling,
              no heavy equipment tearing up your property.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-lg p-12 text-center">
              <div className="text-6xl font-display font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground font-body text-lg">Acres Cleared</p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">Fast</div>
                  <p className="text-muted-foreground font-body text-sm">Same-Week Scheduling</p>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">100%</div>
                  <p className="text-muted-foreground font-body text-sm">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
