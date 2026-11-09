"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Mark, Sparkle } from "@/components/Logo";

export const INTRO_KEY = "revital-intro";
const at = (d: number, extra: Record<string, string> = {}) => ({ "--d": `${d}s`, ...extra }) as CSSProperties;

// Paillettes : position horizontale (%), retard, taille, distance de chute
const SPARKS: [number, number, number, string][] = [
  [14, 0, 10, "52vh"],
  [27, 0.12, 7, "44vh"],
  [41, 0.05, 12, "58vh"],
  [58, 0.18, 8, "48vh"],
  [71, 0.08, 11, "55vh"],
  [84, 0.22, 7, "42vh"],
  [92, 0.1, 9, "50vh"],
];

/**
 * Ouverture (1,5 s, une fois par session, CSS dans globals.css) : fond ivoire, quelques paillettes dorées tombent,
 * « רויטל נצנץ » puis « REVITAL » apparaissent, un fin motif de henné se dessine au trait autour du nom, fondu sur le hero.
 * Bouton « דלג » ; rien ne s'affiche si prefers-reduced-motion (script du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center overflow-hidden text-ink" aria-hidden="false">
      {SPARKS.map(([x, d, s, fall], i) => (
        <span key={i} className="intro-spark" style={at(d, { left: `${x}%`, "--fall": fall })} aria-hidden="true">
          <Sparkle className="block" style={{ width: s, height: s }} />
        </span>
      ))}

      <div className="relative flex flex-col items-center px-16 py-12">
        {/* Motif de henné au trait : arabesque en amande, petites gouttes et points, tracé autour du nom */}
        <svg viewBox="0 0 400 220" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" aria-hidden="true" preserveAspectRatio="none">
          <path
            className="intro-stroke"
            style={at(0.45)}
            pathLength={1}
            stroke="#c8a45d"
            strokeWidth="1"
            d="M200 8c58 0 104 14 140 40 30 22 46 46 52 62-6 16-22 40-52 62-36 26-82 40-140 40s-104-14-140-40C30 150 14 126 8 110c6-16 22-40 52-62C96 22 142 8 200 8Z"
          />
          <path
            className="intro-stroke"
            style={at(0.6)}
            pathLength={1}
            stroke="#c8a45d"
            strokeWidth="0.8"
            d="M200 8c-6 8-6 14 0 20 6-6 6-12 0-20ZM200 212c-6-8-6-14 0-20 6 6 6 12 0 20ZM8 110c10-5 16-5 22 0-6 5-12 5-22 0ZM392 110c-10-5-16-5-22 0 6 5 12 5 22 0Z"
          />
          <g className="intro-fade" style={at(0.85)} fill="#c8a45d">
            <circle cx="200" cy="36" r="1.6" />
            <circle cx="200" cy="184" r="1.6" />
            <circle cx="40" cy="110" r="1.6" />
            <circle cx="360" cy="110" r="1.6" />
          </g>
        </svg>

        <Mark className="intro-fade h-10 w-auto text-gold" style={at(0.05)} />
        <p className="intro-fade mt-4 font-[family-name:var(--font-frank)] text-[clamp(2.2rem,8vw,3.6rem)] leading-none font-light" style={at(0.15)} dir="rtl" lang="he" translate="no">
          רויטל נצנץ
        </p>
        <p className="intro-fade mt-4 ps-[0.55em] font-[family-name:var(--font-cormorant)] text-[clamp(0.95rem,3vw,1.25rem)] leading-none tracking-[0.55em] text-gold-ink" style={at(0.45)} dir="ltr" translate="no">
          REVITAL
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(INTRO_KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute end-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
