// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumin Advisory — ESG, LCA, Scope 3 & Critical Minerals",
  description:
    "ESG strategy & assurance, LCA/EPD/PCF, Scope 3 carbon intelligence, and critical minerals supply chains for industry and tech.",
  metadataBase: new URL("https://lumin-advisory.vercel.app"), // update after deploy / domain connected
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-10 md:scroll-pt-20">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}


