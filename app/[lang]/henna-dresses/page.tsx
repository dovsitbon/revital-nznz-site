import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getDict, isLocale } from "@/lib/i18n";
import { ldScript, pageJsonLd, pageMeta } from "@/lib/jsonld";

export async function generateMetadata({ params }: PageProps<"/[lang]/henna-dresses">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDict(lang).meta.pages.henna;
  return pageMeta(lang, "/henna-dresses", m.title, m.description);
}

export default async function Page({ params }: PageProps<"/[lang]/henna-dresses">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(pageJsonLd(lang, "henna"))} />
      <CategoryPage d={d} lang={lang} kind="henna" />
    </>
  );
}
