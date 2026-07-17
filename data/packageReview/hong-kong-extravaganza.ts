import type { PackageReview } from "@/types/packageReview";

const hongKongExtravaganza: PackageReview = {
  slug: "hong-kong-extravaganza",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/hong-kong-extravaganza/1.jpg",
    "/images/packageReview/hong-kong-extravaganza/2.jpg",
    "/images/packageReview/hong-kong-extravaganza/3.jpg",
    "/images/packageReview/hong-kong-extravaganza/4.jpg",
    "/images/packageReview/hong-kong-extravaganza/5.jpg",
    "/images/packageReview/hong-kong-extravaganza/6.jpg",
    "/images/packageReview/hong-kong-extravaganza/7.jpg",
    "/images/packageReview/hong-kong-extravaganza/8.jpg",
    "/images/packageReview/hong-kong-extravaganza/9.jpg",
    "/images/packageReview/hong-kong-extravaganza/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Hong Kong Extravaganza",

  price: "64,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Hong Kong - China",

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
    Explore the vibrant city of Hong Kong with this exciting holiday package.
    Discover world-famous attractions, stunning skylines, shopping streets and
    amazing cultural experiences. Enjoy the perfect combination of adventure,
    entertainment and luxury in one of Asia's most beautiful destinations.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Hong Kong",
      image: "/images/packageReview/hong-kong-extravaganza/1.jpg",
      description:
        "Arrive at Hong Kong airport and transfer to your hotel. Enjoy leisure time after check-in.",
    },

    {
      day: 2,
      title: "Hong Kong City Tour",
      image: "/images/packageReview/hong-kong-extravaganza/2.jpg",
      description:
        "Explore Victoria Peak, Harbour area, famous streets and iconic attractions of Hong Kong.",
    },

    {
      day: 3,
      title: "Disneyland Hong Kong Visit",
      image: "/images/packageReview/hong-kong-extravaganza/3.jpg",
      description:
        "Enjoy a magical day at Hong Kong Disneyland with exciting rides and entertainment.",
    },

    {
      day: 4,
      title: "Ocean Park & Leisure",
      image: "/images/packageReview/hong-kong-extravaganza/4.jpg",
      description:
        "Visit Ocean Park and enjoy thrilling rides, shows and beautiful views.",
    },

    {
      day: 5,
      title: "Shopping & Free Day",
      image: "/images/packageReview/hong-kong-extravaganza/5.jpg",
      description:
        "Enjoy shopping at famous markets and explore Hong Kong at your own pace.",
    },

    {
      day: 6,
      title: "Departure From Hong Kong",
      image: "/images/packageReview/hong-kong-extravaganza/6.jpg",
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
    "Hong Kong city tour",
    "Sightseeing as per itinerary",
    "Transportation services",
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
    "Package prices may change according to availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid passport and travel documents are required.",
    "Go Escapio is not responsible for airline delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default hongKongExtravaganza;