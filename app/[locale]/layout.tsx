import { notFound } from "next/navigation";
import { I18nProvider } from "@/lib/i18n";
import SetHtmlLang from "@/components/set-lang";
import { dictionaries, locales, type Locale } from "@/lib/messages";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = dictionaries[(locales as readonly string[]).includes(locale) ? (locale as Locale) : "en"];
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  return (
    <I18nProvider locale={locale as Locale}>
      <SetHtmlLang locale={locale} />
      {children}
    </I18nProvider>
  );
}
