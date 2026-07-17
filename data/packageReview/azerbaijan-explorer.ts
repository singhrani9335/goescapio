import type { PackageReview } from "@/types/packageReview";

const azerbaijanExplorer: PackageReview = {
  slug: "azerbaijan-explorer",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/azerbaijan-explorer/1.jpg",
    "/images/packageReview/azerbaijan-explorer/2.jpg",
    "/images/packageReview/azerbaijan-explorer/3.jpg",
    "/images/packageReview/azerbaijan-explorer/4.jpg",
    "/images/packageReview/azerbaijan-explorer/5.jpg",
    "/images/packageReview/azerbaijan-explorer/6.jpg",
    "/images/packageReview/azerbaijan-explorer/7.jpg",
    "/images/packageReview/azerbaijan-explorer/8.jpg",
    "/images/packageReview/azerbaijan-explorer/9.jpg",
    "/images/packageReview/azerbaijan-explorer/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Azerbaijan Explorer",

  price: "49,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Baku - Gabala - Azerbaijan",

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
    Discover the beauty of Azerbaijan with this exciting tour package.
    Explore the modern city of Baku, experience the natural beauty of Gabala,
    visit historical attractions and enjoy a perfect combination of culture,
    adventure and relaxation in the Land of Fire.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Baku",
      image: "/images/packageReview/azerbaijan-explorer/1.jpg",
      description:
        "Arrive at Baku airport and transfer to your hotel. Enjoy leisure time and explore the city surroundings.",
    },

    {
      day: 2,
      title: "Baku City Tour",
      image: "/images/packageReview/azerbaijan-explorer/2.jpg",
      description:
        "Explore major attractions of Baku including Old City, Flame Towers, Boulevard and famous landmarks.",
    },

    {
      day: 3,
      title: "Baku To Gabala",
      image: "/images/packageReview/azerbaijan-explorer/3.jpg",
      description:
        "Travel to Gabala and enjoy beautiful mountain views, nature and scenic landscapes.",
    },

    {
      day: 4,
      title: "Gabala Sightseeing",
      image: "/images/packageReview/azerbaijan-explorer/4.jpg",
      description:
        "Visit Gabala attractions including cable car, lakes and adventure activities.",
    },

    {
      day: 5,
      title: "Return To Baku",
      image: "/images/packageReview/azerbaijan-explorer/5.jpg",
      description:
        "Return to Baku and enjoy shopping, local markets and free time.",
    },

    {
      day: 6,
      title: "Departure From Azerbaijan",
      image: "/images/packageReview/azerbaijan-explorer/6.jpg",
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
    "Bookings are subject to availability.",
    "Prices may change depending on availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per policy.",
    "Travellers must carry valid travel documents.",
    "Go Escapio is not responsible for airline delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "Services are subject to availability.",
  ],
};

export default azerbaijanExplorer;