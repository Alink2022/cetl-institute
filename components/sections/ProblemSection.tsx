export function ProblemSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cetl-surface border-y border-cetl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Quote side */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cetl-gold to-transparent" />
            <p className="text-3xl md:text-4xl font-bold text-cetl-text leading-tight pl-8">
              &ldquo;Modern enterprises do not suffer from a lack of{" "}
              <span className="text-cetl-gold">AI awareness</span>. They suffer from an
              inability to <span className="text-cetl-gold">operationalize</span> it.&rdquo;
            </p>
          </div>

          {/* Problems side */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-lg leading-relaxed">
              Traditional training and consultancy models create a critical execution gap that prevents
              organizations from realizing the value of their AI investments.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "✕",
                  title: "Consultants without capability build-up",
                  desc: "External resources leave no lasting internal capability.",
                },
                {
                  icon: "✕",
                  title: "Pilot projects devoid of ROI clarity",
                  desc: "Proofs of concept that never scale to production value.",
                },
                {
                  icon: "✕",
                  title: "Management unable to execute AI strategy",
                  desc: "Leadership teams fluent in buzzwords, not outcomes.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 flex items-center justify-center text-red-500/80 font-bold text-sm shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-cetl-text font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-cetl-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-cetl-border">
              <p className="text-cetl-gold font-semibold text-sm tracking-wide uppercase">
                CETL&apos;s answer: Executional Learning as a Service →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
