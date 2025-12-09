import React from "react";
import { FlaskConical, Lightbulb, Shield, Target } from "lucide-react";

export default function OurPrinciples() {
  const principles = [
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Science, Not Speculation",
      description: "We replace guesswork with rigorous data, building strategies on recognized standards and verifiable analytics."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Clarity in Complexity",
      description: "We translate deep technical analysis into clear, decision-ready insights for business leaders."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Audit-Ready Integrity",
      description: "We prioritize transparency and precision, ensuring our work withstands the scrutiny of auditors and investors."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Pragmatic Focus",
      description: "We avoid one-size-fits-all solutions, focusing strictly on what is material, practical, and actionable for your business."
    }
  ];

  return (
    <section id="principles" className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-4">Our Principles</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          The foundational values that guide every engagement
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white mb-4 group-hover:scale-110 transition-transform">
                {principle.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

