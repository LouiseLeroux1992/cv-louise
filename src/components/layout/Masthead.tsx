"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Masthead() {
  const t = useTranslations("masthead");

  return (
    <div className="border-b border-ink flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] font-mono text-[9.5px] md:text-[10px] tracking-[0.12em] md:tracking-[0.14em] uppercase px-5 md:px-8 py-2 md:py-2.5 gap-2 md:gap-6 bg-paper text-ink">
      <div className="flex items-center gap-2">
        <span className="font-bold tracking-[0.18em]">Nº 023</span>
        <span className="opacity-40">·</span>
        <span>{t("date")}</span>
        <span className="opacity-40 hidden md:inline">·</span>
        <span className="hidden md:inline">{t("frequency")}</span>
      </div>
      <div className="hidden md:block font-serif italic text-[11px] tracking-[0.06em] normal-case opacity-[0.78]">
        LOUISE&nbsp;LEROUX&nbsp;—&nbsp;{t("subtitle")}
      </div>
      <div className="flex items-center justify-end gap-2.5">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
