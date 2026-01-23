import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesIllustration" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/services/illustration`,
      languages: {
        fr: "/fr/services/illustration",
        en: "/en/services/illustration",
      },
    },
  };
}

export default function Layout({ children }: Props) {
  return children;
}
