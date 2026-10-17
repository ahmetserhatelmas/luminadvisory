'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Shield, TrendingUp, Leaf } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function HeroSection() {
  const { t } = useI18n();
  const serviceItems = [
    {
      id: 'pillar-climate-change',
      title: t.pillars.climate.title,
      desc: t.pillars.climate.tags,
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-900/40 to-orange-900/40',
    },
    {
      id: 'pillar-sustainable-products',
      title: t.pillars.products.title,
      desc: t.pillars.products.tags,
      icon: <Leaf className="h-5 w-5" />,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-900/40 to-teal-900/40',
    },
    {
      id: 'pillar-critical-raw',
      title: t.pillars.crm.title,
      desc: t.pillars.crm.tags,
      icon: <Sparkles className="h-5 w-5" />,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40',
    },
    {
      id: 'pillar-esg-strategy',
      title: t.pillars.esg.title,
      desc: t.pillars.esg.tags,
      icon: <Shield className="h-5 w-5" />,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-sky-900/40 to-blue-900/40',
    },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 animate-gradient" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-6 py-3 text-2xl text-emerald-300 mb-6"
            >
              <Sparkles className="h-6 w-6" />
              <span className="font-bold">{t.hero.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              {t.hero.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{t.hero.title.split(' ').slice(-1)}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
{t.hero.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#pillars"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-white font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur px-6 py-4 text-white font-semibold hover:bg-white/20 transition-all"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

          </div>

          {/* RIGHT SIDE - Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Feature Card - Above Service Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="sm:col-span-2 rounded-2xl bg-white/5 backdrop-blur border border-white/20 p-6 mb-2"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {t.hero.cardTitle}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.hero.cardText}
              </p>
            </motion.div>

            {serviceItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur border border-white/20 p-5 transition-all hover:border-white/30 ${item.bgColor}`}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} text-white mb-3`}>
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-slate-400 mt-1">
                  {item.desc}
                </p>

                <div className="mt-3 flex items-center gap-1 text-emerald-400 text-base opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t.pillars.learnMore}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
