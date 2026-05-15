import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { Masthead } from "@/components/layout/Masthead";
import { Nav } from "@/components/layout/Nav";
import { PageFooter } from "@/components/layout/PageFooter";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen flex flex-col max-w-[1440px] mx-auto">
        <Masthead />
        <Nav />
        <main className="flex-1">{children}</main>
        <PageFooter />
      </div>
    </NextIntlClientProvider>
  );
}
