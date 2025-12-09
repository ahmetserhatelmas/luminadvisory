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
      title: "Climate Strategy & Decarbonization",
      subtitle: "GHG Accounting · Decarbonization · Climate Risk Assessment",
      description:
        "Turn ambition into verified action. We build audit-ready GHG inventories (Scope 1–3) and design science-based decarbonization roadmaps. By quantifying physical and transition risks, we ensure your climate strategy is financially resilient, compliant with SBTi standards, and ready for scrutiny by investors and auditors.",
      bgColor: "bg-yellow-50"
    },
    {
      id: "pillar-sustainable-products",
      icon: <BookOpen className="h-6 w-6" />,
      title: "Sustainable Products",
      subtitle: "LCA, PCF and verification services",
      description:
        "We quantify the environmental footprint of your products using ISO-aligned LCA and Product Carbon Footprint methods. From screening studies to customer-facing EPDs, we translate complex models into clear claims and reduction roadmaps. We also support third-party verification, data collection, and supplier engagement to strengthen your product sustainability story.",
      bgColor: "bg-sky-50"
    },
    {
      id: "pillar-critical-raw",
      icon: <Globe2 className="h-6 w-6" />,
      title: "Critical Raw Materials Intelligence",
      subtitle: "CRM Supply & Demand · Sourcing",
      description:
        "Secure your supply chain against volatility. We analyze Critical Raw Material (CRM) exposure, modeling supply, demand, and circularity risks specific to your materials. Our intelligence supports strategic sourcing decisions, helping you navigate geopolitical constraints and price fluctuations while optimizing material recovery and resilience.",
      bgColor: "bg-purple-50"
    },
    {
      id: "pillar-esg-strategy",
      icon: <BarChart2 className="h-6 w-6" />,
      title: "ESG Strategy & Regulatory Alignment",
      subtitle: "EU Regulation compliance; CSRD, CBAM, CSDDD, ESPR, Green Claims",
      description:
        "Navigate the EU regulatory landscape with confidence. We translate complex obligations like CSRD, CBAM, CSDDD, and ESPR into operational workflows. From double materiality assessments to defensible Green Claims, we build data-backed ESG strategies that ensure compliance, streamline reporting, and withstand the rigor of external audits.",
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
                <div className="flex-1">
                  <h1 className="text-lg font-semibold">{section.title}</h1>
                  <p className="text-xs text-slate-600 mt-1">{section.subtitle}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
