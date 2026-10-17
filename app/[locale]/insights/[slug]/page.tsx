import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";
import { dictionaries, locales, type Locale } from "@/lib/messages";

export async function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Lumin Advisory`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = (locales as readonly string[]).includes(locale) ? (locale as Locale) : "en";
  const t = dictionaries[safeLocale];
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-nunito-sans)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href={`/${safeLocale}#insights`}
            className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.insights.back}
          </Link>
          <Link href={`/${safeLocale}`} className="text-slate-900 font-bold text-lg">
            Lumin<span className="text-emerald-600">.</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-slate-900 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Tag */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${article.gradient} mb-6`}
          >
            {article.tag}
          </span>

          {safeLocale !== "en" && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 bg-white/10 mb-4">
              {t.insights.englishOnly}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {article.subtitle}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readingTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate prose-lg max-w-none">
          {article.sections.map((section, i) => (
            <div key={i} className="mb-10">
              {section.figure ? (
                <figure className="my-10">
                  <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                    <Image
                      src={section.figure.src}
                      alt={section.figure.alt}
                      width={1040}
                      height={600}
                      className="w-full h-auto"
                      priority={i < 2}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-slate-500 text-center italic">
                    {section.figure.caption}
                  </figcaption>
                </figure>
              ) : (
                <>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10 first:mt-0">
                      {section.heading}
                    </h2>
                  )}
                  {section.body && section.body.split("\n\n").map((paragraph, j) => (
                    <p key={j} className="text-slate-700 leading-relaxed mb-4 text-lg">
                      {paragraph}
                    </p>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-16 pt-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white">
            <Tag className="h-6 w-6 text-emerald-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Want to discuss this further?</h3>
            <p className="text-slate-300 mb-6 text-lg">
              Lumin Advisory works with companies and institutions on critical raw materials strategy,
              circular economy and sustainability evidence. Get in touch to talk about your specific challenge.
            </p>
            <Link
              href={`/${safeLocale}#contact`}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Other articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6">More Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter((a) => a.slug !== article.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/${safeLocale}/insights/${a.slug}`}
                  className="group block rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${a.gradient} mb-3`}
                  >
                    {a.tag}
                  </span>
                  <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                    {a.title}
                  </h4>
                  <p className="text-sm text-slate-500 line-clamp-2">{a.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Lumin Advisory Sustainability Strategy UG · Berlin</span>
          <Link href={`/${safeLocale}`} className="hover:text-emerald-600 transition-colors">
            luminsustainability.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
