interface LogoProps {
  className?: string;
}

// Beide Logo-SVGs bestehen aus einem einzigen Pfad ohne fill-Attribut (Vorgabe
// aus dem Entwicklerpaket). Statt <img> (nicht einfärbbar) nutzen wir sie als
// CSS-Maske auf einem Element mit background-color: currentColor — so folgt
// die Logofarbe einfach der Tailwind text-*-Klasse des Elternelements.

export function LogoWordmark({ className = "" }: LogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        aspectRatio: "698.78 / 142.17",
        WebkitMaskImage: "url(/CETL_Logo_Vertical.svg)",
        maskImage: "url(/CETL_Logo_Vertical.svg)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}

export function LogoMonogram({ className = "" }: LogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        aspectRatio: "180.95 / 142.17",
        WebkitMaskImage: "url(/CETL_Logo_Icon.svg)",
        maskImage: "url(/CETL_Logo_Icon.svg)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
