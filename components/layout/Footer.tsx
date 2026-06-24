export function Footer() {
  return (
    <footer className="border-t border-cetl-border bg-cetl-darker">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cetl-gold flex items-center justify-center font-bold text-cetl-darker text-sm">
                C
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-cetl-text font-bold text-sm tracking-wide">CETL</span>
                <span className="text-cetl-text-muted text-xs tracking-widest uppercase">Institute</span>
              </div>
            </div>
            <p className="text-cetl-text-muted text-sm leading-relaxed max-w-xs">
              Central European Tech Leadership Institute. Bridging academic excellence and industrial execution.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-cetl-text text-xs font-semibold tracking-widest uppercase mb-1">Navigation</span>
            {["About", "Services", "ELaaS", "Programs", "Partners", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cetl-text-muted hover:text-cetl-gold text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-cetl-text text-xs font-semibold tracking-widest uppercase mb-1">Contact</span>
            <p className="text-cetl-text-muted text-sm">Vienna, Austria</p>
            <p className="text-cetl-text-muted text-sm">Central Europe</p>
            <a
              href="mailto:office@cetl-institute.eu"
              className="text-cetl-gold hover:text-cetl-gold-light text-sm transition-colors duration-200"
            >
              office@cetl-institute.eu
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cetl-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cetl-text-muted text-xs">
            © {new Date().getFullYear()} CETL Institute. All rights reserved.
          </p>
          <p className="text-cetl-text-muted text-xs">
            All advisory activities are strictly limited to non-insurance sectors.
          </p>
        </div>
      </div>
    </footer>
  );
}
