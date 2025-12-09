'use client';

import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
            {/* Top row — links and info */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* LEGAL (RECHTLICHES) */}
            <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Legal (Rechtliches)</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="/imprint" className="hover:text-emerald-700">Imprint (Impressum)</a></li>
                <li><a href="/privacy" className="hover:text-emerald-700">Privacy Policy (Datenschutz)</a></li>
                <li><a href="/terms" className="hover:text-emerald-700">Terms of Service (AGB)</a></li>
                <li><button className="hover:text-emerald-700">Cookie Settings</button></li>
                </ul>
                <div className="mt-4 text-xs text-slate-500 space-y-1">
                <p><strong>Email:</strong> hello@luminsustainability.com</p>
                <p><strong>Address:</strong> Von-der-Heydt Str. 1, 10785 Berlin</p>
                <p><strong>VAT ID:</strong> [TBD]</p>
                </div>
            </div>

            {/* COMPANY */}
            <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Company</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="font-semibold text-slate-900">Lumin Advisory</li>
                <li>Sustainability Strategy UG</li>
                <li>(haftungsbeschränkt)</li>
                <li className="pt-2"><strong>Berlin HQ:</strong></li>
                <li>Von-der-Heydt Str. 1</li>
                <li>10785 Berlin, Germany</li>
                <li className="pt-2"><strong>Offices:</strong></li>
                <li>Berlin – Istanbul – Rotterdam</li>
                <li className="pt-2"><a href="/careers" className="hover:text-emerald-700 font-medium">Careers</a></li>
                </ul>
            </div>

            {/* REGISTRATION */}
            <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Registration</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Amtsgericht</li>
                <li>Berlin-Charlottenburg</li>
                <li className="pt-2"><strong>HRB:</strong> [TBD]</li>
                <li className="pt-2"><strong>Managing Director:</strong></li>
                <li>Dr. Arda Işıldar</li>
                </ul>
            </div>

            {/* STAY CONNECTED */}
            <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Stay Connected</h3>
                <p className="mt-3 text-sm text-slate-600">
                Sign up for sustainability insights and updates.
                </p>
                <form className="mt-4 flex flex-col gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                <button
                    type="submit"
                    className="rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-700"
                >
                    Subscribe
                </button>
                </form>
                <div className="mt-4">
                <a
                    href="https://www.linkedin.com/company/lumin-advisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    >
                    <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7 20H4V9h3v11zM5.5 7.5C4.1 7.5 3 6.4 3 5s1.1-2.5 2.5-2.5S8 3.6 8 5 6.9 7.5 5.5 7.5zM21 20h-3v-5.6c0-1.4-.6-2.4-1.8-2.4-1.1 0-1.7.7-2 1.4-.1.2-.1.6-.1.9V20h-3s.1-9 0-11h3v1.6c.4-.6 1.1-1.6 2.8-1.6 2 0 3.5 1.3 3.5 4.2V20z" />
                    </svg>
                    LinkedIn
                </a>
                </div>
            </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-slate-200" />

            {/* Bottom row — copyright */}
            <div className="flex flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Lumin Advisory UG. All rights reserved. | Berlin, Germany</p>
            <p>Science-driven sustainability advisory.</p>
            </div>
        </div>
        </footer>
        </div>
    );
}
