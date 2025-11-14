'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';   

export default function Insights() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        // Insights Section
        <section id="insights" className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <h2 className="text-3xl font-semibold">Insights</h2>
                <p className="mt-2 text-slate-600">
                    Perspectives and brief notes on sustainability, carbon, and materials topics.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Insight 1 */}
                    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-lg font-semibold text-emerald-700">
                            Scope 3 is about 80–90% of all emissions — but none are under direct control
                        </h3>
                        <p className="mt-3 text-sm text-slate-700">
                            {/* Can add the text here*/}
                        </p>
                    </article>

                    {/* Insight 2 */}
                    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-lg font-semibold text-emerald-700">
                            Carbon shadow pricing reflects the real cost of a product
                        </h3>
                        <p className="mt-3 text-sm text-slate-700">
                            {/* Can add the text here*/}
                        </p>
                    </article>

                    {/* Insight 3 */}
                    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
                        <h3 className="text-lg font-semibold text-emerald-700">
                            Critical Raw Materials have become a mainstream topic — what’s next?
                        </h3>
                        <p className="mt-3 text-sm text-slate-700">
                            {/* Can add the text here*/}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

