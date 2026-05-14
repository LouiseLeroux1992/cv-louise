"use client";

import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/", id: "cover", no: "01" },
  { href: "/a-propos", id: "about", no: "02" },
  { href: "/services/developpement", id: "code", no: "03" },
  { href: "/services/illustration", id: "atelier", no: "04" },
  { href: "/bd", id: "bd", no: "05" },
  { href: "/contact", id: "contact", no: "06" },
] as const;

export function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-end justify-between border-b-[3px] border-ink px-8 pt-[18px] pb-[14px] bg-paper relative z-10">
        <Link href="/" className="flex items-baseline gap-3 no-underline flex-shrink-0">
          <span className="font-display text-[38px] leading-[0.85] tracking-[-0.02em] text-ink">
            LL
          </span>
          <span className="font-serif italic text-sm text-mute hidden lg:inline">
            {t("magazine")}
          </span>
        </Link>
        <ul className="list-none flex m-0 p-0 gap-[clamp(10px,1.5vw,26px)]">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-baseline gap-1 no-underline text-ink font-display text-[clamp(11px,1.2vw,17px)] tracking-[0.04em] uppercase pb-0.5 border-b-2 transition-colors ${
                    isActive ? "border-ink" : "border-transparent hover:border-ink"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.1em] font-normal hidden xl:inline ${
                      isActive ? "text-ink" : "text-mute"
                    }`}
                  >
                    {item.no}
                  </span>
                  <span>{t(item.id)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-5 py-3.5 border-b-[3px] border-ink bg-paper">
          <Link href="/" className="font-display text-[32px] leading-[0.85] text-ink no-underline">
            LL
          </Link>
          <button
            className="w-[38px] h-6 flex flex-col justify-between bg-transparent border-none p-[4px_0]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="block w-full h-[2px] bg-ink" />
            <span className="block w-full h-[2px] bg-ink" />
            <span className="block w-full h-[2px] bg-ink" />
          </button>
        </div>

        {/* Mobile rubrics bar */}
        <nav className="flex gap-3.5 font-display text-xs tracking-[0.1em] px-5 py-2.5 border-b border-ink bg-paper overflow-x-auto whitespace-nowrap">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`no-underline uppercase flex-shrink-0 ${
                  isActive
                    ? "text-ink bg-primary px-1.5 py-0.5"
                    : "text-ink"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.id)}
              </Link>
            );
          })}
        </nav>

        {/* Mobile full menu */}
        {isMenuOpen && (
          <div className="bg-paper border-b border-ink px-5 py-6">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="font-display text-2xl tracking-[0.04em] uppercase text-ink no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-mono text-xs tracking-[0.18em] text-mute mr-3">
                    {item.no}
                  </span>
                  {t(item.id)}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-ink">
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
