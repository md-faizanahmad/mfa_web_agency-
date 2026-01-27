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
  metadataBase: new URL("https://agency.mdfaizanahmad.in/"), // Replace with your actual domain
  title: {
    default: "MFA | High-Performance Digital Engineering Systems",
    template: "%s | MFA Agency",
  },
  description:
    "Specialized in sub-second Next.js systems, technical SEO, and conversion-engineered UI for ambitious brands.",
  keywords: [
    "Next.js Engineering",
    "Technical SEO Agency",
    "Performance Optimization",
    "Conversion Rate Optimization",
    "High-End Web Systems",
    "MFA Digital Agency",
    "Enterprise Web Development",
  ],
  authors: [{ name: "MFA Engineering Team" }],
  creator: "MFA Agency",
  publisher: "MFA Agency",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  // Open Graph for high-energy social sharing
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agency.mdfaizanahmad.in/",
    siteName: "MFA",
    title: "MFA | Engineering Systems for Digital Dominance",
    description:
      "We build sub-second, SEO-dominant digital assets for high-growth businesses.",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 high-energy image
        width: 1200,
        height: 630,
        alt: "MFA Digital Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MFA | Digital Engineering",
    description: "Performance-first Next.js systems.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
