import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import { BookButton, BookingForm, type Tab } from "@/components/BookingForm";
import { ArrowIcon, InstagramIcon, PhoneIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { LoopVideo } from "@/components/LoopVideo";
import { Mark, Sparkle } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { money, waLink } from "@/lib/booking";
import { hours, included, packages, regions, reviews, type Work } from "@/lib/content";
import { altOf, fill, intlLocale, type Dict, type Locale } from "@/lib/i18n";
import { img } from "@/lib/media";
import type { DressType } from "@/lib/booking";

export function photo(d: Dict, src: string) {
  return { ...img(src), alt: altOf(d, src) };
}

export function SectionHead({ eyebrow, title, lead, center = false, as: H = "h2", id }: { eyebrow: string; title: string; lead?: string; center?: boolean; as?: "h1" | "h2"; id?: string }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <H id={id} className="display mt-5 text-[2.5rem] md:text-[3.4rem] rtl:md:text-[3rem]">{title}</H>
      {lead && <p className="lead mt-6">{lead}</p>}
    </Reveal>
  );
}

const followers = (lang: Locale) => new Intl.NumberFormat(intlLocale[lang]).format(site.followers.count);

/** Hero éditorial : texte d'un côté, la photo forte de l'autre ; 2 boutons ; preuve (abonnés) juste sous les boutons. */
export function Hero({ d, lang }: { d: Dict; lang: Locale }) {
  const h = d.hero;
  const p = photo(d, "/media/hero/kalat-hina-01.jpg");
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 pt-5 pb-16 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:pt-14 md:pb-24">
        <div className="order-2 md:order-1">
          <p className="eyebrow rise">{h.eyebrow}</p>
          <h1 className="display rise mt-5 text-[2.7rem] leading-[1.02] sm:text-[3.8rem] lg:text-[5.2rem] rtl:lg:text-[4.6rem]" style={{ animationDelay: "0.1s" }}>
            {h.title}
          </h1>
          <p className="lead rise mt-7 max-w-lg" style={{ animationDelay: "0.2s" }}>
            {h.lead}
          </p>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "0.3s" }}>
            <BookButton tab="fitting" className="btn-solid">
              {h.ctaFitting}
            </BookButton>
            <BookButton tab="henna" className="btn-line">
              {h.ctaHenna}
            </BookButton>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="rise mt-8 inline-flex min-h-10 items-center gap-3 text-[0.875rem] text-muted transition-colors hover:text-ink" style={{ animationDelay: "0.4s" }}>
            <InstagramIcon className="h-4 w-4" />
            <span>{fill(h.proof, { n: followers(lang) })}</span>
            <span aria-hidden="true">·</span>
            <span dir="ltr">{site.instagramHandle}</span>
          </a>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto h-[50svh] w-full max-w-[560px] overflow-hidden bg-pearl md:h-auto md:aspect-[3/4]">
            <Image src={p.src} alt={p.alt} fill priority sizes="(min-width:768px) 48vw, 100vw" quality={80} className="drift object-cover object-[50%_30%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cartes portrait (format vertical) : une par univers, juste après le hero. */
