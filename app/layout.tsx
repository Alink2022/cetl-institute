import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/i18n";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cetl-institute.vercel.app"),
  title: {
    default: "CETL Institute | Executional Learning as a Service",
    template: "%s | CETL Institute",
  },
  description:
    "CETL Institute combines academic excellence, industry practice and community-powered execution to build lasting Data, AI and technology capabilities in organizations.",
  keywords: [
    "Executional Learning as a Service", "ELaaS", "Data AI capability building",
    "executive education Vienna", "organizational transformation", "embedded engineering",
    "enterprise AI programme", "CETL Institute",
  ],
  openGraph: {
    title: "CETL Institute | Executional Learning as a Service",
    description:
      "From capability building to execution and scalable impact. CETL bridges academic excellence, industry practice and community-powered execution.",
    type: "website",
    locale: "en_GB",
    siteName: "CETL Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "CETL Institute | Executional Learning as a Service",
    description: "From capability building to execution and scalable impact.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
