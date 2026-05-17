"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { GalleryReader } from "@/components/ui/GalleryReader";

function useReaderLabels() {
  const t = useTranslations("reader");
  return {
    back: `← ${t("back")}`,
  };
}

const PROJECTS = [
  { no: "01", key: "illustration" },
  { no: "02", key: "bd" },
  { no: "03", key: "photo" },
] as const;

// ── Image counts ──
const LIVRE_COUNT = 18;
const TAYTAY_COUNT = 10;
const PORTRAITS_COUNT = 21; // 8 thomas + 13 comics
const CARTES_COUNT = 9;
const VRAC_COUNT = 11;
const CALEDOBIO_COUNT = 4;
const ANIMAUX_COUNT = 5;
const LOWESIGHT_COUNT = 82;

// ── Named labels per image ──
const TAYTAY_NAMES = [
  "Champagne Problems", "Cornelia Street", "Getaway Car",
  "Key Chain On The Ground", "Koi Guitar", "Mirrorball",
  "Paper Rings", "Seagulls", "Snake", "Traffic Lights",
];

const PORTRAITS_NAMES = [
  // 0-7: Série Thomas
  "Série Thomas", "Série Thomas", "Série Thomas", "Série Thomas",
  "Série Thomas", "Série Thomas", "Série Thomas", "Série Thomas",
  // 8-11: Série Thomas et Louise à la montagne
  "Série Thomas et Louise à la montagne", "Série Thomas et Louise à la montagne",
  "Série Thomas et Louise à la montagne", "Série Thomas et Louise à la montagne",
  // 12: Martin
  "Martin, designer passionné",
  // 13-15: Série Momo
  "Série Momo", "Série Momo", "Série Momo",
  // 16-18: Série Aurélien
  "Série Aurélien", "Série Aurélien", "Série Aurélien",
  // 19-20: Série Sterenn
  "Série Sterenn", "Série Sterenn",
];

const CARTES_NAMES = [
  "Carte de naissance",
  "Carte de départ de Momo",
  "Carte d'anniversaire pour Adrien, aufguss master",
  "Carte de départ d'Antoine",
  "Carte anniversaire",
  "Carte de départ d'Alyssia",
  "Carte de départ de Max",
  "Mariage d'Albane et Martin",
  "Portrait de famille Viloux",
];

const VRAC_NAMES = [
  "Hello World !",
  "Figurine Louise",
  "Plage Calédonienne",
  "La Team Tech au boulot",
  "Portrait de Mona à la craie",
  "Maquillage Halloween",
  "Le poussin dans son oeuf — posca",
  "Autoportrait",
  "Space Girl",
  "Portrait croquis",
  "Croquis Cat",
];

// ── Project config ──
type ProjectKey = "livre" | "taytay" | "portraits" | "cartes" | "vrac" | "caledobio" | "animaux" | "lowesight";
type GalleryState = { project: ProjectKey; index: number } | null;

const PROJECT_CONFIG: Record<ProjectKey, { path: string; count: number; names?: string[] }> = {
  livre: { path: "livre-jeunesse", count: LIVRE_COUNT },
  taytay: { path: "taytay", count: TAYTAY_COUNT, names: TAYTAY_NAMES },
  portraits: { path: "portraits-comiques", count: PORTRAITS_COUNT, names: PORTRAITS_NAMES },
  cartes: { path: "cartes", count: CARTES_COUNT, names: CARTES_NAMES },
  vrac: { path: "vrac", count: VRAC_COUNT, names: VRAC_NAMES },
  caledobio: { path: "caledobio", count: CALEDOBIO_COUNT },
  animaux: { path: "animaux", count: ANIMAUX_COUNT },
  lowesight: { path: "lowesight", count: LOWESIGHT_COUNT },
};

const PROJECT_TITLE_KEYS: Record<ProjectKey, string> = {
  livre: "livreFullTitle",
  taytay: "taytayFullTitle",
  portraits: "portraitsFullTitle",
  cartes: "cartesFullTitle",
  vrac: "vracFullTitle",
  caledobio: "caledobioFullTitle",
  animaux: "animauxFullTitle",
  lowesight: "lowesightFullTitle",
};

