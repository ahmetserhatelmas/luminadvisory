// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumin Advisory — Sustainability Strategy",
  description:
    "Lumin Advisory empowers businesses to navigate complex ESG landscapes with confidence. We provide rigorous, science-driven advisory services that bridge the gap between ambitious targets and tangible, data-backed outcomes.",
  metadataBase: new URL("https://luminsustainability.com"),
  keywords: [
    "sustainability consulting",
    "ESG strategy",
    "climate change advisory",
    "decarbonization",
    "LCA",
    "Product Carbon Footprint",
    "CSRD compliance",
    "CBAM",
    "critical raw materials",
    "GHG accounting",
    "scope 3 emissions",
    "science-based targets",
    "SBTi",
    "EU Green Deal",
    "sustainability reporting",
  ],
  authors: [{ name: "Lumin Advisory" }],
  creator: "Lumin Advisory",
  publisher: "Lumin Advisory",
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
  icons: { 
    icon: [
      { url: "/favicon.ico?v=8", sizes: "any" },
      { url: "/64x64icon.png?v=8", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico?v=8",
    apple: "/64x64icon.png?v=8",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luminsustainability.com",
    siteName: "Lumin Advisory",
    title: "Lumin Advisory — Sustainability Strategy",
    description: "Lumin Advisory empowers businesses to navigate complex ESG landscapes with confidence. We provide rigorous, science-driven advisory services.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lumin Advisory Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumin Advisory — Sustainability Strategy",
    description: "Science-driven sustainability advisory services for businesses navigating complex ESG landscapes.",
    images: ["/logo.png"],
  },
  verification: {
    google: "my0fmTrfN8Udp0k6q6RygxYmRBpMDRhNiwB8U0dCgeI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumin Advisory",
    "description": "Science-driven sustainability advisory services",
    "url": "https://luminsustainability.com",
    "logo": "https://luminsustainability.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business Inquiries",
      "availableLanguage": ["English", "Deutsch", "Nederlands", "Türkçe"]
    },
    "areaServed": ["Europe", "Middle East", "Africa"],
    "knowsAbout": [
      "Sustainability Consulting",
      "ESG Strategy",
      "Climate Change",
      "Decarbonization",
      "Life Cycle Assessment",
      "Carbon Footprint",
      "CSRD Compliance",
      "CBAM",
      "Critical Raw Materials"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth scroll-pt-10 md:scroll-pt-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-screen antialiased ${nunitoSans.variable}`}>{children}</body>
    </html>
  );
}


