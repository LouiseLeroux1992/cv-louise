"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Rule } from "@/components/ui/Rule";
import { Placeholder } from "@/components/ui/Placeholder";

const STRIPS = [
  { no: "01", date: "12 · 04 · 2026", fr: "Le standup de 23 min", en: "The 23-min standup", panels: 10,
    desc_fr: "Personne ne sait pourquoi ça dépasse jamais 15.", desc_en: "No one knows why it never stays under 15." },
  { no: "02", date: "29 · 03 · 2026", fr: "Mon chat débogue", en: "My cat debugs", panels: 10,
    desc_fr: "Il s'assoit sur le clavier, le bug disparaît.", desc_en: "He sits on the keyboard. The bug goes away." },
  { no: "03", date: "07 · 03 · 2026", fr: "Open space, hiver", en: "Open space, winter", panels: 10,
    desc_fr: "Petit traité du chauffage en open space.", desc_en: "A brief treatise on open-space heating." },
  { no: "04", date: "18 · 02 · 2026", fr: "Le tableau Kanban", en: "The Kanban board", panels: 10,
    desc_fr: "À gauche : tout. À droite : rien.", desc_en: "Left: everything. Right: nothing." },
  { no: "05", date: "03 · 02 · 2026", fr: "Vendredi 17h57", en: "Friday 5:57 pm", panels: 10,
    desc_fr: "Le déploiement, le RER, et la providence.", desc_en: "The deploy, the RER, and divine providence." },
  { no: "06", date: "15 · 01 · 2026", fr: "Réunion de cadrage", en: "Kickoff meeting", panels: 10,
    desc_fr: "Toutes les bonnes idées sont nées en cinq minutes.", desc_en: "All good ideas were born in five minutes." },
  { no: "07", date: "04 · 01 · 2026", fr: "Le café d'équipe", en: "The team coffee", panels: 10,
    desc_fr: "Trois personnes, quatre opinions sur la machine.", desc_en: "Three people, four opinions about the machine." },
  { no: "08", date: "12 · 12 · 2025", fr: "Code review du lundi", en: "Monday code review", panels: 10,
    desc_fr: "Le commentaire de 17 lignes pour une virgule.", desc_en: "A 17-line comment for one comma." },
  { no: "09", date: "21 · 11 · 2025", fr: "Démo, prod cassée", en: "Demo, prod down", panels: 10,
    desc_fr: "On dit que c'est volontaire, on respire fort.", desc_en: "We say it's intentional. We breathe deeply." },
  { no: "10", date: "30 · 10 · 2025", fr: "Rétro de sprint", en: "Sprint retro", panels: 10,
    desc_fr: "Ce qui s'est bien passé : le post-it jaune.", desc_en: "What went well: the yellow post-it." },
];

const PANEL_CAPTIONS_FR = [
  "— Bon, on commence ?",
  "— Quelqu'un attend David.",
  "— Je peux faire le mien d'abord ?",
  "(silence de 14 secondes)",
  "— Donc, hier, j'ai commencé…",
  "(David arrive)",
  "— On reprend depuis le début ?",
  "— Bref, je continue.",
  "(le standup dure depuis 21 min)",
  "— À demain.",
];

const PANEL_TONES: Array<"fog" | "sage" | "cream" | "primary"> = [
  "fog", "sage", "cream", "primary", "fog", "sage", "cream", "primary", "fog", "sage",
];

export default function BDPage() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <BDHero />
      <BDFeatured strip={STRIPS[selected]} />
      <BDArchive selected={selected} onSelect={setSelected} />
      <BDInsta />
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

      {/* Stats stamp */}
      <div className="border-[1.5px] md:border-2 border-ink p-4 md:p-6 bg-cream flex flex-col md:flex-col gap-2 self-start text-ink">
        <div className="font-display text-[36px] md:text-[80px] leading-[0.88] text-dark">10</div>
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase mt-[-4px]">
          {t("stripsPublished")}
        </div>
        <Rule weight={1.5} />
        <div className="font-display text-[36px] md:text-[80px] leading-[0.88] text-dark">100</div>
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase mt-[-4px]">
          {t("panelsDrawn")}
        </div>
        <Rule weight={1.5} />
        <div className="font-mono text-[11px] tracking-[0.12em] mt-2">
          @louise.maviepassionnante
        </div>
      </div>
    </header>
  );
}

type Strip = typeof STRIPS[number];

function BDFeatured({ strip }: { strip: Strip }) {
  const t = useTranslations("bd");

  return (
    <section className="px-5 md:px-8 pt-8 md:pt-12 pb-10 md:pb-14 bg-fog border-b border-ink">
      {/* Header */}
      <header className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4 md:gap-6 md:items-end mb-6 md:mb-8 pb-4 md:pb-[18px] border-b border-ink">
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("featuredKicker")}
          </span>
          <h2 className="m-0 flex items-baseline gap-[22px] font-serif italic font-medium text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-[-0.02em] text-ink">
            <span className="font-display not-italic text-[clamp(20px,2.5vw,38px)] text-dark tracking-[0.04em]">
              Nº {strip.no}
            </span>
            <span>{strip.fr}</span>
          </h2>
          <p className="font-serif italic text-lg text-mute m-0">
            {strip.desc_fr}
          </p>
        </div>
        <div className="flex gap-7 pb-1.5">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute flex flex-col gap-1">
            <span className="text-ink">{t("published")}</span>
            <span>{strip.date}</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute flex flex-col gap-1">
            <span className="text-ink">{t("panels")}</span>
            <span>{strip.panels} / {strip.panels}</span>
          </div>
        </div>
      </header>

      {/* Panel reader grid */}
      <div className="bg-paper border border-ink p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="relative flex flex-col gap-2">
              <div className="absolute top-[-10px] left-[-10px] bg-ink text-cream font-mono text-[11px] tracking-[0.12em] px-[7px] py-1 z-[2]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <Placeholder
                label={`Case ${i + 1}`}
                kicker={`${strip.no} · ${String(i + 1).padStart(2, "0")}`}
                ratio="1/1"
                tone={PANEL_TONES[i]}
                className="border-[1.5px] border-ink"
              />
              <div className="font-serif italic text-[13px] text-ink leading-[1.35] min-h-[36px]">
                {PANEL_CAPTIONS_FR[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BDArchive({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
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
      <ol className="list-none p-0 m-0 grid grid-cols-2 md:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-5 md:gap-y-7">
        {STRIPS.map((s, i) => (
          <li key={s.no}>
            <button
              className={`bg-transparent border-none p-0 text-left cursor-pointer flex flex-col gap-2 text-ink transition-transform hover:translate-y-[-3px] w-full`}
              onClick={() => onSelect(i)}
            >
              <div className="relative">
                <Placeholder
                  label={s.fr}
                  kicker={s.no}
                  ratio="1/1"
                  tone={PANEL_TONES[i]}
                  className={`border-[1.5px] border-ink ${i === selected ? "shadow-[4px_4px_0_var(--c-primary)]" : ""}`}
                />
                {i === selected && (
                  <span className="absolute top-2.5 right-2.5 bg-primary text-ink font-mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 border border-ink">
                    {t("reading")}
                  </span>
                )}
              </div>
              <div className="flex gap-2.5 items-baseline font-mono text-[10px] tracking-[0.16em] uppercase mt-1">
                <span className="text-dark font-bold">{s.no}</span>
                <span className="text-mute">{s.date}</span>
              </div>
              <div className="font-serif italic text-[22px] leading-[1.1] text-ink">
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
