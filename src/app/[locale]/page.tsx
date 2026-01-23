import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-bold">{t("home.title")}</h1>
        <p className="text-2xl text-primary">{t("home.subtitle")}</p>
        <p className="text-lg text-muted-foreground">{t("home.description")}</p>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-colors">
            <h2 className="text-xl font-semibold mb-2">
              {t("services.dev.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("services.dev.description")}
            </p>
          </div>
          <div className="p-6 rounded-xl bg-accent/30 border border-accent/40 hover:border-accent/60 transition-colors">
            <h2 className="text-xl font-semibold mb-2">
              {t("services.illustration.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("services.illustration.description")}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="#contact"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
          >
            {t("home.cta.contact")}
          </Link>
          <Link
            href="#services"
            className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
          >
            {t("home.cta.services")}
          </Link>
        </div>
      </div>
    </div>
  );
}