export default function ServicesIllustration() {
  const [viewer, setViewer] = useState<GalleryState>(null);
  const t = useTranslations("atelier");
  const rl = useReaderLabels();

  const openViewer = useCallback((project: ProjectKey, index = 0) => {
    setViewer({ project, index });
  }, []);

  const closeViewer = useCallback(() => setViewer(null), []);

  const projectKeys: ProjectKey[] = ["livre", "taytay", "portraits", "cartes", "vrac", "caledobio", "lowesight", "animaux"];

  const currentProjectIndex = viewer ? projectKeys.indexOf(viewer.project) : -1;
  const prevProject = currentProjectIndex > 0 ? projectKeys[currentProjectIndex - 1] : null;
  const nextProject = currentProjectIndex < projectKeys.length - 1 ? projectKeys[currentProjectIndex + 1] : null;

  function getTitle(project: ProjectKey): string {
    return t(PROJECT_TITLE_KEYS[project]);
  }

  function getImages(project: ProjectKey): string[] {
    const config = PROJECT_CONFIG[project];
    return Array.from({ length: config.count }, (_, i) => `/illustrations/${config.path}/${i}.webp`);
  }

  function getAlts(project: ProjectKey): string[] {
    const config = PROJECT_CONFIG[project];
    if (config.names) {
      return config.names;
    }
    const title = getTitle(project);
    return Array.from({ length: config.count }, (_, i) => `${title} — ${i + 1}`);
  }

  return (
    <>
      <AtelierHeader />
      <AtelierServices />
      <AtelierLivre onOpen={(i) => openViewer("livre", i)} />
      <AtelierTaytay onOpen={(i) => openViewer("taytay", i)} />
      <AtelierPortraits onOpen={(i) => openViewer("portraits", i)} />
      <AtelierCartes onOpen={(i) => openViewer("cartes", i)} />
      <AtelierVrac onOpen={(i) => openViewer("vrac", i)} />
      <AtelierCaledobio onOpen={(i) => openViewer("caledobio", i)} />
      <AtelierLowesight onOpen={(i) => openViewer("lowesight", i)} />
      <AtelierAnimaux onOpen={(i) => openViewer("animaux", i)} />
      <AtelierCTA />
      {viewer && (
        <GalleryReader
          title={getTitle(viewer.project)}
          startIndex={viewer.index}
          images={getImages(viewer.project)}
          imageAlts={getAlts(viewer.project)}
          onClose={closeViewer}
          onPrevProject={prevProject ? () => setViewer({ project: prevProject, index: 0 }) : null}
          onNextProject={nextProject ? () => setViewer({ project: nextProject, index: 0 }) : null}
          prevProjectLabel={prevProject ? getTitle(prevProject) : undefined}
          nextProjectLabel={nextProject ? getTitle(nextProject) : undefined}
          backLabel={rl.back}
          imageBgClass={viewer.project === "lowesight" ? "bg-darkroom" : undefined}
          imageFrame={viewer.project === "lowesight"}
        />
      )}
    </>
  );
}

