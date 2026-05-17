"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Rule } from "@/components/ui/Rule";
import { getSeasonLabel } from "@/lib/season";

const TOC_ITEMS = ["about", "code", "atelier", "contact"] as const;

const TOC_LINKS: Record<string, string> = {
  about: "/a-propos",
  code: "/services/developpement",
  atelier: "/services/illustration",
  contact: "/contact",
};

const TOC_NUMBERS: Record<string, string> = {
  about: "02",
  code: "03",
  atelier: "04",
  contact: "05",
};

const FEATURED_WORKS = [
  { no: "01", fr: "Livre jeunesse", src: "/illustrations/livre-jeunesse/0.webp" },
  { no: "02", fr: "Ma Vie Passionnante", src: "/bd/voyage-au-japon/1.png" },
  { no: "03", fr: "Portraits comiques", src: "/illustrations/portraits-comiques/0.webp" },
  { no: "04", fr: "Lowesight", src: "/illustrations/lowesight/10.webp" },
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
  const locale = useLocale();
  const season = getSeasonLabel(locale);

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* ── Mobile layout ── */}
      <div className="md:hidden px-5 pt-6 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("issue")}
          </span>
          <span className="font-display text-[40px] leading-[0.88] text-dark">023</span>
        </div>
        <h1 className="m-0">
          <span className="font-serif italic font-normal text-[80px] leading-[0.78] tracking-[-0.035em] text-ink block">
            Louise
          </span>
          <span
            className="font-display text-[58px] leading-[0.85] text-primary uppercase block mt-[-0.06em]"
            style={{ WebkitTextStroke: "1.2px var(--c-ink)" }}
          >
            LEROUX
          </span>
        </h1>
        <div className="mt-4">
          <Image
            src="/portrait-louise.jpg"
            alt="Louise Leroux"
            width={720}
            height={960}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: "3/4", objectPosition: "center top" }}
            priority
          />
        </div>
        <div className="flex flex-col gap-2.5 mt-6 text-ink">
          <Rule>{t("role1")}</Rule>
          <Rule>{t("role2")}</Rule>
          <Rule>{t("location")}</Rule>
        </div>
        <div className="flex flex-col gap-2.5 mt-6">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            {t("inside")}
          </span>
          <p className="font-serif italic text-[17px] leading-[1.5] m-0 text-dark">
            {t("lede")}
          </p>
        </div>
      </div>

      {/* ── Desktop layout — CSS Grid ── */}
      <div className="hidden md:block px-8 pt-10 pb-14">
        <div className="grid grid-cols-[160px_1fr_28%] grid-rows-[auto_1fr_auto] gap-x-6">

          {/* Issue number — col 1, row 1-2 */}
          <div className="col-start-1 row-start-1 row-span-2 flex flex-col items-start gap-3.5 pt-1.5 z-[3]">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
              {t("issue")}
            </span>
            <div className="font-display text-[clamp(60px,7vw,110px)] leading-[0.88] text-dark">
              023
            </div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
              {season}
            </span>
          </div>

          {/* Name — col 2, row 1, overlaps into col 3 */}
          <h1 className="col-start-2 col-span-2 row-start-1 m-0 pt-4 z-[2] pointer-events-none">
            <span
              className="font-serif italic font-normal leading-[0.78] tracking-[-0.035em] text-ink block"
              style={{ fontSize: "clamp(120px, 18vw, 280px)" }}
            >
              Louise
            </span>
            <span
              className="font-display leading-[0.85] tracking-[0.005em] text-primary uppercase block"
              style={{
                fontSize: "clamp(80px, 13vw, 200px)",
                marginTop: "-0.06em",
                paddingLeft: "18%",
                WebkitTextStroke: "1.2px var(--c-ink)",
              }}
            >
              LEROUX
            </span>
          </h1>

          {/* Portrait — col 3, row 1 */}
          <div className="col-start-3 row-start-1 mt-[60px] z-[1] relative">
            <Image
              src="/portrait-louise.jpg"
              alt="Louise Leroux"
              width={720}
              height={960}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "3/4", objectPosition: "center top" }}
              priority
            />
            {/* P. 24 ÉDITO — overlapping top-right of portrait */}
            <div className="absolute top-[-12px] right-[-8px] bg-dark text-cream px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase flex gap-2.5 items-center z-[3]">
              <span className="text-primary">P. 24</span>
              <span>{t("toc.about.title")}</span>
            </div>
          </div>

          {/* Roles — col 2, row 2 */}
          <div className="col-start-2 row-start-2 mt-6 flex flex-col gap-2.5 max-w-[540px] text-ink">
            <Rule>{t("role1")}</Rule>
            <Rule>{t("role2")}</Rule>
            <Rule>{t("location")}</Rule>
          </div>

          {/* Lede — col 3, row 2 */}
          <div className="col-start-3 row-start-2 mt-6 flex flex-col gap-2.5">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
              {t("inside")}
            </span>
            <p className="font-serif italic text-[17px] leading-[1.5] m-0 text-dark">
              {t("lede")}
            </p>
          </div>
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
        {FEATURED_WORKS.map((work) => (
          <Link
            key={work.no}
            href="/services/illustration"
            className="flex flex-col gap-2 no-underline text-ink group"
          >
            <Image
              src={work.src}
              alt={work.fr}
              width={400}
              height={400}
              className="w-full h-auto border-[1.5px] border-ink group-hover:shadow-[4px_4px_0_var(--c-dark)] transition-shadow"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
            <div className="flex gap-2 items-baseline font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase">
              <span className="text-mute">{work.no}</span>
              <span>{work.fr}</span>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/services/illustration"
        className="mt-6 md:mt-8 w-full md:w-auto bg-ink text-cream border-none px-6 py-[14px] md:py-[18px] font-display text-sm md:text-base tracking-[0.12em] uppercase inline-flex items-center justify-between md:justify-start gap-3.5 no-underline transition-all hover:bg-dark hover:gap-[22px]"
      >
        <span>{t("featCta")}</span>
        <span className="font-sans">→</span>
      </Link>
    </section>
  );
}
