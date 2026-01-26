import React from "react";
import Image from "next/image";
import { MapPin, Building2, Globe } from "lucide-react";

export default function WhereWeWork() {
  const locations = [
    {
      city: "Berlin",
      country: "Germany",
      description: "Placing us at the heart of European policy and innovation.",
      icon: "🇩🇪"
    },
    {
      city: "Rotterdam",
      country: "Netherlands",
      description: "Connecting us to Europe's industrial supply chains and logistics corridors.",
      icon: "🇳🇱"
    },
    {
      city: "Istanbul",
      country: "Turkey",
      description: "Bridging the gap between East and West, a critical node for manufacturing and raw materials.",
      icon: "🇹🇷"
    }
  ];

  return (
    <section id="where-we-work" className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-4">
          <h2 className="text-5xl md:text-6xl font-bold text-emerald-900">Where We Work</h2>
          <p className="text-2xl text-slate-600 mt-2">Strategic Hubs for a Global Economy</p>
        </div>
        
        {/* Main Grid: Content + Image */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="max-w-4xl">
              <p className="text-base text-slate-700 leading-relaxed">
                We operate at the nexus of European regulation and global trade. Lumin Advisory is anchored 
                in three strategic locations—Rotterdam, Berlin, and Istanbul—positioning us to support clients 
                across the EMEA region and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{location.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {location.city}
                      </h3>
                      <p className="text-base text-slate-600">{location.country}</p>
                    </div>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {location.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image + Info Cards */}
          <div className="lg:col-span-3 space-y-8">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/taslak25_swapped.png"
                alt="Global Reach - Strategic Locations"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Info Cards Below Image */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-emerald-900">Registered Office</h3>
                </div>
                <p className="text-base text-slate-700 font-medium">
                  We are a registered business in Berlin, Germany
                </p>
              </div>

              <div className="rounded-2xl border-2 border-sky-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-sky-600" />
                  <h3 className="text-xl font-semibold text-sky-900">Global Reach</h3>
                </div>
                <p className="text-base text-slate-700 font-medium">
                  While our hubs are local, our perspective is global. We support clients wherever their 
                  value chains extend, navigating cross-border regulatory challenges and complex supplier 
                  networks with agility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

