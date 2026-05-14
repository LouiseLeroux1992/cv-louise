"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Rule } from "@/components/ui/Rule";
import { Placeholder } from "@/components/ui/Placeholder";

const TOC_ITEMS = ["about", "code", "atelier", "bd", "contact"] as const;

const TOC_LINKS: Record<string, string> = {
  about: "/a-propos",
  code: "/services/developpement",
  atelier: "/services/illustration",
  bd: "/bd",
  contact: "/contact",
};

const TOC_NUMBERS: Record<string, string> = {
  about: "02",
  code: "03",
  atelier: "04",
  bd: "05",
  contact: "06",
};

const COMIC_TITLES_FR = [
  "Le standup de 23 min",
  "Mon chat débogue",
  "Open space, hiver",
  "Le tableau Kanban",
];

export function Hero() {
  return (
    <>
      <CoverHero />
      <CoverQuote />
      <CoverTOC />
      <CoverFeatured />
    </>
  );
}

function CoverHero() {
  const t = useTranslations("cover");

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="relative px-5 md:px-8 pt-6 md:pt-10 pb-0">
        {/* Issue number — absolute top left (desktop only) */}
        <div className="hidden md:flex absolute left-8 top-10 flex-col items-start gap-3.5 z-[3]">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("issue")}
          </span>
          <div className="font-display text-[clamp(60px,7vw,110px)] leading-[0.88] text-dark">
            023
          </div>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("season")}
          </span>
        </div>

        {/* Feature tag — top right */}
        <div className="absolute top-6 md:top-10 right-5 md:right-8 bg-dark text-cream px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase flex gap-2.5 items-center z-[3]">
          <span className="text-primary">P. 24</span>
          <span>{t("toc.about.title")}</span>
        </div>

        {/* Mobile: issue + name stacked */}
        <div className="md:hidden flex items-center gap-3 mb-4">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("issue")}
          </span>
          <span className="font-display text-[40px] leading-[0.88] text-dark">023</span>
        </div>

        {/* Name + portrait */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <h1 className="m-0 pt-0 md:pt-6 flex-1 min-w-0">
            <span
              className="font-serif italic font-normal leading-[0.82] tracking-[-0.035em] text-ink block"
              style={{ fontSize: "clamp(72px, 16vw, 220px)", paddingLeft: "0", }}
            >
              Louise
            </span>
            <span
              className="font-display leading-[0.85] tracking-[0.005em] text-primary uppercase block"
              style={{
                fontSize: "clamp(52px, 12vw, 160px)",
                marginTop: "-0.06em",
                paddingLeft: "8%",
                WebkitTextStroke: "1.2px var(--c-ink)",
              }}
            >
              LEROUX
            </span>
          </h1>

          {/* Portrait */}
          <div className="w-full md:w-[25%] md:min-w-[200px] md:max-w-[360px] md:flex-shrink-0 mt-4 md:mt-[60px] mx-4 md:mx-0">
            <Placeholder
              label={t("portrait")}
              kicker="01"
              ratio="3/4"
              tone="fog"
            />
          </div>
        </div>
      </div>

      {/* Bottom info row */}
      <div className="px-5 md:px-8 pt-4 md:pt-6 pb-10 md:pb-16 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
        <div className="flex flex-col gap-2.5 max-w-[540px] text-ink">
          <Rule>{t("role1")}</Rule>
          <Rule>{t("role2")}</Rule>
          <Rule>{t("location")}</Rule>
        </div>
        <div className="flex flex-col gap-2.5 md:max-w-[360px] md:ml-auto">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("inside")}
          </span>
          <p className="font-serif italic text-[17px] leading-[1.5] m-0 text-dark">
            {t("lede")}
          </p>
        </div>
      </div>
    </section>
  );
}

