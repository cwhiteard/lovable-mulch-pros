import { Trees, Tractor, MapPin, Shield } from "lucide-react";

const services = [
  {
    icon: Trees,
    title: "Underbrush Clearing",
    description: "We mulch dense underbrush, saplings, and invasive vegetation up to 6\" in diameter, leaving clean ground behind.",
  },
  {
    icon: Tractor,
    title: "Forestry Mulching",
    description: "Our heavy-duty mulching equipment grinds vegetation in place — no hauling, no burning, no mess. Just cleared land.",
  },
  {
    icon: MapPin,
    title: "Property Line Clearing",
    description: "Reclaim overgrown fence lines, property boundaries, and easements so you can see and use your full acreage.",
  },
  {
    icon: Shield,
    title: "Fire Prevention",
    description: "Reduce wildfire risk by creating defensible space around structures. We clear fuel loads and create firebreaks.",
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
