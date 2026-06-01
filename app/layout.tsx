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
      : "https://pgs-plumbing-solutions.vercel.app");

const shareImage = {
  url: "/pgs/share-preview.jpg",
  width: 1200,
  height: 630,
  alt: "PGS Plumbing Solutions LLC preview card with logo and plumbing company name",
};

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
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "PGS Plumbing Solutions LLC",
    description:
      "Residential and commercial plumbing contractor serving Prince George's County, Maryland, Washington DC, Virginia, and nearby areas.",
    images: [shareImage],
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
