'use client';
import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ui/contactForm";
import CaseStudiesSection from "@/components/ui/caseStudies";
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
import { useI18n } from "@/lib/i18n";


export default function Page() {
  const { t } = useI18n();
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
      <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <span className="inline-block px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-400 text-2xl font-bold mb-4">
                {t.contact.eyebrow}
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                {t.contact.text}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-slate-400">{t.contact.emailLabel}</p>
                    <p className="text-white font-medium">hello@luminsustainability.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-slate-400">{t.contact.locationLabel}</p>
                    <p className="text-white font-medium">{t.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      
      {/* Footer (Updated Links) */}
      <Footer/>
    </main>
  );
}
