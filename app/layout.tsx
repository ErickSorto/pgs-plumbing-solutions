import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "PGS Plumbing Solutions LLC | Maryland Plumbing Contractor",
  description:
    "Residential and commercial plumbing contractor serving Prince George's County, Maryland, Washington DC, Virginia, and nearby areas.",
  openGraph: {
    title: "PGS Plumbing Solutions LLC",
    description:
      "Residential and commercial plumbing contractor serving Prince George's County, Maryland, Washington DC, Virginia, and nearby areas.",
    type: "website",
    locale: "en_US",
    siteName: "PGS Plumbing Solutions LLC",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGS Plumbing Solutions LLC",
    description:
      "Residential and commercial plumbing contractor serving Prince George's County, Maryland, Washington DC, Virginia, and nearby areas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
