"use client";

import { useTranslations } from "next-intl";

export function PageFooter() {
  const t = useTranslations("pageFooter");

  return (
    <footer className="border-t border-ink px-5 md:px-8 py-4 md:py-5 flex flex-col md:grid md:grid-cols-3 gap-1 md:gap-6 font-mono text-[9.5px] md:text-[10px] tracking-[0.14em] uppercase text-mute">
      <div>
        <strong className="text-ink font-semibold">LOUISE LEROUX</strong> ·{" "}
        {t("issue")}
      </div>
      <div className="md:text-center">{t("printRun")}</div>
      <div className="md:text-right">louiseleroux1992@gmail.com</div>
    </footer>
  );
}
