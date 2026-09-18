import { Program } from "@/types";

export const programsData: Program[] = [
  // RISTEK
  {
    id: "prog-fostech",
    title: "Fostech Camp",
    division: "RISTEK",
    category: "Technical Workshop & Bootcamp",
    description: "Pelatihan intensif pengembangan website dan teknologi terbuka (HTML, CSS, JavaScript, Git & GitHub, UI/UX) untuk umum dan mahasiswa.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostech_hcfbmr.webp",
    highlights: ["Web Development Blueprint", "Hands-on Live Coding", "Open Source Workflow", "Open for Public"]
  },
  {
    id: "prog-sandbox",
    title: "Sandbox R&D Project",
    division: "RISTEK",
    category: "Innovation Lab",
    description: "Inkubasi riset dan perancangan prototipe perangkat lunak inovatif mahasiswa FOSTI untuk kompetisi sains dan teknologi tingkat nasional hingga internasional.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Sandbox_gehkwg.webp",
    highlights: ["AI & IoT Prototyping", "Mentorship Dosen", "Persiapan Kompetisi Global", "Software Engineering"]
  },
  {
    id: "prog-fostifest",
    title: "Fostifest (FOSTI Festival)",
    division: "RISTEK",
    category: "Annual Tech Expo",
    description: "Festival tahunan sains dan teknologi open-source yang menghadirkan seminar nasional, pameran inovasi perangkat lunak, serta kompetisi teknologi tingkat mahasiswa.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostifest_ypvjx1.webp",
    highlights: ["National Seminar", "Software Exhibition", "Tech Competition", "Industry Keynotes"]
  },

  // KEORGANISASIAN
  {
    id: "prog-oprec",
    title: "Open Recruitment",
    division: "KEORGANISASIAN",
    category: "Regeneration",
    description: "Perekrutan anggota baru FOSTI UMS yang transparan, terstruktur, dan berfokus pada penjaringan minat dan bakat di bidang teknologi dan keorganisasian.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Oprec_7_hdzxly.webp",
    highlights: ["Screening Berkas", "Wawancara Minat & Bakat", "Orientasi Budaya Open-Source", "Regenerasi Kader"]
  },
  {
    id: "prog-fostisida",
    title: "FOSTISIDA",
    division: "KEORGANISASIAN",
    category: "Orientation & Bonding",
    description: "Kegiatan orientasi anggota baru, malam keakraban, dan pembekalan nilai-nilai dasar kekeluargaan serta etika berorganisasi di lingkungan FOSTI.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostisida_q75ixj.webp",
    highlights: ["Kekeluargaan", "Malam Keakraban", "Pengenalan Kultur", "Bonding Lintas Angkatan"]
  },
  {
    id: "prog-musker",
    title: "Musyawarah Kerja (Musker)",
    division: "KEORGANISASIAN",
    category: "Planning & Strategy",
    description: "Musyawarah perumusan rencana strategis dan pengesahan program kerja seluruh divisi untuk satu periode kepengurusan ke depan.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Musker_juacwp.webp",
    highlights: ["Roadmap Strategis", "Budgeting", "KPI Program", "Kolaborasi Antardivisi"]
  },
  {
    id: "prog-tot",
    title: "Training of Trainers (TOT)",
    division: "KEORGANISASIAN",
    category: "Leadership Development",
    description: "Pelatihan kepemimpinan dan teknik fasilitasi untuk mencetak mentor dan instruktur internal yang siap memandu adik-adik tingkat.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/TOT_6_k8saqo.webp",
    highlights: ["Leadership Skills", "Public Speaking", "Pedagogi Mentoring", "Problem Solving"]
  },
  {
    id: "prog-ifosti",
    title: "Ifosti (Iftar FOSTI)",
    division: "KEORGANISASIAN",
    category: "Community Gathering",
    description: "Silaturahmi dan buka puasa bersama di bulan suci Ramadhan untuk merekatkan kehangatan antarpengurus aktif, anggota, dan demisioner/alumni.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Ifosti_ucvapc.webp",
    highlights: ["Buka Bersama", "Alumni Sharing Session", "Santunan & Berbagi", "Silaturahmi Hangat"]
  },
  {
    id: "prog-pleno",
    title: "Sidang Pleno",
    division: "KEORGANISASIAN",
    category: "Evaluation & Accountability",
    description: "Forum evaluasi berkala tengah dan akhir tahun kepengurusan untuk meninjau ketercapaian program kerja dan strategi perbaikan organisasi.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Pleno1_qfmsdu.webp",
    highlights: ["Laporan Progres Divisi", "Evaluasi Kinerja", "Refleksi Anggaran", "Rekomendasi Organisasi"]
  },

  // HUBUNGAN PUBLIK
  {
    id: "prog-visit",
    title: "Company Visit & Studi Banding",
    division: "HUBUNGAN PUBLIK",
    category: "Industrial Outreach",
    description: "Kunjungan langsung ke perusahaan teknologi terkemuka dan studi banding dengan organisasi kemahasiswaan sejenis untuk memperluas perspektif industri.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/v1786202662/Hubpub_ggc5ur.webp",
    highlights: ["Tech Company Tour", "Networking Profesional", "Studi Banding Organisasi", "Wawasan Karir"]
  },
  {
    id: "prog-partnership",
    title: "Media Partner & Sponsorship",
    division: "HUBUNGAN PUBLIK",
    category: "External Relations",
    description: "Pengelolaan jejaring kemitraan strategis dengan media partner, sponsor acara, dan komunitas IT untuk memperkuat gaung setiap program kerja.",
    image: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/v1786202663/Foto_Angkatan_Fosti_ppzybc.webp",
    highlights: ["Sponsorship Synergy", "Media Partner Network", "Press Release Distribution", "Community Meetups"]
  },
  {
    id: "prog-creative-branding",
    title: "Social Media & Creative Branding",
    division: "HUBUNGAN PUBLIK",
    category: "Digital Content",
    description: "Pengelolaan identitas visual, produksi infografis teknologi, konten interaktif, dan dokumentasi video berkala di Instagram, YouTube, dan LinkedIn.",
    image: "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/logo_ch57ma.png",
    highlights: ["Tech Infographics", "Reels & Video Dokumenter", "Visual Design Standards", "Engagement Digital"]
  }
];

export const getProgramsByDivision = (divisionCode: string) => {
  return programsData.filter((p) => p.division === divisionCode);
};
