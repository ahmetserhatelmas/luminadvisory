"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { t, locale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  function switchLocale(next: string) {
    const parts = pathname.split("/");
    parts[1] = next;
    router.push(parts.join("/") || `/${next}`);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  const handleScrollToSection = (href: string) => {
    // Close mobile menu first
    setMobileMenuOpen(false);
    
    // Small delay to ensure menu closes, then scroll
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Get the header element and its actual height
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        // Get element position
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        
        // Different extra padding for mobile vs desktop
        const isMobile = window.innerWidth < 1024;
        const extraPadding = isMobile ? 80 : 100;
        const offset = headerHeight + extraPadding;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const menuItems = [
    {
      label: t.nav.about,
      items: [
        { label: t.nav.mission, href: "#mission" },
        { label: t.nav.story, href: "#story" },
        { label: t.nav.principles, href: "#principles" },
        { label: t.nav.who, href: "#who-we-are" },
        { label: t.nav.where, href: "#where-we-work" },
      ],
    },
    {
      label: t.nav.services,
      items: [
        { label: t.pillars.products.title, href: "#pillar-sustainable-products" },
        { label: t.pillars.climate.title, href: "#pillar-climate-change" },
        { label: t.pillars.esg.title, href: "#pillar-esg-strategy" },
        { label: t.pillars.crm.title, href: "#pillar-critical-raw" },
      ],
    },
    {
      label: t.nav.cases,
      items: [
        { label: t.cases.items[0].title, href: "#case-1" },
        { label: t.cases.items[1].title, href: "#case-2" },
        { label: t.cases.items[2].title, href: "#case-3" },
      ],
    },
    {
      label: t.nav.insights,
      items: [
        { label: t.insights.items[0].title, href: "#insight-bottleneck" },
        { label: t.insights.items[1].title, href: "#insight-scrapyard" },
      ],
    },
    { label: t.nav.approach, href: "#how-we-work" },
    { label: t.nav.resources, href: "#resources" },
  ];

  const languages = [
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
    { code: "nl", flag: "🇳🇱", name: "Nederlands" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* LOGO + BRAND */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/lumin-logo-v4.png"
            alt="Lumin Advisory Sustainability Strategy"
            width={508}
            height={550}
            className="h-[72px] md:h-[88px] lg:h-[100px] w-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden gap-8 lg:flex items-center ml-12">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.items ? (
                <>
                  <button className="flex items-center gap-1 text-base font-semibold tracking-wide text-slate-700 hover:text-emerald-700 transition-colors">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-1">
                      <div className="w-64 rounded-lg border border-slate-200 bg-white shadow-lg py-2">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleScrollToSection(subItem.href);
                            }}
                            className="w-full text-left block px-4 py-2 text-base text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href) {
                      handleScrollToSection(item.href);
                    }
                  }}
                  className="text-base font-semibold tracking-wide text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* LANGUAGE & CONTACT */}
        <div className="hidden lg:flex items-center gap-8">
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
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-base transition-colors ${locale === lang.code ? "text-emerald-700 bg-emerald-50" : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"}`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('#contact');
            }}
            className="rounded-xl bg-emerald-600 px-5 py-2 text-base font-semibold text-white transition duration-200 ease-in-out hover:bg-emerald-700"
          >
            {t.nav.contact}
          </button>
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
                  <div className="font-semibold text-base text-slate-800 mb-2">
                    {item.label}
                  </div>
                  {item.items ? (
                    <div className="ml-3 space-y-2">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToSection(subItem.href);
                          }}
                          className="w-full text-left block text-base text-slate-600 hover:text-emerald-700 py-1"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.href) {
                          handleScrollToSection(item.href);
                        }
                      }}
                      className="w-full text-left block text-base text-slate-600 hover:text-emerald-700"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-slate-200">
                <div className="flex gap-3 mb-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      title={lang.name}
                      onClick={() => switchLocale(lang.code)}
                      className={`text-2xl ${locale === lang.code ? "opacity-100" : "opacity-50"}`}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#contact');
                  }}
                  className="w-full block text-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                >
                  {t.nav.contact}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
