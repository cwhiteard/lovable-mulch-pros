import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const benefits = [
  "Fast, accurate quotes for your property",
  "We review brush density, slope & access",
  "Most projects scheduled in 1-2 weeks",
];

// Strip characters that could break out of a mailto: URL or inject headers.
const sanitize = (value: string) =>
  value
    .replace(/\r/g, "")
    .replace(/[<>]/g, "")
    .trim();

const nameSchema = z
  .string()
  .trim()
  .min(1, "Required")
  .max(50, "Must be 50 characters or less")
  .regex(/^[\p{L}\p{M}'’.\- ]+$/u, "Only letters, spaces, hyphens and apostrophes");

const contactSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().trim().min(1, "Required").max(255, "Must be 255 characters or less").email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(20, "Must be 20 characters or less")
    .regex(/^[0-9+()\-.\s]*$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Please add at least 10 characters").max(2000, "Must be 2000 characters or less"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({ firstName, lastName, email, phone, message });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const data = result.data;
    const subject = encodeURIComponent(
      sanitize(`Quote Request from ${data.firstName} ${data.lastName}`)
    );
    const body = encodeURIComponent(
      [
        `Name: ${sanitize(`${data.firstName} ${data.lastName}`)}`,
        `Email: ${sanitize(data.email)}`,
        `Phone: ${sanitize(data.phone ?? "")}`,
        "",
        "Project Details:",
        sanitize(data.message),
      ].join("\n")
    );
    window.location.href = `mailto:hlsolutionsal@gmail.com?subject=${subject}&body=${body}`;
  };

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
                  <p className="text-foreground font-body font-semibold">hlsolutionsal@gmail.com</p>
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="font-body bg-card border-border" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="font-body bg-card border-border" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" className="font-body bg-card border-border" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Phone
                </label>
                <Input type="tel" placeholder="(555) 000-0000" className="font-body bg-card border-border" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Tell us about your project
                </label>
                <Textarea
                  placeholder="Describe the area — approximate acreage, type of vegetation, access to the site, etc."
                  className="font-body min-h-[120px] bg-card border-border"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {Object.values(errors).length > 0 && (
                <div className="rounded border border-destructive/50 bg-destructive/10 p-3 text-sm font-body text-destructive">
                  <ul className="list-disc pl-4 space-y-1">
                    {Object.values(errors).map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Button size="lg" type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base py-6 font-semibold">
                Get a Free Quote
              </Button>
              <p className="text-xs text-muted-foreground font-body text-center">
                Submitting opens your email app with these details pre-filled to hlsolutionsal@gmail.com — just hit send. Prefer to talk? Call (256) 749-5191.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
