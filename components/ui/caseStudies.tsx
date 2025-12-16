'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Factory, Users, Cpu, ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 420;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollability, 300);
    }
  };

  const caseStudies = [
    {
      id: "case-1",
      icon: <Factory className="h-6 w-6" />,
      tag: "Product Carbon Footprint",
      title: "PCF of Semi-Finished Goods",
      gradient: "from-amber-500 to-orange-600",
      context: " A mid-tier industrial supplier, specializing in engineered metal components, needed ISO 14067-aligned cradle-to-gate Product Carbon Footprints (PCFs) for a portfolio of 11 semi-finished products. The goal was twofold: meet increasing OEM disclosure demands and identify internal cost-reduction opportunities through decarbonization.",
      findings: "The project delivered verified PCFs within eight weeks, focusing on mass-balancing and high-quality secondary datasets to address data gaps. While initial data coverage was low, it was rapidly expanded to provide high-fidelity results. The analysis pinpointed the single largest hotspot: an inefficient energy recovery system in a high-temperature finishing process.",
      impact: "By optimizing the identified hotspot, the supplier realized a measurable carbon reduction on a priority product stream, directly linked to significant energy savings and lower operating costs. Furthermore, the robust, verified data enabled the supplier to present a compelling narrative, resulting in first-pass OEM acceptance with zero corrective actions. The supplier successfully demonstrated a competitive advantage, proving their components hold a lower carbon intensity than key market competitors."
    },
    {
      id: "case-2",
      icon: <Users className="h-6 w-6" />,
      tag: "Scope 3 Emissions",
      title: "Scope 3 Accounting & Supplier Engagement",
      gradient: "from-emerald-500 to-teal-600",
      context: "A global manufacturing player committed to the Science Based Targets initiative (SBTi) but lacked granular visibility into its supply chain (Scope 3), which accounted for >80% of total emissions. Reliance on spend-based estimates was masking critical hotspots and preventing actionable reduction strategies.",
      findings: "We deployed a tiered supplier engagement strategy combined with a hybrid calculation methodology. Screening: Conducted a materiality assessment to identify the top suppliers contributing to 70% of emissions. Engagement: Launched a targeted data collection campaign, moving key suppliers from generic spend-based factors to physical intensity data (e.g., kgCO2e/kg product). Capacity Building: Delivered workshops to upskill suppliers on GHG accounting and roadmap creation.",
      impact: "The transition to primary data identified that actual emissions were 22% lower/higher than initial estimates, allowing for a re-baselining of targets. The company successfully validated its near-term targets with the SBTi. Crucially, the program secured commitments from 65% of strategic suppliers to set their own renewable energy targets within 24 months, significantly de-risking the client's long-term transition plan."
    },
    {
      id: "case-3",
      icon: <Cpu className="h-6 w-6" />,
      tag: "Critical Raw Materials",
      title: "Critical Raw Materials Analysis for Gallium & Germanium",
      gradient: "from-purple-500 to-indigo-600",
      context: "High dependency on Gallium & Germanium for semiconductor/optical products. Supply chain critically vulnerable due to >90% concentration in a single region (China) and active export controls.",
      findings: "Conducted deep-dive market analysis identifying single-source risks. Developed a 'China Plus One' multisourcing strategy and validated secondary supply streams via high-purity recycling.",
      impact: "Mitigated immediate supply disruption risks. Avoided >40% spot market price surges and secured long-term compliance with critical mineral regulations."
    }
  ];

  return (
    <section id="case-studies" className="relative bg-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-6 py-3 rounded-full bg-emerald-100 text-emerald-700 text-2xl font-bold mb-4">
              Success Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
              Case Studies
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-xl">
          Real-world examples of how our methods drive measurable outcomes.
        </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
              className={`p-3 rounded-xl border transition-all ${
              canScrollLeft
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 shadow-sm'
                  : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-xl border transition-all ${
                canScrollRight
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 shadow-sm'
                  : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="h-6 w-6" />
          </button>
          </div>
        </motion.div>

        {/* Carousel */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 snap-x snap-mandatory"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              id={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex-shrink-0 w-[380px] snap-start"
            >
              <div className="h-full rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${study.gradient} p-6`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
                    {study.tag}
                  </span>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white flex-shrink-0">
                      {study.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-2">Context</h4>
                    <p className="text-base text-slate-700 leading-relaxed">{study.context}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-2">Project & Findings</h4>
                    <p className="text-base text-slate-700 leading-relaxed">{study.findings}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">Impact</h4>
                    <p className="text-base text-slate-900 font-medium leading-relaxed">{study.impact}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-slate-300"
            />
          ))}
        </div>

        {/* Animated Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 p-16"
        >
          {/* Background circles */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
          />
          
          <div className="relative">
            {/* Line Chart */}
            <svg className="w-full h-64" viewBox="0 0 800 200" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 50}
                  x2="800"
                  y2={i * 50}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              ))}

              {/* Line 1 - Teal */}
              <motion.path
                d="M 0 120 L 100 80 L 200 40 L 300 100 L 400 60 L 500 140 L 600 100 L 700 120 L 800 80"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1]
                }}
              />
              
              {/* Line 2 - Emerald */}
              <motion.path
                d="M 0 100 L 100 60 L 200 30 L 300 90 L 400 120 L 500 80 L 600 110 L 700 70 L 800 100"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                  times: [0, 0.3, 0.7, 1]
                }}
              />

              {/* Line 3 - Sky */}
              <motion.path
                d="M 0 160 L 100 140 L 200 100 L 300 120 L 400 80 L 500 60 L 600 90 L 700 110 L 800 70"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                  times: [0, 0.3, 0.7, 1]
                }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating particles - pre-computed positions to avoid hydration mismatch */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { x: 12, y1: 18, y2: 52, y3: 35, duration: 7 },
                { x: 25, y1: 65, y2: 28, y3: 78, duration: 8 },
                { x: 38, y1: 42, y2: 75, y3: 22, duration: 6.5 },
                { x: 52, y1: 88, y2: 38, y3: 62, duration: 7.5 },
                { x: 65, y1: 25, y2: 58, y3: 45, duration: 8.5 },
                { x: 78, y1: 55, y2: 22, y3: 72, duration: 6 },
                { x: 8, y1: 32, y2: 68, y3: 48, duration: 7.2 },
                { x: 32, y1: 72, y2: 42, y3: 85, duration: 8.2 },
                { x: 48, y1: 15, y2: 55, y3: 28, duration: 6.8 },
                { x: 62, y1: 58, y2: 82, y3: 38, duration: 7.8 },
                { x: 85, y1: 28, y2: 62, y3: 18, duration: 8.8 },
                { x: 18, y1: 78, y2: 35, y3: 58, duration: 6.3 },
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  initial={{ x: `${particle.x}%`, y: `${particle.y1}%`, opacity: 0 }}
                  animate={{ 
                    y: [`${particle.y1}%`, `${particle.y2}%`, `${particle.y3}%`],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
