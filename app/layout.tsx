import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elmeeda - AI-Powered Breakdown Coordination & Warranty Recovery",
  description: "Stop wasting time on breakdown coordination. Elmeeda automates the entire process, from shop calling to warranty claims, saving you hundreds of thousands of dollars.",
  keywords: ["trucking", "fleet management", "AI", "breakdown coordination", "warranty recovery", "logistics"],
  openGraph: {
    title: "Elmeeda - AI-Powered Breakdown Coordination & Warranty Recovery",
    description: "Stop wasting time on breakdown coordination. Elmeeda automates the entire process, from shop calling to warranty claims.",
    type: "website",
    url: "https://elmeeda.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmeeda - AI-Powered Breakdown Coordination & Warranty Recovery",
    description: "Stop wasting time on breakdown coordination. Elmeeda automates the entire process.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
