import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/a-propos`,
      languages: {
        fr: "/fr/a-propos",
        en: "/en/a-propos",
      },
    },
  };
}

export default function Layout({ children }: Props) {
  return children;
}
