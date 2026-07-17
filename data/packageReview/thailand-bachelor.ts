import type { PackageReview } from "@/types/packageReview";

const thailandBachelor: PackageReview = {
  slug: "thailand-bachelor",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/thailand-bachelor/1.jpg",
    "/images/packageReview/thailand-bachelor/2.jpg",
    "/images/packageReview/thailand-bachelor/3.jpg",
    "/images/packageReview/thailand-bachelor/4.jpg",
    "/images/packageReview/thailand-bachelor/5.jpg",
    "/images/packageReview/thailand-bachelor/6.jpg",
    "/images/packageReview/thailand-bachelor/7.jpg",
    "/images/packageReview/thailand-bachelor/8.jpg",
    "/images/packageReview/thailand-bachelor/9.jpg",
    "/images/packageReview/thailand-bachelor/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Thailand Bachelor Trip",

  price: "39,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Bangkok - Pattaya Thailand",

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
    Enjoy an exciting Thailand bachelor holiday with amazing nightlife,
    adventure activities, beaches and entertainment. Explore Bangkok and
    Pattaya with unforgettable experiences and fun-filled moments.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Bangkok & Transfer To Pattaya",
      image: "/images/packageReview/thailand-bachelor/1.jpg",
      description:
        "Arrive in Bangkok and transfer to Pattaya. Enjoy leisure time and explore nightlife.",
    },

    {
      day: 2,
      title: "Pattaya City Tour",
      image: "/images/packageReview/thailand-bachelor/2.jpg",
      description:
        "Explore famous attractions of Pattaya and enjoy entertainment activities.",
    },

    {
      day: 3,
      title: "Coral Island Tour",
      image: "/images/packageReview/thailand-bachelor/3.jpg",
      description:
        "Enjoy a beautiful Coral Island trip with water activities and beach experiences.",
    },

    {
      day: 4,
      title: "Pattaya To Bangkok",
      image: "/images/packageReview/thailand-bachelor/4.jpg",
      description:
        "Transfer to Bangkok and explore shopping areas and famous city attractions.",
    },

    {
      day: 5,
      title: "Departure From Thailand",
      image: "/images/packageReview/thailand-bachelor/5.jpg",
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
    "Sightseeing tours",
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

export default thailandBachelor;