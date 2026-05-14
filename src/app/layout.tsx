import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Anton,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Louise Leroux | Développeuse Fullstack & Illustratrice",
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
    "illustration numérique",
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
    title: "Louise Leroux | Développeuse Fullstack & Illustratrice",
    description:
      "Développeuse web freelance et illustratrice. Je crée des applications web modernes et des illustrations sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louise Leroux | Développeuse Fullstack & Illustratrice",
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
    <html lang={locale}>
      <body
        className={`${cormorant.variable} ${anton.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
