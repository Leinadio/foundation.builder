import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "fr" | "en" }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className="h-full w-full scroll-smooth"
    >
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <script
          defer
          data-website-id="6803dcc2870c5f0067ed0ca8"
          data-domain="www.womi-validateidea.com"
          src="https://datafa.st/js/script.js"
        ></script>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
