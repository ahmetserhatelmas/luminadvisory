'use client';

import React, { useState } from "react";
import Link from "next/link";
import { BarChart2, BookOpen, CloudLightning, Globe2 } from "lucide-react";

export default function ServicePillars() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    {
      id: "pillar-climate-change",
      icon: <CloudLightning className="h-6 w-6" />,
      title: "Climate Change Risk & Decarbonization Strategy",
      description: [
        "Purpose: Turn climate targets into measurable, science-based action plans.",
        "Build verified Scope 1–3 baseline, resolve hotspots, set science-aligned targets (SBTi).",
        "Convert baseline into execution via MACCs, scenario analysis, cost-impact trade-offs.",
        "Align risk assessments with TCFD, ESRS, and IFRS S2."
      ],
      bgColor: "bg-yellow-50"
    },
    {
      id: "pillar-life-cycle",
      icon: <BookOpen className="h-6 w-6" />,
      title: "Life Cycle Assessments (LCA) & Product Carbon Footprints (PCF)",
      description: [
        "Backing up strategic decisions with sustainability science.",
        "Purpose: Quantify product and value-chain impacts using best-available science.",
        "Full LCA using cradle-to-gate or cradle-to-grave; PCF aligned to ISO 14067 & GHG Protocol.",
        "Advisory with SOPs, QA templates, repeatable and audit-ready models.",
        "Empower design, innovation, and transparent communication."
      ],
      bgColor: "bg-sky-50"
    },
    {
      id: "pillar-critical-raw",
      icon: <Globe2 className="h-6 w-6" />,
      title: "Critical Raw Materials (CRM) Governance & Circularity Assessments",
      description: [
        "Heat-map CRM exposure by material, geography, and supplier.",
        "Model material circularity, design-for-disassembly, recovery yields.",
        "Use CRM data to test scenarios (recycling, reuse, substitution, dual-sourcing).",
        "Translate into sourcing strategy under policy, price, tech stress-tests."
      ],
      bgColor: "bg-purple-50"
    },
    {
      id: "pillar-esg-strategy",
      icon: <BarChart2 className="h-6 w-6" />,
      title: "ESG Strategy, Risk Assessment & Reporting",
      description: [
        "Keep up with the regulatory and market demands.",
        "Purpose: Transform sustainability regulation into actionable strategy.",
        "We support companies in navigating the new generation of EU sustainability laws — CBAM, ESR, ESRS, CSDDD, ESPR.",
        "A robust ESG strategy backed by data and policy insight — something your board, auditors, and investors can stand behind.",
        "For SMEs: proportionate and practical ESG — baseline GHG, KPI dashboards, supplier data templates, due-diligence workflows."
      ],
      bgColor: "bg-emerald-50"
    },
    
    
    
  ];

  return (
    <section id="pillars" className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold">Service Pillars</h2>
        <p className="mt-2 text-slate-600">We guide you from high-level strategy to quantifiable, audit-ready data.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`rounded-2xl border border-slate-200 ${section.bgColor} p-6 shadow-sm hover:shadow-md transition-all`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white">
                  {section.icon}
                </div>
                <h1 className="text-lg font-semibold">{section.title}</h1>
              </div>
              {section.description.map((line, i) => (
                <p key={i} className="mt-2 text-sm text-slate-700 leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}