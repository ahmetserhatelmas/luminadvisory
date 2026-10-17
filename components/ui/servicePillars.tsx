'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart2, BookOpen, CloudLightning, Globe2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ServicePillars() {
  const { t } = useI18n();
  const [chartHeights, setChartHeights] = useState<number[]>([]);

  useEffect(() => {
    // Generate random heights only on client-side
    setChartHeights([...Array(6)].map(() => Math.random() * 60 + 40));
  }, []);

  const sections = [
    {
      id: "pillar-climate-change",
      icon: <CloudLightning className="h-7 w-7" />,
      title: t.pillars.climate.title,
      subtitle: t.pillars.climate.tags,
      description: t.services.climate,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      iconBg: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
      id: "pillar-sustainable-products",
      icon: <BookOpen className="h-7 w-7" />,
      title: t.pillars.products.title,
      subtitle: t.pillars.products.tags,
      description: t.services.products,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-r from-emerald-500 to-teal-600"
    },
    {
      id: "pillar-critical-raw",
      icon: <Globe2 className="h-7 w-7" />,
      title: t.pillars.crm.title,
      subtitle: t.pillars.crm.tags,
      description: t.services.crm,
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      iconBg: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    {
      id: "pillar-esg-strategy",
      icon: <BarChart2 className="h-7 w-7" />,
      title: t.pillars.esg.title,
      subtitle: t.pillars.esg.tags,
      description: t.services.esg,
      gradient: "from-sky-500 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
      iconBg: "bg-gradient-to-r from-sky-500 to-blue-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="pillars" className="relative bg-slate-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50 translate-y-1/2" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-emerald-100 text-emerald-700 text-2xl font-bold mb-4">
            {t.services.eyebrow}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
            {t.services.title}
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            {t.services.intro}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${section.bgGradient} p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${section.gradient}`} />
              
              {/* Hover glow effect */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r ${section.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${section.iconBg} text-white shadow-lg mb-5`}>
                  {section.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {section.title}
                </h3>
                <p className="text-base text-slate-500 mt-1 font-medium">
                  {section.subtitle}
                </p>
                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Abstract Animated Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 p-16"
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-500 rounded-full blur-3xl"
            />
          </div>

          <div className="relative">
            {/* Animated Lines */}
            <div className="flex justify-center gap-8 md:gap-12 h-64 items-end">
              {chartHeights.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  className="relative w-16 md:w-20"
                >
                  <motion.div
                    animate={{ 
                      height: ["100%", "70%", "100%", "85%", "100%"]
                    }}
                    transition={{ 
                      duration: 4 + i * 0.3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                    className="w-full bg-gradient-to-t from-emerald-400 via-teal-400 to-sky-400 rounded-t-lg shadow-lg relative overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ 
                        y: ["-100%", "200%"]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.25
                      }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Dots - pre-computed positions to avoid hydration mismatch */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { x: 15, y1: 10, y2: 45, y3: 25, duration: 6 },
                { x: 28, y1: 55, y2: 20, y3: 70, duration: 7 },
                { x: 42, y1: 30, y2: 65, y3: 40, duration: 5.5 },
                { x: 55, y1: 75, y2: 35, y3: 85, duration: 6.5 },
                { x: 68, y1: 20, y2: 55, y3: 15, duration: 7.5 },
                { x: 82, y1: 60, y2: 25, y3: 50, duration: 5 },
                { x: 8, y1: 40, y2: 70, y3: 30, duration: 6.2 },
                { x: 35, y1: 80, y2: 40, y3: 65, duration: 7.2 },
                { x: 50, y1: 15, y2: 50, y3: 35, duration: 5.8 },
                { x: 72, y1: 45, y2: 80, y3: 55, duration: 6.8 },
                { x: 88, y1: 25, y2: 60, y3: 20, duration: 7.8 },
                { x: 22, y1: 70, y2: 30, y3: 75, duration: 5.3 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: `${dot.x}%`,
                    y: `${dot.y1}%`,
                    opacity: 0
                  }}
                  animate={{ 
                    y: [
                      `${dot.y1}%`,
                      `${dot.y2}%`,
                      `${dot.y3}%`
                    ],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{ 
                    duration: dot.duration, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  className="absolute w-2 h-2 bg-emerald-300 rounded-full"
                />
              ))}
            </div>

            {/* Wave Lines */}
            <div className="absolute bottom-0 left-0 right-0 h-32">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scaleX: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ 
                    duration: 4 + i, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                  style={{ transform: `translateY(-${i * 12}px)` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
