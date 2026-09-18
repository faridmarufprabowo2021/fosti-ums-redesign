"use client";

import React from "react";
import { Handshake, Award, ExternalLink } from "lucide-react";

interface Partner {
  name: string;
  category: string;
  description: string;
  badgeColor: string;
  link?: string;
}

const partners: Partner[] = [
  {
    name: "Universitas Muhammadiyah Surakarta",
    category: "Perguruan Tinggi",
    description: "Pusat keunggulan akademik Islami berkemajuan yang menaungi FOSTI sejak 2009.",
    badgeColor: "bg-blue-600 text-white",
    link: "https://www.ums.ac.id",
  },
  {
    name: "FKI UMS",
    category: "Fakultas Pembina",
    description: "Fakultas Komunikasi dan Informatika pembina resmi riset dan kegiatan mahasiswa.",
    badgeColor: "bg-red-600 text-white",
    link: "https://fki.ums.ac.id",
  },
  {
    name: "Open Source Initiative (OSI)",
    category: "Filosofi & Komunitas",
    description: "Kiblat advokasi kebebasan perangkat lunak dan lisensi kode terbuka dunia.",
    badgeColor: "bg-emerald-600 text-white",
    link: "https://opensource.org",
  },
  {
    name: "GitHub Campus Partner",
    category: "Eksosistem Developer",
    description: "Kolaborasi open-source platform untuk repository dan CI/CD pembelajaran anggota.",
    badgeColor: "bg-purple-600 text-white",
    link: "https://github.com",
  },
  {
    name: "Dicoding Indonesia",
    category: "Learning Partner",
    description: "Akselerasi kurikulum pemrograman web, cloud, dan kecerdasan buatan.",
    badgeColor: "bg-yellow-400 text-black",
    link: "https://www.dicoding.com",
  },
  {
    name: "Red Hat Academy",
    category: "Sertifikasi Linux",
    description: "Penyelarasan standar kompetensi sistem operasi Linux enterprise dan sysadmin.",
    badgeColor: "bg-red-500 text-white",
    link: "https://www.redhat.com",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-24 border-t-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-900" id="partners">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-blue-500 px-3 py-1.5 text-xs font-mono font-black text-white shadow-[3px_3px_0px_0px_#000]">
            <Handshake className="h-4 w-4" />
            <span className="tracking-wider uppercase">SUPPORTED BY & NETWORKING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Mitra & Ekosistem <span className="bg-yellow-400 text-black px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block rotate-1">Kolaborasi</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
            Didukung oleh institusi pendidikan tinggi, komunitas teknologi terkemuka, dan korporasi industri perangkat lunak skala nasional dan internasional.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative flex flex-col justify-between rounded-xl border-2 border-black dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 p-6 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#27272a] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#52525b]"
            >
              {/* Stud Row Accent */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-black dark:border-zinc-800">
                <span className={`inline-flex items-center rounded-md border-2 border-black px-2.5 py-0.5 text-[11px] font-mono font-black shadow-[2px_2px_0px_0px_#000] ${partner.badgeColor}`}>
                  {partner.category}
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-black bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full border border-black bg-red-500" />
                </div>
              </div>

              {/* Partner Details */}
              <div className="py-4 space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-zinc-50 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Action Link */}
              {partner.link && (
                <div className="pt-2">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Kunjungi Situs Resmi</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
