import type { PackageReview } from "@/types/packageReview";

const southIndia: PackageReview = {
  slug: "south-india",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/south-india/1.jpg",
    "/images/packageReview/south-india/2.jpg",
    "/images/packageReview/south-india/3.jpg",
    "/images/packageReview/south-india/4.jpg",
    "/images/packageReview/south-india/5.jpg",
    "/images/packageReview/south-india/6.jpg",
    "/images/packageReview/south-india/7.jpg",
    "/images/packageReview/south-india/8.jpg",
    "/images/packageReview/south-india/9.jpg",
    "/images/packageReview/south-india/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "7 Nights & 8 Days Beautiful South India Tour",

  price: "39,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "7 Nights",

  location: "Kerala - Tamil Nadu - South India",

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
    Discover the beauty of South India with this amazing holiday package.
    Explore lush green landscapes, hill stations, temples, beaches and the
    rich culture of this beautiful region.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In South India",
      image: "/images/packageReview/south-india/1.jpg",
      description:
        "Arrive and transfer to your hotel. Relax and enjoy the beautiful surroundings.",
    },

    {
      day: 2,
      title: "Explore Hill Station",
      image: "/images/packageReview/south-india/2.jpg",
      description:
        "Visit scenic viewpoints, gardens and famous attractions of the hill station.",
    },

    {
      day: 3,
      title: "Local Sightseeing Tour",
      image: "/images/packageReview/south-india/3.jpg",
      description:
        "Explore cultural attractions, local markets and historical places.",
    },

    {
      day: 4,
      title: "Nature & Adventure Experience",
      image: "/images/packageReview/south-india/4.jpg",
      description:
        "Enjoy beautiful landscapes and exciting activities surrounded by nature.",
    },

    {
      day: 5,
      title: "Beach & Coastal Exploration",
      image: "/images/packageReview/south-india/5.jpg",
      description:
        "Relax at beautiful beaches and enjoy the peaceful coastal atmosphere.",
    },

    {
      day: 6,
      title: "Cultural Sightseeing",
      image: "/images/packageReview/south-india/6.jpg",
      description:
        "Discover temples, traditions and local culture of South India.",
    },

    {
      day: 7,
      title: "Leisure Day",
      image: "/images/packageReview/south-india/7.jpg",
      description:
        "Enjoy free time exploring nearby places or relaxing at the hotel.",
    },

    {
      day: 8,
      title: "Departure",
      image: "/images/packageReview/south-india/8.jpg",
      description:
        "Check out from the hotel and proceed for your onward journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Private transportation",
    "Airport/railway transfers",
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
    "Valid travel documents are required.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default southIndia;