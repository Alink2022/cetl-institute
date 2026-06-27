import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-cetl-dark text-cetl-text">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
