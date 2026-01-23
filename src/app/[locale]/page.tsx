import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>

      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold">{t("home.title")}</h1>
        <p className="text-xl text-muted-foreground">{t("home.subtitle")}</p>
        <p className="text-lg">{t("home.description")}</p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
            {t("services.dev.title")}
          </div>
          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
            {t("services.illustration.title")}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            {t("home.cta.contact")}
          </button>
          <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
            {t("home.cta.services")}
          </button>
        </div>
      </div>
    </main>
  );
}
