export type Package = {
  id: number;
  image: string;
  title: string;

  nights: number;
  location: string;
  price: string;

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