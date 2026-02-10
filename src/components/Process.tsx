const steps = [
  {
    number: "1",
    title: "Request a Quote",
    description: "We evaluate your property and provide a clear, upfront quote based on brush density and terrain.",
  },
  {
    number: "2",
    title: "We Mulch & Clear",
    description: "Our industrial mulchers grind vegetation into mulch that's left on-site to decompose naturally.",
  },
  {
    number: "3",
    title: "Enjoy Your Land",
    description: "Your property is transformed — cleared and ready for your next steps.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            From Overgrown to Usable in 3 Steps
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-3">
            We make land clearing simple, fast, and stress-free.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-display font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded font-body text-base font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Start the Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
