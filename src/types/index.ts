export interface Member {
  id: string;
  name: string;
  role: string;
  division: 'BPHI' | 'RISTEK' | 'KEORGANISASIAN' | 'HUBUNGAN PUBLIK';
  nim?: string;
  photoUrl: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  quote?: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon?: string;
}

export interface Program {
  id: string;
  title: string;
  division: 'BPHI' | 'RISTEK' | 'KEORGANISASIAN' | 'HUBUNGAN PUBLIK';
  description: string;
  image: string;
  category: string;
  highlights?: string[];
}

export interface Division {
  id: string;
  code: 'BPHI' | 'RISTEK' | 'KEORGANISASIAN' | 'HUBUNGAN PUBLIK';
  slug: 'ristek' | 'keor' | 'hubpub' | 'bphi';
  name: string;
  tagline: string;
  description: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  accentHex: string;
  leadership: string;
  memberCount: number;
  pillars: Pillar[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  rank: string;
  category: string;
  medalType: 'gold' | 'silver' | 'bronze' | 'top';
  description?: string;
  slug?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublish: string;
  author: string;
  authorRole?: string;
  tags: string[];
  readTime: string;
  image: string;
  content: string[];
  quotes?: {
    text: string;
    author: string;
    role?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  caption: string;
}
