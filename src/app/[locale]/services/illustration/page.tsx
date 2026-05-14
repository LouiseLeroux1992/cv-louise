"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { WebtoonReader } from "@/components/ui/WebtoonReader";

const PROJECTS = [
  { no: "01", key: "bd" },
  { no: "02", key: "livre" },
  { no: "03", key: "ponctuelles" },
] as const;

const LIVRE_PAGES = 18;
const TAYTAY_PAGES = 10;
const ANIMAUX_PAGES = 5;
const CALEDOBIO_PAGES = 4;
const THOMAS_PAGES = 8;
const TAYTAY_NAMES = [
  "Champagne Problems",
  "Cornelia Street",
  "Getaway Car",
  "Key Chain On The Ground",
  "Koi Guitar",
  "Mirrorball",
  "Paper Rings",
  "Seagulls",
  "Snake",
  "Traffic Lights",
];

type ProjectKey = "livre" | "taytay" | "animaux" | "caledobio" | "thomas";
type GalleryState = { project: ProjectKey; index: number } | null;

const PROJECT_CONFIG: Record<ProjectKey, { path: string; title: string; count: number }> = {
  livre: { path: "livre-jeunesse", title: "Livre jeunesse", count: LIVRE_PAGES },
  taytay: { path: "taytay", title: "Illustrations Taytay", count: TAYTAY_PAGES },
  animaux: { path: "animaux", title: "Dessins d'animaux", count: ANIMAUX_PAGES },
  caledobio: { path: "caledobio", title: "BD Calédobio", count: CALEDOBIO_PAGES },
  thomas: { path: "thomas", title: "Illustrations comiques", count: THOMAS_PAGES },
};

