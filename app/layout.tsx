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
  title: "Lumin Advisory - Sustainability Strategy",
  description:
    "Science-Driven Sustainability Advisory for Industry and Tech.",
  metadataBase: new URL("https://luminsustainability.com"), // update after deploy / domain connected
  icons: { icon: "icon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-10 md:scroll-pt-20">
      <body className={`min-h-screen antialiased ${nunitoSans.variable}`}>{children}</body>
    </html>
  );
}


