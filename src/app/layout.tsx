import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Louise Leroux | Développeuse Freelance & Illustratrice",
    template: "%s | Louise Leroux",
  },
  description:
    "Développeuse web freelance et illustratrice. Je crée des applications web modernes et des illustrations sur mesure pour donner vie à vos projets.",
  keywords: [
    "développeuse freelance",
    "développeur web",
    "illustratrice",
    "Next.js",
    "React",
    "TypeScript",
    "illustration digitale",
    "France",
  ],
  authors: [{ name: "Louise Leroux" }],
  creator: "Louise Leroux",
  metadataBase: new URL("https://lerouxlouise.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://lerouxlouise.fr",
    siteName: "Louise Leroux",
    title: "Louise Leroux | Développeuse Freelance & Illustratrice",
    description:
      "Développeuse web freelance et illustratrice. Je crée des applications web modernes et des illustrations sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louise Leroux | Développeuse Freelance & Illustratrice",
    description:
      "Développeuse web freelance et illustratrice. Je crée des applications web modernes et des illustrations sur mesure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
