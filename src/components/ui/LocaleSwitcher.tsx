"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { type Locale } from "@/i18n/config";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <span className="flex items-center gap-1.5">
      <button
        className={`bg-transparent border-none font-mono text-[10px] tracking-[0.18em] uppercase px-1.5 py-1 ${
          locale === "fr" ? "text-ink bg-primary" : "text-mute"
        } hover:text-ink`}
        onClick={() => switchLocale("fr")}
      >
        FR
      </button>
      <span className="opacity-40">/</span>
      <button
        className={`bg-transparent border-none font-mono text-[10px] tracking-[0.18em] uppercase px-1.5 py-1 ${
          locale === "en" ? "text-ink bg-primary" : "text-mute"
        } hover:text-ink`}
        onClick={() => switchLocale("en")}
      >
        EN
      </button>
    </span>
  );
}
