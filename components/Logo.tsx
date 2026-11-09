import type { CSSProperties } from "react";

/**
 * Logo Revital Nznz, redessiné en SVG d'après celui de ses photos de studio :
 * un « R » calligraphié doré surmonté d'une couronne à cinq pointes perlées, puis « רויטל נצנץ » et « REVITAL ».
 * Le « R » est le glyphe de Cormorant Garamond italique (vectorisé). Facile à remplacer :
 * il suffit de changer ces composants (et app/icon.svg pour le favicon).
 */

const R_PATH = "M14 0Q10 0 10.0 6.0Q10 12 14 12Q48 12 67.0 17.0Q86 22 95.5 37.0Q105 52 110 81L192 544Q197 573 194.0 587.5Q191 602 175.5 607.5Q160 613 125 613Q121 613 121.0 619.0Q121 625 125 625Q146 625 172.5 623.5Q199 622 228 622Q251 622 283.0 625.0Q315 628 335 628Q414 628 447.5 593.0Q481 558 468 491Q458 439 423.5 397.0Q389 355 339.5 330.5Q290 306 235 306Q226 306 213.0 307.0Q200 308 193 309L195 333Q209 331 225.0 330.0Q241 329 254 329Q325 329 361.0 358.5Q397 388 412 457Q425 517 414.0 551.5Q403 586 376.0 600.5Q349 615 311 615Q289 615 275.5 611.5Q262 608 253.5 593.0Q245 578 239 542L157 81Q152 52 154.0 37.0Q156 22 172.0 17.0Q188 12 222 12Q226 12 226.0 6.0Q226 0 223 0Q201 0 175.5 1.0Q150 2 119 2Q91 2 63.0 1.0Q35 0 14 0ZM485 0Q469 0 440.5 39.0Q412 78 374.0 150.5Q336 223 291 322L331 337Q389 216 431.0 144.5Q473 73 508.5 42.5Q544 12 582 12Q586 12 586.0 6.0Q586 0 582 0Q545 0 521.0 0.0Q497 0 485 0Z";

/** Couronne à cinq pointes perlées (posée sur le R). */
const CROWN = "M232 28 L214 -62 L282 -8 L310 -88 L345 -6 L380 -88 L408 -8 L476 -62 L458 28 Q345 6 232 28Z";

/** Monogramme : R + couronne (viewBox 0 -150 620 790). */
export function Mark({ className = "", title, style }: { className?: string; title?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 -150 620 790" className={className} style={style} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <path fill="currentColor" transform="translate(0,628) scale(1,-1)" d={R_PATH} />
      <path d={CROWN} fill="none" stroke="currentColor" strokeWidth="11" strokeLinejoin="round" />
      <g fill="currentColor">
        <circle cx="214" cy="-76" r="12" />
        <circle cx="310" cy="-102" r="13" />
        <circle cx="380" cy="-102" r="13" />
        <circle cx="476" cy="-76" r="12" />
      </g>
    </svg>
  );
}

/** Petite paillette au trait (étoile à quatre branches). */
export function Sparkle({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
      <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z" />
    </svg>
  );
}

/** Marque du header : monogramme + « רויטל נצנץ » / « REVITAL ». */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`} translate="no">
      <Mark className="h-9 w-auto text-gold-ink md:h-11" />
      <span className="flex flex-col items-start leading-none" dir="rtl">
        <span className="font-[family-name:var(--font-frank)] text-[1.2rem] font-light md:text-[1.45rem]" lang="he">
          רויטל נצנץ
        </span>
        <span className="mt-1.5 ps-[0.42em] font-[family-name:var(--font-jost)] text-[0.5rem] tracking-[0.42em] text-gold-ink md:text-[0.5625rem]" dir="ltr">
          REVITAL
        </span>
      </span>
    </span>
  );
}

/** Logo complet (pied de page, ouverture). */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`} translate="no">
      <Mark className="h-20 w-auto text-gold" />
      <span className="mt-5 font-[family-name:var(--font-frank)] text-[1.9rem] leading-none font-light" dir="rtl" lang="he">
        רויטל נצנץ
      </span>
      <span className="mt-3 ps-[0.5em] font-[family-name:var(--font-cormorant)] text-[0.95rem] leading-none tracking-[0.5em]" dir="ltr">
        REVITAL
      </span>
    </div>
  );
}

export { R_PATH, CROWN };
