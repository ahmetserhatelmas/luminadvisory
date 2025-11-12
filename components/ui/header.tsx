"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">
        {/* LOGO + BRAND NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Lumin_logo.png"      
            alt="Lumin Advisory logo"
            width={80}
            height={80}
            className="h-20 w-auto"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Lumin Advisory</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="hover:text-emerald-700">About</a>
          <a href="#pillars" className="hover:text-emerald-700">Service Pillars</a>
          <a href="#case-studies" className="hover:text-emerald-700">Case Studies</a>
          <a href="#insights" className="hover:text-emerald-700">Insights</a>
          <a href="#resources" className="hover:text-emerald-700">Resources</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <a
          href="#contact"
          className="hidden md:block rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
          Start a Project
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <a 
              href="#about" 
              className="py-2 hover:text-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#pillars" 
              className="py-2 hover:text-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Pillars
            </a>
            <a 
              href="#case-studies" 
              className="py-2 hover:text-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#Insights" 
              className="py-2 hover:text-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </a>
            <a 
              href="#resources" 
              className="py-2 hover:text-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#contact" 
              className="py-2 hover:text-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="mt-2 rounded-xl bg-emerald-600 px-4 py-2 text-white text-center hover:bg-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}