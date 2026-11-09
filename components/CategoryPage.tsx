import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookingForm";
import { Collection } from "@/components/Collection";
import { Reveal } from "@/components/Reveal";
import { Contact, Faq, HennaProduction, photo, Works } from "@/components/sections";
import { dresses, showPrices, works } from "@/lib/content";
import { CATEGORY_PAGES, type CategoryPage as Kind, type Dict, type Locale } from "@/lib/i18n";

const COVER: Record<Kind, string> = {
  bridal: "/media/robes-mariee/kala-tul-01.jpg",
  evening: "/media/robes-soiree/erev-glima-01.jpg",
  henna: "/media/robes-henne/hina-kaftan-01.jpg",
  production: "/media/soirees-henne/tafura-bama-01.jpg",
};

/** Page « catégorie » (SEO) : titre, texte court, photo, puis la collection filtrée ou la production henné, FAQ, formulaire. */
export function CategoryPage({ d, lang, kind }: { d: Dict; lang: Locale; kind: Kind }) {
  const p = d.pages[kind];
  const cover = photo(d, COVER[kind]);
  const category = CATEGORY_PAGES[kind].category ?? undefined;
  const tab = kind === "production" ? "henna" : "fitting";
  return (
    <>
      <section className="px-5 pt-8 pb-16 md:px-10 md:pt-14 md:pb-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <Link href={`/${lang}`} className="text-[0.8125rem] text-muted hover:text-ink">
              {d.pages.back}
            </Link>
            <p className="eyebrow rise mt-8">{p.eyebrow}</p>
            <h1 className="display rise mt-5 text-[2.8rem] sm:text-[3.6rem] lg:text-[4.6rem] rtl:lg:text-[4rem]">{p.title}</h1>
            <p className="lead rise mt-7 max-w-lg">{p.lead}</p>
            <div className="mt-6 max-w-lg space-y-4">
              {p.body.map((t, i) => (
                <p key={i} className="leading-[1.85] text-muted">
                  {t}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <BookButton tab={tab} dress={category} className="btn-solid">
                {p.cta}
              </BookButton>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative mx-auto h-[46svh] w-full max-w-[560px] bg-pearl md:h-auto md:aspect-[4/5]">
              <Image src={cover.src} alt={cover.alt} fill priority sizes="(min-width:768px) 46vw, 100vw" quality={80} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {category ? (
        <section className="border-t border-line px-5 py-20 md:px-10 md:py-24" aria-label={d.collection.eyebrow}>
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="eyebrow">{d.collection.eyebrow}</p>
              <p className="lead mt-5 max-w-2xl">{d.collection.lead}</p>
            </Reveal>
            <div className="mt-12">
              <Collection items={dresses(d, category)} showPrices={showPrices} fixed={category} />
            </div>
          </div>
        </section>
      ) : (
        <>
          <HennaProduction d={d} lang={lang} heading={false} />
          <Works d={d} lang={lang} items={works(lang, d)} />
        </>
      )}
      <Faq d={d} />
      <Contact d={d} initialTab={tab} initialDress={category} />
    </>
  );
}
