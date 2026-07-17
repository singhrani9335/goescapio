import type { PackageReview } from "@/types/packageReview";

const phuQuoc: PackageReview = {
  slug: "phu-quoc",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/phu-quoc/1.jpg",
    "/images/packageReview/phu-quoc/2.jpg",
    "/images/packageReview/phu-quoc/3.jpg",
    "/images/packageReview/phu-quoc/4.jpg",
    "/images/packageReview/phu-quoc/5.jpg",
    "/images/packageReview/phu-quoc/6.jpg",
    "/images/packageReview/phu-quoc/7.jpg",
    "/images/packageReview/phu-quoc/8.jpg",
    "/images/packageReview/phu-quoc/9.jpg",
    "/images/packageReview/phu-quoc/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Phu Quoc Island Holiday",

  price: "54,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Phu Quoc - Vietnam",

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
    Discover the tropical beauty of Phu Quoc Island with this amazing holiday
    package. Enjoy beautiful beaches, island adventures, water activities and
    relaxing moments surrounded by stunning natural landscapes.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Phu Quoc",
      image: "/images/packageReview/phu-quoc/1.jpg",
      description:
        "Arrive at Phu Quoc airport and transfer to your hotel. Enjoy the evening at leisure.",
    },

    {
      day: 2,
      title: "Phu Quoc Island Sightseeing",
      image: "/images/packageReview/phu-quoc/2.jpg",
      description:
        "Explore beautiful beaches, local attractions and scenic spots of the island.",
    },

    {
      day: 3,
      title: "Island Tour & Water Activities",
      image: "/images/packageReview/phu-quoc/3.jpg",
      description:
        "Enjoy island hopping, water activities and breathtaking ocean views.",
    },

    {
      day: 4,
      title: "VinWonders & Entertainment",
      image: "/images/packageReview/phu-quoc/4.jpg",
      description:
        "Spend an exciting day enjoying theme parks and entertainment attractions.",
    },

    {
      day: 5,
      title: "Leisure Beach Day",
      image: "/images/packageReview/phu-quoc/5.jpg",
      description:
        "Relax at the beach and enjoy free time exploring the island.",
    },

    {
      day: 6,
      title: "Departure From Phu Quoc",
      image: "/images/packageReview/phu-quoc/6.jpg",
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
    "Island sightseeing",
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
    "Package rates may change depending on availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid travel documents are required.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default phuQuoc;