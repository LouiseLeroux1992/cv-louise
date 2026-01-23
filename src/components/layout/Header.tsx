"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Header() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services/developpement`, label: t("servicesDev") },
    { href: `/${locale}/services/illustration`, label: t("servicesIllustration") },
    { href: `/${locale}/a-propos`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Louise Leroux
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
