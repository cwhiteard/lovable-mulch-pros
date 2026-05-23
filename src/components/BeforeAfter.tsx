import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

const pairs = [
  {
    title: "Overgrown Lot Reclaimed",
    description: "Dense brush and tangled undergrowth cleared to open, usable land.",
    before: before1,
    after: after1,
  },
];

const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Before &amp; After
          </h2>
          <p className="text-muted-foreground text-lg">
            See the real transformations our land clearing and forestry mulching deliver.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {pairs.map((pair) => (
            <div key={pair.title} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <figure className="relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src={pair.before}
                    alt={`Before: ${pair.title}`}
                    loading="lazy"
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <figcaption className="absolute top-3 left-3 bg-background/90 text-foreground text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src={pair.after}
                    alt={`After: ${pair.title}`}
                    loading="lazy"
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <figcaption className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{pair.title}</h3>
                <p className="text-muted-foreground mt-1">{pair.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
