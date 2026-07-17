import type { PackageReview } from "@/types/packageReview";

const meghalaya: PackageReview = {
  slug: "meghalaya",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/meghalaya/1.jpg",
    "/images/packageReview/meghalaya/2.jpg",
    "/images/packageReview/meghalaya/3.jpg",
    "/images/packageReview/meghalaya/4.jpg",
    "/images/packageReview/meghalaya/5.jpg",
    "/images/packageReview/meghalaya/6.jpg",
    "/images/packageReview/meghalaya/7.jpg",
    "/images/packageReview/meghalaya/8.jpg",
    "/images/packageReview/meghalaya/9.jpg",
    "/images/packageReview/meghalaya/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Magical Meghalaya Tour",

  price: "32,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Shillong - Cherrapunji - Meghalaya",

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
    Explore the natural beauty of Meghalaya with this amazing holiday package.
    Discover waterfalls, living root bridges, beautiful hills and peaceful
    landscapes. Experience the charm of Shillong, Cherrapunji and the unique
    culture of Northeast India.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Shillong",
      image: "/images/packageReview/meghalaya/1.jpg",
      description:
        "Arrive at Shillong and transfer to your hotel. Enjoy the beautiful hill station atmosphere.",
    },

    {
      day: 2,
      title: "Shillong Sightseeing",
      image: "/images/packageReview/meghalaya/2.jpg",
      description:
        "Visit Shillong Peak, Elephant Falls and explore the beautiful attractions of Shillong.",
    },

    {
      day: 3,
      title: "Shillong To Cherrapunji",
      image: "/images/packageReview/meghalaya/3.jpg",
      description:
        "Travel to Cherrapunji and explore waterfalls, caves and scenic viewpoints.",
    },

    {
      day: 4,
      title: "Cherrapunji Exploration",
      image: "/images/packageReview/meghalaya/4.jpg",
      description:
        "Visit living root bridges, waterfalls and enjoy the natural beauty of Meghalaya.",
    },

    {
      day: 5,
      title: "Mawlynnong Village Visit",
      image: "/images/packageReview/meghalaya/5.jpg",
      description:
        "Explore Asia's cleanest village and enjoy the peaceful surroundings.",
    },

    {
      day: 6,
      title: "Departure From Meghalaya",
      image: "/images/packageReview/meghalaya/6.jpg",
      description:
        "Transfer for your onward journey with unforgettable memories of Meghalaya.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Private vehicle for sightseeing",
    "Airport transfers",
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
    "Package rates may change depending on season.",
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

export default meghalaya;