import { Link } from "react-router-dom";
import { services } from "@/data/services";

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
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-background rounded-lg p-8 border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {service.shortDescription}
              </p>
              <span className="inline-block mt-4 text-primary font-body text-sm font-semibold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
