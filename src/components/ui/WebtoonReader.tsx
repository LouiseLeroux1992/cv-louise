"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

type ReaderLabels = {
  end?: string;
  back?: string;
  previous?: string;
  next?: string;
  imagesLabel?: string;
  imageLabel?: string;
};

type WebtoonReaderProps = {
  title: string;
  subtitle?: string;
  images: string[];
  imageAlts?: string[];
  onClose: () => void;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
  prevLabel?: string;
  nextLabel?: string;
  labels?: ReaderLabels;
};

export function WebtoonReader({
  title,
  subtitle,
  images,
  imageAlts,
  onClose,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  labels = {},
}: WebtoonReaderProps) {
  const l = {
    end: labels.end || "FIN",
    back: labels.back || "Retour",
    previous: labels.previous || "Précédent",
    next: labels.next || "Suivant",
    imagesLabel: labels.imagesLabel || "images",
    imageLabel: labels.imageLabel || "image",
  };
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const prevTitleRef = React.useRef(title);

  const scrollToTop = useCallback(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, []);

  const handleNav = useCallback(
    (fn: (() => void) | null) => {
      if (fn) {
        setLoading(true);
        scrollToTop();
        fn();
      }
    },
    [scrollToTop]
  );

  const handlePrev = useCallback(() => handleNav(onPrev), [handleNav, onPrev]);
  const handleNext = useCallback(() => handleNav(onNext), [handleNav, onNext]);

  useEffect(() => {
    if (prevTitleRef.current !== title) {
      prevTitleRef.current = title;
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [title]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-paper">
      {/* Sticky header */}
      <div className="sticky top-0 z-[52] flex items-center justify-between px-5 md:px-8 py-3 md:py-4 border-b border-ink bg-paper">
        <div className="flex items-center gap-2 md:gap-4">
          {onPrev ? (
            <button
              className="bg-transparent border border-ink text-ink w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-fog transition-colors text-base md:text-lg font-sans"
              onClick={handlePrev}
              title={prevLabel}
            >
              ←
            </button>
          ) : (
            <div className="w-9 h-9 md:w-10 md:h-10" />
          )}
          <div className="flex items-center gap-2 md:gap-4">
            <span className="font-display text-ink text-base md:text-xl tracking-[0.04em] uppercase">
              {title}
            </span>
            {subtitle && (
              <span className="hidden md:inline font-serif italic text-dark text-sm md:text-lg">
                {subtitle}
              </span>
            )}
            <span className="hidden md:inline font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
              {images.length} {images.length > 1 ? l.imagesLabel : l.imageLabel}
            </span>
          </div>
          {onNext ? (
            <button
              className="bg-transparent border border-ink text-ink w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-fog transition-colors text-base md:text-lg font-sans"
              onClick={handleNext}
              title={nextLabel}
            >
              →
            </button>
          ) : (
            <div className="w-9 h-9 md:w-10 md:h-10" />
          )}
        </div>
        <button
          className="bg-ink text-cream border-none w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-dark transition-colors text-lg"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Scrollable content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="max-w-[600px] mx-auto px-4 md:px-0 py-6 md:py-10 flex flex-col gap-6">
            {Array.from({ length: Math.min(4, images.length) }).map((_, i) => (
              <div
                key={i}
                className="w-full bg-fog animate-pulse"
                style={{ aspectRatio: "1/1" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-[600px] mx-auto px-4 md:px-0 py-6 md:py-10 flex flex-col gap-6">
            {images.map((src, i) => (
              <div key={i} className="relative">
                <Image
                  src={src}
                  alt={imageAlts?.[i] || `${title} — ${i + 1}`}
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}

        {/* End + nav */}
        {!loading && (
          <div className="max-w-[600px] mx-auto px-4 md:px-0 pb-10 flex flex-col items-center gap-6">
            <div className="w-full border-t border-ink pt-6 flex flex-col items-center gap-2">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                {l.end}
              </span>
              <span className="font-serif italic text-lg text-dark">
                {title}
              </span>
            </div>
            <div className="w-full flex items-center justify-between gap-4">
              {onPrev ? (
                <button
                  className="flex items-center gap-2 bg-transparent border border-ink text-ink px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase cursor-pointer hover:bg-fog transition-colors"
                  onClick={handlePrev}
                >
                  <span className="font-sans text-lg">←</span>
                  <span className="hidden md:inline">
                    {prevLabel || l.previous}
                  </span>
                </button>
              ) : (
                <div />
              )}
              <button
                className="bg-ink text-cream border-none px-5 py-2.5 font-display text-sm tracking-[0.12em] uppercase cursor-pointer hover:bg-dark transition-colors"
                onClick={onClose}
              >
                {l.back}
              </button>
              {onNext ? (
                <button
                  className="flex items-center gap-2 bg-transparent border border-ink text-ink px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase cursor-pointer hover:bg-fog transition-colors"
                  onClick={handleNext}
                >
                  <span className="hidden md:inline">
                    {nextLabel || l.next}
                  </span>
                  <span className="font-sans text-lg">→</span>
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
