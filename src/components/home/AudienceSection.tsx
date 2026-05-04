import Link from "next/link";
import { Home, Building, Ruler, Hotel } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Homeowners",
    description:
      "Transform your villa or apartment into an intelligent living space. Custom solutions for every budget.",
    href: "/solutions/for-homeowners",
    cta: "Explore Homeowner Solutions",
  },
  {
    icon: Building,
    title: "Builders & Developers",
    description:
      "Differentiate your projects with smart-home-ready apartments. Bulk automation packages for 50-500+ units.",
    href: "/solutions/for-builders",
    cta: "Partner With Us",
  },
  {
    icon: Ruler,
    title: "Architects & Designers",
    description:
      "Seamlessly integrate automation into your designs. We handle specs, wiring plans, and coordination.",
    href: "/solutions/for-architects",
    cta: "Design Together",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Guest-room automation, energy management, and centralized building control for premium hospitality.",
    href: "/solutions/for-hotels",
    cta: "Hotel Solutions",
  },
];

export default function AudienceSection() {
  return (
    <section className="section-padding bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Who We <span className="text-gradient-gold">Work With</span>
          </h2>
          <p className="mt-4 text-navy-300">
            Tailored automation solutions for every stakeholder in the
            property ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group glass-card rounded-xl p-8 hover:border-gold-500/30 transition-all duration-300"
            >
              <a.icon className="w-10 h-10 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                {a.title}
              </h3>
              <p className="text-navy-300 leading-relaxed mb-4">
                {a.description}
              </p>
              <span className="text-sm text-gold-500 font-medium">
                {a.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
