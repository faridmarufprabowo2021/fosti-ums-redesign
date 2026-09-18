import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOSTI UMS — Leading The Future of Open Source",
  description: "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta. Organisasi kemahasiswaan riset dan inovasi teknologi open source terkemuka di Indonesia.",
  keywords: [
    "FOSTI UMS",
    "Forum Open Source Teknik Informatika",
    "Universitas Muhammadiyah Surakarta",
    "Open Source Indonesia",
    "FKI UMS",
    "Komunitas Coding UMS",
    "Riset dan Teknologi",
  ],
  authors: [{ name: "FOSTI UMS Ristek Web Development Team" }],
  creator: "FOSTI UMS",
  metadataBase: new URL("https://fostiums.org"),
  openGraph: {
    title: "FOSTI UMS — Leading The Future of Open Source",
    description: "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta. Wadah eksplorasi teknologi, riset software open-source, dan inovasi mahasiswa.",
    url: "https://fostiums.org",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
