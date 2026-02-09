import heroImage from "@/assets/hero-mulch.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Forestry mulcher clearing overgrown underbrush from wooded land"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth/90 via-earth/60 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          <p className="text-accent font-body text-sm uppercase tracking-[0.25em] font-semibold">
            Forestry Mulching & Land Reclamation
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-earth-foreground leading-[1.1]">
            Reclaim Your
            <br />
            <span className="text-accent">Land</span>
          </h1>
          <p className="text-earth-foreground/80 text-lg md:text-xl font-body max-w-lg leading-relaxed">
            We clear overgrown underbrush, invasive vegetation, and dense thickets
            to restore your property to usable, beautiful land — without the mess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-base px-8 py-6">
              Get a Free Estimate
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-earth-foreground/30 text-earth-foreground hover:bg-earth-foreground/10 font-body text-base px-8 py-6"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
