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
  metadataBase: new URL("https://luminsustainability.com"), // update after deploy / domain connected
  icons: { 
    icon: "/icon5.ico?v=5",
    shortcut: "/icon5.ico?v=5",
    apple: "/icon5.ico?v=5",
  },
  verification: {
    google: "my0fmTrfN8Udp0k6q6RygxYmRBpMDRhNiwB8U0dCgeI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-10 md:scroll-pt-20">
      <body className={`min-h-screen antialiased ${nunitoSans.variable}`}>{children}</body>
    </html>
  );
}


