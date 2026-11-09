// Génère CONTENU.md : tous les textes du site, dans toutes les langues, section par section, pour validation par la cliente.
//   node scripts/contenu.mjs
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LANGS = [
  ["he", "עברית"],
  ["fr", "Français"],
  ["en", "English"],
  ["es", "Español"],
];
const SECTIONS = {
  meta: "Référencement (titres Google et descriptions, par page)",
  nav: "Menu",
  infobar: "Bandeau d'infos (le texte lui-même est dans data/annonces.json)",
  intro: "Ouverture",
  hero: "Hero (titre retenu : option 1, voir plus haut)",
  cards: "Cartes portrait",
  collection: "La collection (robes dans data/collection.json)",
  henna: "Production de soirées henné (formules dans data/formules-henne.json)",
  blocks: "Trois blocs alternés",
  work: "Réalisations (soirées dans data/realisations.json)",
  about: "À propos de Revital (histoire à compléter avec elle)",
  reviews: "Avis (vrais avis dans data/avis.json)",
  faq: "Questions fréquentes (réponses à valider)",
  contact: "Contact",
  booking: "Formulaires + message WhatsApp",
  whatsapp: "Bouton WhatsApp",
  pages: "Pages Robes de mariée, Robes de soirée, Robes de henné, Production de henné",
  footer: "Pied de page",
  legal: "Mentions légales",
  alt: "Textes alternatifs des photos (accessibilité, Google Images) – servent aussi de nom aux robes",
};

const dicts = Object.fromEntries(await Promise.all(LANGS.map(async ([l]) => [l, JSON.parse(await readFile(path.join(ROOT, "locales", `${l}.json`), "utf8"))])));

function flatten(obj, prefix = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") out.push(...flatten(v, key));
    else out.push([key, String(v)]);
  }
  return out;
}
const get = (obj, key) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

let md = `# Revital Nznz – רויטל נצנץ : contenu du site

Tous les textes du site, dans les 4 langues, à relire et valider avec Revital.
Fichiers sources : \`locales/he.json\`, \`fr.json\`, \`en.json\`, \`es.json\` (ce fichier est généré par \`npm run contenu\`).
Données datées à remplir dans \`data/\` : \`annonces.json\` (bandeau), \`horaires.json\` (showroom), \`collection.json\` (robes, location/achat, prix « à partir de »),
\`formules-henne.json\` (formules et régions), \`realisations.json\` (lieu et nombre d'invités), \`dates.json\` (dates prises), \`avis.json\` (vrais avis),
\`site.json\` (ville, adresse du showroom, paiement d'acompte – désactivé).
La liste des informations à demander à Revital est dans **INFOS-A-DEMANDER.md**.

## Grand titre du hero : 3 propositions

1. **נוצצת מהחינה ועד החופה** – « Éblouissante, du henné à la houppa » *(retenue sur le site ; joue sur « נצנץ », paillette)*
2. **כל כלה היא מלכה** – « Chaque mariée est une reine » *(reprend la couronne de son logo et son « הממלכה שלי »)*
3. **שמלה שנתפרת בשבילך, חינה שזוכרים שנים** – « Une robe cousue pour vous, un henné dont on se souvient des années »

Pour changer : \`hero.title\` dans les 4 fichiers \`locales/*.json\`.

`;

for (const [sec, title] of Object.entries(SECTIONS)) {
  md += `\n## ${title}\n`;
  for (const [key] of flatten(dicts.he[sec], sec)) {
    md += `\n**\`${key}\`**\n\n`;
    for (const [l, name] of LANGS) md += `- ${name} : ${get(dicts[l], key) ?? "—"}\n`;
  }
}

await writeFile(path.join(ROOT, "CONTENU.md"), md);
console.log("CONTENU.md écrit");
