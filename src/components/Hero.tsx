import heroImage from "@/assets/hero-mulch.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Forestry mulcher clearing overgrown underbrush from wooded land"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] tracking-tight">
            Forestry Mulching &
            <br />
            Land Clearing
          </h1>
          <p className="text-3xl md:text-4xl font-display font-bold text-primary">
            Reclaim Your Property
          </p>
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-lg leading-relaxed">
            Professional land clearing experts. Reclaim your property with industrial forestry mulching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded font-body text-base font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="border border-primary text-primary px-8 py-4 rounded font-body text-base font-semibold hover:bg-primary/10 transition-colors text-center"
            >
              See Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
