'use client';

import React from "react";
import { MapPin, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Links Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 py-12">
          {/* LEGAL */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li><a href={t.form.imprintHref} className="hover:text-white transition-colors">{t.footer.imprint}</a></li>
              <li><a href={t.form.privacyHref} className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li className="text-white font-medium">{t.footer.companyName}</li>
            </ul>
          </div>

          {/* OFFICES */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              {t.footer.addressTitle}
            </h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>

          {/* REGISTRATION */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              {t.footer.registration}
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li>{t.footer.register}</li>
              <li>{t.footer.vat}</li>
              <li className="pt-2">{t.footer.director}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-base text-slate-500">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/luminadvisory/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <p className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
