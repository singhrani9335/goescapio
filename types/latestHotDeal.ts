export interface LatestHotDeal {
  id: number;
  slug: string;

  image: string;
  title: string;
  nights: string;
  location: string;
  price: number;

  features: {
    hotel: boolean;
    activity: boolean;
    sightseeing: boolean;
    transport: boolean;
    meal: boolean;
  };
}