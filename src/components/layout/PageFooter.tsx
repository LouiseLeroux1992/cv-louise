"use client";

import { useTranslations, useLocale } from "next-intl";
import { getSeasonUppercase } from "@/lib/season";

export function PageFooter() {
  const t = useTranslations("pageFooter");
  const locale = useLocale();
  const season = getSeasonUppercase(locale);

  return (
    <footer className="border-t border-ink px-5 md:px-8 py-4 md:py-5 flex flex-col md:grid md:grid-cols-3 gap-1 md:gap-6 font-mono text-[9.5px] md:text-[10px] tracking-[0.14em] uppercase text-mute">
      <div>
        <strong className="text-ink font-semibold">LOUISE LEROUX</strong> ·{" "}
        NUMÉRO 023 · {season}
      </div>
      <div className="md:text-center">{t("printRun")}</div>
      <div className="md:text-right">louiseleroux1992@gmail.com</div>
    </footer>
  );
}
