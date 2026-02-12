import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const benefits = [
  "Fast, accurate quotes for your property",
  "We review brush density, slope & access",
  "Most projects scheduled in 1-2 weeks",
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Let's Get Started on Your Land
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8">
              Fill out our quick form and we'll review your property details, assess brush density and terrain, and get back to you with a personalized quote.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-body">{b}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Call Us</p>
                  <p className="text-foreground font-body font-semibold">(256) 749-5191</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Email Us</p>
                  <p className="text-foreground font-body font-semibold"><p className="text-foreground font-body font-semibold">hlsolutionsal@gmail.com</p></p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Service Area</p>
                  <p className="text-foreground font-body font-semibold">Alexander City Area — Tallapoosa, Clay & Surrounding Counties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 border border-border">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="font-body bg-card border-border" />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="font-body bg-card border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" className="font-body bg-card border-border" />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Phone
                </label>
                <Input type="tel" placeholder="(555) 000-0000" className="font-body bg-card border-border" />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Tell us about your project
                </label>
                <Textarea
                  placeholder="Describe the area — approximate acreage, type of vegetation, access to the site, etc."
                  className="font-body min-h-[120px] bg-card border-border"
                />
              </div>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base py-6 font-semibold">
                Get a Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
