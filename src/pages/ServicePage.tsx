import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getService, services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "H & L Solutions LLC",
      telephone: "256-749-5191",
      email: "hlsolutionsal@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Alexander City",
        addressRegion: "AL",
        addressCountry: "US",
      },
    },
    areaServed: "Tallapoosa County, Clay County, and surrounding Alabama counties",
    url: `https://hlsolutions.net/services/${service.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://hlsolutions.net/services/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hlsolutions.net/services/${service.slug}`} />
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
              <ArrowLeft className="w-4 h-4" /> Back to all services
            </Link>
            <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-primary font-display font-semibold mb-4">{service.headline}</p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">{service.intro}</p>
          </div>
        </section>

        {/* Benefits + process */}
        <section className="py-16">
          <div className="container max-w-3xl grid gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">What You Get</h2>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground font-body">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">How It Works</h2>
              <ol className="space-y-4">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground font-body pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Before/After */}
        {service.beforeAfter && (
          <section className="py-16 bg-card border-y border-border">
            <div className="container max-w-4xl">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">See the Difference</h2>
              <p className="text-muted-foreground font-body mb-8">{service.beforeAfter.caption}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <img
                    src={service.beforeAfter.before}
                    alt={`Before ${service.title.toLowerCase()}`}
                    className="rounded-lg border border-border w-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                  <figcaption className="text-sm text-muted-foreground font-body mt-2 text-center uppercase tracking-widest">
                    Before
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={service.beforeAfter.after}
                    alt={`After ${service.title.toLowerCase()}`}
                    className="rounded-lg border border-border w-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                  <figcaption className="text-sm text-primary font-body mt-2 text-center uppercase tracking-widest font-semibold">
                    After
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Get a Free {service.title} Quote
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Serving Alexander City, Tallapoosa County, Clay County, and 10+ surrounding counties. Pricing by project, day, or hour based on acreage, brush density, and terrain.
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

        {/* Related services */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Other Services</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-background rounded-lg p-6 border border-border hover:border-primary/40 transition-all"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
