import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import "./globals.scss";
import "./themes.scss";
import Header from "@/components/header/Header";
import { useStartWeb } from "@/hooks/useStartWeb";

import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  weight: "variable",
  subsets: ["cyrillic", "latin", "cyrillic-ext", "vietnamese", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Fcore",
  description:
    "Комплексное Digital решение для вашего бизнеса. Возьмем под своё крыло: Разработку, маркетинг и ведение.",
  keywords: [
    "Разработка сайтов",
    "Разработка приложений",
    "Фкор",
    "Сайт",
    "DEV",
    "SEO",
    "GEO",
  ],
  metadataBase: new URL("https://fcore.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fcore — Digital агентство",
    description:
      "Комплексное Digital решение для вашего бизнеса. Возьмем под своё крыло: Разработку, маркетинг и ведение.",
    url: "https://fcore.tech",
    siteName: "Fcore",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { now } = useStartWeb();

  const themeClass = now >= 18 || now <= 7 ? "dark-theme" : "light-theme";

  return (
    <html lang="ru" dir="ltr">
      <head></head>
      <body className={clsx(montserrat.className, themeClass)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
