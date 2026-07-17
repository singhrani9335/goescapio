import type { BookNow } from "@/types/bookNow";

const bali: BookNow = {
  slug: "bali",


  // ===========================
  // GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/bali/1.jpg",
    "/images/packageReview/bali/2.jpg",
    "/images/packageReview/bali/3.jpg",
    "/images/packageReview/bali/4.jpg",
    "/images/packageReview/bali/5.jpg",
  ],



  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Bali Paradise",

  price: "29,999",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Bali, Indonesia",


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
    Experience the tropical beauty of Bali with this 5 Nights and 6 Days
    Bali Paradise package. Explore beautiful beaches, ancient temples,
    waterfalls, cultural attractions and enjoy comfortable hotel stays
    with memorable experiences across Bali.
  `,



  // ===========================
  // ITINERARY
  // ===========================

  itinerary: [

    {
      day: 1,
      title: "Bali Arrival",
      image: "/images/packageReview/bali/1.jpg",
      description:
        "Arrive at Bali Airport and get transferred to your hotel. Relax and enjoy your first evening in the beautiful island destination.",
    },


    {
      day: 2,
      title: "Bali Sightseeing",
      image: "/images/packageReview/bali/2.jpg",
      description:
        "Explore Bali attractions including temples, beautiful viewpoints and cultural places. Enjoy the scenic beauty of Bali.",
    },


    {
      day: 3,
      title: "Ubud Exploration",
      image: "/images/packageReview/bali/3.jpg",
      description:
        "Visit Ubud famous for rice terraces, waterfalls, art markets and traditional Balinese culture.",
    },


    {
      day: 4,
      title: "Beach & Water Activities",
      image: "/images/packageReview/bali/4.jpg",
      description:
        "Enjoy Bali beaches and exciting water activities. Spend a relaxing day surrounded by beautiful ocean views.",
    },


    {
      day: 5,
      title: "Temple Visit & Leisure",
      image: "/images/packageReview/bali/5.jpg",
      description:
        "Explore famous Bali temples and enjoy free time for shopping and local experiences.",
    },


    {
      day: 6,
      title: "Bali Departure",
      image: "/images/packageReview/bali/1.jpg",
      description:
        "After breakfast check out from hotel and transfer to Bali Airport for your onward journey.",
    },

  ],




  // ===========================
  // HOTELS
  // ===========================

  hotels: [

    {
      name: "Kuta Central Park Hotel",
      image: "/images/packageReview/bali/hotel-1.jpg",
      rating: 4,
      location: "Kuta, Bali",
      category: "4 Star Hotel",
      nights: "2",
      description:
        "Kuta Central Park Hotel offers comfortable accommodation with modern facilities and easy access to Bali's popular attractions.",
    },


    {
      name: "Ubud Valley Resort",
      image: "/images/packageReview/bali/hotel-2.jpg",
      rating: 4,
      location: "Ubud, Bali",
      category: "4 Star Hotel",
      nights: "2",
      description:
        "Ubud Valley Resort provides a peaceful stay surrounded by beautiful nature and Balinese landscapes.",
    },


    {
      name: "Grand Ixora Kuta Resort",
      image: "/images/packageReview/bali/hotel-3.jpg",
      rating: 4,
      location: "Kuta, Bali",
      category: "4 Star Hotel",
      nights: "1",
      description:
        "Grand Ixora Kuta Resort offers comfortable rooms and convenient access to beaches and shopping areas.",
    },

  ],




  // ===========================
  // INCLUSIONS
  // ===========================

  inclusions: [

    "Daily breakfast will be provided.",
    "Comfortable hotel accommodation.",
    "Airport transfers included.",
    "Sightseeing as per itinerary.",
    "Professional local assistance.",
    
  ],




  // ===========================
  // EXCLUSIONS
  // ===========================

  exclusions: [

    "International flight tickets.",
    "Personal expenses.",
    "Travel insurance.",
    "Entry tickets not mentioned.",
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


export default bali;