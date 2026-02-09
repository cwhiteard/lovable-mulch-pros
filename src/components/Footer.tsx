const Footer = () => {
  return (
    <footer className="bg-earth py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-xl font-bold text-earth-foreground">H & L Solutions</span>
            <p className="text-earth-foreground/60 font-body text-sm mt-1">
              Premium mulching services for your landscape.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#services" className="text-earth-foreground/60 hover:text-earth-foreground font-body text-sm transition-colors">
              Services
            </a>
            <a href="#about" className="text-earth-foreground/60 hover:text-earth-foreground font-body text-sm transition-colors">
              About
            </a>
            <a href="#contact" className="text-earth-foreground/60 hover:text-earth-foreground font-body text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-earth-foreground/10 mt-8 pt-8 text-center">
          <p className="text-earth-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} H & L Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
