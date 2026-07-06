import { Container } from "@/components/ui/Container";
import { PROBLEM_ITEMS } from "@/lib/content";

export function ProblemSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-violet to-transparent opacity-40" />
      <span
        className="absolute -top-10 left-4 lg:left-10 font-display text-[14rem] leading-none font-bold text-cetl-gold/[0.05] select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Quote side */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cetl-gold to-transparent opacity-40" />
            <p className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-cetl-text leading-[1.15] pl-8">
              &ldquo;Modern enterprises do not suffer from a lack of{" "}
              <span className="text-gradient-gold">AI awareness</span>. They suffer from an
              inability to <span className="text-gradient-gold">operationalize</span> it.&rdquo;
            </p>
          </div>

          {/* Problems side */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-lg leading-relaxed">
              Traditional training and consultancy models create a critical execution gap that prevents
              organizations from realizing the value of their AI investments.
            </p>

            <div className="flex flex-col gap-5">
              {PROBLEM_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 -mx-4 rounded-xl hover:bg-cetl-dark/60 transition-colors duration-300"
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 rounded-lg bg-cetl-error/10 border border-cetl-error/30"
                    style={{ color: "var(--color-cetl-error, #ff6a6a)" }}
                    aria-hidden="true"
                  >
                    ✕
                  </div>
                  <div>
                    <p className="text-cetl-text font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-cetl-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-cetl-border">
              <p className="text-gradient-gold font-semibold text-sm tracking-wide uppercase">
                CETL&apos;s answer: Executional Learning as a Service →
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
