import { CheckCircle } from "lucide-react";

const highlights = [
  "Locally owned & operated",
  "Free estimates on all projects",
  "No hauling, no burning; mulch stays on-site",
  "Fully insured and licensed",
  "Minimal ground disturbance",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Clear the Brush, Keep the Land
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8">
              H & L Solutions LLC specializes in forestry mulching, the most efficient, eco-friendly way to
              reclaim overgrown land. Our equipment grinds underbrush and small trees into natural mulch
              that stays on-site, enriching your soil and preventing erosion.
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
            <div className="bg-card rounded-lg p-12 text-center border border-border">
              <div className="text-6xl font-display font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground font-body text-lg">Counties Served</p>
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
