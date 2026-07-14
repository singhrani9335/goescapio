export interface LimitedTimeOffer {
  id: number;
  image: string;
  title: string;
  nights: string;
  location: string;
  price: string;

  features: {
    hotel: boolean;
    activity: boolean;
    transport: boolean;
    sightseeing: boolean;
    meal: boolean;
  };
}