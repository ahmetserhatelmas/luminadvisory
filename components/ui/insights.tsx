'use client';

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Globe2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const insights = [
    {
      id: "insight-scope3",
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Scope 3 is about 80–90% of all emissions — but none are under direct control",
      description: "Most companies now realise the bulk of their footprint sits in Scope 3 – upstream and downstream activities they don't own or operate. The challenge isn't just measurement, but influence: how to work with suppliers, customers and designers to shift decisions you don't directly control.",
      gradient: "from-sky-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-sky-50 to-cyan-50",
      tag: "Emissions"
    },
    {
      id: "insight-carbon",
      icon: <DollarSign className="h-7 w-7" />,
      title: "Carbon shadow pricing reflects the real cost of a product",
      description: "A growing number of companies are assigning an internal carbon price to products, projects and investments. This shadow price doesn't appear on the invoice, but it changes decisions: which materials to choose, which suppliers to favour, and where decarbonisation projects suddenly become financially attractive.",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      tag: "Strategy"
    },
    {
      id: "insight-crm",
      icon: <Globe2 className="h-7 w-7" />,
      title: "Critical Raw Materials have become a mainstream topic — what's next?",
      description: "Critical raw materials have moved from expert reports to boardroom agendas. The next step is moving beyond lists and flags to concrete action: mapping where CRMs sit in your portfolio, stress-testing supply scenarios, and designing products and sourcing strategies that are both resilient and genuinely more sustainable.",
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      tag: "Supply Chain"
    }
  ];

  return (
    <section id="insights" className="relative bg-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            <span className="inline-block px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-400 text-2xl font-bold mb-4">
              Stay Informed
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Insights
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-xl">
              Strategic perspectives on the evolving sustainability landscape
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
        
        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 snap-x snap-mandatory"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              id={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex-shrink-0 w-[350px] md:w-[400px] snap-start"
            >
              <div className={`h-full ${insight.bgColor} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                {/* Tag */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${insight.gradient} mb-4`}>
                  {insight.tag}
                </span>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${insight.gradient} text-white shadow-lg mb-4`}>
                  {insight.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {insights.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
