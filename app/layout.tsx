import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WebVitals } from "@/components/WebVitals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elmeeda.com"),
  title: "Elmeeda - AI-Powered Breakdown Coordination & Warranty Recovery",
  description: "Automate fleet maintenance coordination with AI. Elmeeda calls shops, books repairs, and recovers $150K-$500K in missed warranty claims. Save hundreds of hours on breakdown coordination for trucking fleets.",
  keywords: [
    "trucking",
    "fleet management",
    "AI",
    "breakdown coordination",
    "warranty recovery",
    "logistics",
    "fleet maintenance software",
    "AI fleet management",
    "trucking maintenance automation",
    "warranty recovery software",
    "fleet operations software",
    "commercial fleet management",
    "automated shop calling",
    "truck maintenance platform"
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://elmeeda.com",
  },
  themeColor: "#4169E1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Elmeeda",
    title: "Elmeeda - AI-Powered Breakdown Coordination & Warranty Recovery",
    description: "Automate fleet maintenance coordination with AI. Elmeeda calls shops, books repairs, and recovers $150K-$500K in missed warranty claims. Save hundreds of hours on breakdown coordination.",
    type: "website",
    url: "https://elmeeda.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elmeeda - AI-Powered Fleet Maintenance Coordination Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmeeda - AI-Powered Breakdown Coordination & Warranty Recovery",
    description: "Automate fleet maintenance coordination with AI. Save $150K-$500K in warranty claims and hundreds of hours on breakdown coordination.",
    images: [
      {
        url: "/twitter-image.png",
        alt: "Elmeeda - AI-Powered Fleet Maintenance Coordination Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
