'use client';

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Recycle, Mountain } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Insights() {
  const { t, locale } = useI18n();
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

  const meta = [
    { id: "insight-bottleneck", icon: <Mountain className="h-7 w-7" />, gradient: "from-purple-500 to-indigo-600", bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50", slug: "critical-minerals-bottleneck" },
    { id: "insight-scrapyard", icon: <Recycle className="h-7 w-7" />, gradient: "from-emerald-500 to-teal-600", bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50", slug: "mine-in-scrapyard" },
  ];
  const insights = t.insights.items.map((item, i) => ({
    ...meta[i],
    title: item.title,
    description: item.text,
    tag: item.tag,
    href: `/${locale}/insights/${meta[i].slug}`,
    date: item.date,
    isArticle: true,
  }));

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
              {t.insights.eyebrow}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              {t.insights.title}
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-xl">
              {t.insights.intro}
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
              <div className={`h-full ${insight.bgColor} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col`}>
                {/* Tag + date row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${insight.gradient}`}>
                    {insight.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">{insight.date}</span>
                    {locale !== "en" && (
                      <span className="text-xs font-semibold text-emerald-700">{t.insights.englishOnly}</span>
                    )}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${insight.gradient} text-white shadow-lg mb-4`}>
                  {insight.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed flex-1">
                  {insight.description}
                </p>

                {/* Read Article link */}
                {insight.href && (
                  <Link
                    href={insight.href}
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${insight.gradient} bg-clip-text text-transparent hover:gap-3 transition-all`}
                  >
                    {t.insights.read} <ArrowRight className="h-4 w-4 text-emerald-600" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {insights.map((_, index) => (
            <div
              key={index}
              className={`rounded-full bg-white/30 transition-all ${index < 2 ? "w-4 h-2" : "w-2 h-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
