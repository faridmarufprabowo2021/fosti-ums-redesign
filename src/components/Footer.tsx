import React from "react";
import Link from "next/link";
import { Code2, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t-3 border-black bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950">
      {/* Lego Stud Accent Bar */}
      <div className="border-b-2 border-black bg-amber-300 py-2.5 px-4 text-center dark:border-zinc-700 dark:bg-amber-400">
        <p className="text-xs font-mono font-black tracking-wider text-black">
          🔴 🟡 🔵 🟢 &nbsp; // MODULAR OPEN SOURCE SYSTEM • FORUM OPEN SOURCE TEKNIK INFORMATIKA UMS // &nbsp; 🟢 🔵 🟡 🔴
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-red-600 text-white shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700">
                <Code2 className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg tracking-tighter text-zinc-950 dark:text-zinc-50">
                    FOSTI
                  </span>
                  <span className="rounded-md border border-black bg-amber-300 px-1.5 py-0.2 text-[10px] font-black text-black shadow-[1px_1px_0px_0px_#000] dark:border-zinc-700">
                    UMS
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-zinc-500 dark:text-zinc-400">
                  Forum Open Source Teknik Informatika
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
              Organisasi kemahasiswaan independen non-profit berbasis di Fakultas Komunikasi dan Informatika (FKI), Universitas Muhammadiyah Surakarta. Berdedikasi mencetak talenta digital dan memajukan ekosistem open-source sejak 2008.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/FOSTI-UMS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub FOSTI"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white text-zinc-800 transition-all hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="http://instagram.com/fosti_ums"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FOSTI"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white text-zinc-800 transition-all hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-600 hover:shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/fostiums"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn FOSTI"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white text-zinc-800 transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-600 hover:shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@fostiums"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube FOSTI"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white text-zinc-800 transition-all hover:-translate-y-0.5 hover:bg-red-50 hover:text-red-600 hover:shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-zinc-950 dark:text-zinc-50 border-b border-zinc-300 dark:border-zinc-800 pb-1.5">
              Halaman Resmi
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/" className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/divisi/ristek" className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Divisi Riset &amp; Teknologi
                </Link>
              </li>
              <li>
                <Link href="/divisi/keor" className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors">
                  Divisi Keorganisasian
                </Link>
              </li>
              <li>
                <Link href="/divisi/hubpub" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition-colors">
                  Divisi Hubungan Publik
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors">
                  Blog &amp; Publikasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Divisi & Program */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-zinc-950 dark:text-zinc-50 border-b border-zinc-300 dark:border-zinc-800 pb-1.5">
              Program Unggulan
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/blogs/fostech-camp" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                  Fostech Camp
                </Link>
              </li>
              <li>
                <Link href="/divisi/ristek" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                  Sandbox R&amp;D
                </Link>
              </li>
              <li>
                <Link href="/divisi/keor" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                  FOSTISIDA &amp; ToT
                </Link>
              </li>
              <li>
                <Link href="/divisi/hubpub" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                  Company Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak & Sekretariat */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-zinc-950 dark:text-zinc-50 border-b border-zinc-300 dark:border-zinc-800 pb-1.5">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Gedung FKI Sayap Barat, Kampus 2 UMS, Pabelan, Kartasura, Sukoharjo</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <a href="mailto:fostiums@gmail.com" className="hover:underline font-mono text-zinc-800 dark:text-zinc-200">
                  fostiums@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://oprec.fostiums.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-black bg-amber-300 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] hover:bg-amber-400 transition-all"
              >
                <span>Portal Oprec</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t-2 border-zinc-300 pt-6 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} FOSTI UMS. Built with Lego Neo-Brutalism &amp; Next.js.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> by Open Source Community
          </p>
        </div>
      </div>
    </footer>
  );
}
