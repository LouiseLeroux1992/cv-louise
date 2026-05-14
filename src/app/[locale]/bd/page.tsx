"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Rule } from "@/components/ui/Rule";

type Strip = {
  no: string;
  slug: string;
  fr: string;
  en: string;
  panels: number;
  ext: string;
  desc_fr: string;
  desc_en: string;
};

// Ordered from most recent to oldest
const STRIPS: Strip[] = [
  { no: "11", slug: "voyage-au-japon", fr: "Voyage au Japon", en: "Trip to Japan", panels: 10, ext: "png",
    desc_fr: "Dix cases sur le Japon, le jet lag, et les konbini.", desc_en: "Ten panels on Japan, jet lag, and konbini." },
  { no: "10", slug: "mon-nouveau-metier", fr: "Mon nouveau métier", en: "My new job", panels: 10, ext: "jpg",
    desc_fr: "Quand on passe de la blouse blanche au terminal.", desc_en: "When you trade the white coat for a terminal." },
  { no: "09", slug: "la-vie-a-paris", fr: "La vie à Paris", en: "Life in Paris", panels: 10, ext: "jpg",
    desc_fr: "Métro, boulot, apéro, et un peu de RER.", desc_en: "Metro, work, drinks, and a bit of RER." },
  { no: "08", slug: "reconversion", fr: "Reconversion", en: "Career change", panels: 10, ext: "webp",
    desc_fr: "Du soin au code, en passant par le doute.", desc_en: "From care to code, via doubt." },
  { no: "07", slug: "les-effectifs", fr: "Les effectifs", en: "The staffing", panels: 9, ext: "webp",
    desc_fr: "Quand il manque toujours quelqu'un.", desc_en: "When someone's always missing." },
  { no: "06", slug: "demenagement-3", fr: "Déménagement express : 3/3", en: "Moving out express: 3/3", panels: 8, ext: "jpg",
    desc_fr: "Le troisième. On commence à être rodés.", desc_en: "The third one. We're getting good at this." },
  { no: "05", slug: "demenagement-2", fr: "Déménagement express : 2/3", en: "Moving out express: 2/3", panels: 8, ext: "jpg",
    desc_fr: "La suite. Toujours des cartons.", desc_en: "The sequel. Still boxes everywhere." },
  { no: "04", slug: "demenagement-1", fr: "Déménagement express : 1/3", en: "Moving out express: 1/3", panels: 6, ext: "jpg",
    desc_fr: "Le début d'une longue série.", desc_en: "The start of a long series." },
  { no: "03", slug: "le-reveil", fr: "Le réveil", en: "The alarm", panels: 6, ext: "jpg",
    desc_fr: "6h30. Le réveil sonne. Et après ?", desc_en: "6:30 AM. The alarm goes off. Then what?" },
  { no: "02", slug: "les-apparences", fr: "Les apparences", en: "Appearances", panels: 6, ext: "jpg",
    desc_fr: "Ce qu'on montre, ce qu'on cache.", desc_en: "What we show, what we hide." },
  { no: "01", slug: "infirmiere-en-labo", fr: "Infirmière en laboratoire", en: "Nurse in the laboratory", panels: 10, ext: "jpg",
    desc_fr: "Mme Dupont ? Allons-y !", desc_en: "Mrs. Dupont? Let's go!" },
];

function panelSrc(strip: Strip, panel: number): string {
  return `/bd/${strip.slug}/${panel}.${strip.ext}`;
}

export default function BDPage() {
  const [reading, setReading] = useState<number | null>(null);

  const closeReader = useCallback(() => setReading(null), []);

  return (
    <>
      <BDHero />
      <BDArchive onSelect={setReading} />
      <BDInsta />
      {reading !== null && (
        <BDReader
          strip={STRIPS[reading]}
          onClose={closeReader}
          onPrev={reading > 0 ? () => setReading(reading - 1) : null}
          onNext={reading < STRIPS.length - 1 ? () => setReading(reading + 1) : null}
        />
      )}
    </>
  );
}

