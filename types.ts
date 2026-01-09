
export interface NavItem {
  label: string;
  href: string;
}

export interface Release {
  title: string;
  type: 'Single' | 'EP' | 'Album';
  year: string;
  coverUrl: string;
  link?: string;
}

export interface ManifestItem {
  category: string;
  details: string[];
}

export interface Ritual {
  date: string;
  location: string;
  venue: string;
  coords: string;
  status: 'AVAILABLE' | 'SOLD_OUT';
}
