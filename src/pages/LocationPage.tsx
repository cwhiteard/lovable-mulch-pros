import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocation, locations } from "@/data/locations";
import { services } from "@/data/services";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocation(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!location) return <Navigate to="/" replace />;

  const otherAreas = locations.filter((l) => l.slug !== location.slug);
  const featuredServices = services.slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Forestry Mulching & Land Clearing in ${location.city}, AL`,
    description: location.metaDescription,
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
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: { "@type": "State", name: "Alabama" },
    },
    url: `https://hlsolutions.net/areas/${location.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={`https://hlsolutions.net/areas/${location.slug}`} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hlsolutions.net/areas/${location.slug}`} />
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
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Forestry Mulching in {location.city}, AL
            </h1>
            <p className="text-xl text-primary font-display font-semibold mb-4">{location.headline}</p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">{location.intro}</p>
          </div>
        </section>

        {/* Local details */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              What We Do in {location.county}
            </h2>
            <ul className="space-y-3">
              {location.localDetails.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground font-body">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services available */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Services Available in {location.city}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {featuredServices.map((s) => (
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
            <p className="text-muted-foreground font-body text-sm mt-6">
              Plus underbrush clearing, fire prevention, invasive growth removal, debris removal, and storm cleanup.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Get a Free Quote in {location.city}
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              We walk your property, talk through your goals, and give you a straight price. Serving {location.city},{" "}
              {location.county}, and 10+ surrounding counties.
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

        {/* Other areas */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Other Areas We Serve</h2>
            <div className="flex flex-wrap gap-4">
              {otherAreas.map((l) => (
                <Link
                  key={l.slug}
                  to={`/areas/${l.slug}`}
                  className="inline-flex items-center gap-2 bg-background border border-border rounded px-5 py-3 font-body text-foreground hover:border-primary/40 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary" /> {l.city}, AL
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

export default LocationPage;
