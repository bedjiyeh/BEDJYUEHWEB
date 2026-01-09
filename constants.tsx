
import { NavItem, Release, ManifestItem, Ritual } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '// MANIFESTO', href: '#manifesto' },
  { label: '// B-SYSTEM', href: '#terminal' },
  { label: '// DISCOGRAPHY', href: '#music' },
  { label: '// VISUALS', href: '#visuals' },
  { label: '// CONTACT', href: '#contact' },
];

export const CONTACT_EMAIL = "bedjiyeh@gmail.com";

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@bedjiyeh";
export const YOUTUBE_VIDEO_ID = "mgwMs4ydUQA";

export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2000&auto=format&fit=crop";

export const RELEASES: Release[] = [
    {
    title: "CHEMICAL VOID",
    type: "Album",
    year: "2025",
    // Immagine segnaposto per l'album - Sostituisci con /chemical_void.jpg quando caricata
    coverUrl:"https://i.postimg.cc/gJLSS12N/chemical_void.png", 
    link: "https://open.spotify.com/intl-it/album/7novTY7aSCMCE149bBDaV8?si=DczS9r8ASViwM8F9dzy4qA"
  }
];

export const GALLERY_IMAGES = [
  "https://i.postimg.cc/G2tzBVDC/gallery1.jpg",
  "https://i.postimg.cc/7hvBpXCZ/gallery2.png",
  "https://i.postimg.cc/qR6bbWv6/gallery3.jpg",
  "https://i.postimg.cc/3R0SSzxj/gallery4.png"

];

export const MANIFESTO_DATA: ManifestItem[] = [
  {
    category: "SOUND",
    details: [
      "Acoustic and emotional alternative rock.",
      "Distorted guitars and ambient industrial layers.",
      "High-pitched, androgynous intimate vocals.",
      "Whispers bleeding into synthetic chaos."
    ]
  },
  {
    category: "MOOD",
    details: [
      "Cold city nights.",
      "Emotional detachment.",
      "Obsession as ritual.",
      "Longing without redemption."
    ]
  },
  {
    category: "THEMES",
    details: [
      "Identity loss",
      "Addiction to absence",
      "Fragmented love",
      "Synthetic connection"
    ]
  }
];
