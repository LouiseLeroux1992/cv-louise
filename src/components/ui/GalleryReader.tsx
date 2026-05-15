"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

type GalleryReaderProps = {
  title: string;
  images: string[];
  imageAlts?: string[];
  startIndex?: number;
  onClose: () => void;
  onPrevProject: (() => void) | null;
  onNextProject: (() => void) | null;
  prevProjectLabel?: string;
  nextProjectLabel?: string;
  backLabel?: string;
};

export function GalleryReader({
  title,
  images,
  imageAlts,
  startIndex = 0,
  onClose,
  onPrevProject,
  onNextProject,
  prevProjectLabel,
  nextProjectLabel,
  backLabel = "← Retour",
}: GalleryReaderProps) {
  const [index, setIndex] = useState(startIndex);

  // Reset index when project changes
  useEffect(() => {
    setIndex(0);
  }, [title]);

  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }, [hasPrev, index]);

  const goNext = useCallback(() => {
    if (hasNext) {
      setIndex(index + 1);
    }
  }, [hasNext, index]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowLeft") {
        if (hasPrev) {
          setIndex((i) => i - 1);
        }
      }
      if (e.key === "ArrowRight") {
        if (hasNext) {
          setIndex((i) => i + 1);
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose, hasPrev, hasNext]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-paper">
      {/* Sticky header — project navigation */}
      <div className="sticky top-0 z-[52] flex items-center justify-between px-5 md:px-8 py-3 md:py-4 border-b border-ink bg-paper">
        <div className="flex items-center gap-2 md:gap-4">
          {onPrevProject ? (
            <button
              className="bg-transparent border border-ink text-ink h-9 md:h-10 px-3 flex items-center gap-2 cursor-pointer hover:bg-fog transition-colors text-sm font-sans"
              onClick={onPrevProject}
              title={prevProjectLabel}
            >
              <span>←</span>
              <span className="hidden md:inline font-mono text-[10px] tracking-[0.12em] uppercase">
                {prevProjectLabel}
              </span>
            </button>
          ) : (
            <div className="h-9 md:h-10" />
          )}
          <div className="flex items-center gap-2 md:gap-4">
            <span className="font-display text-ink text-base md:text-xl tracking-[0.04em] uppercase">
              {title}
            </span>
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
          {onNextProject ? (
            <button
              className="bg-transparent border border-ink text-ink h-9 md:h-10 px-3 flex items-center gap-2 cursor-pointer hover:bg-fog transition-colors text-sm font-sans"
              onClick={onNextProject}
              title={nextProjectLabel}
            >
              <span className="hidden md:inline font-mono text-[10px] tracking-[0.12em] uppercase">
                {nextProjectLabel}
              </span>
              <span>→</span>
            </button>
          ) : (
            <div className="h-9 md:h-10" />
          )}
        </div>
        <button
          className="bg-ink text-cream border-none w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-dark transition-colors text-lg"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Image area with side arrows */}
      <div className="flex-1 min-h-0 flex items-center justify-center p-4 md:p-12 bg-fog relative">
        {/* Prev image */}
        {hasPrev && (
          <button
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-ink text-cream border-none flex items-center justify-center cursor-pointer hover:bg-dark transition-colors text-2xl md:text-3xl font-sans z-10"
            onClick={goPrev}
          >
            ←
          </button>
        )}

        {/* Next image */}
        {hasNext && (
          <button
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-ink text-cream border-none flex items-center justify-center cursor-pointer hover:bg-dark transition-colors text-2xl md:text-3xl font-sans z-10"
            onClick={goNext}
          >
            →
          </button>
        )}

        <Image
          src={images[index]}
          alt={imageAlts?.[index] || `${title} — ${index + 1}`}
          width={1200}
          height={1200}
          className="max-w-[75vw] md:max-w-[60vw] w-auto h-auto object-contain"
          style={{ maxHeight: "calc(100vh - 10rem)" }}
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink px-5 md:px-8 py-3 md:py-4 bg-paper flex items-center justify-between">
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
          {imageAlts?.[index] || `${title} · ${String(index + 1).padStart(2, "0")}`}
        </div>
        <button
          className="bg-transparent border border-ink text-ink px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase cursor-pointer hover:bg-fog transition-colors"
          onClick={onClose}
        >
          {backLabel}
        </button>
      </div>
    </div>
  );
}
