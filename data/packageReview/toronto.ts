import type { PackageReview } from "@/types/packageReview";

const toronto: PackageReview = {
  slug: "toronto",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/toronto/gallery/1.jpg",
  "/images/packageReview/toronto/gallery/2.jpg",
  "/images/packageReview/toronto/gallery/3.jpg",
  "/images/packageReview/toronto/gallery/4.jpg",
  "/images/packageReview/toronto/gallery/5.jpg",
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Amazing Canada Toronto Tour",

  price: "1,29,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Toronto - Canada",

  features: {
    hotel: true,
    activity: true,
    transport: true,
    meal: true,
  },


  // ===========================
  // PACKAGE OVERVIEW
  // ===========================

  overview: `
    Discover the vibrant city of Toronto with this amazing Canada holiday
    package. Explore iconic attractions, beautiful landscapes, famous
    landmarks and experience the perfect blend of modern city life and nature.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival in Toronto",
    image: "/images/packageReview/toronto/itinerary/1.jpg",
    description:
      "Arrive at Toronto Pearson International Airport and transfer to your hotel. Complete the check-in formalities and spend the rest of the day at leisure exploring nearby attractions or relaxing after your journey.",
  },

  {
    day: 2,
    title: "Toronto City Tour & Niagara Falls Excursion",
    image: "/images/packageReview/toronto/itinerary/2.jpg",
    description:
      "After breakfast, enjoy a guided tour of Toronto covering famous attractions such as the CN Tower, Harbourfront, Nathan Phillips Square, and Casa Loma. Later, continue to the world-famous Niagara Falls to witness its breathtaking beauty before returning to Toronto in the evening.",
  },

  {
    day: 3,
    title: "Departure from Toronto",
    image: "/images/packageReview/toronto/itinerary/3.jpg",
    description:
      "After breakfast, check out from the hotel and transfer to Toronto Pearson International Airport for your onward journey with unforgettable memories of your Canadian holiday.",
  },
],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Airport transfers",
    "City sightseeing",
    "Private transportation",
    "Local assistance",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Visa charges",
    "Travel insurance",
    "Personal expenses",
    "Optional activities",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are subject to availability.",
    "Package prices may change depending on season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid passport and travel documents are required.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default toronto;