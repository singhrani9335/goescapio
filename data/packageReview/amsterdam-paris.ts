import type { PackageReview } from "@/types/packageReview";

const amsterdamParis: PackageReview = {
  slug: "amsterdam-paris",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/amsterdam-paris/1.jpg",
    "/images/packageReview/amsterdam-paris/2.jpg",
    "/images/packageReview/amsterdam-paris/3.jpg",
    "/images/packageReview/amsterdam-paris/4.jpg",
    "/images/packageReview/amsterdam-paris/5.jpg",
    "/images/packageReview/amsterdam-paris/6.jpg",
    "/images/packageReview/amsterdam-paris/7.jpg",
    "/images/packageReview/amsterdam-paris/8.jpg",
    "/images/packageReview/amsterdam-paris/9.jpg",
    "/images/packageReview/amsterdam-paris/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Amsterdam Paris Tour",

  price: "89,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Amsterdam - Paris Europe",

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
    Experience the charm of Europe with this amazing Amsterdam and Paris tour.
    Explore the beautiful canals of Amsterdam, iconic landmarks, museums and
    enjoy the magical beauty of Paris including world-famous attractions.
    This package offers comfortable stays, sightseeing, transfers and memorable
    experiences across two of Europe's most beautiful destinations.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Amsterdam",
      image: "/images/packageReview/amsterdam-paris/1.jpg",
      description:
        "Arrive in Amsterdam and transfer to your hotel. Spend the day relaxing and exploring the beautiful surroundings.",
    },

    {
      day: 2,
      title: "Amsterdam City Tour",
      image: "/images/packageReview/amsterdam-paris/2.jpg",
      description:
        "Explore Amsterdam's famous attractions including canals, museums and historic landmarks.",
    },

    {
      day: 3,
      title: "Amsterdam Leisure Day",
      image: "/images/packageReview/amsterdam-paris/3.jpg",
      description:
        "Enjoy a free day to explore local markets, shopping streets and hidden gems of Amsterdam.",
    },

    {
      day: 4,
      title: "Amsterdam To Paris Transfer",
      image: "/images/packageReview/amsterdam-paris/4.jpg",
      description:
        "Travel from Amsterdam to Paris and check into your hotel. Enjoy the evening at leisure.",
    },

    {
      day: 5,
      title: "Paris City Tour",
      image: "/images/packageReview/amsterdam-paris/5.jpg",
      description:
        "Visit famous Paris attractions including Eiffel Tower, Champs Elysees and other iconic places.",
    },

    {
      day: 6,
      title: "Paris Sightseeing & Leisure",
      image: "/images/packageReview/amsterdam-paris/6.jpg",
      description:
        "Explore Paris at your own pace and enjoy shopping, cafes and local experiences.",
    },

    {
      day: 7,
      title: "Departure From Paris",
      image: "/images/packageReview/amsterdam-paris/7.jpg",
      description:
        "Check out from the hotel and transfer to the airport for your onward journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation in selected hotels",
    "Daily breakfast",
    "Airport transfers",
    "Intercity transfers between Amsterdam and Paris",
    "City sightseeing tours",
    "Professional tour assistance",
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
    "Package rates may change based on hotel and transport availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Travel documents must be valid before departure.",
    "Go Escapio is not responsible for delays caused by airlines or third-party services.",
    "Hotel check-in and check-out timings will follow property rules.",
    "Any additional expenses will be paid directly by the traveller.",
    "Travel insurance is recommended.",
    "Rates and services are subject to availability.",
  ],
};

export default amsterdamParis;