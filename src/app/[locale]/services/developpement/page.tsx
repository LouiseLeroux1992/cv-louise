"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const TECHNOLOGIES = [
  { name: "TypeScript", category: "lang" },
  { name: "JavaScript", category: "lang" },
  { name: "Rust", category: "lang" },
  { name: "Python", category: "lang" },
  { name: "SQL", category: "lang" },
  { name: "HTML / CSS", category: "lang" },
];

const TOOLS = [
  "React", "Next.js", "Node.js", "Tailwind", "GraphQL",
  "PostgreSQL", "Docker", "Kubernetes", "GCP", "Vite",
  "Playwright", "RabbitMQ",
];

const PROCESS = [
  { no: "01", key: "discovery" },
  { no: "02", key: "design" },
  { no: "03", key: "development" },
  { no: "04", key: "delivery" },
] as const;

export default function ServicesDev() {
  return (
    <>
      <CodeHeader />
      <CodeServices />
      <CodeTech />
      <CodeProcess />
      <CodeCTA />
    </>
  );
}

function CodeHeader() {
  const t = useTranslations("servicesDev");

  return (
    <header className="px-5 md:px-8 pt-8 md:pt-12 pb-7 md:pb-9 border-b border-ink bg-paper">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
        Rubrique 03 · Code
      </span>
      <h1 className="font-display text-[clamp(64px,12vw,170px)] leading-[0.88] tracking-[-0.005em] m-0 mt-4 uppercase text-ink">
        <em className="font-serif italic font-normal normal-case tracking-[-0.03em] text-dark">
          Développement
        </em>
        <br />
        Web
      </h1>
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-5 md:mt-7 font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-mute">
        <span>TypeScript · Rust · React · Next.js</span>
        <span className="opacity-40">·</span>
        <span>Architecture · Performance · Mentorat</span>
      </div>
      <p className="font-serif italic text-lg md:text-xl leading-[1.4] mt-6 max-w-[800px] text-dark m-0 mt-6">
        {t("description")}
      </p>
    </header>
  );
}

function CodeServices() {
  const t = useTranslations("servicesDev");

  const services = [
    { key: "webapp", no: "01" },
    { key: "showcase", no: "02" },
    { key: "api", no: "03" },
  ] as const;

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Services · P. 36
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          {t("servicesTitle")}
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-ink">
        {services.map((s) => (
          <div
            key={s.key}
            className="border-b md:border-b-0 md:border-r last:border-r-0 border-ink p-6 md:p-8 flex flex-col gap-4"
          >
            <span
              className="font-display text-[48px] md:text-[64px] text-primary leading-[0.9]"
              style={{ WebkitTextStroke: "1px var(--c-ink)" }}
            >
              {s.no}
            </span>
            <h3 className="font-serif italic font-medium text-2xl md:text-3xl leading-[1.05] text-ink m-0">
              {t(`services.${s.key}.title`)}
            </h3>
            <p className="font-serif text-[15px] md:text-base leading-[1.5] text-mute m-0">
              {t(`services.${s.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CodeTech() {
  const t = useTranslations("servicesDev");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-cream border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Stack technique — 2026
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          {t("techTitle")}
        </h2>
      </header>
      <div className="grid grid-cols-[200px_1fr] md:grid-cols-[240px_1fr] gap-8 md:gap-12 border-t border-ink pt-6 md:pt-8">
        {/* Languages */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            Langages
          </span>
          <ul className="list-none p-0 m-0 flex flex-col gap-1.5 font-serif italic text-xl md:text-2xl leading-[1.2] text-ink">
            {TECHNOLOGIES.map((tech) => (
              <li key={tech.name}>{tech.name}</li>
            ))}
          </ul>
        </div>
        {/* Tools & Frameworks */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            Frameworks & outils
          </span>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="border border-ink px-3 md:px-4 py-2 font-mono text-[11px] md:text-xs tracking-[0.1em] uppercase text-ink"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeProcess() {
  const t = useTranslations("servicesDev");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          Méthode · 4 étapes
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[0.95] m-0 text-ink">
          {t("processTitle")}
        </h2>
      </header>
      <ol className="list-none m-0 p-0 border-t border-ink">
        {PROCESS.map((step) => (
          <li
            key={step.no}
            className="flex gap-6 md:grid md:grid-cols-[80px_1fr] py-6 md:py-8 border-b border-ink"
          >
            <span className="font-display text-[40px] md:text-[56px] text-primary leading-[0.9]" style={{ WebkitTextStroke: "1px var(--c-ink)" }}>
              {step.no}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-serif italic font-medium text-2xl md:text-[36px] leading-[1.05] text-ink m-0">
                {t(`process.${step.key}.title`)}
              </h3>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.5] text-mute m-0 max-w-[720px]">
                {t(`process.${step.key}.description`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CodeCTA() {
  const t = useTranslations("servicesDev");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-primary border-b border-ink flex flex-col md:grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 md:items-center">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-dark">
          Contact · P. 80
        </span>
        <h2 className="font-serif font-medium text-[clamp(32px,4vw,56px)] leading-[1] m-0 text-ink">
          {t("ctaTitle")}
        </h2>
        <p className="font-serif italic text-lg text-dark m-0 max-w-[600px]">
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
