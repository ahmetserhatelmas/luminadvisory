'use client';

import React from "react";
import { motion } from "framer-motion";
import { Search, Calculator, Route, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "DIAGNOSE",
      blurb: "Define the landscape. We clarify your sustainability goals, identify material risks, and map your policy exposure.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "QUANTIFY",
      blurb: "Model the metrics. We build LCA/PCF, GHG baselines, and Critical Raw Material (CRM) & circularity models using best-available data.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Route className="h-6 w-6" />,
      title: "DECIDE",
      blurb: "Build the roadmap. We turn complex data into strategy—identifying abatement levers, calculating cost/impact trade-offs.",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "VERIFY",
      blurb: "Prove the value. We package audit-ready evidence for customers and tenders (EPD, ESRS, and Green Claims compliant).",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="how-we-work" className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-white/10 text-emerald-300 text-2xl font-bold mb-4">
            Our Methodology
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            We bring science into decision-making. Lumin exists to close the gap between rigorous environmental analytics and real-world business choices. We provide data-backed insights and domain expertise, empowering you to make robust, auditable decisions—faster, with less risk, and more impact.
          </p>
        </motion.div>

        {/* Framework Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20">
            <span className="text-2xl font-bold text-white">The Lumin Framework</span>
          </div>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-amber-500 via-emerald-500 via-sky-500 to-purple-500 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="group h-full rounded-3xl bg-white shadow-xl border-2 border-slate-200 p-6 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${s.color} text-white shadow-lg`}>
                      {s.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                      {i + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {s.blurb}
                  </p>
                </div>

                {/* Arrow to next step - Mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <ArrowRight className="h-6 w-6 text-emerald-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
