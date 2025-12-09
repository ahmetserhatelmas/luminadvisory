import React from "react";
import { Sparkles } from "lucide-react";

export default function OurStory() {
  return (
    <section id="story" className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-600" />
            <h2 className="text-4xl font-bold text-emerald-900">Our Story</h2>
          </div>
        </div>
        
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <p className="text-lg text-slate-700 leading-relaxed">
            Lumin Advisory was founded to bridge a critical gap in the market: the disconnect between 
            rigorous environmental engineering and high-level business strategy. We observed that companies 
            were often paralyzed by the complexity of sustainability data or misled by vague "green" 
            consulting that lacked technical depth. Leaders needed more than good intentions; they needed facts.
          </p>
        </div>
      </div>
    </section>
  );
}