function CoverQuote() {
  const t = useTranslations("cover");

  return (
    <section className="bg-primary px-5 md:px-16 py-8 md:py-14 flex flex-col md:grid md:grid-cols-[160px_1fr_160px] gap-4 md:gap-6 items-start md:items-center border-t border-b border-ink">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-dark">
        {t("quoteKicker")}
      </span>
      <blockquote className="m-0 font-serif font-medium text-[clamp(22px,3vw,40px)] leading-[1.22] tracking-[-0.015em] text-ink">
        «&nbsp;{t("quote")}{" "}
        <em className="italic font-normal text-dark">
          {t("quoteEmphasis")}
        </em>
        &nbsp;»
      </blockquote>
      <div className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-dark md:text-right">
        {t("quoteSig")}
      </div>
    </section>
  );
}

function CoverTOC() {
  const t = useTranslations("cover");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-8 md:pb-12 bg-paper">
      <header className="flex items-baseline justify-between mb-6 md:mb-8">
        <h2 className="font-display text-[clamp(46px,6vw,88px)] leading-[0.88] uppercase m-0">
          {t("tocTitle")}
        </h2>
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute hidden md:inline">
          {t("tocSub")}
        </span>
      </header>
      <ol className="list-none p-0 m-0">
        {TOC_ITEMS.map((item) => (
          <li key={item} className="border-t border-ink last:border-b">
            <Link
              href={TOC_LINKS[item]}
              className="flex flex-col md:grid md:grid-cols-[70px_1fr] w-full bg-transparent py-4 md:py-5 px-2 text-left no-underline transition-all hover:bg-fog hover:pl-[18px]"
            >
              <div className="flex items-baseline gap-2.5 md:flex-col">
                <span className="font-mono text-[10px] tracking-[0.16em] text-mute">
                  {TOC_NUMBERS[item]}
                </span>
                <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-mute md:hidden">
                  {t(`toc.${item}.kicker`)}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 mt-1.5 md:mt-0">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-mute hidden md:block">
                  {t(`toc.${item}.kicker`)}
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="font-serif italic font-medium text-[clamp(24px,3vw,42px)] leading-[1] text-ink">
                    {t(`toc.${item}.title`)}
                  </span>
                  <span className="hidden md:block flex-1 border-b-[1.5px] border-dotted border-ink opacity-50 h-px" />
                  <span className="font-mono text-sm tracking-[0.16em] text-ink hidden md:block">
                    P. {t(`toc.${item}.page`)}
                  </span>
                </div>
                <div className="font-serif italic text-sm md:text-base leading-[1.5] text-mute max-w-[720px] mt-0.5 hidden md:block">
                  {t(`toc.${item}.tease`)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CoverFeatured() {
  const t = useTranslations("cover");

  return (
    <section className="px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-16 bg-cream border-t border-ink">
      <header className="mb-6 md:mb-9 flex flex-col gap-2">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("featKicker")}
        </span>
        <h2 className="font-serif font-medium text-[clamp(44px,7vw,96px)] leading-[0.9] tracking-[-0.015em] m-0">
          <em className="italic font-normal">{t("featTitle")}</em>{" "}
          {t("featTitle2")}
        </h2>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <Placeholder
              label={`STRIP 0${i}`}
              kicker={`PLANCHE ${i}`}
              ratio="1/1"
              tone={i % 2 === 0 ? "sage" : "fog"}
            />
            <div className="flex gap-2 items-baseline font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase">
              <span className="text-mute">0{i}</span>
              <span>{COMIC_TITLES_FR[i - 1]}</span>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/bd"
        className="mt-6 md:mt-8 w-full md:w-auto bg-ink text-cream border-none px-6 py-[14px] md:py-[18px] font-display text-sm md:text-base tracking-[0.12em] uppercase inline-flex items-center justify-between md:justify-start gap-3.5 no-underline transition-all hover:bg-dark hover:gap-[22px]"
      >
        <span>{t("featCta")}</span>
        <span className="font-sans">→</span>
      </Link>
    </section>
  );
}
