import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bd" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/bd`,
      languages: {
        fr: "/fr/bd",
        en: "/en/bd",
      },
    },
  };
}

export default function Layout({ children }: Props) {
  return children;
}
