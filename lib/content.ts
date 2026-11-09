import site from "@/data/site.json";
import annonces from "@/data/annonces.json";
import collectionData from "@/data/collection.json";
import realisationsData from "@/data/realisations.json";
import formules from "@/data/formules-henne.json";
import horaires from "@/data/horaires.json";
import avis from "@/data/avis.json";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { altOf } from "@/lib/i18n";
import { img, type Img } from "@/lib/media";

type L10n = Record<Locale, string>;

/** Ville affichée seulement si Revital l'a confirmée (data/site.json → city.confirmed). */
export const cityOf = (lang: Locale) => (site.city.confirmed ? site.city[lang] : null);

/** Annonce du bandeau : la première active et non expirée (data/annonces.json). */
export function currentAnnouncement(lang: Locale, today: string) {
  const a = (annonces.items as (L10n & { id: string; active: boolean; until: string | null })[]).find((x) => x.active && (!x.until || x.until >= today));
  return a ? { id: a.id, text: a[lang] } : null;
}

export type Category = "mariee" | "soiree" | "henne";
export type Mode = "custom" | "rental" | "sale" | "rental-sale";
export type Dress = Img & { ref: string; category: Category; mode: Mode | null; priceFrom: number | null; alt: string };

export const showPrices = collectionData.showPrices as boolean;

export function dresses(d: Dict, category?: Category): Dress[] {
  return (collectionData.items as { ref: string; category: Category; image: string; mode: Mode | null; priceFrom: number | null }[])
    .filter((x) => !category || x.category === category)
    .map((x) => ({ ...img(x.image), ref: x.ref, category: x.category, mode: x.mode, priceFrom: x.priceFrom, alt: altOf(d, x.image) }));
}

export type Work = { id: string; date: string; title: string; place: string | null; guests: number | null; image: Img; alt: string; video: string | null };

export function works(lang: Locale, d: Dict): Work[] {
  return [...(realisationsData.items as { id: string; date: string; image: string; video: string | null; place: L10n | null; guests: number | null; title: L10n }[]).map((w) => ({
    id: w.id,
    date: w.date,
    title: w.title[lang],
    place: w.place ? w.place[lang] : null,
    guests: w.guests,
    image: img(w.image),
    alt: altOf(d, w.image),
    video: w.video,
  }))].sort((a, b) => b.date.localeCompare(a.date));
}

export type IncludedKey = keyof Dict["henna"]["included"];
export const included = formules.included as IncludedKey[];
export const packages = formules.packages as { id: string; name: L10n; priceFrom: number | null; items: IncludedKey[] }[];
export const regions = formules.regions as L10n | null;

export const hours = horaires as { updated: string; byAppointmentOnly: boolean; days: (string | null)[] | null };

export const reviews = avis.reviews as { name: string; event: Category; date: string; text: L10n }[];
