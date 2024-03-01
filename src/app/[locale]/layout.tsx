import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getTranslations } from "next-intl/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface Params {
  locale: string;
}

export async function generateMetadata({
  params: { locale }
}: {
  params: Params;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description")
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
