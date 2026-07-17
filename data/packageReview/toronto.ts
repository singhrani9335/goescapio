import type { PackageReview } from "@/types/packageReview";

const toronto: PackageReview = {
  slug: "toronto",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/toronto/1.jpg",
    "/images/packageReview/toronto/2.jpg",
    "/images/packageReview/toronto/3.jpg",
    "/images/packageReview/toronto/4.jpg",
    "/images/packageReview/toronto/5.jpg",
    "/images/packageReview/toronto/6.jpg",
    "/images/packageReview/toronto/7.jpg",
    "/images/packageReview/toronto/8.jpg",
    "/images/packageReview/toronto/9.jpg",
    "/images/packageReview/toronto/10.jpg",
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
      title: "Arrival In Toronto",
      image: "/images/packageReview/toronto/1.jpg",
      description:
        "Arrive at Toronto airport and transfer to your hotel. Relax and enjoy your first evening in Canada.",
    },

    {
      day: 2,
      title: "Toronto City Tour",
      image: "/images/packageReview/toronto/2.jpg",
      description:
        "Explore famous attractions including CN Tower, Harbourfront and downtown Toronto.",
    },

    {
      day: 3,
      title: "Niagara Falls Excursion",
      image: "/images/packageReview/toronto/3.jpg",
      description:
        "Visit the world-famous Niagara Falls and enjoy breathtaking views.",
    },

    {
      day: 4,
      title: "Explore Toronto",
      image: "/images/packageReview/toronto/4.jpg",
      description:
        "Enjoy shopping, local attractions and beautiful city experiences.",
    },

    {
      day: 5,
      title: "Leisure Day",
      image: "/images/packageReview/toronto/5.jpg",
      description:
        "Spend your day exploring Toronto at your own pace.",
    },

    {
      day: 6,
      title: "Local Sightseeing",
      image: "/images/packageReview/toronto/6.jpg",
      description:
        "Discover more attractions and enjoy your final day in Toronto.",
    },

    {
      day: 7,
      title: "Departure From Toronto",
      image: "/images/packageReview/toronto/7.jpg",
      description:
        "Check out from the hotel and transfer to the airport for your onward journey.",
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