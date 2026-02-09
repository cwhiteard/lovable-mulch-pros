import { Leaf, Truck, TreePine, Shovel } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Mulch Delivery",
    description: "Bulk mulch delivered straight to your property. Choose from hardwood, cedar, pine bark, and colored varieties.",
  },
  {
    icon: Shovel,
    title: "Installation",
    description: "Our crew handles everything — from bed prep and edging to perfectly spread mulch at the ideal depth.",
  },
  {
    icon: TreePine,
    title: "Land Clearing",
    description: "We transform overgrown lots and wooded areas into clean, usable space with professional clearing services.",
  },
  {
    icon: Leaf,
    title: "Seasonal Refresh",
    description: "Keep your beds looking fresh with our seasonal top-off service. We'll maintain perfect coverage all year.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body text-sm uppercase tracking-[0.25em] font-semibold mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
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