function BDHero() {
  const t = useTranslations("bd");

  return (
    <header className="px-5 md:px-8 pt-8 md:pt-14 pb-7 md:pb-9 flex flex-col md:grid md:grid-cols-[1fr_280px] gap-6 md:gap-8 bg-paper border-b border-ink">
      <div className="flex flex-col gap-7">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("rubricKicker")}
        </span>
        <h1 className="m-0 flex flex-col leading-[0.84]">
          <span
            className="font-serif italic font-normal tracking-[-0.04em] text-dark"
            style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
          >
            Ma Vie
          </span>
          <span
            className="font-display uppercase text-primary"
            style={{
              fontSize: "clamp(60px, 14vw, 180px)",
              marginTop: "-0.08em",
              marginLeft: "5%",
              WebkitTextStroke: "1.5px var(--c-ink)",
            }}
          >
            PASSIONNANTE
          </span>
        </h1>
        <p className="font-serif text-[17px] md:text-2xl leading-[1.35] max-w-[720px] m-0 text-ink border-l-[3px] md:border-l-4 border-dark pl-3 md:pl-[18px]">
          {t("deck")}
        </p>
      </div>

      {/* Stats stamp + profile pic */}
      <div className="flex flex-col gap-4 self-start">
        <Image
          src="/bd/profilepic.jpg"
          alt="Ma Vie Passionnante"
          width={280}
          height={280}
          className="w-full h-auto border-2 border-ink"
          style={{ aspectRatio: "1/1", objectFit: "cover" }}
        />
        <div className="border-[1.5px] md:border-2 border-ink p-4 md:p-5 bg-cream flex flex-col gap-2 text-ink">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[36px] md:text-[48px] leading-[0.88] text-dark">{STRIPS.length}</span>
            <span className="font-mono text-[10px] tracking-[0.16em] uppercase">{t("stripsPublished")}</span>
          </div>
          <Rule weight={1.5} />
          <div className="font-mono text-[11px] tracking-[0.12em] mt-1">
            @louise.maviepassionnante
          </div>
        </div>
      </div>
    </header>
  );
}

