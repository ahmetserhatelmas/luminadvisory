'use client';
import React from "react";
import Link from "next/link";
import ContactForm from "../components/ui/contactForm";
import CaseStudiesSection from "../components/ui/caseStudies";
import Header from "@/components/ui/header";  
import About from "@/components/ui/about";
import ServicePillars from "@/components/ui/servicePillars";
import Insights from "@/components/ui/insights";
import Resources from "@/components/ui/resources";
import Footer from "@/components/ui/footer";
import Home from "@/components/ui/home";
import MissionVision from "@/components/ui/missionVision";
import OurStory from "@/components/ui/ourStory";
import OurPrinciples from "@/components/ui/ourPrinciples";
import WhoWeAre from "@/components/ui/whoWeAre";
import WhereWeWork from "@/components/ui/whereWeWork";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <link rel="icon" type="image/x-icon" href="/icon.ico" />
      {/* Header (Updated CTA) */}
      <Header />

      {/* Home */}
      <Home />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Our Story */}
      <OurStory />

      {/* Our Principles */}
      <OurPrinciples />

      {/* How We Work (Previously About) */}
      <About />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Where We Work */}
      <WhereWeWork />

      {/* Service Pillars (Updated Content & Reordered) */}
      <ServicePillars />
      
      {/* Case Studies (Updated Content) */}
      <CaseStudiesSection />

      {/* Insights Section */}
      <Insights />

      {/* Resources Section */}
      <Resources />

      
      {/* Contact (Updated Content) */}
      <section id="contact" className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Start the Conversation</h2>
          <p className="mt-2 text-slate-600 max-w-prose">
            Tell us your immediate challenge—whether it's achieving CSRD readiness, delivering a compliant LCA, or building a Scope 3 strategy—and we will reply with a concise plan and timeline.
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
