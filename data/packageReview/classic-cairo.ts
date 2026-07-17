import type { PackageReview } from "@/types/packageReview";

const classicCairo: PackageReview = {
  slug: "classic-cairo",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/classic-cairo/1.jpg",
    "/images/packageReview/classic-cairo/2.jpg",
    "/images/packageReview/classic-cairo/3.jpg",
    "/images/packageReview/classic-cairo/4.jpg",
    "/images/packageReview/classic-cairo/5.jpg",
    "/images/packageReview/classic-cairo/6.jpg",
    "/images/packageReview/classic-cairo/7.jpg",
    "/images/packageReview/classic-cairo/8.jpg",
    "/images/packageReview/classic-cairo/9.jpg",
    "/images/packageReview/classic-cairo/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Classic Cairo Egypt Tour",

  price: "54,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Cairo - Egypt",

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
    Discover the ancient wonders of Egypt with this classic Cairo tour package.
    Explore the magnificent pyramids, historical monuments, museums and the
    rich culture of Cairo. Experience the perfect combination of history,
    adventure and unforgettable Egyptian hospitality.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Cairo",
      image: "/images/packageReview/classic-cairo/1.jpg",
      description:
        "Arrive at Cairo airport and transfer to your hotel. Relax and enjoy your first evening in Egypt.",
    },

    {
      day: 2,
      title: "Cairo City Tour & Pyramids Visit",
      image: "/images/packageReview/classic-cairo/2.jpg",
      description:
        "Visit the iconic Pyramids of Giza, Sphinx and explore the ancient wonders of Egypt.",
    },

    {
      day: 3,
      title: "Egyptian Museum & Old Cairo",
      image: "/images/packageReview/classic-cairo/3.jpg",
      description:
        "Explore Egyptian Museum, historic mosques, churches and famous attractions of Old Cairo.",
    },

    {
      day: 4,
      title: "Cairo Leisure & Shopping",
      image: "/images/packageReview/classic-cairo/4.jpg",
      description:
        "Enjoy free time for shopping, local markets and exploring Cairo at your own pace.",
    },

    {
      day: 5,
      title: "Departure From Cairo",
      image: "/images/packageReview/classic-cairo/5.jpg",
      description:
        "Check out from the hotel and transfer to Cairo airport for your onward journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation in Cairo",
    "Daily breakfast",
    "Airport transfers",
    "Private sightseeing tours",
    "Professional guide assistance",
    "Entrance tickets as per itinerary",
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
    "Valid passport and travel documents are mandatory.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default classicCairo;