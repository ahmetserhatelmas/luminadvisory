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
    title: locale === "de" ? "Datenschutzerklärung — Lumin Advisory" : "Privacy Policy — Lumin Advisory",
  };
}

const resendDe =
  "Für den Versand der Formularnachrichten nutzen wir Resend, Inc. (USA) als Auftragsverarbeiter. Eine Übermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln und, soweit der Anbieter zertifiziert ist, des EU-US Data Privacy Framework.";
const resendEn =
  "We use Resend, Inc. (USA) as a processor to deliver form messages. Transfers to the USA are based on the EU Standard Contractual Clauses and, where the provider is certified, the EU-US Data Privacy Framework.";

const de = [
  ["1. Verantwortlicher", "Lumin Advisory Sustainability Strategy UG (haftungsbeschränkt), vertreten durch den Geschäftsführer Dr. Arda Işıldar, c/o Indy by Industrious (Atrium Tower), Eichhornstraße 3, 10785 Berlin, Deutschland. E-Mail: hello@luminsustainability.com\n\nEin Datenschutzbeauftragter ist gesetzlich nicht vorgeschrieben und nicht benannt."],
  ["2. Allgemeines", "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website und zur Beantwortung Ihrer Anfragen erforderlich ist. Die Übertragung dieser Website erfolgt verschlüsselt (TLS/HTTPS)."],
  ["3. Hosting und Server-Logfiles", "Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden technisch notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browsertyp und Betriebssystem. Zweck ist die sichere und stabile Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und fehlerfreien Betrieb). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Eine Übermittlung in die USA erfolgt auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission zum EU-US Data Privacy Framework, unter dem der Anbieter zertifiziert ist; ergänzend auf Grundlage der EU-Standardvertragsklauseln. Logdaten werden nach 30 Tagen gelöscht."],
  ["4. Kontaktformular und E-Mail", `Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir Ihren Namen, Ihre geschäftliche E-Mail-Adresse, Ihr Unternehmen (freiwillig) und Ihre Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertragsabschluss gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). ${resendDe} Die Angabe von Name, E-Mail-Adresse und Nachricht ist erforderlich, um Ihre Anfrage bearbeiten zu können. Wir löschen Anfragen, sobald sie erledigt sind und keine gesetzlichen Aufbewahrungspflichten (z. B. § 257 HGB, § 147 AO) entgegenstehen.`],
  ["5. Cookies, Tracking und Schriftarten", "Diese Website setzt keine Cookies und verwendet keine Analyse- oder Marketing-Tools. Die Spracheinstellung wird ausschließlich über die URL gesteuert. Schriftarten werden lokal von unserem Server geladen; es findet keine Verbindung zu Servern von Google oder anderen Schriftanbietern statt."],
  ["6. Externe Links", "Unsere Website enthält Links zu externen Angeboten (z. B. LinkedIn). Erst beim Anklicken werden Daten an den jeweiligen Anbieter übertragen; es gelten dessen Datenschutzbestimmungen."],
  ["7. Ihre Rechte", "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO einzulegen (Art. 21). Wenden Sie sich dazu an hello@luminsustainability.com."],
  ["8. Beschwerderecht", "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist: Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin."],
  ["9. Keine automatisierte Entscheidungsfindung", "Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt."],
  ["10. Stand", "Oktober 2026. Wir passen diese Datenschutzerklärung an, sobald sich die Website oder die Rechtslage ändert."],
];

const en = [
  ["1. Controller", "Lumin Advisory Sustainability Strategy UG (haftungsbeschränkt), represented by its Managing Director Dr. Arda Işıldar, c/o Indy by Industrious (Atrium Tower), Eichhornstraße 3, 10785 Berlin, Germany. Email: hello@luminsustainability.com\n\nWe are not legally required to appoint a data protection officer and have not appointed one."],
  ["2. General", "We process personal data only to the extent necessary to provide this website and to answer your enquiries. This website is transmitted in encrypted form (TLS/HTTPS)."],
  ["3. Hosting and server log files", "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the website, technically necessary data are processed: IP address, date and time of access, page visited, referrer URL, browser type and operating system. The purpose is the secure and stable provision of the website. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and error-free operation). We have concluded a data processing agreement with the provider under Art. 28 GDPR. Transfers to the USA are based on the European Commission's adequacy decision for the EU-US Data Privacy Framework, under which the provider is certified, and additionally on the EU Standard Contractual Clauses. Log data are deleted after 30 days."],
  ["4. Contact form and email", `If you contact us via the contact form or by email, we process your name, business email address, company (optional) and message in order to answer your enquiry. The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to concluding a contract, and otherwise Art. 6(1)(f) GDPR (legitimate interest in answering enquiries). ${resendEn} Name, email address and message are required for us to handle your enquiry. We delete enquiries once they have been dealt with, unless statutory retention obligations apply (e.g. § 257 HGB, § 147 AO).`],
  ["5. Cookies, tracking and fonts", "This website does not set cookies and does not use analytics or marketing tools. Language selection is handled solely via the URL. Fonts are loaded locally from our server; no connection is made to servers of Google or other font providers."],
  ["6. External links", "Our website contains links to external services (e.g. LinkedIn). Data are only transferred to the respective provider when you click such a link; that provider's privacy policy then applies."],
  ["7. Your rights", "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18) and data portability (Art. 20), as well as the right to object at any time, on grounds relating to your particular situation, to processing based on Art. 6(1)(f) GDPR (Art. 21). Please contact hello@luminsustainability.com."],
  ["8. Right to lodge a complaint", "You have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for us is the Berlin Commissioner for Data Protection and Freedom of Information (Berliner Beauftragte für Datenschutz und Informationsfreiheit), Alt-Moabit 59–61, 10555 Berlin, Germany."],
  ["9. No automated decision-making", "No automated decision-making, including profiling (Art. 22 GDPR), takes place."],
  ["10. Version", "October 2026. We will update this privacy policy whenever the website or the legal situation changes."],
];

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  const isDe = locale === "de";
  const sections = isDe ? de : en;
  const back = locale === "de" ? "Zur Startseite" : locale === "nl" ? "Terug naar home" : "Back to home";

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-nunito-sans)]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" />
            {back}
          </Link>
          <Link href={`/${locale}`} className="text-slate-900 font-bold text-lg">
            Lumin<span className="text-emerald-600">.</span>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">{isDe ? "Datenschutzerklärung" : "Privacy Policy"}</h1>
        {!isDe && (
          <p className="mb-10 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-600">
            {locale === "nl" ? "De Duitse versie is juridisch bindend. " : "The German version is legally binding. "}
            <Link href="/de/privacy" className="text-emerald-700 underline">Datenschutzerklärung (DE)</Link>
          </p>
        )}
        <div className="space-y-10 text-slate-700 text-lg leading-relaxed">
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{heading}</h2>
              {body.split("\n\n").map((block) => (
                <p key={block.slice(0, 40)} className="mb-3 whitespace-pre-line">{block}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
