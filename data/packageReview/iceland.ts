import type { PackageReview } from "@/types/packageReview";

const iceland: PackageReview = {
  slug: "iceland",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/iceland/1.jpg",
    "/images/packageReview/iceland/2.jpg",
    "/images/packageReview/iceland/3.jpg",
    "/images/packageReview/iceland/4.jpg",
    "/images/packageReview/iceland/5.jpg",
    "/images/packageReview/iceland/6.jpg",
    "/images/packageReview/iceland/7.jpg",
    "/images/packageReview/iceland/8.jpg",
    "/images/packageReview/iceland/9.jpg",
    "/images/packageReview/iceland/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Magical Iceland Tour",

  price: "1,29,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Reykjavik - Iceland",

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
    Discover the magical landscapes of Iceland with this unforgettable holiday
    package. Explore waterfalls, glaciers, volcano landscapes, hot springs and
    breathtaking natural wonders. Experience the beauty of Iceland's unique
    scenery and create memories of a lifetime.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Reykjavik",
      image: "/images/packageReview/iceland/1.jpg",
      description:
        "Arrive at Reykjavik airport and transfer to your hotel. Spend the evening exploring the city.",
    },

    {
      day: 2,
      title: "Golden Circle Tour",
      image: "/images/packageReview/iceland/2.jpg",
      description:
        "Explore famous attractions including waterfalls, geysers and stunning natural landscapes.",
    },

    {
      day: 3,
      title: "South Coast Adventure",
      image: "/images/packageReview/iceland/3.jpg",
      description:
        "Visit black sand beaches, waterfalls and beautiful coastal landscapes of Iceland.",
    },

    {
      day: 4,
      title: "Glacier & Nature Experience",
      image: "/images/packageReview/iceland/4.jpg",
      description:
        "Enjoy breathtaking glacier views and explore Iceland's unique natural beauty.",
    },

    {
      day: 5,
      title: "Blue Lagoon Experience",
      image: "/images/packageReview/iceland/5.jpg",
      description:
        "Relax in the famous Blue Lagoon geothermal spa and enjoy a peaceful experience.",
    },

    {
      day: 6,
      title: "Reykjavik Leisure Day",
      image: "/images/packageReview/iceland/6.jpg",
      description:
        "Explore local attractions, shopping areas and enjoy free time in Reykjavik.",
    },

    {
      day: 7,
      title: "Departure From Iceland",
      image: "/images/packageReview/iceland/7.jpg",
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
    "Sightseeing tours",
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
    "Package prices may change according to availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid passport and travel documents are mandatory.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default iceland;