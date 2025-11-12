'use client';
import React from "react";
import Link from "next/link";
import ContactForm from "../components/ui/contactForm.tsx";
import CaseStudiesSection from "../components/ui/caseStudies.tsx";
import Header from "@/components/ui/header.tsx";  
import About from "@/components/ui/about.tsx";
import ServicePillars from "@/components/ui/servicePillars.tsx";
import Insights from "@/components/ui/insights.tsx";
import Resources from "@/components/ui/resources.tsx";
import Footer from "@/components/ui/footer.tsx";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header (Updated CTA) */}
      <Header />

      {/* Hero (Updated Content & Added Sub-Sections) */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Science-driven sustainability advisory for innovation
              <span className="block text-emerald-700">We help companies give decisions backed by sustainability science.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Lumin Advisory helps its business partners give ESG decisions backed by science. We offer service pillars around ESG Strategy, Life Cycle Assessment (LCA), 
              Greenhouse Gas (GHG) management, as well as critical minerals insights — so you can move from targets to tangible outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pillars" className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700">
                See Our Expertise
              </a>
              <a href="#contact" className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-50">
                Get a Proposal
              </a>
            </div>
          </div>
          {/* RIGHT-HAND COLUMN: REPLACED WITH FINALIZED CONTENT + NEW SUB-SECTIONS */}
          <div className="space-y-6"> {/* Added space-y-6 for vertical gap */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="font-medium text-lg text-emerald-700">Clarity Meets Technical Depth</p>
              <p className="mt-2 text-slate-600 text-sm">
                We combine rigorous LCA and carbon accounting standards with strategic clarity, giving leaders the decision-ready insights needed for investment and compliance.
              </p>
            </div>
            {/* FOUR HERO SUB-SECTIONS (Item 1) */}
            <div className="grid grid-cols-2 gap-4">
              
                <a href="#pillar-climate-change" className="border block rounder-x1 p-4 bg-slate-50 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                    <p className="font-semibold text-sm">Climate Change Risk and Decarbonization Strategy</p>
                    <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                        <li>Scope 1–3, SBTi-aligned pathways</li>
                    </ul>
                </a>
                <a href="#pillar-life-cycle" className="border block rounder-x1 p-4 bg-slate-50 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                    <p className="font-semibold text-sm">Life Cycle Assessments (LCA) & Product Carbon Footprints (PCF)</p>
                    <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                        <li>LCA, Product Carbon Footprint (PCF), Environmental Product Declaration (EPD)</li>
                    </ul>
                </a>
                <a href="#pillar-critical-raw" className="border block rounder-x1 p-4 bg-slate-50 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                    <p className="font-semibold text-sm">Critical Raw Materials Governance & Circularity Assessments</p>
                    <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                        <li>Copper · Al · REE</li>
                    </ul>
                </a>
                <a href="#pillar-esg-strategy" className="border block rounder-x1 p-4 bg-slate-50 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                    <p className="font-semibold text-sm">ESG Strategy, Risk Assessment & Reporting</p>
                    <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                        <li>ESG operating Procedures, Reporting and Compliance, Enterprise Risk Management</li>
                    </ul>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Service Pillars (Updated Content & Reordered) */}
      <ServicePillars />
      
      {/* Case Studies (Updated Content) */}
      <CaseStudiesSection />

      {/* Insights Section (No Changes) */}
      <Insights />

      {/* Resources Section (No Changes) */}
      <Resources />

      
      {/* Contact (Updated Content) */}
      <section id="contact" className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Start the Conversation</h2>
          <p className="mt-2 text-slate-600 max-w-prose">
            Tell us your immediate challenge—whether it’s achieving CSRD readiness, delivering a compliant LCA, or building a Scope 3 strategy—and we will reply with a concise plan and timeline.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 max-w-md">
            {/* Simple static form - ContactForm must contain the 'Send Inquiry' text */}
            <ContactForm />
          </div>
        </div>
      </section>

      
      {/* Footer (Updated Links) */}
      <Footer/>
    </main>
  );
}
