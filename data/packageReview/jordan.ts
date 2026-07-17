import type { PackageReview } from "@/types/packageReview";

const jordan: PackageReview = {
  slug: "jordan",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/jordan/1.jpg",
    "/images/packageReview/jordan/2.jpg",
    "/images/packageReview/jordan/3.jpg",
    "/images/packageReview/jordan/4.jpg",
    "/images/packageReview/jordan/5.jpg",
    "/images/packageReview/jordan/6.jpg",
    "/images/packageReview/jordan/7.jpg",
    "/images/packageReview/jordan/8.jpg",
    "/images/packageReview/jordan/9.jpg",
    "/images/packageReview/jordan/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Amazing Jordan Tour",

  price: "74,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Amman - Petra - Jordan",

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
    Explore the ancient wonders and breathtaking landscapes of Jordan with
    this amazing holiday package. Discover Petra, desert landscapes, historical
    attractions and experience the rich culture of this beautiful destination.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Amman",
      image: "/images/packageReview/jordan/1.jpg",
      description:
        "Arrive at Amman airport and transfer to your hotel. Enjoy leisure time after check-in.",
    },

    {
      day: 2,
      title: "Amman City Tour",
      image: "/images/packageReview/jordan/2.jpg",
      description:
        "Explore the historical attractions of Amman including ancient sites and local markets.",
    },

    {
      day: 3,
      title: "Visit Petra",
      image: "/images/packageReview/jordan/3.jpg",
      description:
        "Discover the famous UNESCO World Heritage site of Petra and its magnificent architecture.",
    },

    {
      day: 4,
      title: "Wadi Rum Desert Experience",
      image: "/images/packageReview/jordan/4.jpg",
      description:
        "Enjoy the stunning desert landscapes and experience the beauty of Wadi Rum.",
    },

    {
      day: 5,
      title: "Dead Sea Experience",
      image: "/images/packageReview/jordan/5.jpg",
      description:
        "Relax at the famous Dead Sea and enjoy the unique natural surroundings.",
    },

    {
      day: 6,
      title: "Departure From Jordan",
      image: "/images/packageReview/jordan/6.jpg",
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
    "Private transportation",
    "Sightseeing as per itinerary",
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
    "Package prices may change based on availability.",
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

export default jordan;