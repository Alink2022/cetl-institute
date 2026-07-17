import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StickyAdvisor } from "@/components/ui/StickyAdvisor";
import { LanguageProvider } from "@/lib/i18n";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const bodyFont = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cetl-institute.vercel.app"),
  title: "CETL Institute | Central European Tech Leadership Institute",
  description:
    "Akademische Exzellenz trifft industrielle Umsetzung. Executive Education, strategische Beratung und unabhängige technische Bewertung für Vorstand und Geschäftsführung bei AI- und digitaler Transformation.",
  openGraph: {
    title: "CETL Institute",
    description:
      "Executional Learning as a Service: wir machen Führungskräfte vom passiven Beobachter zum aktiven Architekten AI-getriebenen Unternehmenswerts.",
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
          <StickyAdvisor />
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
