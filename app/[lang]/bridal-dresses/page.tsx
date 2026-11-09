import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getDict, isLocale } from "@/lib/i18n";
import { ldScript, pageJsonLd, pageMeta } from "@/lib/jsonld";

export async function generateMetadata({ params }: PageProps<"/[lang]/bridal-dresses">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDict(lang).meta.pages.bridal;
  return pageMeta(lang, "/bridal-dresses", m.title, m.description);
}

export default async function Page({ params }: PageProps<"/[lang]/bridal-dresses">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(pageJsonLd(lang, "bridal"))} />
      <CategoryPage d={d} lang={lang} kind="bridal" />
    </>
  );
}
