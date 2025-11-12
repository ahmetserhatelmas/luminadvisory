'use client';

import React, { useState } from "react";
import Link from "next/link";
export default function ServicePillars() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return(
        <section id="pillars" className="border-t border-slate-200 bg-white bg-slate-50 py-10">
                <div className="mx-auto max-w-7xl px-6 py-16">
                  <h2 className="text-3xl font-semibold">Service Pillars</h2>
                  <p className="mt-2 text-slate-600">We guide you from high-level strategy to quantifiable, audit-ready data.</p>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {/* 1. ESG Strategy, Risk Assessment & Reporting */}
                    <div id="pillar-esg-strategy" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h1 className="text-lg font-semibold pb-1">ESG Strategy, Risk Assessment & Reporting</h1>
                          Keep up with the regulatory and market demands.
                        <p className="mt-2 text-slate-700">
                          <b>Purpose: </b>Transform sustainability regulation into actionable strategy.
                        </p>
                        <p className="mt-3 text-slate-700">
                          <b>ESG Strategy for organizations: </b>: We support companies in navigating the new generation of EU sustainability laws — our focus is Carbon Border Adjustment Mechanism (CBAM) and Effort Sharing Regulation (ESR), European Sustainability Reporting Standards (ESRS), Corporate Sustainability Due Diligence Directive (CSDDD), Ecodesign for Sustainable Products Regulation (ESPR).
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>Compliance with the upcoming regulation:  </b>Sustainability regulation is now stricter. A robust ESg strategy will offer competitive advantage to companies. We give sectoral highlights. The result is an ESG strategy backed by data and policy insight — something your board, auditors, and investors can all stand behind.
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>ESG for small & medium enterprises (SMEs):  </b>We tailor ESG to be proportionate and practical for SMEs. SMEs’ ESG needs are similar in topics but very different in scale, rigor, and resourcing. Services include: compliance-readiness; baseline GHG inventory (Scopes 1–3) and KPI dashboards; supplier data templates for customer requests, Green Claims verification-readiness to avoid marketing risk, due-diligence workflows, training and documentation.
                        </p>
                    </div>
        
                    {/* 2. Life Cycle Assessments (LCA) & Product Carbon Footprints (PCF) */}
                    <div id="pillar-life-cycle" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h1 className="text-lg font-semibold pb-1">Life Cycle Assessments (LCA) & Product Carbon Footprints (PCF)</h1>
                          Backing up strategic decisions with sustainability science.
                        <p className="mt-2 text-slate-700">
                          <b>Purpose: </b>Quantify product and value-chain impacts using the best available science.
                        </p>
                        <p className="mt-3 text-slate-700">
                          <b>Life Cycle Assessment (LCA): </b> We quantify full environmental impacts across the product life cycle—cradle-to-gate or cradle-to-grave—using the established life cycle assessment (LCA) methods and up-to-date databases. The result is a scientific report that guides improvement, eco-design, and sourcing strategy.
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>Product Carbon Footprint (PCF): </b>We deliver ISO 14067 & GHG Protocol–aligned PCFs at cradle-to-gate or cradle-to-grave scope. We map activities, capture primary data (energy, yields, scrap), select high-quality secondary factors where applicable, and allocate emissions at the product level.
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>Advisory & Verification Support: </b>We operationalize LCA with a methods handbook, SOPs, supplier data templates and QA, and optional integration—so results are repeatable and audit-ready. 
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>Solution Summary</b>Data-driven environmental insights that empower design, innovation, and transparent customer communication.
                        </p>
                    </div>
        
        
                    {/* 3. Climate Change Risk & Decarbonization Startegy*/}
                    <div id="pillar-climate-change"className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h1 className="text-lg font-semibold pb-1">Climate Change Risk & Decarbonization Startegy</h1>
                        <p className="mt-2 text-slate-700">
                          <b>Purpose: </b> Turn climate targets into measurable, science-based action plans.
                        </p>
                        <p className="mt-3 text-slate-700">
                          <b>GHG Inventory Analysis & Target Settings: </b> We build a verified climate baseline across sectors. Scope 1–2–3 using the GHG Protocol, document emission factors and data lineage, and resolve hotspots by site, process, and supplier. From there, we quantify technically and financially feasible reductions and set science-aligned targets (SBTi, near-term and net-zero as relevant).
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>Decarbonization Roadmap & Abatement Modeling: </b>We convert your baseline into an execution plan: measure the impact and cost of levers (renewables, efficiency, electrification, recycled inputs, modal shifts) and prioritize them via marginal abatement cost curves (MACCs) and scenario analysis. 
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>Climate Risk Assessment: </b>We assess transition and physical climate risks under multiple scenarios, quantify financial exposure, and map controls into your enterprise risk framework. The work aligns with TCFD, ESRS, and IFRS S2, producing a coherent narrative across governance, strategy, risk management, and metrics/targets
                        </p>
                    </div>
        
        
                    {/* 4. Critical Raw Materials (CRM) Governance & Circulatory Assessments*/}
                    <div id="pillar-critical-raw" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h1 className="text-lg font-semibold pb-1">Critical Raw Materials (CRM) Governance & Circularity Assessments</h1>
                        <p className="mt-2 text-slate-700">
                          <b>CRM Risk Heat-Map & Supply-Chain Risk Mapping: </b> We quantify your exposure to critical and strategic raw materials across products and tiers, mapping sources, refining hubs, and single-point dependencies. Using demand/supply scenarios, trade and geopolitical risk signals, and supplier due-diligence checks, we build a CRM risk dashboard with heat maps by material, geography, and supplier.
                        </p>
                        <p className="mt-3 text-slate-700">
                          <b>Circularity & Recycling Potential Assessment: </b> We model material circularity from design to end-of-life: mass-balance flows, recycled content targets, recovery yields, and design-for-disassembly guidance. Combining data with mass balance and circularity indicators, we test scenarios (higher recycled input, re-use/refurb, take-back schemes) and quantify impact/cost trade-offs. 
                        </p>
                        <p className="mt-4 text-slate-700">
                          <b>CRM Intelligence Alignment & Strategic Sourcing: </b>Leverage our curated datasets on resource concentration, supply routes, and demand drivers to get a CRM view tailored to your portfolio. We build bespoke projections (short-/mid-/long-term), stress-test exposure with policy, price, and technology scenarios, and translate results into actionable sourcing options (substitution, secondary materials, dual-sourcing, recycled-content pathways.
                        </p>
                    </div>
                  </div>
                </div>
              </section>
        
    );
}