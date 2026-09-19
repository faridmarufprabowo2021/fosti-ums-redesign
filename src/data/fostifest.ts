export interface Competition {
  id: string;
  name: string;
  category: "Programming" | "Design" | "Robotics" | "Workshops";
  type: "INDIVIDUAL" | "TEAM" | "WORKSHOP";
  description: string;
  fee: number; // in IDR
  startDate: string;
  endDate: string;
  deadline: string;
  requirements: string[];
  guidebookUrl: string | null;
  whatsappGroupUrl: string;
  status: "UPCOMING" | "ONGOING" | "FINISHED";
}

export interface WorkshopSpeaker {
  name: string;
  role: string;
  organization: string;
  bio: string;
  expertise: string[];
  topic: string;
  date: string;
  fee: number;
}

export interface TimelinePhase {
  id: string;
  phase: string;
  title: string;
  description: string;
  dateRange: string;
  details: string[];
  status: "completed" | "active" | "upcoming";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactPerson {
  name: string;
  phone: string;
  whatsappUrl: string;
}

export interface FostifestEventData {
  title: string;
  edition: string;
  theme: string;
  tagline: string;
  organizer: string;
  institution: string;
  overview: string;
  competitions: Competition[];
  workshop: {
    speaker: WorkshopSpeaker;
    requirements: string[];
  };
  timeline: TimelinePhase[];
  faqs: FAQItem[];
  contacts: ContactPerson[];
}

export const fostifestData: FostifestEventData = {
  title: "FOSTIFEST 2025",
  edition: "2025",
  theme: "Beyond Codes: Creativity in the Digital Age",
  tagline:
    "Join the most prestigious academic competition of the year. Showcase your talents, compete with the best minds, and win amazing prizes.",
  organizer: "Forum Open Source of Informatics Engineering (FOSTI)",
  institution: "Universitas Muhammadiyah Surakarta (UMS)",
  overview:
    "FOSTIFEST is an annual national event organized by FOSTI UMS. FOSTIFEST 2025 brings the theme 'Beyond Codes: Creativity in the Digital Age', featuring an interactive national workshop on LangGraph & Agentic Intelligence, along with thrilling competitions in Software Development, UI/UX Design, Line Follower Robot, and Sumobot. It is a premier stage to sharpen technical expertise, unleash creativity, and unlock career opportunities in the digital world.",

  competitions: [
    {
      id: "comp-1",
      name: "Software Development",
      category: "Programming",
      type: "TEAM",
      description:
        "Kompetisi pengembangan aplikasi inovatif (Web/Mobile/Desktop) yang memecahkan masalah nyata dengan solusi perangkat lunak yang tangguh, terukur, dan berorientasi pengguna.",
      fee: 55000,
      startDate: "2025-10-18",
      endDate: "2025-11-15",
      deadline: "2025-11-02",
      requirements: [
        "Laptop dan peralatan pengembangan mandiri",
        "Bebas menggunakan bahasa pemrograman & stack teknologi",
        "Maksimal 3 anggota per tim",
        "Wajib mahasiswa aktif perguruan tinggi (dibuktikan dengan KTM)",
      ],
      guidebookUrl:
        "https://drive.google.com/file/d/1dMXZg-2f5JtvK-7NfrXIlzRsVR8u_QTW/view?usp=sharing",
      whatsappGroupUrl:
        "https://chat.whatsapp.com/EnwwlJp7ayQ345PBZL9LqM?mode=ems_copy_t",
      status: "FINISHED",
    },
    {
      id: "comp-2",
      name: "UI/UX Design",
      category: "Design",
      type: "TEAM",
      description:
        "Kompetisi desain pengalaman pengguna (User Experience) dan antarmuka visual (User Interface) untuk menghasilkan prototipe produk digital yang intuitif, estetik, dan berpusat pada manusia.",
      fee: 55000,
      startDate: "2025-10-18",
      endDate: "2025-11-15",
      deadline: "2025-11-02",
      requirements: [
        "Kemahiran perangkat lunak desain (Figma, Adobe XD, dsb.)",
        "Maksimal 3 anggota per tim",
        "Karya orisinal dan belum pernah memenangkan kompetisi sejenis",
        "Melampirkan studi kasus UX (Research, Wireframe, Prototype)",
      ],
      guidebookUrl:
        "https://drive.google.com/file/d/1NoOr99_7yTb7V3Qbm0Zhwdj_zSRX-Gat/view?usp=sharing",
      whatsappGroupUrl:
        "https://chat.whatsapp.com/JWNHx2BcWQsLTkcT6uc1K7?mode=ems_copy_t",
      status: "FINISHED",
    },
    {
      id: "comp-3",
      name: "Robot Line Follower",
      category: "Robotics",
      type: "TEAM",
      description:
        "Ajang unjuk kebolehan rekayasa robotika otonom dalam membaca lintasan berkecepatan tinggi dengan navigasi sensor garis presisi dan algoritma kontrol terbaik.",
      fee: 70000,
      startDate: "2025-10-18",
      endDate: "2025-11-25",
      deadline: "2025-11-25",
      requirements: [
        "Tiap tim hanya boleh mengirimkan 1 robot",
        "Robot boleh menggunakan sistem KIT maupun rakitan sendiri",
        "Dimensi dan bobot robot wajib memenuhi regulasi guidebook",
        "Maksimal 3 anggota per tim",
      ],
      guidebookUrl:
        "https://drive.google.com/file/d/1Ryj4uwHhxWxZaza8i-ddxdbyyqmWc1-y/view?usp=sharing",
      whatsappGroupUrl:
        "https://chat.whatsapp.com/Fr3LIVESzUs7I8D9Inx3UG?mode=ems_copy_t",
      status: "FINISHED",
    },
    {
      id: "comp-4",
      name: "Sumobot",
      category: "Robotics",
      type: "TEAM",
      description:
        "Pertarungan robotik strategis di mana dua robot saling berhadapan di atas ring dohyo untuk mendorong lawan keluar arena melalui keandalan sensor dan kekuatan mekanik.",
      fee: 70000,
      startDate: "2025-10-18",
      endDate: "2025-11-25",
      deadline: "2025-11-25",
      requirements: [
        "Tiap tim hanya boleh mengirimkan 1 robot",
        "Robot boleh menggunakan sistem KIT maupun custom build",
        "Mematuhi batas berat dan sensor batas ring dohyo",
        "Maksimal 3 anggota per tim",
      ],
      guidebookUrl:
        "https://drive.google.com/file/d/1BKPReSbIqskjSaZfiDef2vAKWSvQUwZi/view?usp=sharing",
      whatsappGroupUrl:
        "https://chat.whatsapp.com/Fr3LIVESzUs7I8D9Inx3UG?mode=ems_copy_t",
      status: "FINISHED",
    },
  ],

  workshop: {
    speaker: {
      name: "Firania Putri Harsanti",
      role: "Software & DevOps Engineer",
      organization: "Neutrack AI Glove",
      bio: "An AI Engineer, tech entrepreneur, and speaker passionate about building human-centered innovations. She is the Founder and CEO of Neutrack AI Glove, a multi-award-winning startup transforming assistive technology for visual impairments through AI and IoT.",
      expertise: [
        "Artificial Intelligence",
        "Software Engineering & DevOps",
        "IoT & Embedded Systems",
        "Tech Entrepreneurship",
        "UI/UX & Design Thinking",
      ],
      topic: "Build Your Own AI Agent: LangGraph & Agentic Intelligence",
      date: "07 Desember 2025",
      fee: 20000,
    },
    requirements: [
      "Laptop pribadi dengan koneksi internet",
      "Pemahaman dasar arsitektur AI (Prompt, Context Window, Tools, dan Chain of Thought)",
      "Text editor / Google Colab / Python environment",
    ],
  },

  timeline: [
    {
      id: "1",
      phase: "Phase 1",
      title: "Registration Opens",
      description:
        "Participants can register for the competition and submit their entries.",
      dateRange: "18 Oktober - 25 November 2025",
      details: [
        "Pembukaan formulir pendaftaran daring",
        "Periode pembentukan dan verifikasi anggota tim",
        "Batas akhir pembayaran biaya pendaftaran",
        "15 November 2025: Batas akhir pengumpulan karya UI/UX dan Software Development",
      ],
      status: "completed",
    },
    {
      id: "2",
      phase: "Phase 2",
      title: "Judging Days",
      description:
        "Judging sessions and evaluation of submissions by the panel of expert judges.",
      dateRange: "16 - 17 November 2025",
      details: [
        "Babak penyisihan dan kurasi karya peserta",
        "11 - 13 November: Sesi penilaian teknis",
        "14 November 2025: Pengumuman daftar finalis resmi",
      ],
      status: "completed",
    },
    {
      id: "3",
      phase: "Phase 3",
      title: "Technical Meeting",
      description:
        "A briefing session for all selected candidates to compete in the final round.",
      dateRange: "18 November 2025",
      details: [
        "Briefing regulasi dan teknis babak final kompetisi",
        "15 November 2025: Technical Meeting Finalis UI/UX Design",
        "15 November 2025: Technical Meeting Finalis Software Development",
        "28 November 2025: Technical Meeting Peserta Line Follower & Sumobot",
      ],
      status: "completed",
    },
    {
      id: "4",
      phase: "Phase 4",
      title: "Final Competition D-Day & Awarding",
      description:
        "The grand finale where finalists compete for the top prizes at UMS Campus.",
      dateRange: "30 November 2025",
      details: [
        "Babak final langsung UI/UX, Software Dev, Line Follower, dan Sumobot",
        "Pameran karya dan demonstrasi di hadapan juri industri",
        "Upacara penganugerahan pemenang (Closing & Awarding Ceremony)",
      ],
      status: "completed",
    },
  ],

  faqs: [
    {
      question: "How do I register for competitions?",
      answer:
        "Registration is simple! Click the login button on the navbar, log in to your existing account or create a new one, then navigate to the Competitions section and select the competition you want to enter. Fill out the registration form and submit it before the deadline.",
    },
    {
      question: "What are the eligibility requirements?",
      answer:
        "Participants must be currently enrolled active university students with a valid student ID card (KTM).",
    },
    {
      question: "Can I participate in multiple competitions?",
      answer:
        "Absolutely! You can register for as many competitions as you'd like, as long as the schedules don't conflict. We encourage students to explore different categories and showcase diverse talents.",
    },
    {
      question: "What should I do if I need to participate in a team competition?",
      answer:
        "You can simply ask your team leader to register the team. The team leader will provide the required information of all team members during the registration process.",
    },
    {
      question: "How are winners selected and prizes distributed?",
      answer:
        "Each competition has a panel of expert judges who evaluate submissions based on predefined rubric criteria. Winners are announced at the closing ceremony, and prizes are distributed within 2 weeks of the event via e-wallets (DANA, GoPay, OVO) or bank transfer.",
    },
    {
      question: "Do I need to bring my own equipment?",
      answer:
        "For most competitions, basic equipment like laptops, design software, and presentation materials must be brought by participants. Specialized track/arena equipment for robotics will be provided on-site.",
    },
    {
      question: "Is there support for international students?",
      answer:
        "Yes! We welcome international students and provide additional support including documentation for prizes, translation assistance, and orientation guidance.",
    },
    {
      question: "How can I prepare for competitions?",
      answer:
        "We offer preparation workshops, practice guidelines, and mentorship opportunities leading up to the competitions. Check our guidebook and join our official WhatsApp communities.",
    },
    {
      question: "What if I have technical issues during online competitions?",
      answer:
        "We have a dedicated technical support team available during all online events. Contact information and troubleshooting guides are provided to all registered participants before the event begins.",
    },
  ],

  contacts: [
    {
      name: "Najla",
      phone: "+62 821-3774-8602",
      whatsappUrl: "https://wa.me/+6282137748602",
    },
    {
      name: "Paramesti",
      phone: "+62 857-1304-1829",
      whatsappUrl: "https://wa.me/+6285713041829",
    },
  ],
};
