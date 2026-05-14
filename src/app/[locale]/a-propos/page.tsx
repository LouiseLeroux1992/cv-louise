"use client";

import { useTranslations } from "next-intl";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import Image from "next/image";
import { Rule } from "@/components/ui/Rule";

export default function About() {
  return (
    <>
      <AboutHeader />
      <AboutLetter />
      <AboutTimeline />
      <AboutSkills />
      <AboutCV />
    </>
  );
}

function AboutHeader() {
  const t = useTranslations("about");

  return (
    <header className="px-5 md:px-8 pt-8 md:pt-12 pb-7 md:pb-9 flex flex-col md:grid md:grid-cols-[1fr_360px] gap-6 md:gap-12 border-b border-ink bg-paper">
      <div className="flex flex-col gap-4 md:gap-7">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("rubricKicker")}
        </span>
        <h1 className="font-display text-[clamp(64px,12vw,170px)] leading-[0.88] tracking-[-0.005em] m-0 uppercase text-ink">
          <em className="font-serif italic font-normal normal-case tracking-[-0.03em] text-dark">
            {t("headerTitle1")}
          </em>
          <br />
          {t("headerTitle2")}
        </h1>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-mute">
          <span>
            <strong className="text-ink font-semibold">{t("byline")}</strong>{" "}
            Louise Leroux
          </span>
          <span className="opacity-40">·</span>
          <span>{t("dateline")}</span>
          <span className="opacity-40">·</span>
          <span>{t("readTime")}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Image
          src="/portrait-louise.jpg"
          alt="Louise Leroux"
          width={720}
          height={900}
          className="w-full h-auto object-cover"
          style={{ aspectRatio: "4/5", objectPosition: "center top" }}
        />
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute flex flex-col gap-1">
          <span className="text-ink">Cliché</span>
          <span>{t("portraitCaption")}</span>
        </div>
      </div>
    </header>
  );
}

function AboutLetter() {
  const t = useTranslations("about");

  return (
    <section className="px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-16 flex flex-col md:grid md:grid-cols-[1fr_280px] gap-6 md:gap-12 bg-paper border-b border-ink">
      <span className="md:col-span-2 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
        {t("letterKicker")}
      </span>

      <h2 className="md:col-span-2 font-serif font-medium text-[clamp(32px,5vw,64px)] leading-[1.05] tracking-[-0.015em] my-2 md:my-5 max-w-[1100px] text-ink">
        <em className="italic font-normal text-dark">{t("pullQuote1")}</em>{" "}
        {t("pullQuote2")}
      </h2>

      <div className="font-serif text-[15px] md:text-base leading-[1.55] md:columns-2 md:gap-7">
        <p className="m-0">
          <span className="font-serif italic float-left text-[56px] md:text-[96px] leading-[0.78] mr-2 md:mr-3 mb-[-3px] md:mb-[-4px] mt-1 md:mt-1.5 text-dark font-medium">
            {t("bodyP1").charAt(0)}
          </span>
          {t("bodyP1").slice(1)}
        </p>
        <p className="mt-4 m-0">{t("bodyP2")}</p>
        <p className="mt-4 m-0">{t("bodyP3")}</p>
        <p className="mt-4 m-0">{t("bodyP4")}</p>
      </div>

      <aside className="bg-fog p-5 md:p-6 self-start text-ink">
        <Rule>{t("asideTitle")}</Rule>
        <dl className="m-0 mt-3 grid grid-cols-[auto_1fr] gap-x-3 md:gap-x-4 gap-y-1.5 md:gap-y-2 font-mono text-[10px] md:text-[11px] tracking-[0.1em] uppercase">
          {(["born", "based", "status", "languages", "drink"] as const).map(
            (key) => (
              <div key={key} className="contents">
                <dt className="text-mute">{t(`aside.${key}`)}</dt>
                <dd className="m-0 text-ink">{t(`aside.${key}Val`)}</dd>
              </div>
            )
          )}
        </dl>
      </aside>
    </section>
  );
}

