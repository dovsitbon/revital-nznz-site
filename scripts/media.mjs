// Trie les visuels Instagram de @revital_nznz (assets/raw/revital_<n° de publication>_<P|R>_<code>.jpg)
// dans assets/<catégorie>/ avec des noms lisibles, puis les prépare pour le web dans public/media/<catégorie>/
// (next/image sert ensuite AVIF/WebP à la bonne taille).
//   npm run media
//
// Nom = <style>-<n>.jpg : le style sert de clé de texte alternatif (locales/*.json → alt).
// Écartés aussi après revue : 1236 (doublon de 1191), 951 (cadrage serré), 1170 (invitée au premier plan), 1355 (portrait sans la robe), 15 (étiquette produit).
// Choix : robes et décors uniquement. Écartés volontairement : photos de famille et d'enfants, foules d'invités,
// visuels flous, couvertures de reels avec texte incrusté, captures d'écran, plats (sauf la table de douceurs).
// Les reels retenus sont dans public/media/video/ (extraits avec ffmpeg, sans le son).
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { readdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = readdirSync(path.join(ROOT, "assets/raw"));
const raw = (n) => {
  const f = RAW.find((x) => x.startsWith(`revital_${String(n).padStart(4, "0")}_`));
  if (!f) throw new Error(`introuvable : ${n}`);
  return `raw/${f}`;
};

// [n° de publication (ordre du profil), catégorie, style]
const PICKS = [
  // Hero : la robe de henné blanche à traîne qu'elle a dessinée pour sa fille, devant les rideaux rouges de la soirée
  [44, "hero", "kalat-hina"],
  [62, "hero", "revital"],

  // Robes de mariée (création sur mesure)
  [1186, "robes-mariee", "kala-tachra"],
  [1185, "robes-mariee", "kala-katef"],
  [1259, "robes-mariee", "kala-tul"],
  [1241, "robes-mariee", "kala-tul"],
  [1191, "robes-mariee", "kala-tul"],
  [1391, "robes-mariee", "kala-tachra"],
  [1225, "robes-mariee", "kala-tachra"],
  [939, "robes-mariee", "kala-atelier"],
  [908, "robes-mariee", "kala-katef"],

  // Robes de soirée (location ou achat)
  [1063, "robes-soiree", "erev-zahav"],
  [1064, "robes-soiree", "erev-kachol"],
  [1065, "robes-soiree", "erev-shampanya"],
  [1099, "robes-soiree", "erev-zahav"],
  [1100, "robes-soiree", "erev-glima"],
  [1297, "robes-soiree", "erev-yarok"],
  [1327, "robes-soiree", "erev-zahav"],
  [1369, "robes-soiree", "erev-zahav"],
  [920, "robes-soiree", "erev-kesef"],
  [931, "robes-soiree", "erev-kesef"],
  [927, "robes-soiree", "erev-katsar"],
  [1025, "robes-soiree", "erev-varod"],
  [1014, "robes-soiree", "erev-sagol"],
  [936, "robes-soiree", "erev-shachor"],
  [1033, "robes-soiree", "erev-zahav"],
  [1229, "robes-soiree", "erev-kesef"],
  [1142, "robes-soiree", "erev-shampanya"],
  [6, "robes-soiree", "erev-lavan"],

  // Robes et tenues de henné (caftans, capes, robes rouges)
  [1308, "robes-henne", "hina-kaftan"],
  [1298, "robes-henne", "hina-glima"],
  [1307, "robes-henne", "hina-glima"],
  [937, "robes-henne", "hina-glima"],
  [1309, "robes-henne", "hina-zahav"],
  [46, "robes-henne", "hina-adom"],
  [47, "robes-henne", "hina-kesef"],
  [1163, "robes-henne", "hina-zug"],
  [649, "robes-henne", "hina-zug"],
  [1296, "robes-henne", "hina-zahav"],

  // Soirées henné : décors, table de douceurs, accessoires (sans visages d'invités)
  [21, "soirees-henne", "tafura-bama"],
  [19, "soirees-henne", "tafura-adom"],
  [71, "soirees-henne", "tafura-shuk"],
  [73, "soirees-henne", "tafura-kise"],
  [205, "soirees-henne", "tafura-knisa"],
  [204, "soirees-henne", "tafura-shuk"],
  [369, "soirees-henne", "tafura-shuk"],
  [406, "soirees-henne", "tafura-knisa"],
  [448, "soirees-henne", "tafura-kise"],
  [1124, "soirees-henne", "tafura-adom"],
  [1125, "soirees-henne", "tafura-kaara"],
  [1134, "soirees-henne", "tafura-knisa"],
  [1247, "soirees-henne", "tafura-knisa"],
  [992, "soirees-henne", "tafura-kaara"],
  [998, "soirees-henne", "tafura-kise"],
  [1349, "soirees-henne", "tafura-kise"],
  [1381, "soirees-henne", "tafura-knisa"],
  [1019, "soirees-henne", "tafura-kaara"],
  [14, "soirees-henne", "tafura-shuk"],
  [113, "soirees-henne", "tafura-shuk"],
  [1162, "soirees-henne", "tafura-ugiot"],
  [1004, "soirees-henne", "tafura-kirkara"],
  [16, "soirees-henne", "tafura-gamal"],
  [1370, "soirees-henne", "tafura-knisa"],
  [958, "soirees-henne", "tafura-kaara"],
];

const sizes = {};
const count = {};
for (const [n, cat, style] of PICKS) {
  const k = `${cat}/${style}`;
  count[k] = (count[k] ?? 0) + 1;
  const name = `${style}-${String(count[k]).padStart(2, "0")}`;
  const file = path.join(ROOT, "assets", raw(n));
  await mkdir(path.join(ROOT, "assets", cat), { recursive: true });
  await mkdir(path.join(ROOT, "public/media", cat), { recursive: true });
  await copyFile(file, path.join(ROOT, "assets", cat, `${name}.jpg`));
  const max = cat === "hero" ? 2000 : 1600;
  const info = await sharp(file)
    .rotate()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(ROOT, "public/media", cat, `${name}.jpg`));
  sizes[`/media/${cat}/${name}.jpg`] = [info.width, info.height];
}

// Affiches des vidéos (premières images des reels)
for (const v of ["decor-henne", "danseuse-feu", "mariee-caftan", "entree-couple"]) {
  const m = await sharp(path.join(ROOT, "public/media/video", `${v}.jpg`)).metadata();
  sizes[`/media/video/${v}.jpg`] = [m.width, m.height];
}

// Image de partage (Open Graph) 1200 × 630 : la scène de henné dorée
await sharp(path.join(ROOT, "assets", raw(21)))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`${PICKS.length} images prêtes`);
