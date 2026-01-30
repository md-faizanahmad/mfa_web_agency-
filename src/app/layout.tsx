import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layouts/Footer";
import { navItems } from "@/data/navigation";
import NewHeader from "@/components/Layouts/NewHeader";
import ToastProvider from "@/providers/ToastProvider";
import LocalSchema from "@/components/seo/LocalSchema";

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
    default: "MFA Agency – Web Development & SEO Services",
    template: "%s | MFA Agency",
  },

  description:
    "MFA Agency provides modern website development, SEO optimization, and high-performance Next.js solutions for growing businesses.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://agency.mdfaizanahmad.in",
  },
  verification: {
    google: "Qszt7iG9xG-ULVPCLsXaKo-vKTFVPoee4MLccTyabVI",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agency.mdfaizanahmad.in",
    siteName: "MFA Agency",
    title: "MFA Agency – Web Development & SEO Services",
    description:
      "High-performance websites, technical SEO, and conversion-focused UI engineering.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MFA Agency – Web Development & SEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MFA Agency – Web Development & SEO",
    description:
      "Modern websites and SEO-first digital solutions built with Next.js.",
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
      <head>
        <LocalSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-brand-midnight selection:bg-brand-cobalt selection:text-white`}
      >
        <NewHeader items={navItems} />
        {/* <Header /> */}
        {/* Added min-h-screen to ensure footer stays at bottom on short pages */}
        <main className="min-h-screen">
          {children}
          <ToastProvider />
        </main>
        <Footer />
      </body>
    </html>
  );
}
