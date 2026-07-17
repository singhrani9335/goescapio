export interface BookNow {
  slug: string;

  // ===========================
  // GALLERY
  // ===========================

  gallery: string[];


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title?: string;

  location?: string;

  duration?: string;

  price?: string;

  priceType?: string;

  features?: {
    hotel: boolean;
    activity: boolean;
    transport: boolean;
    meal: boolean;
  };


  // ===========================
  // OVERVIEW
  // ===========================

  overview?: string;


  // ===========================
  // HIGHLIGHTS
  // ===========================

  highlights?: string[];


  // ===========================
  // INCLUSIONS
  // ===========================

  inclusions?: string[];


  // ===========================
  // EXCLUSIONS
  // ===========================

  exclusions?: string[];


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms?: string[];


  // ===========================
  // ITINERARY
  // ===========================

  itinerary?: {
    day: number;
    title: string;
    image: string;
    description: string;
  }[];


  // ===========================
// HOTELS
// ===========================

hotels?: {
  name: string;
  image: string;
  rating: number;
  location: string;
  room?: string;
  nights?: string;
  category?: string;
  description?: string;
  amenities?: string[];
}[];



  // ===========================
  // FAQs
  // ===========================

  faqs?: {
    question: string;
    answer: string;
  }[];
}