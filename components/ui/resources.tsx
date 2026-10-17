'use client';

import React from "react";
import { useI18n } from "@/lib/i18n";

export default function Resources() {
  const { t } = useI18n();
  return (
    <section id="resources" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">{t.resources.title}</h2>
        <p className="mt-4 max-w-3xl text-xl text-slate-600">{t.resources.comingSoon}</p>
      </div>
    </section>
  );
}
