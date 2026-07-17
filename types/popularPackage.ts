export interface PopularPackage {
  id: number;

  slug: string;

  image: string;

  title: string;

  nights: string;

  location: string;

  price: string;

  duration?: string;

  hotel?: string;

  transport?: string;

  meals?: string;

  features: {
    hotel: boolean;
    activity: boolean;
    sightseeing: boolean;
    transport: boolean;
    meal: boolean;
  };
}