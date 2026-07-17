import type { PackageReview } from "@/types/packageReview";

const gorgeousKashmir: PackageReview = {
  slug: "gorgeous-kashmir",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/gorgeous-kashmir/1.jpg",
    "/images/packageReview/gorgeous-kashmir/2.jpg",
    "/images/packageReview/gorgeous-kashmir/3.jpg",
    "/images/packageReview/gorgeous-kashmir/4.jpg",
    "/images/packageReview/gorgeous-kashmir/5.jpg",
    "/images/packageReview/gorgeous-kashmir/6.jpg",
    "/images/packageReview/gorgeous-kashmir/7.jpg",
    "/images/packageReview/gorgeous-kashmir/8.jpg",
    "/images/packageReview/gorgeous-kashmir/9.jpg",
    "/images/packageReview/gorgeous-kashmir/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Gorgeous Kashmir Tour",

  price: "34,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Srinagar - Gulmarg - Pahalgam Kashmir",

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
    Discover the breathtaking beauty of Kashmir with this wonderful holiday
    package. Explore the stunning valleys, snow-covered mountains, beautiful
    lakes and charming destinations like Srinagar, Gulmarg and Pahalgam.
    Enjoy nature, adventure and peaceful moments in the paradise of India.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Srinagar",
      image: "/images/packageReview/gorgeous-kashmir/1.jpg",
      description:
        "Arrive at Srinagar and transfer to your hotel or houseboat. Enjoy the beautiful surroundings and evening leisure.",
    },

    {
      day: 2,
      title: "Srinagar Local Sightseeing",
      image: "/images/packageReview/gorgeous-kashmir/2.jpg",
      description:
        "Visit Mughal Gardens, Dal Lake and explore the beautiful attractions of Srinagar.",
    },

    {
      day: 3,
      title: "Srinagar To Gulmarg",
      image: "/images/packageReview/gorgeous-kashmir/3.jpg",
      description:
        "Proceed to Gulmarg and enjoy stunning mountain views, cable car ride and scenic landscapes.",
    },

    {
      day: 4,
      title: "Gulmarg To Pahalgam",
      image: "/images/packageReview/gorgeous-kashmir/4.jpg",
      description:
        "Travel to Pahalgam and enjoy the beauty of valleys, rivers and peaceful surroundings.",
    },

    {
      day: 5,
      title: "Pahalgam Sightseeing",
      image: "/images/packageReview/gorgeous-kashmir/5.jpg",
      description:
        "Explore local attractions of Pahalgam and enjoy the natural beauty of Kashmir.",
    },

    {
      day: 6,
      title: "Departure From Srinagar",
      image: "/images/packageReview/gorgeous-kashmir/6.jpg",
      description:
        "Check out from the hotel and transfer to Srinagar airport for your onward journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel/houseboat accommodation",
    "Daily breakfast and dinner",
    "Private vehicle for sightseeing",
    "Airport transfers",
    "Sightseeing as per itinerary",
    "Local assistance",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare or train tickets",
    "Personal expenses",
    "Adventure activities",
    "Camera charges",
    "Travel insurance",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are subject to availability.",
    "Package price may change during peak season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Travellers must carry valid identification documents.",
    "Go Escapio is not responsible for weather-related delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default gorgeousKashmir;