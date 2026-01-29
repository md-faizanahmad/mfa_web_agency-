import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layouts/Footer";
import { navItems } from "@/data/navigation";
import NewHeader from "@/components/Layouts/NewHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Viewport configuration for high-performance mobile scaling
export const viewport: Viewport = {
  themeColor: "#020617", // Matches your brand-midnight
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),

  title: {
    default: "MFA Agency – Digital Engineering & Performance Systems",
    template: "%s | MFA Agency",
  },

  description:
    "MFA Agency builds high-performance web systems using Next.js, technical SEO, and conversion-focused UI engineering.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://agency.mdfaizanahmad.in",
  },

  authors: [{ name: "MFA Agency" }],
  creator: "MFA Agency",
  publisher: "MFA Agency",

  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agency.mdfaizanahmad.in",
    siteName: "MFA Agency",
    title: "MFA Agency – Digital Engineering & Performance Systems",
    description:
      "We engineer fast, SEO-ready, conversion-focused digital systems for ambitious businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MFA Agency – Digital Engineering Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MFA Agency – Digital Engineering",
    description:
      "Performance-first web systems built with Next.js and technical SEO.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-brand-midnight selection:bg-brand-cobalt selection:text-white`}
      >
        <NewHeader items={navItems} />
        {/* <Header /> */}
        {/* Added min-h-screen to ensure footer stays at bottom on short pages */}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
