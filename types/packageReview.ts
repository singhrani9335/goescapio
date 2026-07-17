export interface PackageReview {
  slug: string;

  // ===========================
  // PACKAGE GALLERY
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
  // PACKAGE OVERVIEW
  // ===========================

  overview?: string;

  // ===========================
  // PACKAGE HIGHLIGHTS
  // ===========================

  highlights?: string[];

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions?: string[];

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions?: string[];

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms?: string[];

  // ===========================
  // PACKAGE ITINERARY
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
  }[];

  // ===========================
  // FAQs
  // ===========================

  faqs?: {
    question: string;
    answer: string;
  }[];
}