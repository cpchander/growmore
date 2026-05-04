import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-navy-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="mt-4 text-navy-300">
            A proven 4-step process refined over decades to deliver your
            smart home seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold-500/50 to-transparent z-0" />
              )}

              <div className="relative glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/10 border-2 border-gold-500/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gold-500">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
