"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { BookButton } from "@/components/BookingForm";
import { Lightbox } from "@/components/Lightbox";
import { Sparkle } from "@/components/Logo";
import { useLocale } from "@/components/providers";
import { money } from "@/lib/booking";
import type { Category, Dress } from "@/lib/content";
import { fill } from "@/lib/i18n";

type Filter = "all" | Category;

/**
 * Collection filtrable (data/collection.json) : photo verticale, nom (texte alternatif), mode (location / achat / sur mesure),
 * prix « à partir de » seulement si showPrices. « Demander cette robe » préremplit le formulaire avec la référence.
 */
/** Mélange les catégories (mariée, soirée, henné, mariée…) pour que les premières robes montrent les trois univers. */
function interleave(items: Dress[]) {
  const groups = (["mariee", "soiree", "henne"] as Category[]).map((c) => items.filter((x) => x.category === c));
  const out: Dress[] = [];
  for (let i = 0; out.length < items.length; i++) groups.forEach((g) => g[i] && out.push(g[i]));
  return out;
}

export function Collection({ items, showPrices, fixed, limit }: { items: Dress[]; showPrices: boolean; fixed?: Category; limit?: number }) {
  const { lang, d } = useLocale();
  const c = d.collection;
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);
  const [all, setAll] = useState(!limit);
  const matching = fixed ? items : filter === "all" ? interleave(items) : items.filter((x) => x.category === filter);
  const shown = all || !limit ? matching : matching.slice(0, limit);
  const filters: Filter[] = ["all", "mariee", "soiree", "henne"];

  return (
    <div>
      {!fixed && (
        <div className="mb-10 flex flex-wrap items-center gap-2" role="group" aria-label={c.filtersLabel}>
          {filters.map((f) => (
            <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => {
                setFilter(f);
                if (limit) setAll(false);
              }}>
              {c.filters[f]}
            </button>
          ))}
          <span className="ms-auto text-[0.8125rem] text-muted" aria-live="polite">
            {fill(c.count, { n: matching.length })}
          </span>
        </div>
      )}

      <motion.ul layout={!reduce} className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((x, i) => (
            <motion.li
              key={x.ref}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.25 } }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              className="group"
            >
              <button type="button" onClick={() => setOpen(i)} className="shine relative block aspect-[3/4] w-full bg-pearl" aria-label={`${c.open} – ${x.alt}`}>
                <Image src={x.src} alt={x.alt} fill sizes="(min-width:1024px) 24vw, (min-width:768px) 32vw, 48vw" quality={70} className="object-cover" />
                <Sparkle className="glint absolute end-3 top-3 h-4 w-4 text-ivory drop-shadow" />
              </button>
              <div className="mt-4">
                <p className="text-[0.75rem] tracking-[0.2em] text-gold-ink" dir="ltr">
                  <span className="num">{x.ref}</span>
                </p>
                <h3 className="mt-1 text-[0.98rem] leading-snug">{x.alt}</h3>
                <p className="mt-1.5 text-[0.8125rem] text-muted">
                  {x.mode ? c.modes[x.mode] : null}
                  {x.mode ? " · " : null}
                  {showPrices && x.priceFrom ? fill(c.priceFrom, { price: money(x.priceFrom, lang) }) : c.priceOnRequest}
                </p>
                <BookButton
                  tab="fitting"
                  dress={x.category}
                  message={fill(c.askMessage, { ref: x.ref, name: x.alt })}
                  className="link-line nav-link mt-3 inline-block !text-[0.625rem] rtl:!text-[0.875rem]"
                >
                  {c.ask}
                </BookButton>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {shown.length < matching.length && (
        <div className="mt-14 text-center">
          <button type="button" onClick={() => setAll(true)} className="btn-line">
            {c.more}
          </button>
        </div>
      )}

      <Lightbox items={shown} index={open} onIndex={setOpen} labels={{ close: d.nav.close, prev: c.prev, next: c.next, counter: "{n} / {total}" }} />
    </div>
  );
}
