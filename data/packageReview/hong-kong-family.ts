import type { PackageReview } from "@/types/packageReview";

const hongKongFamily: PackageReview = {
  slug: "hong-kong-family",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/hong-kong-family/1.jpg",
    "/images/packageReview/hong-kong-family/2.jpg",
    "/images/packageReview/hong-kong-family/3.jpg",
    "/images/packageReview/hong-kong-family/4.jpg",
    "/images/packageReview/hong-kong-family/5.jpg",
    "/images/packageReview/hong-kong-family/6.jpg",
    "/images/packageReview/hong-kong-family/7.jpg",
    "/images/packageReview/hong-kong-family/8.jpg",
    "/images/packageReview/hong-kong-family/9.jpg",
    "/images/packageReview/hong-kong-family/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Hong Kong Family Tour",

  price: "59,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

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
    Create unforgettable family memories with this exciting Hong Kong holiday
    package. Explore famous attractions, enjoy theme parks, shopping areas and
    beautiful city views. This package is designed to offer fun, comfort and
    memorable experiences for travellers of all ages.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Hong Kong",
      image: "/images/packageReview/hong-kong-family/1.jpg",
      description:
        "Arrive at Hong Kong airport and transfer to your hotel. Enjoy free time with your family.",
    },

    {
      day: 2,
      title: "Hong Kong City Sightseeing",
      image: "/images/packageReview/hong-kong-family/2.jpg",
      description:
        "Visit Victoria Peak, Harbour area and explore famous attractions of Hong Kong.",
    },

    {
      day: 3,
      title: "Disneyland Hong Kong",
      image: "/images/packageReview/hong-kong-family/3.jpg",
      description:
        "Enjoy a fun-filled day at Disneyland Hong Kong with exciting rides and entertainment.",
    },

    {
      day: 4,
      title: "Shopping & Leisure Day",
      image: "/images/packageReview/hong-kong-family/4.jpg",
      description:
        "Spend quality family time shopping, exploring markets and enjoying local experiences.",
    },

    {
      day: 5,
      title: "Departure From Hong Kong",
      image: "/images/packageReview/hong-kong-family/5.jpg",
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
    "Theme park visit as per itinerary",
    "Private transportation",
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
    "Package rates may change depending on availability.",
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

export default hongKongFamily;