function BDReader({ strip, onClose, onPrev, onNext }: {
  strip: Strip;
  onClose: () => void;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const prevSlugRef = React.useRef(strip.slug);

  const scrollToTop = useCallback(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, []);

  const handleNav = useCallback((fn: (() => void) | null) => {
    if (fn) {
      setLoading(true);
      scrollToTop();
      fn();
    }
  }, [scrollToTop]);

  const handlePrev = useCallback(() => handleNav(onPrev), [handleNav, onPrev]);
  const handleNext = useCallback(() => handleNav(onNext), [handleNav, onNext]);

  useEffect(() => {
    if (prevSlugRef.current !== strip.slug) {
      prevSlugRef.current = strip.slug;
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [strip.slug]);

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
        {/* Left: prev arrow + strip info */}
        <div className="flex items-center gap-2 md:gap-4">
          {onPrev ? (
            <button
              className="bg-transparent border border-ink text-ink w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-fog transition-colors text-base md:text-lg font-sans"
              onClick={handlePrev}
              title="Strip précédent"
            >
              ←
            </button>
          ) : (
            <div className="w-9 h-9 md:w-10 md:h-10" />
          )}
          <div className="flex items-center gap-2 md:gap-4">
            <span className="font-display text-ink text-base md:text-xl tracking-[0.04em] uppercase">
              Nº {strip.no}
            </span>
            <span className="font-serif italic text-dark text-sm md:text-lg">
              {strip.fr}
            </span>
            <span className="hidden md:inline font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
              {strip.panels} cases
            </span>
          </div>
          {onNext ? (
            <button
              className="bg-transparent border border-ink text-ink w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-fog transition-colors text-base md:text-lg font-sans"
              onClick={handleNext}
              title="Strip suivant"
            >
              →
            </button>
          ) : (
            <div className="w-9 h-9 md:w-10 md:h-10" />
          )}
        </div>

        {/* Right: close */}
        <button
          className="bg-ink text-cream border-none w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-dark transition-colors text-lg"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Scrollable webtoon column */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="max-w-[600px] mx-auto px-4 md:px-0 py-6 md:py-10 flex flex-col gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
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
          {Array.from({ length: strip.panels }).map((_, i) => (
            <div key={i} className="relative">
              <Image
                src={panelSrc(strip, i + 1)}
                alt={`${strip.fr} — case ${i + 1}`}
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        )}

        {/* End of strip */}
        {!loading && <div className="max-w-[600px] mx-auto px-4 md:px-0 pb-10 flex flex-col items-center gap-6">
          <div className="w-full border-t border-ink pt-6 flex flex-col items-center gap-2">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">FIN</span>
            <span className="font-serif italic text-lg text-dark">{strip.fr}</span>
          </div>

          {/* Nav between strips */}
          <div className="w-full flex items-center justify-between gap-4">
            {onPrev ? (
              <button
                className="flex items-center gap-2 bg-transparent border border-ink text-ink px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase cursor-pointer hover:bg-fog transition-colors"
                onClick={handlePrev}
              >
                <span className="font-sans text-lg">←</span>
                <span className="hidden md:inline">Strip précédent</span>
              </button>
            ) : <div />}
            <button
              className="bg-ink text-cream border-none px-5 py-2.5 font-display text-sm tracking-[0.12em] uppercase cursor-pointer hover:bg-dark transition-colors"
              onClick={onClose}
            >
              Archives
            </button>
            {onNext ? (
              <button
                className="flex items-center gap-2 bg-transparent border border-ink text-ink px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase cursor-pointer hover:bg-fog transition-colors"
                onClick={handleNext}
              >
                <span className="hidden md:inline">Strip suivant</span>
                <span className="font-sans text-lg">→</span>
              </button>
            ) : <div />}
          </div>
        </div>}
      </div>
    </div>
  );
}

function BDArchive({ onSelect }: { onSelect: (i: number) => void }) {
  const t = useTranslations("bd");

  return (
    <section className="px-5 md:px-8 pt-8 md:pt-14 pb-8 md:pb-14 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-2.5 mb-5 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("archiveKicker")}
        </span>
        <h2 className="font-serif font-medium text-[clamp(36px,5vw,64px)] leading-[0.98] m-0 text-ink">
          {t("archiveTitle1")}{" "}
          <em className="italic font-normal">{t("archiveTitle2")}</em>
        </h2>
      </header>
      <ol className="list-none p-0 m-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-5 md:gap-y-7">
        {STRIPS.map((s, i) => (
          <li key={s.no}>
            <button
              className="bg-transparent border-none p-0 text-left cursor-pointer flex flex-col gap-2 text-ink transition-transform hover:translate-y-[-3px] w-full group"
              onClick={() => onSelect(i)}
            >
              <div className="relative">
                <Image
                  src={panelSrc(s, 1)}
                  alt={s.fr}
                  width={300}
                  height={300}
                  className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-primary)] transition-shadow"
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
                <span className="absolute bottom-0 left-0 right-0 bg-ink/70 text-cream font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-1.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Lire →
                </span>
              </div>
              <div className="flex gap-2.5 items-baseline font-mono text-[10px] tracking-[0.16em] uppercase mt-1">
                <span className="text-dark font-bold">{s.no}</span>
              </div>
              <div className="font-serif italic text-lg md:text-[22px] leading-[1.1] text-ink">
                {s.fr}
              </div>
              <div className="font-serif text-sm leading-[1.4] text-mute">
                {s.desc_fr}
              </div>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

function BDInsta() {
  const t = useTranslations("bd");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-sage border-b border-ink flex flex-col md:grid md:grid-cols-[1fr_420px] gap-6 md:gap-12 md:items-center">
      <div className="flex flex-col gap-3.5">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-dark">
          {t("followKicker")}
        </span>
        <h2 className="font-serif font-medium text-[clamp(36px,5vw,72px)] leading-[0.98] m-0 text-ink">
          <em className="italic font-normal text-dark">{t("followTitle1")}</em>
          <br />
          {t("followTitle2")}
          <br />
          {t("followTitle3")}
        </h2>
      </div>
      <a
        className="flex flex-col gap-[18px] no-underline text-ink bg-paper border-2 border-ink p-7 transition-all hover:bg-cream hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[5px_5px_0_var(--c-ink)]"
        href="https://instagram.com/louise.maviepassionnante"
        target="_blank"
        rel="noreferrer"
      >
        <span className="font-display text-[26px] tracking-[0.02em] uppercase">
          @louise.maviepassionnante
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-dark pt-3.5 border-t border-ink">
          {t("followCta")} →
        </span>
      </a>
    </section>
  );
}
