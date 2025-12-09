import React from "react";
import { Target, Eye, Lightbulb, Shield } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mission" className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">Mission & Vision</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Our Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              To empower organizations with the scientific rigor and strategic clarity needed to navigate 
              the sustainable transition. We exist to ensure that every environmental decision is backed 
              by verified data, reducing risk and maximizing impact.
            </p>
          </div>

          {/* Our Vision */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-600 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-sky-900">Our Vision</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              A future where business strategy and planetary boundaries are fully aligned. We envision 
              an economy where transparency is the standard, and sustainability is no longer a burden 
              of compliance, but a driver of operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

