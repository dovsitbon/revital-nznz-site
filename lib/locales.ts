// Langues du site, sans les textes : importable côté client sans embarquer les dictionnaires.
export const locales = ["he", "en", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "he";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const dirOf = (lang: Locale) => (lang === "he" ? "rtl" : "ltr");

export const ogLocale: Record<Locale, string> = { he: "he_IL", en: "en_US", fr: "fr_FR", es: "es_ES" };
export const intlLocale: Record<Locale, string> = { he: "he-IL", en: "en-GB", fr: "fr-FR", es: "es-ES" };

/** Pages du site (même chemin dans chaque langue). */
export const PAGES = ["", "/bridal-dresses", "/evening-dresses", "/henna-dresses", "/henna-production", "/legal"] as const;
export type PagePath = (typeof PAGES)[number];

/** Pages « catégorie » : clé de texte (locales → pages.*) ↔ chemin ↔ catégorie de la collection. */
export const CATEGORY_PAGES = {
  bridal: { path: "/bridal-dresses", category: "mariee" },
  evening: { path: "/evening-dresses", category: "soiree" },
  henna: { path: "/henna-dresses", category: "henne" },
  production: { path: "/henna-production", category: null },
} as const;
export type CategoryPage = keyof typeof CATEGORY_PAGES;
