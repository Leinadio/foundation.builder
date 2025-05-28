import type { Metadata } from "next";
import { DropdownProvider } from "@/context/Dropdown/DropdownProvider";
// import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider } from "@/context/Auth/AuthProvider";
import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";
import DictionaryProvider from "@/context/Dictionnary/DictionnaryProvider";
import { getDictionary } from "./dictionaries";
const dictionaries = { fr, en };

export const validLocales = ["fr", "en"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "fr" | "en" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.womi-validateidea.com";

  const ogImagePath = `/images/og-image-${lang}.png`;

  return {
    title: dict.metadata.siteName,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.siteName,
      description: dict.metadata.description,
      url: `${baseUrl}/${lang}`,
      siteName: dict.metadata.siteName,
      images: [
        {
          url: new URL(ogImagePath, baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: dict.metadata.siteName,
        },
      ],
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.siteName,
      description: dict.metadata.description,
      images: [new URL(ogImagePath, baseUrl).toString()],
      creator: "@leinadiotech",
      creatorId: "1008353822144593927",
      site: "@leinadiotech",
      siteId: "1008353822144593927",
    },
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
      },
      canonical: `${baseUrl}/en`,
    },
  };
}

export async function generateStaticParams() {
  return validLocales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "fr " | "en" }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <AuthProvider>
      <DropdownProvider>
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </DropdownProvider>
    </AuthProvider>
  );
}
