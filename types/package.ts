export type Package = {
  id: number;
  slug: string;

  image: string;
  title: string;

  nights: number;
  location: string;
  price: number;

  duration: string;

  hotel: string;
  transport: string;
  meals: string;

  features: {
    activity: boolean;
    hotel: boolean;
    sightseeing: boolean;
    transport: boolean;
    meal: boolean;
  };
};