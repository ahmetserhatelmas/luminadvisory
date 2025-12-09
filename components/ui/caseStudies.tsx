'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section id="case-studies" className="border-t border-slate-200 bg-white ">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Case Studies</h2>
        <p className="mt-2 text-slate-600">
          Real-world examples of how our methods drive measurable outcomes.
        </p>

        {/* Scroll container with arrows */}
        <div className="relative mt-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-xl'
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
    >
            <ChevronLeft className="h-5 w-5 text-emerald-700" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >

            {/* Case Study 1 */}
            <article id="case-1" className="mid:grid-cols-2 max-w-sm snap-start rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-emerald-700">
                Case Study 1: PCF of Semi-Finished Goods
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                <b>Context:</b> A mid-tier industrial supplier, specializing in engineered metal components,
                 needed ISO 14067-aligned cradle-to-gate Product Carbon Footprints (PCFs) for a portfolio of 
                 11 semi-finished products. The goal was twofold: meet increasing OEM disclosure demands 
                 and identify internal cost-reduction opportunities through decarbonization.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <b>Project &amp; Findings:</b> The project delivered verified PCFs within eight weeks, 
                focusing on mass-balancing and high-quality secondary datasets to address data gaps. 
                While initial data coverage was low, it was rapidly expanded to provide high-fidelity results. 
                The analysis pinpointed the single largest hotspot: an inefficient energy recovery system in a 
                high-temperature finishing process.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <b>Results &amp; Impact:</b> By optimizing the identified hotspot, the supplier realized
                 a measurable carbon reduction on a priority product stream, directly linked to significant energy savings 
                 and lower operating costs. Furthermore, the robust, verified data enabled the supplier
                  to present a compelling narrative, resulting in first-pass OEM acceptance with
                   zero corrective actions. The supplier successfully demonstrated a competitive advantage, 
                   proving their components hold a lower carbon intensity than key market competitors.
              </p>
            </article>

            {/* Case Study 2 */}
            <article id="case-2" className=" max-w-sm snap-start rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-emerald-700">
                Case Study 2: Scope 3 Accounting and Supplier Engagement
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                <b>Context:</b> A global manufacturing player committed to the Science Based Targets initiative (SBTi) 
                but lacked granular visibility into its supply chain (Scope 3), which accounted for &gt;80% of total emissions. 
                Reliance on spend-based estimates was masking critical hotspots and preventing actionable reduction strategies.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <b>Project &amp; Approach:</b> We deployed a tiered supplier engagement strategy combined with a hybrid calculation methodology.
                <br/><b>Screening:</b> Conducted a materiality assessment to identify the top suppliers contributing to 70% of emissions.
                <br/><b>Engagement:</b> Launched a targeted data collection campaign, moving key suppliers from generic spend-based 
                factors to physical intensity data (e.g., kgCO2e/kg product).
                <br/><b>Capacity Building:</b> Delivered workshops to upskill suppliers on GHG accounting and roadmap creation.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <b>Results &amp; Impact:</b> The transition to primary data identified that actual emissions were 22% lower than 
                initial estimates, allowing for a re-baselining of targets. The company successfully validated its near-term targets 
                with the SBTi. Crucially, the program secured commitments from 65% of strategic suppliers to set their own renewable 
                energy targets within 24 months, significantly de-risking the client's long-term transition plan.
              </p>
            </article>

            {/* Case Study 3 */}
            <article id="case-3" className=" max-w-sm snap-start rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-emerald-700">
                Case Study 3: Critical Raw Materials Analysis for Gallium &amp; Germanium
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                <b>Context:</b> High dependency on Gallium &amp; Germanium for semiconductor/optical products. 
                Supply chain critically vulnerable due to &gt;90% concentration in a single region (China) and 
                active export controls.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <b>Project and Findings:</b> Conducted deep-dive market analysis identifying single-source risks. 
                Developed a "China Plus One" multisourcing strategy and validated secondary supply streams via 
                high-purity recycling.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <b>Results and Impact:</b> Mitigated immediate supply disruption risks. Avoided &gt;40% spot market 
                price surges and secured long-term compliance with critical mineral regulations.
              </p>
            </article>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-xl'
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-emerald-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
