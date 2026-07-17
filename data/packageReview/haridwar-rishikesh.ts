import type { PackageReview } from "@/types/packageReview";

const haridwarRishikesh: PackageReview = {
  slug: "haridwar-rishikesh",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
  "/images/packageReview/haridwar-rishikesh/1.jpg",
  "/images/packageReview/haridwar-rishikesh/2.jpg",
  "/images/packageReview/haridwar-rishikesh/3.jpg",
  "/images/packageReview/haridwar-rishikesh/4.jpg",
  "/images/packageReview/haridwar-rishikesh/5.jpg",
  "/images/packageReview/haridwar-rishikesh/6.jpg",
  "/images/packageReview/haridwar-rishikesh/7.jpg",
  "/images/packageReview/haridwar-rishikesh/8.jpg",
  "/images/packageReview/haridwar-rishikesh/9.jpg",
  "/images/packageReview/haridwar-rishikesh/10.jpg",
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "3 Nights & 4 Days Haridwar Rishikesh Tour",

  price: "14,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "3 Nights",

  location: "Haridwar - Rishikesh Uttarakhand",

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
    Experience the spiritual charm and natural beauty of Haridwar and
    Rishikesh with this refreshing holiday package. Explore holy temples,
    enjoy the peaceful Ganga Aarti, visit scenic locations and experience
    adventure activities in the Yoga capital of the world.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival At Haridwar",
      image: "/images/packageReview/haridwar-rishikesh/1.jpg",
      description:
        "Arrive at Haridwar and transfer to your hotel. Visit Har Ki Pauri and attend the famous Ganga Aarti.",
    },

    {
      day: 2,
      title: "Haridwar Sightseeing & Transfer To Rishikesh",
      image: "/images/packageReview/haridwar-rishikesh/2.jpg",
      description:
        "Explore Haridwar attractions and proceed towards Rishikesh. Enjoy the beautiful riverside views.",
    },

    {
      day: 3,
      title: "Rishikesh Sightseeing & Adventure",
      image: "/images/packageReview/haridwar-rishikesh/3.jpg",
      description:
        "Visit Laxman Jhula, Ram Jhula, temples and enjoy optional adventure activities.",
    },

    {
      day: 4,
      title: "Departure From Rishikesh",
      image: "/images/packageReview/haridwar-rishikesh/4.jpg",
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
    "Private vehicle for transfers",
    "Sightseeing as per itinerary",
    "Ganga Aarti visit",
    "Local assistance",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Travel tickets",
    "Personal expenses",
    "Adventure activity charges",
    "Camera fees",
    "Travel insurance",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are subject to availability.",
    "Package rates may change depending on season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per policy.",
    "Travellers must carry valid identification documents.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default haridwarRishikesh;