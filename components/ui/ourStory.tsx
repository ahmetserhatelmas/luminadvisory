'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Pre-computed leaf positions to avoid hydration mismatch
const leafData = [
  { x: 12, duration: 14, direction: 1 },
  { x: 28, duration: 11, direction: -1 },
  { x: 45, duration: 16, direction: 1 },
  { x: 62, duration: 13, direction: -1 },
  { x: 78, duration: 15, direction: 1 },
  { x: 8, duration: 12, direction: -1 },
  { x: 35, duration: 17, direction: 1 },
  { x: 52, duration: 10, direction: -1 },
  { x: 70, duration: 14, direction: 1 },
  { x: 88, duration: 11, direction: -1 },
  { x: 20, duration: 15, direction: 1 },
  { x: 40, duration: 13, direction: -1 },
  { x: 58, duration: 16, direction: 1 },
  { x: 75, duration: 12, direction: -1 },
  { x: 92, duration: 18, direction: 1 },
];

export default function OurStory() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="story" className="relative border-t border-slate-200 bg-slate-50 py-16 overflow-hidden">
      {/* Animated Leaves - only render on client to avoid hydration mismatch */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {leafData.map((leaf, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${leaf.x}%`,
                y: -100,
                rotate: 0,
                scale: 0
              }}
              animate={{ 
                y: ['-10%', '110%'],
                x: [`${leaf.x}%`, `${leaf.x + 10}%`],
                rotate: [0, 360 * leaf.direction],
                scale: [0, 1, 1, 0.8, 0]
              }}
              transition={{ 
                duration: leaf.duration,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "linear"
              }}
              className="absolute"
              style={{ left: `${leaf.x}%` }}
            >
              <svg width="45" height="45" viewBox="0 0 50 50" fill="none" className="drop-shadow-lg">
                {/* Realistic leaf shape */}
                <path
                  d="M25 8 Q30 16, 35 25 Q30 34, 25 42 Q20 34, 15 25 Q20 16, 25 8 Z"
                  fill={i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#14b8a6' : '#059669'}
                  opacity="0.8"
                />
                {/* Main vein */}
                <line x1="25" y1="8" x2="25" y2="42" stroke="#047857" strokeWidth="1.2" opacity="0.6" />
                {/* Side veins - shorter */}
                <path d="M25 18 Q28 21, 30 24" stroke="#047857" strokeWidth="0.7" opacity="0.4" fill="none" />
                <path d="M25 18 Q22 21, 20 24" stroke="#047857" strokeWidth="0.7" opacity="0.4" fill="none" />
                <path d="M25 28 Q28 30, 31 32" stroke="#047857" strokeWidth="0.7" opacity="0.4" fill="none" />
                <path d="M25 28 Q22 30, 19 32" stroke="#047857" strokeWidth="0.7" opacity="0.4" fill="none" />
                <path d="M25 36 Q27 37, 29 38" stroke="#047857" strokeWidth="0.7" opacity="0.4" fill="none" />
                <path d="M25 36 Q23 37, 21 38" stroke="#047857" strokeWidth="0.7" opacity="0.4" fill="none" />
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-600" />
            <h2 className="text-5xl md:text-6xl font-bold text-emerald-900">Our Story</h2>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Decorative corner leaves */}
          <div className="absolute top-4 right-4 opacity-10">
            <svg width="100" height="100" viewBox="0 0 50 50" fill="none">
              <path
                d="M25 5 Q30 15, 35 25 Q30 35, 25 45 Q20 35, 15 25 Q20 15, 25 5 Z"
                fill="#10b981"
              />
              <line x1="25" y1="5" x2="25" y2="45" stroke="#047857" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          
          <p className="text-xl text-slate-700 leading-relaxed relative z-10">
            Lumin Advisory was founded to bridge a critical gap in the market: the disconnect between 
            rigorous environmental engineering and high-level business strategy. We observed that companies 
            were often paralyzed by the complexity of sustainability data or misled by vague "green" 
            consulting that lacked technical depth. Leaders needed more than good intentions; they needed facts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}



