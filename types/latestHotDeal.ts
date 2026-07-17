export interface LatestHotDeal {
  id: number;
  slug: string;

  image: string;
  title: string;
  nights: string;
  location: string;
  price: string;

  features: {
    hotel: boolean;
    activity: boolean;
    sightseeing: boolean;
    transport: boolean;
    meal: boolean;
  };
}