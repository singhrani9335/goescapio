import type { PackageReview } from "@/types/packageReview";

const thailandHoneymoon: PackageReview = {
  slug: "thailand-honeymoon",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/thailand-honeymoon/1.jpg",
    "/images/packageReview/thailand-honeymoon/2.jpg",
    "/images/packageReview/thailand-honeymoon/3.jpg",
    "/images/packageReview/thailand-honeymoon/4.jpg",
    "/images/packageReview/thailand-honeymoon/5.jpg",
    "/images/packageReview/thailand-honeymoon/6.jpg",
    "/images/packageReview/thailand-honeymoon/7.jpg",
    "/images/packageReview/thailand-honeymoon/8.jpg",
    "/images/packageReview/thailand-honeymoon/9.jpg",
    "/images/packageReview/thailand-honeymoon/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Thailand Honeymoon Package",

  price: "49,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Phuket - Krabi Thailand",

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
    Celebrate your special moments with a romantic Thailand honeymoon package.
    Enjoy beautiful beaches, island tours, luxury stays and unforgettable
    experiences in Phuket and Krabi.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Phuket",
      image: "/images/packageReview/thailand-honeymoon/1.jpg",
      description:
        "Arrive at Phuket airport and transfer to your hotel. Enjoy a romantic evening by the beach.",
    },

    {
      day: 2,
      title: "Phuket Sightseeing",
      image: "/images/packageReview/thailand-honeymoon/2.jpg",
      description:
        "Explore beautiful beaches, viewpoints and famous attractions of Phuket.",
    },

    {
      day: 3,
      title: "Phi Phi Island Tour",
      image: "/images/packageReview/thailand-honeymoon/3.jpg",
      description:
        "Enjoy a romantic island excursion with crystal clear waters and beautiful views.",
    },

    {
      day: 4,
      title: "Transfer To Krabi",
      image: "/images/packageReview/thailand-honeymoon/4.jpg",
      description:
        "Travel to Krabi and relax at the beautiful beaches and surroundings.",
    },

    {
      day: 5,
      title: "Krabi Island Experience",
      image: "/images/packageReview/thailand-honeymoon/5.jpg",
      description:
        "Enjoy island activities and spend quality time together in the tropical paradise.",
    },

    {
      day: 6,
      title: "Departure From Thailand",
      image: "/images/packageReview/thailand-honeymoon/6.jpg",
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
    "Island sightseeing tours",
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
    "Package rates may change depending on season.",
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

export default thailandHoneymoon;