"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Lumin_logo_1.png"
            alt="Lumin Advisory logo"
            width={60}
            height={60}
            className="h-14 w-auto"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-slate-800">
            Lumin Advisory
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden gap-6 md:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#pillars", label: "Service Pillars" },
            { href: "#case-studies", label: "Case Studies" },
            { href: "#insights", label: "Insights" },
            { href: "#resources", label: "Resources" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-transform hover:text-emerald-700 hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block rounded-xl bg-emerald-600 px-4 py-2 text-white transition duration-200 ease-in-out hover:bg-emerald-700"
        >
          Start a Project
        </a>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <motion.svg
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              className="h-6 w-6 text-slate-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="h-6 w-6 text-slate-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU SLIDE-IN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-slate-200 bg-white shadow-sm"
          >
            <nav className="flex flex-col px-6 py-4 space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#pillars", label: "Service Pillars" },
                { href: "#case-studies", label: "Case Studies" },
                { href: "#insights", label: "Insights" },
                { href: "#resources", label: "Resources" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 transition-transform duration-200 ease-in-out hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-2 text-center rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
