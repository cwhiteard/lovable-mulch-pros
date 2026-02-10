const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-xl font-bold text-foreground tracking-wide">H & L Solutions</span>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Forestry mulching & land reclamation services.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              About
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground/60 font-body text-sm">
            © {new Date().getFullYear()} H & L Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
