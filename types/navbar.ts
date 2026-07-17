export interface DestinationItem {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface DestinationRegion {
  id: string;
  name: string;
  banner: string;
  destinations: DestinationItem[];
}


export interface ThemeItem {
  id: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

