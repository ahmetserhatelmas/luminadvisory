'use client';

import React from "react";
import { FlaskConical, Lightbulb, Shield, Target } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function OurPrinciples() {
  const { t } = useI18n();
  const icons = [
    <FlaskConical key="1" className="h-6 w-6" />,
    <Lightbulb key="2" className="h-6 w-6" />,
    <Shield key="3" className="h-6 w-6" />,
    <Target key="4" className="h-6 w-6" />,
  ];

  return (
    <section id="principles" className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-emerald-900 mb-4">{t.principles.title}</h2>
        <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          {t.principles.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.principles.items.map((principle, index) => (
            <div 
              key={principle.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white mb-4 group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {principle.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





