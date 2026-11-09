import site from "@/data/site.json";
import calendar from "@/data/dates.json";
import type { Dict } from "@/lib/i18n";
import { intlLocale, type Locale } from "@/lib/locales";

export const DRESS_TYPES = ["mariee", "soiree", "henne"] as const;
export const SLOTS = ["morning", "afternoon", "evening"] as const;
export const WISHES = ["decor", "outfits", "all"] as const;
export type DressType = (typeof DRESS_TYPES)[number];
export type Slot = (typeof SLOTS)[number];
export type Wish = (typeof WISHES)[number];

export const takenDates = new Set<string>(calendar.taken as string[]);

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());
export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const money = (n: number, lang: Locale, currency = "ILS") => new Intl.NumberFormat(intlLocale[lang], { style: "currency", currency, maximumFractionDigits: 0 }).format(n);

/** Date du jour au format AAAA-MM-JJ, en heure d'Israël. */
export function isoDay(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jerusalem", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

export function formatDay(iso: string, lang: Locale, opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" }) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[lang], { ...opts, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d || 1)));
}

const colon = (lang: Locale) => (lang === "fr" ? " :" : ":");
const join = (blocks: string[][]) => blocks.map((b) => b.filter(Boolean).join("\n")).filter(Boolean).join("\n\n");

export type FittingRequest = { dress: DressType | ""; eventDate: string; fittingDate: string; slot: Slot | ""; size: string; name: string; phone: string; message: string };
export type HennaRequest = { date: string; place: string; guests: string; wishes: Wish[]; budget: string; name: string; phone: string; message: string };

/** Récapitulatif « rendez-vous d'essayage » envoyé sur le WhatsApp de Revital, dans la langue de la visiteuse. */
export function fittingMessage(q: FittingRequest, lang: Locale, d: Dict) {
  const m = d.booking.message;
  const f = d.booking.fields;
  const c = colon(lang);
  const line = (label: string, value: string) => (value ? `${label}${c} ${value}` : "");
  return join([
    [`*${m.fittingTitle}*`],
    [line(m.dressType, q.dress ? f.dressTypes[q.dress] : ""), line(m.eventDate, q.eventDate ? formatDay(q.eventDate, lang) : "")],
    [line(m.fittingDate, q.fittingDate ? formatDay(q.fittingDate, lang) : ""), line(m.slot, q.slot ? f.slots[q.slot] : ""), line(m.size, q.size)],
    [line(m.name, q.name), line(m.phone, q.phone), line(m.notes, q.message)],
    [m.closing],
  ]);
}

/** Récapitulatif « production de soirée henné ». */
export function hennaMessage(q: HennaRequest, lang: Locale, d: Dict) {
  const m = d.booking.message;
  const f = d.booking.fields;
  const c = colon(lang);
  const line = (label: string, value: string) => (value ? `${label}${c} ${value}` : "");
  return join([
    [`*${m.hennaTitle}*`],
    [line(m.date, q.date ? formatDay(q.date, lang) : ""), line(m.place, q.place), line(m.guests, q.guests)],
    [line(m.wishes, q.wishes.map((w) => f.wishesOptions[w]).join(", ")), line(m.budget, q.budget)],
    [line(m.name, q.name), line(m.phone, q.phone), line(m.notes, q.message)],
    [m.closing],
  ]);
}
