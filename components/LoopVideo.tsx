"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vidéo en boucle, toujours muette, lancée seulement quand elle est à l'écran (et jamais si l'utilisatrice préfère
 * réduire les animations : l'affiche reste fixe). Bouton lecture / pause accessible.
 */
export function LoopVideo({ src, poster, label, playLabel, pauseLabel, className = "" }: { src: string; poster: string; label: string; playLabel: string; pauseLabel: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- préférence lue une fois au montage
      setAllowed(false);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        src={allowed ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      {allowed && (
        <button
          type="button"
          onClick={() => {
            const v = ref.current;
            if (!v) return;
            if (v.paused) v.play().catch(() => {});
            else v.pause();
          }}
          aria-label={playing ? pauseLabel : playLabel}
          className="absolute start-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink/55 text-ivory backdrop-blur-sm transition-colors hover:bg-ink/80"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 rtl:-scale-x-100" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l10.5-6.5z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
