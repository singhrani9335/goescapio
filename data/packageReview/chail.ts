import type { PackageReview } from "@/types/packageReview";

const chail: PackageReview = {
  slug: "chail",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/chail/1.jpg",
    "/images/packageReview/chail/2.jpg",
    "/images/packageReview/chail/3.jpg",
    "/images/packageReview/chail/4.jpg",
    "/images/packageReview/chail/5.jpg",
    "/images/packageReview/chail/6.jpg",
    "/images/packageReview/chail/7.jpg",
    "/images/packageReview/chail/8.jpg",
    "/images/packageReview/chail/9.jpg",
    "/images/packageReview/chail/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "3 Nights & 4 Days Chail Himachal Tour",

  price: "19,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "3 Nights",

  location: "Chail - Himachal Pradesh India",

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
    Escape to the peaceful hills of Chail with this refreshing Himachal
    holiday package. Surrounded by beautiful forests, mountains and pleasant
    weather, Chail offers a perfect getaway for couples, families and nature
    lovers. Enjoy sightseeing, relaxation and memorable mountain experiences.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival At Chail",
      image: "/images/packageReview/chail/1.jpg",
      description:
        "Arrive at Chail and transfer to your hotel. Relax and enjoy the peaceful hill surroundings.",
    },

    {
      day: 2,
      title: "Chail Local Sightseeing",
      image: "/images/packageReview/chail/2.jpg",
      description:
        "Visit Chail Palace, Cricket Ground, temples and explore the beautiful landscapes of Chail.",
    },

    {
      day: 3,
      title: "Excursion & Leisure Day",
      image: "/images/packageReview/chail/3.jpg",
      description:
        "Enjoy nature walks, local sightseeing and spend quality time in the scenic hills.",
    },

    {
      day: 4,
      title: "Departure From Chail",
      image: "/images/packageReview/chail/4.jpg",
      description:
        "Check out from the hotel and proceed for your onward journey with wonderful memories.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast and dinner",
    "Private vehicle for sightseeing",
    "Pickup and drop services",
    "Sightseeing as per itinerary",
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
    "Rates may change during peak season.",
    "Advance payment is required for confirmation.",
    "Cancellation policy will apply as per company rules.",
    "Travellers must carry valid identification documents.",
    "Go Escapio is not responsible for weather-related delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "Services are subject to availability.",
  ],
};

export default chail;