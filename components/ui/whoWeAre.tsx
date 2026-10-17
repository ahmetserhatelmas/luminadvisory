'use client';

import React from "react";
import Image from "next/image";
import { Users, GraduationCap, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function WhoWeAre() {
  const { t } = useI18n();
  return (
    <section id="who-we-are" className="border-t border-slate-200 bg-emerald-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-emerald-900 mb-4">{t.team.eyebrow}</h2>
        <p className="text-center text-2xl text-slate-700 mb-12 font-semibold">
          {t.team.title}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {t.team.text1}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-600 text-white flex-shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {t.team.text2}
              </p>
            </div>
          </div>
        </div>

        {/* Managing Partner */}
        <div className="rounded-2xl border-2 border-emerald-200 bg-white p-8 md:p-10 shadow-md">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/arda-isildar.png"
                  alt="Dr. Arda Işıldar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-emerald-600 text-white flex-shrink-0">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-900">{t.profile.role}</h3>
                  <p className="text-xl text-emerald-700 font-semibold">{t.profile.name}</p>
                </div>
              </div>
              
              <div className="space-y-3 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>{t.profile.bio1}</p>
            <p>{t.profile.bio2}</p>
                <p className="text-base text-slate-600 pt-4 border-t border-slate-200">
                  {t.profile.education}
                  <br/>
                  {t.profile.publications}
                  <br/>
                  {t.profile.roles}
                  <br/>
                  <a
                    href="https://www.linkedin.com/company/luminadvisory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline"
                  >
                    {t.profile.linkedin}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

