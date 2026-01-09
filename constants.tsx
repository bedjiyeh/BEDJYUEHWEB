import { NavItem, Release, ManifestItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '// MANIFESTO', href: '#manifesto' },
  { label: '// DISCOGRAPHY', href: '#music' },
  { label: '// VISUALS', href: '#visuals' },
  { label: '// CONTACT', href: '#contact' },
];

export const CONTACT_EMAIL = "bedjiyeh@gmail.com";

// Immagine segnaposto per l'eroe (Hero) - Sostituisci con /hero_bedjiyeh.jpg quando caricata
export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1514525253361-b83f85df0f5c?q=80&w=2000&auto=format&fit=crop";

export const RELEASES: Release[] = [
  {
    title: "CHEMICAL VOID",
    type: "Album",
    year: "2025",
    // Immagine segnaposto per l'album - Sostituisci con /chemical_void.jpg quando caricata
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop", 
    link: "https://open.spotify.com/intl-it/album/7novTY7aSCMCE149bBDaV8?si=DczS9r8ASViwM8F9dzy4qA"
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop"
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