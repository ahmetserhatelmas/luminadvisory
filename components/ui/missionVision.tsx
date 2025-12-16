'use client';

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Heart } from "lucide-react";

export default function MissionVision() {
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
            Mission & Vision
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
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-emerald-100 text-xl leading-relaxed">
                To empower organizations with the scientific rigor and strategic clarity needed to navigate 
                the sustainable transition. We exist to ensure that every environmental decision is backed 
                by verified data, reducing risk and maximizing impact.
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
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-sky-100 text-xl leading-relaxed">
                A future where business strategy and planetary boundaries are fully aligned. We envision 
                an economy where transparency is the standard, and sustainability is no longer a burden 
                of compliance, but a driver of operational excellence.
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
          {[
            { icon: <Rocket className="h-5 w-5" />, label: "Innovation" },
            { icon: <Target className="h-5 w-5" />, label: "Precision" },
            { icon: <Heart className="h-5 w-5" />, label: "Integrity" },
            { icon: <Eye className="h-5 w-5" />, label: "Transparency" },
          ].map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
            >
              <div className="text-emerald-600">{value.icon}</div>
              <span className="font-semibold text-slate-700">{value.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
