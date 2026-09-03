import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Phone, ArrowLeft, DollarSign, Trees, Mountain, Ruler, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metaTitle = "How Much Does Land Clearing Cost in Alabama? | H & L Solutions";
const metaDescription =
  "What does land clearing cost in Alabama? Typical forestry mulching and land clearing price ranges, the factors that drive cost, and how to get an exact free quote.";

const factors = [
  {
    icon: Ruler,
    title: "Acreage",
    text: "More acres means more machine hours. Larger jobs often get a better per-acre rate, but total cost scales with size.",
  },
  {
    icon: Trees,
    title: "Brush density & tree size",
    text: "Light grass and briars clear fast. Dense saplings and hardwoods up to 6 inches take more passes and more time.",
  },
  {
    icon: Mountain,
    title: "Terrain & access",
    text: "Steep slopes, wet ground, rocks, and tight access all slow production and can raise the price.",
  },
  {
    icon: Clock,
    title: "Finish level",
    text: "A rough first pass costs less than a park-like finish with extra passes to grind mulch finer and clean up edges.",
  },
];

const priceRanges = [
  {
    label: "Light brush hogging (grass, weeds, light brush)",
    range: "$100 – $250 per acre",
  },
  {
    label: "Forestry mulching (moderate brush & saplings)",
    range: "$800 – $2,000 per acre",
  },
  {
    label: "Heavy mulching (dense growth, trees up to 6\")",
    range: "$2,000 – $3,500+ per acre",
  },
  {
    label: "Day rate (machine + operator)",
    range: "$1,500 – $2,500 per day",
  },
];

const savings = [
  "One machine does the work of a dozer, haulers, and burn crew",
  "No hauling or dump fees: material stays on site as mulch",
  "No burn permits or waiting on burn conditions",
  "No reseeding or erosion repair, since the mulch layer protects the soil",
];

const LandClearingCost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does Land Clearing Cost in Alabama?",
    description: metaDescription,
    author: {
      "@type": "Organization",
      name: "H & L Solutions LLC",
      url: "https://hlsolutions.net",
    },
    publisher: {
      "@type": "Organization",
      name: "H & L Solutions LLC",
      url: "https://hlsolutions.net",
    },
    mainEntityOfPage: "https://hlsolutions.net/land-clearing-cost",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://hlsolutions.net/land-clearing-cost" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hlsolutions.net/land-clearing-cost" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-card border-b border-border">
          <div className="container max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              How Much Does Land Clearing Cost?
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              The honest answer: it depends on your land. Acreage, brush density, terrain, and the
              finish you want all move the price. Below are typical ranges for forestry mulching and
              land clearing in Alabama, and how to get an exact number for your property with a free
              on-site quote.
            </p>
          </div>
        </section>

        {/* Price ranges */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Typical Price Ranges
            </h2>
            <div className="rounded-lg border border-border overflow-hidden">
              {priceRanges.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-5 ${
                    i % 2 === 0 ? "bg-card" : "bg-background"
                  }`}
                >
                  <span className="text-muted-foreground font-body">{row.label}</span>
                  <span className="font-display font-semibold text-primary whitespace-nowrap">
                    {row.range}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground/70 font-body text-sm mt-4">
              These are general industry ranges for this type of work, not a quote. Small jobs
              often have a minimum charge. Your actual price is set after a free walkthrough of your
              property.
            </p>
          </div>
        </section>

        {/* Cost factors */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              What Drives the Price
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {factors.map((f) => (
                <div key={f.title} className="bg-background rounded-lg p-6 border border-border">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why mulching saves money */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Why Forestry Mulching Usually Costs Less Overall
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Traditional clearing means a dozer, a burn pile or haul-off, and then erosion repair.
              Forestry mulching does it in one step, which is why it's often the most affordable
              option per finished acre:
            </p>
            <ul className="space-y-3">
              {savings.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground font-body">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How pricing works */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              How We Price Your Job
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Every property is different, so we price by project, day, or hour based on acreage,
              brush density, and terrain, whichever is fairest for your job. The process is simple:
            </p>
            <ol className="space-y-4">
              {[
                "Call or request a quote and tell us roughly what you're working with",
                "We walk the property with you (free) and talk through what stays and what goes",
                "You get a firm, no-obligation price before any work is scheduled",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground font-body pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Get an Exact Price, Free
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Serving Alexander City, Tallapoosa County, Clay County, and 10+ surrounding counties.
              Walkthroughs and quotes are always free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded font-body font-semibold hover:bg-primary/90 transition-colors"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:2567495191"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3 rounded font-body font-semibold hover:border-primary/40 transition-colors"
              >
                <Phone className="w-4 h-4" /> 256-749-5191
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandClearingCost;
