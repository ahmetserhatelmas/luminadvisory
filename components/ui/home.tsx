'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const serviceItems = [
    {
      id: 'pillar-climate-change',
      title: 'Climate Strategy & Decarbonization',
      desc: 'GHG Accounting · Decarbonization · Climate Risk Assessment',
    },
    {
      id: 'pillar-sustainable-products',
      title: 'Sustainable Products',
      desc: 'LCA, PCF and verification services',
    },
    {
      id: 'pillar-critical-raw',
      title: 'Critical Raw Materials Intelligence',
      desc: 'CRM Supply & Demand · Sourcing',
    },
    {
      id: 'pillar-esg-strategy',
      title: 'ESG Strategy & Regulatory Alignment',
      desc: 'EU Regulation compliance; CSRD, CBAM, CSDDD, ESPR, Green Claims',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 px-6 py-16 sm:gap-16 md:grid-cols-2 md:py-20">
        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
          >
            Science-driven sustainability advisory for innovation
          </motion.h1>

          <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-semibold leading-tight text-emerald-700 mt-3"
                >
                Turn Ambition into Impact with Science-Driven Sustainability.
                </motion.h2>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-xl text-base sm:text-lg text-slate-600"
          >
            Lumin Advisory empowers businesses to navigate complex ESG landscapes with confidence. We provide rigorous, science-driven advisory services that bridge the gap between ambitious targets and tangible, data-backed outcomes.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="#pillars" className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 transition">
              See Our Expertise
            </Link>
            <Link href="#contact" className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100 transition">
              Get a Proposal
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white"
          >
            <p className="font-medium text-lg text-emerald-700">Technical Depth. Strategic Focus.</p>
            <p className="mt-2 text-slate-600 text-sm">
              We turn rigorous ESG data into clear, actionable strategy—giving decision-givers the confidence they need to drive value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border block rounded-xl p-4 bg-slate-50 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm hover:shadow-md"
              >
                <p className="font-semibold text-sm group-hover:text-emerald-700 transition text-emerald-900">
                  {item.title}
                </p>
                <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                  <li>{item.desc}</li>
                </ul>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
