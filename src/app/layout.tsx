import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Fine Dining & Seasonal Tasting Menu`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["fine dining", "tasting menu", "wood-fired", "reservations", "restaurant"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Fine Dining & Seasonal Tasting Menu`,
    description: SITE.description,
    images: [
      {
        url: "https://picsum.photos/seed/ember-vine-og/1200/630",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — seasonal tasting menu`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Fine Dining & Seasonal Tasting Menu`,
    description: SITE.description,
    images: ["https://picsum.photos/seed/ember-vine-og/1200/630"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#16231d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream-light text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest-deep"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
