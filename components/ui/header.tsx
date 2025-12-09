"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "ABOUT",
      items: [
        { label: "Mission and Vision", href: "#mission" },
        { label: "Our Story", href: "#story" },
        { label: "Our Principles", href: "#principles" },
        { label: "How We Work", href: "#how-we-work" },
        { label: "Who We Are", href: "#who-we-are" },
        { label: "Where We Work", href: "#where-we-work" },
      ],
    },
    {
      label: "SERVICE PILLARS",
      items: [
        { label: "Climate Change & Decarbonization", href: "#pillar-climate-change" },
        { label: "Sustainable products", href: "#pillar-sustainable-products" },
        { label: "ESG Regulatory Compliance", href: "#pillar-esg-strategy" },
        { label: "Critical Raw Materials (CRM) intelligence", href: "#pillar-critical-raw" },
      ],
    },
    {
      label: "CASE STUDIES",
      items: [
        { label: "CBAM Calculator of Steel Products", href: "#case-2" },
        { label: "Scope 3 and supplier engagement", href: "#case-3" },
        { label: "LCA of Semiconductors", href: "#case-1" },
      ],
    },
    {
      label: "INSIGHTS",
      items: [
        { label: "Scope 3", href: "#insight-scope3" },
        { label: "Carbon Shadow Pricing", href: "#insight-carbon" },
        { label: "Critical Raw Materials and Geopolitics", href: "#insight-crm" },
      ],
    },
    { label: "RESOURCES", href: "#resources" },
  ];

  const languages = [
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "nl", flag: "🇳🇱", name: "Dutch" },
    { code: "de", flag: "🇩🇪", name: "German" },
    { code: "tr", flag: "🇹🇷", name: "Turkish" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Lumin_logo_1.png"
            alt="Lumin Advisory logo"
            width={80}
            height={80}
            className="h-20 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">
              Lumin Advisory
            </span>
            <span className="text-sm text-slate-600">
              Sustainability Strategy
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden gap-6 lg:flex items-center">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.items ? (
                <>
                  <button className="flex items-center gap-1 text-sm font-semibold tracking-wide text-slate-700 hover:text-emerald-700 transition-colors">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-1">
                      <div className="w-64 rounded-lg border border-slate-200 bg-white shadow-lg py-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-semibold tracking-wide text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* LANGUAGE & CONTACT */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('LANGUAGE')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Globe className="h-5 w-5 text-slate-700" />
              <ChevronDown className="h-4 w-4 text-slate-700" />
            </button>
            {activeDropdown === 'LANGUAGE' && (
              <div className="absolute right-0 top-full pt-1">
                <div className="w-48 rounded-lg border border-slate-200 bg-white shadow-lg py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-emerald-700"
          >
            CONTACT
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
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
            className="lg:hidden border-t border-slate-200 bg-white shadow-sm max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-4 space-y-3">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <div className="font-semibold text-sm text-slate-800 mb-2">
                    {item.label}
                  </div>
                  {item.items ? (
                    <div className="ml-3 space-y-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block text-sm text-slate-600 hover:text-emerald-700 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-sm text-slate-600 hover:text-emerald-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-slate-200">
                <div className="flex gap-3 mb-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      title={lang.name}
                      className="text-2xl"
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="block text-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
