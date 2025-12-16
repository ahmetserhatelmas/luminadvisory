import React from "react";
import Image from "next/image";
import { Users, GraduationCap, Briefcase } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="border-t border-slate-200 bg-emerald-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-emerald-900 mb-4">Who We Are</h2>
        <p className="text-center text-2xl text-slate-700 mb-12 font-semibold">
          We are Engineers, Scientists, and Strategists
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Lumin Advisory is not a traditional management consultancy. We are a technical collective built to solve the physical and regulatory challenges of the sustainable transition.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-600 text-white flex-shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our team brings together distinct disciplines that rarely sit at the same table: chemical 
                engineering, environmental data science, supply chain operations, and corporate strategy. 
                This cross-disciplinary approach allows us to speak the language of your R&D team and your 
                Board of Directors. We partner with experts as needed by the contracting projects.
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
                  <h3 className="text-3xl font-bold text-emerald-900">Managing Partner / Lead Scientist</h3>
                  <p className="text-xl text-emerald-700 font-semibold">Dr. Arda Işıldar</p>
                </div>
              </div>
              
              <div className="space-y-3 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              Arda is a technical strategist who architects sustainability roadmaps for complex industrial 
              value chains. As the founder of Lumin Advisory, he advises corporate leaders on how to translate 
              environmental science into operational resilience and regulatory compliance.
            </p>
            <p>
              With a deep background in environmental engineering and circular economy modeling, Arda moves 
              beyond high-level pledges to deliver the mathematical backbone of sustainability. He specializes 
              in Critical Raw Materials (CRM) governance and Life Cycle Assessment (LCA), helping companies 
              quantify risks that sit deep within their supply chains—from resource scarcity to carbon pricing exposure.
            </p>
                <p className="text-base text-slate-600 pt-4 border-t border-slate-200">
                  <span className="font-semibold">Education:</span> Joint PhD in Environmental Technology (IHE Delft, TU Delft, Université Paris-Est)
                  <br/>
                  <span className="font-semibold">Publications:</span> Editor of <em>Critical Materials and Sustainability Transition</em> (CRC Press)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

