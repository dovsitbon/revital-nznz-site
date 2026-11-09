import type { Metadata } from "next";
import site from "@/data/site.json";
import { CATEGORY_PAGES, getDict, locales, ogLocale, type CategoryPage, type Locale, type PagePath } from "@/lib/i18n";
import { cityOf, hours, included } from "@/lib/content";

const business = `${site.url}/#business`;
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Métadonnées d'une page : titre, description, canonique, hreflang, Open Graph. */
export function pageMeta(lang: Locale, path: PagePath, title: string, description: string): Metadata {
  const url = `/${lang}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])), "x-default": `/he${path}` },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.nameLatin,
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: getDict(lang).alt["tafura-bama"] }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}

/** Titre de l'accueil : la ville n'y entre qu'une fois confirmée. */
export function homeTitle(lang: Locale) {
  const d = getDict(lang);
  const city = cityOf(lang);
  return city ? d.meta.titleCity.replace("{city}", city) : d.meta.title;
}

/** Créatrice de robes (ClothingStore) : adresse et horaires du showroom dès qu'ils sont remplis dans data/. */
function businessNode(lang: Locale) {
  const d = getDict(lang);
  const city = cityOf(lang);
  const days = hours.days;
  return {
    "@type": ["ClothingStore", "LocalBusiness"],
    "@id": business,
    name: lang === "he" ? site.name : site.nameLatin,
    alternateName: ["רויטל נצנץ", "Revital Nznz", "רויטל נצנץ הפקות חינה", "רויטל נצנץ שמלות כלה"],
    description: d.meta.description,
    url: `${site.url}/${lang}`,
    image: [`${site.url}/og.jpg`, `${site.url}/media/hero/kalat-hina-01.jpg`],
    logo: `${site.url}/icon.svg`,
    telephone: site.phone,
    priceRange: "₪₪",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      ...(city ? { addressLocality: city } : {}),
      ...(site.showroom.address ? { streetAddress: site.showroom.address } : {}),
    },
    ...(site.showroom.geo ? { geo: { "@type": "GeoCoordinates", ...(site.showroom.geo as object) } } : {}),
    ...(days
      ? {
          openingHoursSpecification: days.flatMap((h, i) => {
            if (!h) return [];
            const [opens, closes] = h.split("-");
            return [{ "@type": "OpeningHoursSpecification", dayOfWeek: DAYS[i], opens, closes }];
          }),
        }
      : {}),
    areaServed: { "@type": "Country", name: "Israel" },
    knowsAbout: ["שמלות חינה", "השכרת שמלות חינה", "שמלות כלה", "שמלות ערב", "הפקת חינה", "Henna dresses", "Bridal gowns", "Evening dresses", "Moroccan henna party"],
    sameAs: [site.instagram],
    contactPoint: { "@type": "ContactPoint", telephone: site.phone, contactType: "reservations", availableLanguage: ["he"] },
  };
}

function hennaServiceNode(lang: Locale) {
  const d = getDict(lang);
  const p = d.pages.production;
  return {
    "@type": "Service",
    "@id": `${site.url}/#henna-production`,
    name: p.title,
    serviceType: d.henna.eyebrow,
    description: p.lead,
    url: `${site.url}/${lang}/henna-production`,
    provider: { "@id": business },
    areaServed: { "@type": "Country", name: "Israel" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: d.henna.includedTitle,
      itemListElement: included.map((k) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d.henna.included[k] } })),
    },
  };
}

function faqNode(lang: Locale) {
  const d = getDict(lang);
  return { "@type": "FAQPage", mainEntity: d.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
}

export function homeJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.nameLatin, alternateName: site.name, inLanguage: [...locales], publisher: { "@id": business } },
      businessNode(lang),
      hennaServiceNode(lang),
      faqNode(lang),
    ],
  };
}

export function pageJsonLd(lang: Locale, kind: CategoryPage) {
  const d = getDict(lang);
  const p = d.pages[kind];
  const path = CATEGORY_PAGES[kind].path;
  const crumbs = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "he" ? site.name : site.nameLatin, item: `${site.url}/${lang}` },
      { "@type": "ListItem", position: 2, name: p.eyebrow, item: `${site.url}/${lang}${path}` },
    ],
  };
  const service =
    kind === "production"
      ? hennaServiceNode(lang)
      : { "@type": "Service", name: p.title, serviceType: p.eyebrow, description: p.lead, url: `${site.url}/${lang}${path}`, provider: { "@id": business }, areaServed: { "@type": "Country", name: "Israel" } };
  return { "@context": "https://schema.org", "@graph": [businessNode(lang), service, crumbs] };
}

export const ldScript = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
