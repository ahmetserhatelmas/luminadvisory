import React from "react";
import {
  ArrowRight,
  ClipboardList,
  FlaskConical,
  Leaf,
  Recycle,
  Quote,
  Users,
  MapPin
} from "lucide-react";

export default function About() {
  const steps = [
    {
      title: "Diagnose",
      blurb: "Clarify goals, material risks, and policy exposure."
    },
    {
      title: "Quantify",
      blurb:
        "Build LCA/PCF, GHG baselines, CRM & circularity models using best-available data and standards."
    },
    {
      title: "Decide",
      blurb:
        "Turn results into roadmaps—abatement levers, cost/impact trade-offs, and governance."
    },
    {
      title: "Verify",
      blurb:
        "Package evidence for customers, tenders, and auditors (EPD/ESRS/Green Claims-ready)."
    }
  ];

  return (
    <section id="about" className="border-t border-slate-200 bg-emerald-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-emerald-900">Our Story</h2>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
            We bring science into decision-making. Lumin exists to close the gap between rigorous
            environmental analytics and real-world business choices. Our added value is simple:
            a perspective backed by data and domain expertise so you can make robust, auditable
            decisions—faster, with less risk, and more impact.
          </p>
          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-emerald-800">
            Diagnose → Quantify → Decide → Verify
          </h2>
        </header>

        {/* Timeline Steps (Desktop) */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              {i !== 0 && (
                <div className="absolute -left-3 top-6 hidden h-0.5 w-6 md:block bg-gradient-to-r from-emerald-300 to-emerald-600" />
              )}
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow hover:shadow-lg transition-all duration-300">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Steps (Mobile) */}
        <div className="md:hidden space-y-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow hover:shadow-md transition">
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white text-xs font-semibold">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="text-sm text-slate-700">{s.blurb}</p>
              {i < steps.length - 1 && (
                <div className="mt-3 flex items-center gap-2 text-emerald-700">
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-xs">Next: {steps[i + 1].title}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}