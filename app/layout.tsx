import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LanguageProvider } from "@/lib/i18n";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CETL Institute — Central European Tech Leadership Institute",
  description:
    "Akademische Exzellenz trifft industrielle Umsetzung. Executive Education, strategische Beratung und unabhängige technische Bewertung für Vorstand und Geschäftsführung bei AI- und digitaler Transformation.",
  openGraph: {
    title: "CETL Institute",
    description:
      "Executional Learning as a Service — wir machen Führungskräfte vom passiven Beobachter zum aktiven Architekten AI-getriebenen Unternehmenswerts.",
    type: "website",
    locale: "de_AT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" className={`${displayFont.variable} ${bodyFont.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-cetl-dark text-cetl-text">
        <LanguageProvider>
          <ScrollProgress />
          <CursorGlow />
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
