import type { BookNow } from "@/types/bookNow";

const singapore: BookNow = {
  slug: "singapore",


  // ===========================
  // GALLERY
  // ===========================

  gallery: [
  "/images/bookNow/singapore/gallery/1.jpg",
  "/images/bookNow/singapore/gallery/2.jpg",
  "/images/bookNow/singapore/gallery/3.jpg",
  "/images/bookNow/singapore/gallery/4.jpg",
  "/images/bookNow/singapore/gallery/5.jpg",
  
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Singapore Explorer",

  price: "45,999",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Singapore",


  features: {
    hotel: true,
    activity: true,
    transport: true,
    meal: true,
  },



  // ===========================
  // OVERVIEW
  // ===========================

  overview: `
    Explore the modern city of Singapore with this 5 Nights and 6 Days
    Singapore Explorer package. Experience world-famous attractions,
    futuristic architecture, beautiful gardens, shopping destinations
    and unforgettable city experiences.
  `,



  // ===========================
  // ITINERARY
  // ===========================

  itinerary: [
  {
    day: 1,
    title: "Singapore Arrival",
    image: "/images/bookNow/singapore/itinerary/day-1.jpg",
    description:
      "Arrive at Singapore Airport and transfer to your hotel. Relax and enjoy your first evening in this beautiful city.",
  },

  {
    day: 2,
    title: "Singapore City Tour",
    image: "/images/bookNow/singapore/itinerary/day-2.jpg",
    description:
      "Explore Singapore's famous attractions including Merlion Park, Marina Bay and other iconic landmarks.",
  },

  {
    day: 3,
    title: "Sentosa Island Tour",
    image: "/images/bookNow/singapore/itinerary/day-3.jpg",
    description:
      "Enjoy Sentosa Island attractions with beautiful beaches, entertainment zones and exciting experiences.",
  },

  {
    day: 4,
    title: "Universal Studios Singapore",
    image: "/images/bookNow/singapore/itinerary/day-4.jpg",
    description:
      "Spend a fun-filled day at Universal Studios Singapore with exciting rides and entertainment.",
  },

  {
    day: 5,
    title: "Singapore Departure",
    image: "/images/bookNow/singapore/itinerary/day-5.jpg",
    description:
      "After breakfast check out from hotel and transfer to Singapore Airport for your onward journey.",
  },
],



  




  // ===========================
  // INCLUSIONS
  // ===========================

  inclusions: [

    "Daily breakfast will be provided.",
    "Comfortable hotel accommodation.",
    "Airport transfers included.",
    "Singapore city tour included.",
    "Sentosa Island tour included.",
    "All transfers as per itinerary.",

  ],




  // ===========================
  // EXCLUSIONS
  // ===========================

  exclusions: [

    "International flight tickets.",
    "Visa charges.",
    "Personal expenses.",
    "Travel insurance.",
    "Tips and porter charges.",

  ],




  // ===========================
  // TERMS
  // ===========================

  terms: [

    "All bookings are confirmed after advance payment.",
    "Package rates depend on availability.",
    "Cancellation charges apply as per policy.",
    "Hotel confirmation depends on availability.",
    "Personal expenses are not included.",

  ],


};


export default singapore;