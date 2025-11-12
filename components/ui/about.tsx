import React from "react";
import { ArrowRight } from "lucide-react";
import { ClipboardList, FlaskConical, Leaf, Recycle, Quote, Users, MapPin, Building2 } from "lucide-react";


export default function About() {
  const steps = [
    {
      title: "Diagnose",
      blurb:
        "Clarify goals, material risks, and policy exposure.",
    },
    {
      title: "Quantify",
      blurb:
        "Build LCA/PCF, GHG baselines, CRM & circularity models using best-available data and standards.",
    },
    {
      title: "Decide",
      blurb:
        "Turn results into roadmaps—abatement levers, cost/impact trade-offs, and governance.",
    },
    {
      title: "Verify",
      blurb:
        "Package evidence for customers, tenders, and auditors (EPD/ESRS/Green Claims-ready).",
    },
  ];

  return (
    <section id="about" className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Our Story</h2>
          <p className="mt-2 text-slate-600">We bring science into decision-making. 
            Lumin exists to close the gap between rigorous environmental analytics and real-world business choices. Our added value is simple: a perspective backed by data and domain expertise so you can make robust
            , auditable decisions—faster, with less risk, and more impact.</p>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">Diagnose → Quantify → Decide → Verify</h2>
        </header>

        {/* Desktop: horizontal timeline. Mobile: stacked cards */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              {/* Connector line (except first) */}
              {i !== 0 && (
                <div className="absolute -left-3 top-6 hidden h-0.5 w-6 md:block bg-gradient-to-r from-emerald-200 to-emerald-500" />
              )}

              <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="mt-10 md:hidden space-y-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white text-xs font-semibold">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm text-slate-700">{s.blurb}</p>

              {/* little arrow to hint flow */}
              {i < steps.length - 1 && (
                <div className="mt-3 flex items-center gap-2 text-emerald-700">
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-xs">Next: {steps[i + 1].title}</span>
                </div>
              )}
            </div>
          ))}
        </div>


        {/* Title */}
        <header className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Services at a Glance</h2>
          <p className="mt-2 mb-5 text-slate-600">A quick snapshot of what we deliver.</p>
        </header>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white">
                <ClipboardList className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">ESG Strategy, Risk &amp; Reporting</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              Double materiality, CSRD/ESRS and EU Taxonomy, EUDR/CBAM/CSDDD readiness.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white">
                <FlaskConical className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">LCA, PCF &amp; EPD</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              ISO/EF-aligned models (Ecoinvent, EN 50693), EPDs, ECI/MKI, scenario analysis.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Climate &amp; Decarbonization</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              Scope 1–3, SBTi alignment, MACC roadmaps, TCFD/ESRS E1 disclosure.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white">
                <Recycle className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Critical Raw Materials &amp; Circularity</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              CRM risk mapping, circular design, ESPR/DPP/PPWR and CRMA alignment.
            </p>
          </article>
        </div>

        {/* Philosophy */}
        <div className="mt-10 mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <div className="flex items-start gap-3">
            <Quote className="h-6 w-6 text-emerald-700 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-emerald-900">Philosophy</h2>
              <p className="mt-3 text-slate-800 font-medium">Evidence first, outcomes always.</p>
              <p className="mt-2 text-slate-700">
                We are method-rigorous and vendor-agnostic. Every recommendation traces to transparent
                assumptions, reproducible models, and policy-literate judgment—so you can defend decisions
                to engineers, customers, investors, and regulators.
              </p>
            </div>
          </div>
        </div>

        {/* Team + Where we work */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Team</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              Founded by <b>Dr. Arda Işıldar</b> (PhD, Environmental Technology), Lumin blends deep LCA/PCF
              expertise with corporate sustainability and EU policy fluency. We operate a networked expert model:
              core delivery by our team, with specialized reviewers (e.g., electrification, materials, assurance)
              engaged as needed to keep quality high and overhead lean.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Where We Work &amp; Who We Serve</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              Headquartered in Berlin, with presence in Rotterdam and Istanbul—and operating globally.
              We focus on high-impact technology and industrial clients (energy infrastructure, electrification,
              electronics/semiconductors, advanced materials, manufacturing supply chains) where credible
              sustainability data directly shapes product design, sourcing, and market access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
