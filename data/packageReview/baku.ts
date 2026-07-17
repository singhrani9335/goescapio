import type { PackageReview } from "@/types/packageReview";

const baku: PackageReview = {
  slug: "baku",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/baku/1.jpg",
    "/images/packageReview/baku/2.jpg",
    "/images/packageReview/baku/3.jpg",
    "/images/packageReview/baku/4.jpg",
    "/images/packageReview/baku/5.jpg",
    "/images/packageReview/baku/6.jpg",
    "/images/packageReview/baku/7.jpg",
    "/images/packageReview/baku/8.jpg",
    "/images/packageReview/baku/9.jpg",
    "/images/packageReview/baku/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Baku Azerbaijan Tour",

  price: "39,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Baku - Azerbaijan",

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
    Explore the beautiful city of Baku with this amazing Azerbaijan holiday
    package. Discover the perfect blend of modern architecture, historical
    attractions and cultural experiences. Visit iconic landmarks, enjoy local
    cuisine and create unforgettable memories in the Land of Fire.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Baku",
      image: "/images/packageReview/baku/1.jpg",
      description:
        "Arrive at Baku airport and transfer to your hotel. Relax and enjoy your first evening in Azerbaijan.",
    },

    {
      day: 2,
      title: "Baku City Tour",
      image: "/images/packageReview/baku/2.jpg",
      description:
        "Explore Baku's famous attractions including Old City, Flame Towers, Boulevard and historical landmarks.",
    },

    {
      day: 3,
      title: "Gobustan & Mud Volcano Tour",
      image: "/images/packageReview/baku/3.jpg",
      description:
        "Visit Gobustan National Park, ancient rock carvings and unique natural landscapes.",
    },

    {
      day: 4,
      title: "Baku Leisure & Shopping",
      image: "/images/packageReview/baku/4.jpg",
      description:
        "Enjoy free time for shopping, cafes and exploring the beautiful streets of Baku.",
    },

    {
      day: 5,
      title: "Departure From Baku",
      image: "/images/packageReview/baku/5.jpg",
      description:
        "Check out from the hotel and transfer to Baku airport for your return journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Private sightseeing tours",
    "Transportation as per itinerary",
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
    "Package price may change depending on availability.",
    "Advance payment is required for booking confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid travel documents are mandatory.",
    "Go Escapio is not responsible for flight delays or cancellations.",
    "Hotel check-in and check-out will follow hotel policies.",
    "Additional expenses must be paid by travellers.",
    "Travel insurance is recommended.",
    "Services are subject to availability.",
  ],
};

export default baku;