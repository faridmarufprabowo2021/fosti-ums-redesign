import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fosti-ums.pages.dev";

export const metadata: Metadata = {
  title: {
    default: "FOSTI UMS — Leading The Future of Open Source",
    template: "%s | FOSTI UMS",
  },
  description: "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta. Organisasi kemahasiswaan riset dan inovasi teknologi open source terkemuka di Indonesia.",
  keywords: [
    "FOSTI UMS",
    "FOSTI",
    "Forum Open Source Teknik Informatika",
    "Universitas Muhammadiyah Surakarta",
    "Open Source Indonesia",
    "FKI UMS",
    "Komunitas Coding UMS",
    "Riset dan Teknologi UMS",
    "FOSTIFEST",
    "Lomba Coding Mahasiswa Solo",
  ],
  authors: [{ name: "FOSTI UMS Ristek Web Development Team" }],
  creator: "FOSTI UMS",
  publisher: "FOSTI UMS",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google964bcfb899e1dfd7",
  },
  openGraph: {
    title: "FOSTI UMS — Leading The Future of Open Source",
    description: "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta. Wadah eksplorasi teknologi, riset software open-source, dan inovasi mahasiswa.",
    url: siteUrl,
    siteName: "FOSTI UMS",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOSTI UMS — Leading The Future of Open Source",
    description: "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#fafafa] text-zinc-900 transition-colors duration-200 dark:bg-[#09090b] dark:text-zinc-100 selection:bg-red-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <OrganizationJsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
