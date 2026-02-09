import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent font-body text-sm uppercase tracking-[0.25em] font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Request a
              <br />
              <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-10">
              Ready to transform your landscape? Reach out and we'll get back to you within 24 hours
              with a free, no-obligation estimate.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Call Us</p>
                  <p className="text-foreground font-body font-semibold">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Email Us</p>
                  <p className="text-foreground font-body font-semibold">info@hlsolutions.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Service Area</p>
                  <p className="text-foreground font-body font-semibold">Greater Metro Area & Surrounding Counties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="font-body" />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="font-body" />
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" className="font-body" />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Phone
                </label>
                <Input type="tel" placeholder="(555) 000-0000" className="font-body" />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Tell us about your project
                </label>
                <Textarea
                  placeholder="Describe the area, type of mulch you're interested in, etc."
                  className="font-body min-h-[120px]"
                />
              </div>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base py-6">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
