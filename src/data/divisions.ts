import { Division } from "@/types";

export const divisionsData: Division[] = [
  {
    id: "div-ristek",
    code: "RISTEK",
    slug: "ristek",
    name: "Riset dan Teknologi",
    tagline: "Research & Technology",
    description: "Fokus pada pengembangan kapabilitas teknis mahasiswa, eksplorasi teknologi terkini, riset perangkat lunak open source, kompetisi inovasi, serta penyelenggaraan kelas pemrograman.",
    color: "from-blue-600 to-cyan-600",
    borderColor: "border-blue-600 dark:border-blue-500",
    bgGlow: "bg-blue-500/10 dark:bg-blue-500/20",
    accentHex: "#0055A4",
    leadership: "Airlangga Pradana (Ketua Bidang Ristek)",
    memberCount: 14,
    pillars: [
      {
        title: "Open-Source Culture & Training",
        description: "Menyelenggarakan pelatihan komprehensif mulai dari dasar web development, Git/GitHub workflow, hingga framework modern untuk mencetak talenta engineering siap pakai.",
        icon: "Code2"
      },
      {
        title: "Collaborative R&D & Prototyping",
        description: "Inkubasi riset dan perancangan prototipe perangkat lunak inovatif untuk kompetisi sains dan teknologi tingkat nasional hingga internasional.",
        icon: "Cpu"
      },
      {
        title: "Inclusive Talent Empowerment",
        description: "Membuka ruang belajar yang inklusif dan suportif bagi seluruh mahasiswa dari berbagai latar belakang untuk mengeksplorasi potensi teknologi terbaik mereka.",
        icon: "Sparkles"
      }
    ]
  },
  {
    id: "div-keor",
    code: "KEORGANISASIAN",
    slug: "keor",
    name: "Keorganisasian",
    tagline: "Organizational Development",
    description: "Bertanggung jawab atas regenerasi kader, pengembangan kapasitas kepemimpinan anggota (ToT), peningkatan soft skill, serta menjaga keharmonisan internal keluarga besar FOSTI.",
    color: "from-red-600 to-rose-600",
    borderColor: "border-red-600 dark:border-red-500",
    bgGlow: "bg-red-500/10 dark:bg-red-500/20",
    accentHex: "#AF101A",
    leadership: "Eko Wahyu Nugroho (Ketua Bidang Keorganisasian)",
    memberCount: 12,
    pillars: [
      {
        title: "Kaderisasi Berkelanjutan",
        description: "Merancang proses seleksi dan orientasi anggota baru (Open Recruitment & FOSTISIDA) yang mendidik, transparan, dan menanamkan nilai-nilai open-source.",
        icon: "Users"
      },
      {
        title: "Leadership & Capacity Building",
        description: "Melatih calon pemimpin masa depan melalui Training of Trainers (TOT) dan Musyawarah Kerja (Musker) untuk penguatan manajemen organisasi.",
        icon: "Award"
      },
      {
        title: "Internal Bonding & Keakraban",
        description: "Membangun rasa kekeluargaan yang erat antaranggota melalui program kebersamaan seperti Ifosti, bonding session, dan evaluasi berkala Sidang Pleno.",
        icon: "HeartHandshake"
      }
    ]
  },
  {
    id: "div-hubpub",
    code: "HUBUNGAN PUBLIK",
    slug: "hubpub",
    name: "Hubungan Publik",
    tagline: "Public Relations",
    description: "Mengelola citra publik dan media sosial FOSTI UMS, menjalin kolaborasi strategis dengan komunitas IT, universitas, media partner, dan pihak industri teknologi.",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500 dark:border-amber-400",
    bgGlow: "bg-amber-500/10 dark:bg-amber-500/20",
    accentHex: "#FFD700",
    leadership: "Lathifa Yayang (Ketua Bidang Hubungan Publik)",
    memberCount: 10,
    pillars: [
      {
        title: "Connecting the Unconnected",
        description: "Menghubungkan FOSTI UMS dengan ekosistem teknologi luar, mulai dari kampus lain, komunitas pengembang sumber terbuka, hingga industri IT terkemuka.",
        icon: "Network"
      },
      {
        title: "Strategic Media Partnerships",
        description: "Membangun kerja sama kemitraan media dan sponsorship untuk memperluas jangkauan publikasi setiap acara besar yang diselenggarakan.",
        icon: "Megaphone"
      },
      {
        title: "The Voice of FOSTI UMS",
        description: "Memproduksi konten digital kreatif, dokumentasi visual berkualitas tinggi, dan rilis pers resmi untuk mengomunikasikan pencapaian organisasi.",
        icon: "Radio"
      }
    ]
  }
];

export const getDivisionBySlug = (slug: string) => {
  return divisionsData.find((div) => div.slug === slug);
};
