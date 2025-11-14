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
import Home from "@/components/ui/home.tsx";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      
      {/* Header (Updated CTA) */}
      <Header />

      {/* Home */}
      <Home />

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