// ── Shared gallery section component ──
function GallerySection({
  bg,
  kicker,
  title1,
  title2,
  desc,
  cta,
  images,
  names,
  onOpen,
  previewCount,
  showAllLabel,
  collapseLabel,
  footer,
}: {
  bg: string;
  kicker: string;
  title1: string;
  title2: string;
  desc?: string;
  cta: string;
  images: { src: string; alt: string }[];
  names?: string[];
  onOpen: (i: number) => void;
  previewCount?: number;
  showAllLabel?: string;
  collapseLabel?: string;
  footer?: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = previewCount && !expanded ? images.slice(0, previewCount) : images;

  return (
    <section className={`px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 ${bg} border-b border-ink`}>
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {kicker}
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          {title1} <em className="italic font-normal">{title2}</em>
        </h2>
        {desc && (
          <p className="font-serif italic text-base md:text-lg text-mute m-0 max-w-[700px]">
            {desc}
          </p>
        )}
      </header>
      <div className="columns-2 md:columns-3 lg:columns-6 gap-3 md:gap-4">
        {visibleImages.map((img, i) => (
          <button
            key={i}
            className="bg-transparent border-none p-0 cursor-pointer group relative mb-3 md:mb-4 break-inside-avoid block w-full"
            onClick={() => onOpen(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              loading={i < 6 ? "eager" : "lazy"}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-dark)] transition-shadow"
            />
            {names && names[i] && (
              <span className="font-serif italic text-sm text-ink text-left block mt-1">
                {names[i]}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-6">
        <button
          className="bg-ink text-cream border-none px-6 py-3 font-display text-sm tracking-[0.12em] uppercase cursor-pointer hover:bg-dark transition-colors"
          onClick={() => onOpen(0)}
        >
          {cta}
        </button>
        {previewCount && images.length > previewCount && (
          <button
            className="bg-transparent border-none p-0 font-serif italic text-base text-mute cursor-pointer hover:text-ink transition-colors underline underline-offset-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? collapseLabel : showAllLabel}
          </button>
        )}
      </div>
      {footer}
    </section>
  );
}

function makeImages(path: string, count: number, names?: string[]): { src: string; alt: string }[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/illustrations/${path}/${i}.webp`,
    alt: names?.[i] || `Illustration ${i + 1}`,
  }));
}

// ── Section components ──
function AtelierHeader() {
  const t = useTranslations("atelier");
  const ts = useTranslations("servicesIllustration");
  return (
    <header className="px-5 md:px-8 pt-8 md:pt-12 pb-7 md:pb-9 border-b border-ink bg-paper">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{t("rubricKicker")}</span>
      <h1 className="font-display text-[clamp(64px,12vw,170px)] leading-[0.88] tracking-[-0.005em] m-0 mt-4 uppercase text-ink">
        <em className="font-serif italic font-normal normal-case tracking-[-0.03em] text-dark">{t("headerTitle1")}</em>
        <br />{t("headerTitle2")}
      </h1>
      <p className="font-serif italic text-lg md:text-xl leading-[1.4] mt-6 max-w-[800px] text-dark m-0">{ts("description")}</p>
    </header>
  );
}

function AtelierServices() {
  const t = useTranslations("atelier");
  const ts = useTranslations("servicesIllustration");
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-fog border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{t("projectsKicker")}</span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">{ts("servicesTitle")}</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-ink">
        {PROJECTS.map((p) => (
          <div key={p.key} className="border-b md:border-b-0 md:border-r last:border-r-0 border-ink p-6 md:p-8 flex flex-col gap-4">
            <span className="font-display text-[48px] md:text-[64px] text-primary leading-[0.9]" style={{ WebkitTextStroke: "1px var(--c-ink)" }}>{p.no}</span>
            <h3 className="font-serif italic font-medium text-2xl md:text-3xl leading-[1.05] text-ink m-0">{ts(`services.${p.key}.title`)}</h3>
            <p className="font-serif text-[15px] md:text-base leading-[1.5] text-mute m-0">{ts(`services.${p.key}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AtelierLivre({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-cream"
      kicker={t("livreKicker")}
      title1={t("livreTitle1")}
      title2={t("livreTitle2")}
      desc={t("livreDesc")}
      cta={t("livreCta")}
      images={makeImages("livre-jeunesse", LIVRE_COUNT)}
      onOpen={onOpen}
      previewCount={6}
      showAllLabel={t("showAll", { count: LIVRE_COUNT })}
      collapseLabel={t("collapse")}
    />
  );
}

function AtelierTaytay({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-primary"
      kicker={t("taytayKicker")}
      title1={t("taytayTitle1")}
      title2={t("taytayTitle2")}
      desc={t("taytayDesc")}
      cta={t("taytayCta")}
      images={makeImages("taytay", TAYTAY_COUNT, TAYTAY_NAMES)}
      names={TAYTAY_NAMES}
      onOpen={onOpen}
      previewCount={6}
      showAllLabel={t("showAll", { count: TAYTAY_COUNT })}
      collapseLabel={t("collapse")}
    />
  );
}

function AtelierPortraits({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-cream"
      kicker={t("portraitsKicker")}
      title1={t("portraitsTitle1")}
      title2={t("portraitsTitle2")}
      desc={t("portraitsDesc")}
      cta={t("portraitsCta")}
      images={makeImages("portraits-comiques", PORTRAITS_COUNT, PORTRAITS_NAMES)}
      names={PORTRAITS_NAMES}
      onOpen={onOpen}
      previewCount={6}
      showAllLabel={t("showAll", { count: PORTRAITS_COUNT })}
      collapseLabel={t("collapse")}
    />
  );
}

function AtelierCartes({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-fog"
      kicker={t("cartesKicker")}
      title1={t("cartesTitle1")}
      title2={t("cartesTitle2")}
      desc={t("cartesDesc")}
      cta={t("cartesCta")}
      images={makeImages("cartes", CARTES_COUNT, CARTES_NAMES)}
      names={CARTES_NAMES}
      onOpen={onOpen}
      previewCount={6}
      showAllLabel={t("showAll", { count: CARTES_COUNT })}
      collapseLabel={t("collapse")}
    />
  );
}

function AtelierVrac({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-cream"
      kicker={t("vracKicker")}
      title1={t("vracTitle1")}
      title2={t("vracTitle2")}
      cta={t("vracCta")}
      images={makeImages("vrac", VRAC_COUNT, VRAC_NAMES)}
      names={VRAC_NAMES}
      onOpen={onOpen}
      previewCount={6}
      showAllLabel={t("showAll", { count: VRAC_COUNT })}
      collapseLabel={t("collapse")}
    />
  );
}

function AtelierCaledobio({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-primary"
      kicker={t("caledobioKicker")}
      title1={t("caledobioTitle1")}
      title2={t("caledobioTitle2")}
      desc={t("caledobioDesc")}
      cta={t("caledobioCta")}
      images={makeImages("caledobio", CALEDOBIO_COUNT)}
      onOpen={onOpen}
    />
  );
}

function AtelierAnimaux({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-cream"
      kicker={t("animauxKicker")}
      title1={t("animauxTitle1")}
      title2={t("animauxTitle2")}
      cta={t("animauxCta")}
      images={makeImages("animaux", ANIMAUX_COUNT)}
      onOpen={onOpen}
    />
  );
}

function AtelierLowesight({ onOpen }: { onOpen: (i: number) => void }) {
  const t = useTranslations("atelier");
  return (
    <GallerySection
      bg="bg-fog"
      kicker={t("lowesightKicker")}
      title1={t("lowesightTitle1")}
      title2={t("lowesightTitle2")}
      desc={t("lowesightDesc")}
      cta={t("lowesightCta")}
      images={makeImages("lowesight", LOWESIGHT_COUNT)}
      onOpen={onOpen}
      previewCount={6}
      showAllLabel={t("showAllPhotos", { count: LOWESIGHT_COUNT })}
      collapseLabel={t("collapse")}
      footer={
        <a
          href="https://www.instagram.com/lowesight"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 font-mono text-[11px] tracking-[0.12em] uppercase text-mute hover:text-ink transition-colors no-underline"
        >
          <span>📷</span>
          <span>{t("lowesightInstagram")}</span>
        </a>
      }
    />
  );
}

function AtelierCTA() {
  const t = useTranslations("atelier");
  const ts = useTranslations("servicesIllustration");
  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-sage border-b border-ink flex flex-col md:grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 md:items-center">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-dark">{t("ctaKicker")}</span>
        <h2 className="font-serif font-medium text-[clamp(32px,4vw,56px)] leading-[1] m-0 text-ink">{ts("ctaTitle")}</h2>
        <p className="font-serif italic text-base md:text-lg text-dark m-0 max-w-[600px] whitespace-pre-line">{ts("ctaDescription")}</p>
      </div>
      <Link href="/contact" className="bg-ink text-cream border-none px-6 py-4 font-display text-base tracking-[0.12em] uppercase inline-flex items-center gap-3.5 no-underline transition-all hover:bg-dark hover:gap-[22px] self-start">
        <span>{ts("ctaButton")}</span>
        <span className="font-sans">→</span>
      </Link>
    </section>
  );
}
