"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Placeholder } from "@/components/ui/Placeholder";

const PROJECTS = [
  { no: "01", key: "bd" },
  { no: "02", key: "livre" },
  { no: "03", key: "ponctuelles" },
] as const;

const GALLERY = [
  { id: 1, label: "Livre jeunesse — couverture", kicker: "AQUARELLE", tone: "fog" as const },
  { id: 2, label: "BD labo — planche 3", kicker: "NUMÉRIQUE", tone: "sage" as const },
  { id: 3, label: "Carte personnalisée", kicker: "AQUARELLE", tone: "cream" as const },
  { id: 4, label: "BD Instagram — strip 04", kicker: "NUMÉRIQUE", tone: "primary" as const },
  { id: 5, label: "Illustration jeunesse — intérieur", kicker: "AQUARELLE", tone: "fog" as const },
  { id: 6, label: "Portrait commande", kicker: "MIXTE", tone: "sage" as const },
];

export default function ServicesIllustration() {
  return (
    <>
      <AtelierHeader />
      <AtelierServices />
      <AtelierGallery />
      <AtelierCTA />
    </>
  );
}

function AtelierHeader() {
  const t = useTranslations("servicesIllustration");

  return (
    <header className="px-5 md:px-8 pt-8 md:pt-12 pb-7 md:pb-9 border-b border-ink bg-paper">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
        Rubrique 04 · Atelier
      </span>
      <h1 className="font-display text-[clamp(64px,12vw,170px)] leading-[0.88] tracking-[-0.005em] m-0 mt-4 uppercase text-ink">
        <em className="font-serif italic font-normal normal-case tracking-[-0.03em] text-dark">
          L&apos;atelier
        </em>
        <br />
        Illustration
      </h1>
      <p className="font-serif italic text-lg md:text-xl leading-[1.4] mt-6 max-w-[800px] text-dark m-0">
        {t("description")}
      </p>
    </header>
  );
}

function AtelierServices() {
  const t = useTranslations("servicesIllustration");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-fog border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Projets · P. 62
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          {t("servicesTitle")}
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-ink">
        {PROJECTS.map((p) => (
          <div
            key={p.key}
            className="border-b md:border-b-0 md:border-r last:border-r-0 border-ink p-6 md:p-8 flex flex-col gap-4"
          >
            <span
              className="font-display text-[48px] md:text-[64px] text-primary leading-[0.9]"
              style={{ WebkitTextStroke: "1px var(--c-ink)" }}
            >
              {p.no}
            </span>
            <h3 className="font-serif italic font-medium text-2xl md:text-3xl leading-[1.05] text-ink m-0">
              {t(`services.${p.key}.title`)}
            </h3>
            <p className="font-serif text-[15px] md:text-base leading-[1.5] text-mute m-0">
              {t(`services.${p.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AtelierGallery() {
  const t = useTranslations("servicesIllustration");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Sélection — 2024 / 2026
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          {t("galleryTitle")}
        </h2>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {GALLERY.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <Placeholder
              label={item.label}
              kicker={item.kicker}
              ratio="4/5"
              tone={item.tone}
              className="border-[1.5px] border-ink"
            />
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-mute">
              {item.kicker} · {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AtelierCTA() {
  const t = useTranslations("servicesIllustration");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-sage border-b border-ink flex flex-col md:grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 md:items-center">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-dark">
          Contact · P. 80
        </span>
        <h2 className="font-serif font-medium text-[clamp(32px,4vw,56px)] leading-[1] m-0 text-ink">
          {t("ctaTitle")}
        </h2>
        <p className="font-serif italic text-base md:text-lg text-dark m-0 max-w-[600px] whitespace-pre-line">
          {t("ctaDescription")}
        </p>
      </div>
      <Link
        href="/contact"
        className="bg-ink text-cream border-none px-6 py-4 font-display text-base tracking-[0.12em] uppercase inline-flex items-center gap-3.5 no-underline transition-all hover:bg-dark hover:gap-[22px] self-start"
      >
        <span>{t("ctaButton")}</span>
        <span className="font-sans">→</span>
      </Link>
    </section>
  );
}
