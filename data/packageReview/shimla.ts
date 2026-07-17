import type { PackageReview } from "@/types/packageReview";

const shimla: PackageReview = {
  slug: "shimla",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/shimla/1.jpg",
    "/images/packageReview/shimla/2.jpg",
    "/images/packageReview/shimla/3.jpg",
    "/images/packageReview/shimla/4.jpg",
    "/images/packageReview/shimla/5.jpg",
    "/images/packageReview/shimla/6.jpg",
    "/images/packageReview/shimla/7.jpg",
    "/images/packageReview/shimla/8.jpg",
    "/images/packageReview/shimla/9.jpg",
    "/images/packageReview/shimla/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Beautiful Shimla Tour",

  price: "24,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Shimla - Himachal Pradesh",

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
    Explore the charming hill station of Shimla with this beautiful holiday
    package. Enjoy breathtaking mountain views, colonial architecture,
    scenic landscapes and peaceful moments surrounded by nature.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Shimla",
      image: "/images/packageReview/shimla/1.jpg",
      description:
        "Arrive in Shimla and transfer to your hotel. Enjoy the beautiful weather and surroundings.",
    },

    {
      day: 2,
      title: "Shimla Local Sightseeing",
      image: "/images/packageReview/shimla/2.jpg",
      description:
        "Visit Mall Road, Ridge, Christ Church and other famous attractions of Shimla.",
    },

    {
      day: 3,
      title: "Kufri Excursion",
      image: "/images/packageReview/shimla/3.jpg",
      description:
        "Explore Kufri, enjoy scenic views and experience the beauty of Himalayan landscapes.",
    },

    {
      day: 4,
      title: "Shimla Leisure Day",
      image: "/images/packageReview/shimla/4.jpg",
      description:
        "Spend your day exploring local markets and enjoying the peaceful hill station.",
    },

    {
      day: 5,
      title: "Departure From Shimla",
      image: "/images/packageReview/shimla/5.jpg",
      description:
        "Check out from the hotel and proceed for your onward journey with beautiful memories.",
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
    "Adventure activities",
    "Camera charges",
    "Travel insurance",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are subject to availability.",
    "Package rates may change according to season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid travel documents are required.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default shimla;