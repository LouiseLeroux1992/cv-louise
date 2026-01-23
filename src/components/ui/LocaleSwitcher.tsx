"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LocaleSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  const otherLocale = locales.find((l) => l !== locale) as Locale;

  return (
    <button
      onClick={() => switchLocale(otherLocale)}
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
      aria-label={t("switchLanguage")}
    >
      {localeNames[otherLocale]}
    </button>
  );
}
