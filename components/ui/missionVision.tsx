'use client';

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function MissionVision() {
  const { t } = useI18n();
  const valueIcons = [
    <Rocket key="i" className="h-7 w-7" />,
    <Target key="p" className="h-7 w-7" />,
    <Heart key="h" className="h-7 w-7" />,
    <Eye key="e" className="h-7 w-7" />,
  ];
  return (
    <section id="mission" className="relative bg-white py-20 overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
            {t.mission.heading}
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 lg:p-10 shadow-xl"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur text-white mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.mission.title}</h3>
              <p className="text-emerald-100 text-xl leading-relaxed">
                {t.mission.text}
              </p>
              
              {/* Quote accent */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 italic text-sm">
                  
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-indigo-700 p-8 lg:p-10 shadow-xl"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur text-white mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.vision.title}</h3>
              <p className="text-sky-100 text-xl leading-relaxed">
                {t.vision.text}
              </p>
              
              {/* Quote accent */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 italic text-sm">
                  
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {t.values.map((label, index) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
            >
              <div className="text-emerald-600">{valueIcons[index]}</div>
              <span className="font-semibold text-lg text-slate-700">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
