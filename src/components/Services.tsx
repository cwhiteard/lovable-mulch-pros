import { Trees, Construction, Tractor, MapPin, Shield, Axe, Leaf, Brush, Trash2, CloudRain } from "lucide-react";

const services = [
  {
    icon: Construction,
    title: "Forestry Mulching",
    description: "Reclaim land in a single pass. No burning, no hauling.",
  },
  {
    icon: Trees,
    title: "Underbrush Clearing",
    description: "Dense brush, saplings, and vegetation up to 6\" — cleared clean.",
  },
  {
    icon: Tractor,
    title: "Brush Hogging",
    description: "Mow down tall grass, weeds, and overgrown fields efficiently.",
  },
  {
    icon: MapPin,
    title: "Property Line Clearing",
    description: "Precise boundary and fence row maintenance.",
  },
  {
    icon: Shield,
    title: "Fire Prevention",
    description: "Create defensible space and firebreaks around structures.",
  },
  {
    icon: Axe,
    title: "Trail Cutting",
    description: "Clean access paths through woods and fields.",
  },
  {
    icon: Leaf,
    title: "Invasive Growth Removal",
    description: "Eliminate honeysuckle, briars, and invasive species.",
  },
  {
    icon: Trash2,
    title: "Debris Removal",
    description: "Clear fallen limbs, brush piles, and land debris from your property.",
  },
  {
    icon: CloudRain,
    title: "Storm Clean Up",
    description: "Fast response to storm damage — downed trees, debris, and restoration.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Land Clearing Services
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-3">
            Professional forestry mulching for every situation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background rounded-lg p-8 border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