export function CategoryCards({ d, lang }: { d: Dict; lang: Locale }) {
  const c = d.cards;
  const home = `/${lang}`;
  const cards = [
    { key: "bridal", href: `${home}/bridal-dresses`, src: "/media/robes-mariee/kala-tachra-01.jpg" },
    { key: "evening", href: `${home}/evening-dresses`, src: "/media/robes-soiree/erev-zahav-01.jpg" },
    { key: "henna", href: `${home}/henna-dresses`, src: "/media/robes-henne/hina-glima-02.jpg" },
    { key: "production", href: `${home}/henna-production`, src: "/media/soirees-henne/tafura-bama-01.jpg" },
  ] as const;
  return (
    <section className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="cards-title">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="cards-title" className="display mt-5 text-[2.3rem] md:text-[3rem]">
            {c.title}
          </h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
          {cards.map((card, i) => {
            const p = photo(d, card.src);
            const t = c.items[card.key];
            return (
              <Reveal as="li" key={card.key} delay={0.08 * i}>
                <Link href={card.href} className="group block">
                  <div className="shine relative aspect-[3/4] bg-pearl">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 24vw, 48vw" quality={70} className="object-cover" />
                    <Sparkle className="glint absolute end-4 top-4 h-5 w-5 text-ivory drop-shadow" />
                  </div>
                  <h3 className="display mt-5 text-[1.6rem] md:text-[1.85rem]">{t.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{t.text}</p>
                  <span className="nav-link mt-4 inline-flex items-center gap-2 text-gold-ink">
                    {t.cta}
                    <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Production de soirées henné : vidéo du décor, ce qui est inclus (data/formules-henne.json), formules ou « sur mesure ». */
export function HennaProduction({ d, lang, heading = true }: { d: Dict; lang: Locale; heading?: boolean }) {
  const h = d.henna;
  return (
    <section id="henna" className="bg-velvet px-5 py-20 text-ivory md:px-10 md:py-28" aria-labelledby="henna-title">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <LoopVideo
            src="/media/video/decor-henne.mp4"
            poster="/media/video/decor-henne.jpg"
            label={h.video}
            playLabel={d.work.play}
            pauseLabel={d.work.pause}
            className="mx-auto aspect-[9/16] max-h-[78svh] w-full max-w-[440px] overflow-hidden bg-ink"
          />
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow !text-champagne">{h.eyebrow}</p>
            {heading ? (
              <h2 id="henna-title" className="display mt-5 text-[2.5rem] md:text-[3.4rem] rtl:md:text-[3rem]">
                {h.title}
              </h2>
            ) : (
              <p id="henna-title" className="display mt-5 text-[2.2rem] md:text-[2.8rem]">
                {h.title}
              </p>
            )}
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.9] text-ivory/80">{h.lead}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="eyebrow mt-12 !text-champagne">{h.includedTitle}</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {included.map((k) => (
                <li key={k} className="flex gap-3 text-[0.98rem] leading-snug">
                  <Sparkle className="mt-1 h-3 w-3 shrink-0 text-gold" />
                  {h.included[k]}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            {packages.length > 0 ? (
              <div className="mt-12">
                <h3 className="eyebrow !text-champagne">{h.packagesTitle}</h3>
                <ul className="mt-5 divide-y divide-ivory/15 border-y border-ivory/15">
                  {packages.map((p) => (
                    <li key={p.id} className="flex items-baseline justify-between gap-6 py-4">
                      <span className="display text-[1.4rem]">{p.name[lang]}</span>
                      {p.priceFrom ? <span className="text-ivory/80">{fill(h.priceFrom, { price: money(p.priceFrom, lang) })}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-12 max-w-xl border-s border-gold/60 ps-5 text-[0.98rem] leading-relaxed text-ivory/75">{h.custom}</p>
            )}
            {regions && (
              <p className="mt-6 text-[0.9375rem] text-ivory/75">
                <span className="text-champagne">{h.regions}:</span> {regions[lang]}
              </p>
            )}
            <div className="mt-10">
              <BookButton tab="henna" className="btn-line on-dark">
                {h.cta}
              </BookButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Trois blocs alternés photo + texte court + un seul bouton. */
export function Blocks({ d, lang }: { d: Dict; lang: Locale }) {
  const b = d.blocks;
  const rows: { key: keyof Dict["blocks"]; src: string; href?: string; tab?: Tab; dress?: DressType }[] = [
    { key: "atelier", src: "/media/robes-mariee/kala-tachra-02.jpg", href: `/${lang}#collection` },
    { key: "day", src: "/media/soirees-henne/tafura-knisa-05.jpg", tab: "henna" },
    { key: "fitting", src: "/media/robes-soiree/erev-kachol-01.jpg", tab: "fitting" },
  ];
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1200px] space-y-20 md:space-y-28">
        {rows.map((r, i) => {
          const p = photo(d, r.src);
          const t = b[r.key];
          return (
            <div key={r.key} className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
              <Reveal className={i % 2 ? "md:order-2" : ""}>
                <div className="shine relative aspect-[4/5] bg-pearl">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 46vw, 100vw" quality={70} className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 ? "md:order-1" : ""}>
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 className="display mt-5 text-[2.2rem] md:text-[2.9rem] rtl:md:text-[2.6rem]">{t.title}</h2>
                <p className="lead mt-6 max-w-md">{t.text}</p>
                <div className="mt-9">
                  {r.href ? (
                    <Link href={r.href} className="btn-line">
                      {t.cta}
                    </Link>
                  ) : (
                    <BookButton tab={r.tab!} className="btn-line">
                      {t.cta}
                    </BookButton>
                  )}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Réalisations : grille de soirées henné (photo ou vidéo, titre, mois, lieu et invités quand ils sont connus). */
export function Works({ d, lang, items }: { d: Dict; lang: Locale; items: Work[] }) {
  const w = d.work;
  const month = (iso: string) => new Intl.DateTimeFormat(intlLocale[lang], { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}-01T00:00:00Z`));
  return (
    <section id="work" className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{w.eyebrow}</p>
            <h2 id="work-title" className="display mt-5 text-[2.5rem] md:text-[3.4rem] rtl:md:text-[3rem]">
              {w.title}
            </h2>
            <p className="lead mt-6">{w.lead}</p>
          </Reveal>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="nav-link link-line self-start md:self-auto">
            {w.more}
          </a>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
          {items.map((x, i) => (
            <Reveal as="li" key={x.id} delay={0.06 * (i % 4)}>
              {x.video ? (
                <LoopVideo src={x.video} poster={`${x.video.replace(/\.mp4$/, ".jpg")}`} label={x.title} playLabel={w.play} pauseLabel={w.pause} className="aspect-[3/4] overflow-hidden bg-pearl" />
              ) : (
                <div className="shine relative aspect-[3/4] bg-pearl">
                  <Image src={x.image.src} alt={x.alt} fill sizes="(min-width:1024px) 24vw, 48vw" quality={70} className="object-cover" />
                </div>
              )}
              <h3 className="display mt-4 text-[1.35rem] md:text-[1.55rem]">{x.title}</h3>
              <p className="mt-1.5 text-[0.8125rem] text-muted">
                {month(x.date)}
                {x.place ? ` · ${x.place}` : ""}
                {x.guests ? ` · ${fill(w.guests, { n: x.guests })}` : ""}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** À propos : portrait, quelques lignes, un seul bouton. */
export function About({ d }: { d: Dict }) {
  const a = d.about;
  const p = photo(d, "/media/hero/revital-01.jpg");
  return (
    <section id="about" className="bg-pearl px-5 py-20 md:px-10 md:py-28" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[460px] bg-champagne">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 40vw, 100vw" quality={75} className="object-cover object-top" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Mark className="h-12 w-auto text-gold" />
          <p className="eyebrow mt-8">{a.eyebrow}</p>
          <h2 id="about-title" className="display mt-4 text-[2.6rem] md:text-[3.4rem]" translate="no">
            {a.title}
          </h2>
          <div className="mt-7 max-w-xl space-y-5">
            {a.text.map((t, i) => (
              <p key={i} className="lead">
                {t}
              </p>
            ))}
          </div>
          <blockquote className="display mt-9 max-w-xl border-s border-gold ps-6 text-[1.45rem] leading-snug text-henna italic rtl:not-italic">{d.henna.quote}</blockquote>
          <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="btn-solid mt-10">
            <WhatsAppIcon className="h-4 w-4" />
            {a.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Avis : uniquement de vrais avis (data/avis.json). Vide = emplacements discrets, aucun avis inventé. */
export function Reviews({ d, lang }: { d: Dict; lang: Locale }) {
  const r = d.reviews;
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow={r.eyebrow} title={r.title} center id="reviews-title" />
        {reviews.length > 0 ? (
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {reviews.map((x, i) => (
              <Reveal as="li" key={i} delay={0.08 * i}>
                <blockquote>
                  <p className="display text-[1.35rem] leading-snug">“{x.text[lang]}”</p>
                  <footer className="mt-5 text-[0.875rem] text-muted">{x.name}</footer>
                </blockquote>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-14">
            <div dangerouslySetInnerHTML={{ __html: "<!-- À REMPLIR avec de vrais avis clients (data/avis.json) -->" }} hidden />
            <ul className="grid gap-4 md:grid-cols-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex h-40 items-center justify-center border border-dashed border-line">
                  <Sparkle className="h-4 w-4 text-gold/70" />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-muted">{r.empty}</p>
            <p className="mt-4 text-center">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="nav-link link-line">
                {r.more}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function Faq({ d }: { d: Dict }) {
  const f = d.faq;
  return (
    <section id="faq" className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 id="faq-title" className="display mt-5 text-[2.5rem] md:text-[3.2rem]">
            {f.title}
          </h2>
        </Reveal>
        <div className="border-t border-line">
          {f.items.map((x) => (
            <details key={x.q} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem] [&::-webkit-details-marker]:hidden">
                {x.q}
                <PlusIcon className="h-4 w-4 shrink-0 text-gold-ink transition-transform duration-500 group-open:rotate-45" />
              </summary>
              <p className="pb-6 leading-[1.85] text-muted">{x.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Contact : coordonnées, showroom (adresse et horaires depuis data/), formulaire à deux onglets. */
export function Contact({ d, initialTab, initialDress }: { d: Dict; initialTab?: Tab; initialDress?: DressType }) {
  const c = d.contact;
  return (
    <section id="contact" className="scroll-mt-24 bg-pearl px-5 py-20 md:px-10 md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 id="contact-title" className="display mt-5 text-[2.5rem] md:text-[3.2rem] rtl:md:text-[2.9rem]">
              {c.title}
            </h2>
            <p className="lead mt-6">{c.lead}</p>
          </Reveal>
          <dl className="mt-10 space-y-6 text-[0.98rem]">
            <div>
              <dt className="label">{c.whatsapp}</dt>
              <dd className="mt-2">
                <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-3 hover:text-gold-ink">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">{c.phone}</dt>
              <dd className="mt-2">
                <a href={`tel:${site.phone}`} className="inline-flex min-h-10 items-center gap-3 hover:text-gold-ink">
                  <PhoneIcon className="h-4 w-4" />
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">{c.showroom}</dt>
              <dd className="mt-2 text-muted">{site.showroom.address ?? c.showroomTbd}</dd>
            </div>
            <div>
              <dt className="label">{c.hours}</dt>
              <dd className="mt-2 text-muted">
                {hours.days ? (
                  <ul className="space-y-1">
                    {hours.days.map((h, i) => (
                      <li key={i} className="flex justify-between gap-6 sm:max-w-xs">
                        <span>{c.days[i]}</span>
                        <span dir="ltr">{h ?? c.closed}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  c.byAppointment
                )}
              </dd>
            </div>
            <div>
              <dt className="label">{c.instagram}</dt>
              <dd className="mt-2">
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-3 hover:text-gold-ink">
                  <InstagramIcon className="h-4 w-4" />
                  <span dir="ltr">{site.instagramHandle}</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-ivory p-6 sm:p-10 md:p-12">
          <BookingForm initialTab={initialTab} initialDress={initialDress} />
        </div>
      </div>
    </section>
  );
}
