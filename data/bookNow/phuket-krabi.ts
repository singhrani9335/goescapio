import type { BookNow } from "@/types/bookNow";

const phuketKrabi: BookNow = {
  slug: "phuket-krabi",


  // ===========================
  // GALLERY
  // ===========================

  gallery: [
  "/images/bookNow/phuket-krabi/gallery/1.jpg",
  "/images/bookNow/phuket-krabi/gallery/2.jpg",
  "/images/bookNow/phuket-krabi/gallery/3.jpg",
  "/images/bookNow/phuket-krabi/gallery/4.jpg",
  "/images/bookNow/phuket-krabi/gallery/5.jpg",
],



  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Phuket Krabi Escape",

  price: "34,999",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Phuket & Krabi, Thailand",


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
    Discover the tropical beauty of Thailand with this 5 Nights and 6 Days
    Phuket Krabi package. Enjoy beautiful beaches, island tours, crystal
    clear waters, adventure activities and comfortable stays across Phuket
    and Krabi.
  `,



  // ===========================
  // ITINERARY
  // ===========================

  itinerary: [
  {
    day: 1,
    title: "Phuket Arrival",
    image: "/images/bookNow/phuket-krabi/itinerary/day-1.jpg",
    description:
      "Arrive at Phuket Airport and transfer to your hotel. Relax and enjoy your first evening in Phuket.",
  },

  {
    day: 2,
    title: "Phi Phi Island Tour",
    image: "/images/bookNow/phuket-krabi/itinerary/day-2.jpg",
    description:
      "Enjoy a beautiful Phi Phi Island tour with crystal clear water, beaches and exciting activities.",
  },

  {
    day: 3,
    title: "Phuket To Krabi",
    image: "/images/bookNow/phuket-krabi/itinerary/day-3.jpg",
    description:
      "Transfer to Krabi and enjoy the scenic beauty of this peaceful island destination.",
  },

  {
    day: 4,
    title: "Krabi Island Tour",
    image: "/images/bookNow/phuket-krabi/itinerary/day-4.jpg",
    description:
      "Explore Krabi islands, beaches and enjoy relaxing moments surrounded by nature.",
  },

  {
    day: 5,
    title: "Krabi Departure",
    image: "/images/bookNow/phuket-krabi/itinerary/day-5.jpg",
    description:
      "After breakfast check out from hotel and transfer to airport for your onward journey.",
  },
],



  



  // ===========================
  // INCLUSIONS
  // ===========================

  inclusions: [

    "Daily breakfast will be provided.",
    "Comfortable hotel accommodation.",
    "Airport transfers included.",
    "Phi Phi Island tour included.",
    "Krabi sightseeing as per itinerary.",
    "All transfers by comfortable vehicle.",

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
    "Hotel availability is subject to confirmation.",
    "Personal expenses are not included.",

  ],


};


export default phuketKrabi;