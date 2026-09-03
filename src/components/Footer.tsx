import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-xl font-bold text-foreground tracking-wide">H & L Solutions LLC</span>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Forestry mulching & land reclamation services.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="/#services" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Services
            </a>
            <a href="/#about" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              About
            </a>
            <a href="/#faq" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              FAQ
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Contact
            </a>
            <Link to="/land-clearing-cost" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Pricing Guide
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground/80 font-body text-sm mb-3 uppercase tracking-widest">Service Areas</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/areas/alexander-city" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Alexander City
            </Link>
            <Link to="/areas/dadeville" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Dadeville
            </Link>
            <Link to="/areas/sylacauga" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Sylacauga
            </Link>
            <Link to="/areas/ashland" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Ashland
            </Link>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground/60 font-body text-sm">
            © {new Date().getFullYear()} H & L Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
