import type { BookNow } from "@/types/bookNow";

const phuketKrabi: BookNow = {
  slug: "phuket-krabi",


  // ===========================
  // GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/phuket-krabi/1.jpg",
    "/images/packageReview/phuket-krabi/2.jpg",
    "/images/packageReview/phuket-krabi/3.jpg",
    "/images/packageReview/phuket-krabi/4.jpg",
    "/images/packageReview/phuket-krabi/5.jpg",
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
      image: "/images/packageReview/phuket-krabi/1.jpg",
      description:
        "Arrive at Phuket Airport and transfer to your hotel. Relax and enjoy your first evening in Phuket.",
    },


    {
      day: 2,
      title: "Phuket City Tour",
      image: "/images/packageReview/phuket-krabi/2.jpg",
      description:
        "Explore Phuket's famous attractions including viewpoints, beaches and cultural landmarks.",
    },


    {
      day: 3,
      title: "Phi Phi Island Tour",
      image: "/images/packageReview/phuket-krabi/3.jpg",
      description:
        "Enjoy a beautiful Phi Phi Island tour with crystal clear water, beaches and exciting activities.",
    },


    {
      day: 4,
      title: "Phuket To Krabi",
      image: "/images/packageReview/phuket-krabi/4.jpg",
      description:
        "Transfer to Krabi and enjoy the scenic beauty of this peaceful island destination.",
    },


    {
      day: 5,
      title: "Krabi Island Tour",
      image: "/images/packageReview/phuket-krabi/5.jpg",
      description:
        "Explore Krabi islands, beaches and enjoy relaxing moments surrounded by nature.",
    },


    {
      day: 6,
      title: "Krabi Departure",
      image: "/images/packageReview/phuket-krabi/1.jpg",
      description:
        "After breakfast check out from hotel and transfer to airport for your onward journey.",
    },

  ],




  // ===========================
  // HOTELS
  // ===========================

  hotels: [

    {
      name: "Patong Resort Hotel",
      image: "/images/packageReview/phuket-krabi/hotel-1.jpg",
      rating: 4,
      location: "Phuket",
      category: "4 Star Hotel",
      nights: "3",
      description:
        "Patong Resort Hotel offers a comfortable stay near Phuket beaches with modern facilities and easy access to attractions.",
    },


    {
      name: "Krabi Resort",
      image: "/images/packageReview/phuket-krabi/hotel-2.jpg",
      rating: 4,
      location: "Krabi",
      category: "4 Star Hotel",
      nights: "2",
      description:
        "Krabi Resort provides a peaceful beachfront stay surrounded by beautiful natural views.",
    },


    {
      name: "Deevana Plaza Phuket",
      image: "/images/packageReview/phuket-krabi/hotel-3.jpg",
      rating: 4,
      location: "Phuket",
      category: "4 Star Hotel",
      nights: "1",
      description:
        "Deevana Plaza Phuket offers comfortable rooms and excellent hospitality for travellers.",
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