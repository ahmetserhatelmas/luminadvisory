// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumin Advisory — Science‑Driven Sustainability Advisory",
  description:
    "Science‑Driven Sustainability Advisory for Industry and Tech.",
  metadataBase: new URL("https://lumin-advisory.vercel.app"), // update after deploy / domain connected
  icons: { icon: "favicon-32x32" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-10 md:scroll-pt-20">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}


