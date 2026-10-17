import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { locales, type Locale } from "@/lib/messages";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Impressum — Lumin Advisory" : "Imprint — Lumin Advisory",
    robots: { index: true, follow: true },
  };
}

const de = [
  ["Angaben gemäß § 5 DDG", "Lumin Advisory Sustainability Strategy UG (haftungsbeschränkt)\nc/o Indy by Industrious (Atrium Tower)\nEichhornstraße 3, 7. OG\n10785 Berlin\nDeutschland\n\nVertreten durch den Geschäftsführer:\nDr. Arda Işıldar"],
  ["Kontakt", "Telefon: +49 152 22350857\nE-Mail: hello@luminsustainability.com\nWeb: www.luminsustainability.com"],
  ["Registereintrag", "Registergericht: Amtsgericht Charlottenburg\nRegisternummer: HRB 282539 B\n\nUmsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:\nDE461187210"],
  ["Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV", "Dr. Arda Işıldar, Anschrift wie oben"],
  ["Verbraucherstreitbeilegung", "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."],
  ["Haftung für Inhalte", "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir die betreffenden Inhalte umgehend."],
  ["Haftung für Links", "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend."],
  ["Urheberrecht", "Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von Lumin Advisory."],
];

const en = [
  ["Information pursuant to § 5 DDG (German Digital Services Act)", "Lumin Advisory Sustainability Strategy UG (haftungsbeschränkt)\nc/o Indy by Industrious (Atrium Tower)\nEichhornstraße 3, 7th floor\n10785 Berlin\nGermany\n\nRepresented by the Managing Director: Dr. Arda Işıldar"],
  ["Contact", "Phone: +49 152 22350857\nEmail: hello@luminsustainability.com\nWeb: www.luminsustainability.com"],
  ["Commercial register", "Register court: Amtsgericht Charlottenburg (Berlin)\nRegistration number: HRB 282539 B\n\nVAT identification number pursuant to § 27a of the German VAT Act: DE461187210"],
  ["Responsible for content pursuant to § 18(2) MStV", "Dr. Arda Işıldar, address as above"],
  ["Consumer dispute resolution", "We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board."],
  ["Liability for content", "As a service provider, we are responsible for our own content on these pages under general law. We are not obliged to monitor third-party information transmitted or stored. If we become aware of specific legal violations, we will remove the content concerned without delay."],
  ["Liability for links", "Our website contains links to external third-party websites over whose content we have no control. The respective provider or operator is always responsible for that content. If we become aware of legal violations, we will remove such links without delay."],
  ["Copyright", "The content and works on these pages are subject to German copyright law. Reproduction, editing and distribution beyond the limits of copyright law require the written consent of Lumin Advisory."],
];

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  const isDe = locale === "de";
  const sections = isDe ? de : en;

  return (
    <LegalShell
      locale={locale as Locale}
      title={isDe ? "Impressum" : "Imprint"}
      subtitle={isDe ? "Angaben gemäß § 5 DDG" : "Information pursuant to § 5 DDG"}
      sections={sections}
      showBindingNote={!isDe}
    />
  );
}

function LegalShell({
  locale,
  title,
  subtitle,
  sections,
  showBindingNote,
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  sections: string[][];
  showBindingNote: boolean;
}) {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-nunito-sans)]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" />
            {locale === "de" ? "Zur Startseite" : locale === "nl" ? "Terug naar home" : "Back to home"}
          </Link>
          <Link href={`/${locale}`} className="text-slate-900 font-bold text-lg">
            Lumin<span className="text-emerald-600">.</span>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-500 mb-8 text-lg">{subtitle}</p>
        {showBindingNote && (
          <p className="mb-10 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-600">
            {locale === "nl"
              ? "De Duitse versie is juridisch bindend. "
              : "The German version is legally binding. "}
            <Link href="/de/imprint" className="text-emerald-700 underline">Impressum (DE)</Link>
          </p>
        )}
        <div className="space-y-10 text-slate-700 text-lg leading-relaxed">
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{heading}</h2>
              {body.split("\n\n").map((block) => (
                <p key={block.slice(0, 24)} className="mb-3 whitespace-pre-line">{block}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
