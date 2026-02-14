"use client";

import { useEffect, useState, useRef } from "react";

type PaletteId =
  | "peach-garden"
  | "vintage-charm"
  | "olive-garden"
  | "beach-day";

interface PaletteOption {
  id: PaletteId;
  label: string;
  colors: [string, string, string];
}

const PALETTES: PaletteOption[] = [
  {
    id: "peach-garden",
    label: "Peach Garden",
    colors: ["#658eb6", "#d98870", "#505e3b"],
  },
  {
    id: "vintage-charm",
    label: "Vintage Charm",
    colors: ["#c44900", "#465c5b", "#432534"],
  },
  {
    id: "olive-garden",
    label: "Olive Garden",
    colors: ["#6a7141", "#c09f79", "#8d3814"],
  },
  {
    id: "beach-day",
    label: "Beach Day",
    colors: ["#15616d", "#ff7d00", "#78290f"],
  },
];

const PALETTE_CLASSES = PALETTES.filter((p) => p.id !== "peach-garden").map(
  (p) => `palette-${p.id}`,
);

function applyPalette(id: PaletteId) {
  const html = document.documentElement;
  PALETTE_CLASSES.forEach((cls) => html.classList.remove(cls));
  if (id !== "peach-garden") {
    html.classList.add(`palette-${id}`);
  }
}

export function PaletteSelector() {
  const [mounted, setMounted] = useState(false);
  const [currentPalette, setCurrentPalette] =
    useState<PaletteId>("peach-garden");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("palette") as PaletteId | null;
    if (saved && PALETTES.some((p) => p.id === saved)) {
      setCurrentPalette(saved);
      applyPalette(saved);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function handleSelect(id: PaletteId) {
    setCurrentPalette(id);
    localStorage.setItem("palette", id);
    applyPalette(id);
    setIsOpen(false);
  }

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-muted"
        aria-label="Select palette"
        disabled
      >
        <span className="w-5 h-5 block" />
      </button>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        aria-label="Select palette"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-background border border-border rounded-lg shadow-lg p-1.5 z-50">
          {PALETTES.map((palette) => (
            <button
              key={palette.id}
              onClick={() => handleSelect(palette.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPalette === palette.id
                  ? "bg-primary/15 text-foreground"
                  : "hover:bg-muted text-muted-foreground"
              }`}
            >
              <div className="flex gap-1">
                {palette.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-3.5 h-3.5 rounded-full border border-border/50"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              {palette.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
