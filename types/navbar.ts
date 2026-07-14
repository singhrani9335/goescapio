export type DestinationItem = {
  title: string;
  href: string;
};

export type DestinationRegion = {
  id: string;
  name: string;
  banner: string;
  destinations: DestinationItem[];
};