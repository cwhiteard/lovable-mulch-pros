import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excellent experience from start to finish: efficient, thorough, and very professional. Our property looks incredible.",
    author: "Sarah M.",
  },
  {
    text: "They cleared 5 acres of dense honeysuckle and underbrush in a single day. Absolutely transformed our land.",
    author: "David R.",
  },
  {
    text: "Professional, fair pricing, and the results speak for themselves. Will use them for every clearing job we have.",
    author: "Mike T.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-background rounded-lg p-8 border border-border">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="text-foreground font-body font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