function AboutTimeline() {
  const t = useTranslations("about");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-cream border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("timelineKicker")}
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[1] m-0 text-ink">
          {t("timelineTitle1")}{" "}
          <em className="italic font-normal">{t("timelineTitle2")}</em>
        </h2>
      </header>
      <ol className="list-none m-0 p-0 border-t border-ink">
        {experiences.map((exp, i) => (
          <li
            key={exp.id}
            className="flex flex-col md:grid md:grid-cols-[200px_1fr_80px] md:items-start gap-1 md:gap-8 py-5 md:py-7 border-b border-ink"
          >
            <div className="font-mono text-[10px] md:text-xs tracking-[0.16em] uppercase text-dark font-semibold md:pt-2">
              {exp.period}
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-serif italic text-2xl md:text-4xl leading-[1.05] text-ink font-medium">
                {exp.role}
              </div>
              <div className="font-display text-[11px] md:text-sm tracking-[0.16em] uppercase text-mute mb-1 md:mb-2">
                {exp.company}
              </div>
              <p className="m-0 font-serif text-sm md:text-[17px] leading-[1.45] md:leading-[1.5] max-w-[720px] text-ink whitespace-pre-line">
                {exp.description}
              </p>
              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 font-mono text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-mute">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="border border-ink/20 px-1.5 md:px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div
              className="hidden md:block font-display text-[56px] text-primary text-right leading-[0.9]"
              style={{ WebkitTextStroke: "1px var(--c-ink)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          </li>
        ))}

        {education.map((edu, i) => (
          <li
            key={edu.id}
            className="flex flex-col md:grid md:grid-cols-[200px_1fr_80px] md:items-start gap-1 md:gap-8 py-5 md:py-7 border-b border-ink"
          >
            <div className="font-mono text-[10px] md:text-xs tracking-[0.16em] uppercase text-dark font-semibold md:pt-2">
              {edu.period}
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-serif italic text-2xl md:text-4xl leading-[1.05] text-ink font-medium">
                {edu.degree}
              </div>
              <div className="font-display text-[11px] md:text-sm tracking-[0.16em] uppercase text-mute mb-1 md:mb-2">
                {edu.school}
              </div>
              {edu.description && (
                <p className="m-0 font-serif text-sm md:text-[17px] leading-[1.45] md:leading-[1.5] max-w-[720px] text-ink whitespace-pre-line">
                  {edu.description}
                </p>
              )}
            </div>
            <div
              className="hidden md:block font-display text-[56px] text-primary text-right leading-[0.9]"
              style={{ WebkitTextStroke: "1px var(--c-ink)" }}
            >
              {String(experiences.length + i + 1).padStart(2, "0")}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function AboutSkills() {
  const t = useTranslations("about");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-paper border-b border-ink">
      <header className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-9">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("skillsKicker")}
        </span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,72px)] leading-[1] m-0 text-ink">
          {t("skillsTitle1")}{" "}
          <em className="italic font-normal">{t("skillsTitle2")}</em>
        </h2>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-ink pt-6 md:pt-8">
        {skillCategories.map((category) => (
          <div key={category.id} className="flex flex-col gap-2 md:gap-3.5">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
              {category.name}
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-1 md:gap-1.5 font-serif italic text-lg md:text-[22px] leading-[1.3] text-ink">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutCV() {
  const t = useTranslations("about");

  return (
    <section className="px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-16 bg-primary border-b border-ink flex flex-col md:grid md:grid-cols-[1fr_460px] gap-6 md:gap-12 md:items-center">
      <div className="flex flex-col gap-2.5 md:gap-3.5">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {t("cvKicker")}
        </span>
        <h2 className="font-serif font-medium text-[clamp(36px,4vw,56px)] leading-[1] m-0 text-ink">
          {t("cvTitle1")}{" "}
          <em className="italic font-normal text-dark">{t("cvTitle2")}</em>{" "}
          {t("cvTitle3")}
        </h2>
      </div>
      <a
        href="/cv-louise-leroux.pdf"
        download
        className="grid gap-4 md:gap-[18px] p-5 md:p-6 border-2 border-ink bg-paper text-left no-underline transition-all hover:bg-cream hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--c-ink)]"
      >
        <div className="flex gap-3 items-baseline font-mono text-[10px] tracking-[0.18em] uppercase text-mute">
          <span className="text-dark font-bold">PDF</span>
          <span>— 184&nbsp;ko</span>
        </div>
        <div className="flex justify-between items-center font-display text-xl md:text-[38px] tracking-[0.01em] uppercase text-ink">
          <span>{t("cvBtn")}</span>
          <span className="text-dark">↓</span>
        </div>
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute pt-3 md:pt-3.5 border-t border-ink">
          {t("cvMeta")}
        </div>
      </a>
    </section>
  );
}
