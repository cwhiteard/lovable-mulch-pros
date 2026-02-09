import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-earth/95 backdrop-blur-sm border-b border-earth-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-earth-foreground">
          MulchPro
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-earth-foreground/80 hover:text-earth-foreground font-body text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-md font-body text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-earth-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-earth border-t border-earth-foreground/10 py-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-earth-foreground/80 hover:text-earth-foreground font-body text-base"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-md font-body text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