export default function ServicesIllustration() {
  const [viewer, setViewer] = useState<GalleryState>(null);

  const openViewer = useCallback((project: ProjectKey) => {
    setViewer({ project, index: 0 });
  }, []);

  const closeViewer = useCallback(() => setViewer(null), []);

  const projectKeys: ProjectKey[] = ["livre", "taytay", "thomas", "caledobio", "animaux"];

  const currentProjectIndex = viewer ? projectKeys.indexOf(viewer.project) : -1;
  const prevProject = currentProjectIndex > 0 ? projectKeys[currentProjectIndex - 1] : null;
  const nextProject = currentProjectIndex < projectKeys.length - 1 ? projectKeys[currentProjectIndex + 1] : null;

  function getImages(project: ProjectKey): string[] {
    const config = PROJECT_CONFIG[project];
    return Array.from({ length: config.count }, (_, i) => `/illustrations/${config.path}/${i}.webp`);
  }

  function getAlts(project: ProjectKey): string[] {
    if (project === "taytay") {
      return TAYTAY_NAMES;
    }
    const config = PROJECT_CONFIG[project];
    return Array.from({ length: config.count }, (_, i) => `${config.title} — ${i + 1}`);
  }

  return (
    <>
      <AtelierHeader />
      <AtelierServices />
      <AtelierLivre onOpen={() => openViewer("livre")} />
      <AtelierTaytay onOpen={() => openViewer("taytay")} />
      <AtelierThomas onOpen={() => openViewer("thomas")} />
      <AtelierCaledobio onOpen={() => openViewer("caledobio")} />
      <AtelierAnimaux onOpen={() => openViewer("animaux")} />
      <AtelierCTA />
      {viewer && (
        <WebtoonReader
          title={PROJECT_CONFIG[viewer.project].title}
          images={getImages(viewer.project)}
          imageAlts={getAlts(viewer.project)}
          onClose={closeViewer}
          onPrev={prevProject ? () => setViewer({ project: prevProject, index: 0 }) : null}
          onNext={nextProject ? () => setViewer({ project: nextProject, index: 0 }) : null}
          prevLabel={prevProject ? PROJECT_CONFIG[prevProject].title : undefined}
          nextLabel={nextProject ? PROJECT_CONFIG[nextProject].title : undefined}
        />
      )}
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

function AtelierLivre({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Livre jeunesse · Aquarelle · 2025
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          18 illustrations, <em className="italic font-normal">un livre.</em>
        </h2>
        <p className="font-serif italic text-base md:text-lg text-mute m-0 max-w-[700px]">
          Illustrations réalisées à l&apos;aquarelle pour un album jeunesse. Cliquez pour feuilleter.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {Array.from({ length: LIVRE_PAGES }).map((_, i) => (
          <button
            key={i}
            className="bg-transparent border-none p-0 cursor-pointer group relative"
            onClick={onOpen}
          >
            <Image
              src={`/illustrations/livre-jeunesse/${i}.webp`}
              alt={`Illustration ${i + 1}`}
              width={400}
              height={400}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-primary)] transition-shadow"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
      <button
        className="mt-6 bg-ink text-cream border-none px-6 py-3 font-display text-sm tracking-[0.12em] uppercase cursor-pointer hover:bg-dark transition-colors"
        onClick={onOpen}
      >
        Feuilleter →
      </button>
    </section>
  );
}

function AtelierTaytay({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-cream border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Illustrations · Dessin numérique · 2024
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          Illustrations <em className="italic font-normal">Taytay</em>
        </h2>
        <p className="font-serif italic text-base md:text-lg text-mute m-0 max-w-[700px]">
          Série de 11 illustrations numériques. Cliquez pour agrandir.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {Array.from({ length: TAYTAY_PAGES }).map((_, i) => (
          <button
            key={i}
            className="bg-transparent border-none p-0 cursor-pointer group relative flex flex-col gap-2"
            onClick={onOpen}
          >
            <Image
              src={`/illustrations/taytay/${i}.webp`}
              alt={TAYTAY_NAMES[i]}
              width={400}
              height={400}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-primary)] transition-shadow"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
            <span className="font-serif italic text-sm text-ink text-left">{TAYTAY_NAMES[i]}</span>
          </button>
        ))}
      </div>
      <button
        className="mt-6 bg-ink text-cream border-none px-6 py-3 font-display text-sm tracking-[0.12em] uppercase cursor-pointer hover:bg-dark transition-colors"
        onClick={onOpen}
      >
        Voir tout →
      </button>
    </section>
  );
}

function AtelierThomas({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Illustrations comiques · Dessin numérique
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          Portraits <em className="italic font-normal">comiques</em>
        </h2>
        <p className="font-serif italic text-base md:text-lg text-mute m-0 max-w-[700px]">
          Série d&apos;illustrations humoristiques. 8 dessins.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {Array.from({ length: THOMAS_PAGES }).map((_, i) => (
          <button
            key={i}
            className="bg-transparent border-none p-0 cursor-pointer group"
            onClick={onOpen}
          >
            <Image
              src={`/illustrations/thomas/${i}.webp`}
              alt={`Illustration ${i + 1}`}
              width={400}
              height={400}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-primary)] transition-shadow"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function AtelierCaledobio({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          BD pédagogique · Commande · Laboratoire Calédobio
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          BD <em className="italic font-normal">Calédobio</em>
        </h2>
        <p className="font-serif italic text-base md:text-lg text-mute m-0 max-w-[700px]">
          Bande dessinée pédagogique à destination des enfants et de leurs parents, réalisée pour le laboratoire d&apos;analyses médicales Calédobio. 4 planches.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {Array.from({ length: CALEDOBIO_PAGES }).map((_, i) => (
          <button
            key={i}
            className="bg-transparent border-none p-0 cursor-pointer group relative"
            onClick={onOpen}
          >
            <Image
              src={`/illustrations/caledobio/${i}.webp`}
              alt={`Planche ${i + 1}`}
              width={400}
              height={560}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-primary)] transition-shadow"
            />
            <span className="absolute bottom-0 left-0 right-0 bg-ink/70 text-cream font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-1.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              Planche {i + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function AtelierAnimaux({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-fog border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Dessins · Encre · 2015 — 2016
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          Dessins <em className="italic font-normal">d&apos;animaux</em>
        </h2>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {Array.from({ length: ANIMAUX_PAGES }).map((_, i) => (
          <button
            key={i}
            className="bg-transparent border-none p-0 cursor-pointer group"
            onClick={onOpen}
          >
            <Image
              src={`/illustrations/animaux/${i}.webp`}
              alt={`Dessin d'animal ${i + 1}`}
              width={400}
              height={400}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-primary)] transition-shadow"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </button>
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
