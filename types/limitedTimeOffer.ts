export interface LimitedTimeOffer {
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
    transport: boolean;
    sightseeing: boolean;
    meal: boolean;
  };
}