import type { PackageReview } from "@/types/packageReview";

const ooty: PackageReview = {
  slug: "ooty",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/ooty/1.jpg",
    "/images/packageReview/ooty/2.jpg",
    "/images/packageReview/ooty/3.jpg",
    "/images/packageReview/ooty/4.jpg",
    "/images/packageReview/ooty/5.jpg",
    "/images/packageReview/ooty/6.jpg",
    "/images/packageReview/ooty/7.jpg",
    "/images/packageReview/ooty/8.jpg",
    "/images/packageReview/ooty/9.jpg",
    "/images/packageReview/ooty/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "3 Nights & 4 Days Beautiful Ooty Tour",

  price: "18,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "3 Nights",

  location: "Ooty - Tamil Nadu",

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
    Enjoy a refreshing holiday in the beautiful hill station of Ooty.
    Explore lush green landscapes, tea gardens, lakes and scenic viewpoints.
    This package is perfect for families, couples and travellers looking for
    a peaceful mountain getaway.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Ooty",
      image: "/images/packageReview/ooty/1.jpg",
      description:
        "Arrive at Ooty and transfer to your hotel. Spend the evening enjoying the pleasant weather.",
    },

    {
      day: 2,
      title: "Ooty Sightseeing",
      image: "/images/packageReview/ooty/2.jpg",
      description:
        "Visit Ooty Lake, Botanical Garden, Rose Garden and other famous attractions.",
    },

    {
      day: 3,
      title: "Coonoor Excursion",
      image: "/images/packageReview/ooty/3.jpg",
      description:
        "Explore Coonoor, tea estates, viewpoints and enjoy beautiful mountain scenery.",
    },

    {
      day: 4,
      title: "Departure From Ooty",
      image: "/images/packageReview/ooty/4.jpg",
      description:
        "Check out from the hotel and proceed for your onward journey with wonderful memories.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Private vehicle for sightseeing",
    "Pickup and drop transfers",
    "Sightseeing as per itinerary",
    "Local assistance",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Travel tickets",
    "Personal expenses",
    "Camera charges",
    "Travel insurance",
    "Optional activities",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are subject to availability.",
    "Package prices may change according to season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Travellers must carry valid identification documents.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default ooty;