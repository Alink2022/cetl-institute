import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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
    "Bridging academic excellence and industrial execution. Executive education, strategic advisory, and independent technical assessment for C-Suite leaders navigating AI and digital transformation.",
  openGraph: {
    title: "CETL Institute",
    description:
      "Executional Learning as a Service — transforming organizational leaders from passive observers into active architects of AI-driven enterprise value.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-cetl-dark text-cetl-text">
        <ScrollProgress />
        <CursorGlow />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
