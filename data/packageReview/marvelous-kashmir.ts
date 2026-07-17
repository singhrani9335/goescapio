import type { PackageReview } from "@/types/packageReview";

const marvelousKashmir: PackageReview = {
  slug: "marvelous-kashmir",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/marvelous-kashmir/1.jpg",
    "/images/packageReview/marvelous-kashmir/2.jpg",
    "/images/packageReview/marvelous-kashmir/3.jpg",
    "/images/packageReview/marvelous-kashmir/4.jpg",
    "/images/packageReview/marvelous-kashmir/5.jpg",
    "/images/packageReview/marvelous-kashmir/6.jpg",
    "/images/packageReview/marvelous-kashmir/7.jpg",
    "/images/packageReview/marvelous-kashmir/8.jpg",
    "/images/packageReview/marvelous-kashmir/9.jpg",
    "/images/packageReview/marvelous-kashmir/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Marvelous Kashmir Tour",

  price: "44,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Srinagar - Gulmarg - Pahalgam - Sonamarg",

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
    Experience the heavenly beauty of Kashmir with this marvelous holiday
    package. Explore snow-covered mountains, beautiful valleys, peaceful lakes
    and famous destinations including Srinagar, Gulmarg, Pahalgam and Sonamarg.
    Enjoy nature, adventure and unforgettable memories in paradise.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Srinagar",
      image: "/images/packageReview/marvelous-kashmir/1.jpg",
      description:
        "Arrive at Srinagar airport and transfer to your hotel or houseboat. Enjoy the evening at leisure.",
    },

    {
      day: 2,
      title: "Srinagar Local Sightseeing",
      image: "/images/packageReview/marvelous-kashmir/2.jpg",
      description:
        "Visit Mughal Gardens, Dal Lake and other beautiful attractions of Srinagar.",
    },

    {
      day: 3,
      title: "Srinagar To Gulmarg",
      image: "/images/packageReview/marvelous-kashmir/3.jpg",
      description:
        "Explore Gulmarg, enjoy scenic views and experience the beauty of snow-covered mountains.",
    },

    {
      day: 4,
      title: "Gulmarg To Pahalgam",
      image: "/images/packageReview/marvelous-kashmir/4.jpg",
      description:
        "Travel to Pahalgam and enjoy breathtaking valleys and natural landscapes.",
    },

    {
      day: 5,
      title: "Pahalgam Sightseeing",
      image: "/images/packageReview/marvelous-kashmir/5.jpg",
      description:
        "Explore beautiful locations around Pahalgam and enjoy peaceful surroundings.",
    },

    {
      day: 6,
      title: "Sonamarg Excursion",
      image: "/images/packageReview/marvelous-kashmir/6.jpg",
      description:
        "Visit Sonamarg and experience the stunning beauty of mountains and glaciers.",
    },

    {
      day: 7,
      title: "Departure From Srinagar",
      image: "/images/packageReview/marvelous-kashmir/7.jpg",
      description:
        "Transfer to Srinagar airport for your onward journey with wonderful memories.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel/houseboat accommodation",
    "Daily breakfast and dinner",
    "Airport transfers",
    "Private vehicle for sightseeing",
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
    "Adventure activity charges",
    "Camera fees",
    "Travel insurance",
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
    "Valid travel documents are required.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default marvelousKashmir;