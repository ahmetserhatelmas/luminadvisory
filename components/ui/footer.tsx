'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
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
              Legal
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li><a href="/imprint" className="hover:text-white transition-colors">Imprint (Impressum)</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><button className="hover:text-white transition-colors">Cookie Settings</button></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li className="text-white font-medium">Lumin Advisory</li>
              <li>Sustainability Strategy UG</li>
              <li>(haftungsbeschränkt)</li>
              <li className="pt-2">
                <a href="/careers" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  Careers →
                </a>
              </li>
            </ul>
          </div>

          {/* OFFICES */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              Offices
            </h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Berlin HQ</strong><br />
                  Von-der-Heydt Str. 1<br />
                  10785 Berlin
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                <span>Rotterdam · Istanbul</span>
              </li>
            </ul>
          </div>

          {/* REGISTRATION */}
          <div>
            <h4 className="text-base font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              Registration
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li>Amtsgericht Berlin-Charlottenburg</li>
              <li><strong className="text-slate-300">HRB:</strong> [TBD]</li>
              <li className="pt-2">
                <strong className="text-slate-300">Managing Director:</strong><br />
                Dr. Arda Işıldar
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-base text-slate-500">
            <p>© {new Date().getFullYear()} Lumin Advisory UG. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Science-driven sustainability advisory
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
