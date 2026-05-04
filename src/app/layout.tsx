import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { COMPANY } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/metadata";

const GA_ID = "G-RV11C3QEJP";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — India's Most Experienced Smart Home Company | ${COMPANY.experience} Years`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.tagline}. ${COMPANY.experience} years of smart home automation expertise. Smart lighting, security, climate control, home theater & whole home automation across India.`,
  metadataBase: new URL("https://growmoresolutions.com"),
  openGraph: {
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://growmoresolutions.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — India's Most Experienced Smart Home Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://growmoresolutions.com/opengraph-image.png"],
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
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-navy-50">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Organization Schema — site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />

        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
