import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default function Home() {
  return <Hero />;
}
