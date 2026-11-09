import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Collection } from "@/components/Collection";
import { About, Blocks, CategoryCards, Contact, Faq, HennaProduction, Hero, Reviews, SectionHead, Works } from "@/components/sections";
import { dresses, showPrices, works } from "@/lib/content";
import { getDict, isLocale } from "@/lib/i18n";
import { homeJsonLd, homeTitle, ldScript, pageMeta } from "@/lib/jsonld";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return pageMeta(lang, "", homeTitle(lang), d.meta.description);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(homeJsonLd(lang))} />
      <Hero d={d} lang={lang} />
      <CategoryCards d={d} lang={lang} />
      <section id="collection" className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="collection-title">
        <div className="mx-auto max-w-[1400px]">
          <SectionHead eyebrow={d.collection.eyebrow} title={d.collection.title} lead={d.collection.lead} id="collection-title" />
          <div className="mt-12">
            <Collection items={dresses(d)} showPrices={showPrices} limit={8} />
          </div>
        </div>
      </section>
      <HennaProduction d={d} lang={lang} />
      <Blocks d={d} lang={lang} />
      <Works d={d} lang={lang} items={works(lang, d)} />
      <About d={d} />
      <Reviews d={d} lang={lang} />
      <Faq d={d} />
      <Contact d={d} />
    </>
  );
}
