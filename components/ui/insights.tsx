import React from "react";
import { TrendingUp, DollarSign, Globe2 } from "lucide-react";

export default function Insights() {
  const insights = [
    {
      id: "insight-scope3",
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scope 3 is about 80–90% of all emissions — but none are under direct control",
      description: "Most companies now realise the bulk of their footprint sits in Scope 3 – upstream and downstream activities they don't own or operate. The challenge isn't just measurement, but influence: how to work with suppliers, customers and designers to shift decisions you don't directly control.",
      bgColor: "bg-sky-50",
      accentColor: "bg-sky-600"
    },
    {
      id: "insight-carbon",
      icon: <DollarSign className="h-6 w-6" />,
      title: "Carbon shadow pricing reflects the real cost of a product",
      description: "A growing number of companies are assigning an internal carbon price to products, projects and investments. This 'shadow price' doesn't appear on the invoice, but it changes decisions: which materials to choose, which suppliers to favour, and where decarbonisation projects suddenly become financially attractive.",
      bgColor: "bg-emerald-50",
      accentColor: "bg-emerald-600"
    },
    {
      id: "insight-crm",
      icon: <Globe2 className="h-6 w-6" />,
      title: "Critical Raw Materials have become a mainstream topic — what's next?",
      description: "Critical raw materials have moved from expert reports to boardroom agendas. The next step is moving beyond lists and flags to concrete action: mapping where CRMs sit in your portfolio, stress-testing supply scenarios, and designing products and sourcing strategies that are both resilient and genuinely more sustainable.",
      bgColor: "bg-purple-50",
      accentColor: "bg-purple-600"
    }
  ];

  return (
    <section id="insights" className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-4">Insights</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Strategic perspectives on the evolving sustainability landscape
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div 
              key={insight.id}
              id={insight.id}
              className={`rounded-2xl border border-slate-200 ${insight.bgColor} p-6 shadow-sm hover:shadow-lg transition-all group`}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-xl ${insight.accentColor} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {insight.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                {insight.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
