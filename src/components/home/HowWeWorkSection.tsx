import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HowWeWorkSteps from "./HowWeWorkSteps";

export default function HowWeWorkSection({
  bg = true,
}: {
  bg?: boolean;
}) {
  return (
    <section className={`section-padding ${bg ? "bg-navy-900/50" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How We <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="mt-4 text-navy-300">
            A proven 5-step process refined over 15+ years — and you always know
            exactly what you receive at each stage.
          </p>
        </div>

        <HowWeWorkSteps />

        <div className="text-center mt-12">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
          >
            See our full process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
