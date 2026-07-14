export interface Destination {
  id: number;
  image: string;
  title: string;
  description: string;

  packages: number;
  countries: number;

  highlights: string[];

  bestTime: string;
}