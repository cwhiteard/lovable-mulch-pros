import { Star, ShieldCheck, MapPin, Award } from "lucide-react";

const stats = [
  { icon: Star, label: "5.0 Rating" },
  { icon: Award, label: "100+ Projects" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Locally Owned" },
];

const TrustBar = () => {
  return (
    <section className="bg-card border-y border-border py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-foreground font-body text-sm font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
