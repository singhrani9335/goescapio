import type { PackageReview } from "@/types/packageReview";

const vietnam: PackageReview = {
  slug: "vietnam",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/vietnam/1.jpg",
    "/images/packageReview/vietnam/2.jpg",
    "/images/packageReview/vietnam/3.jpg",
    "/images/packageReview/vietnam/4.jpg",
    "/images/packageReview/vietnam/5.jpg",
    "/images/packageReview/vietnam/6.jpg",
    "/images/packageReview/vietnam/7.jpg",
    "/images/packageReview/vietnam/8.jpg",
    "/images/packageReview/vietnam/9.jpg",
    "/images/packageReview/vietnam/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Beautiful Vietnam Tour",

  price: "59,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Hanoi - Da Nang - Ho Chi Minh Vietnam",

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
    Explore the beauty of Vietnam with this amazing holiday package.
    Discover historical cities, beautiful beaches, stunning landscapes and
    rich Vietnamese culture while enjoying comfortable stays and sightseeing.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Vietnam",
      image: "/images/packageReview/vietnam/1.jpg",
      description:
        "Arrive in Vietnam and transfer to your hotel. Enjoy the evening at leisure.",
    },

    {
      day: 2,
      title: "Hanoi City Tour",
      image: "/images/packageReview/vietnam/2.jpg",
      description:
        "Explore Hanoi's famous attractions, historical places and local markets.",
    },

    {
      day: 3,
      title: "Halong Bay Experience",
      image: "/images/packageReview/vietnam/3.jpg",
      description:
        "Enjoy a beautiful Halong Bay cruise surrounded by amazing natural views.",
    },

    {
      day: 4,
      title: "Da Nang & Hoi An Tour",
      image: "/images/packageReview/vietnam/4.jpg",
      description:
        "Explore Da Nang beaches and the charming ancient town of Hoi An.",
    },

    {
      day: 5,
      title: "Ba Na Hills Visit",
      image: "/images/packageReview/vietnam/5.jpg",
      description:
        "Visit Ba Na Hills and enjoy the famous Golden Bridge experience.",
    },

    {
      day: 6,
      title: "Ho Chi Minh Sightseeing",
      image: "/images/packageReview/vietnam/6.jpg",
      description:
        "Explore Ho Chi Minh City and discover its famous landmarks.",
    },

    {
      day: 7,
      title: "Departure From Vietnam",
      image: "/images/packageReview/vietnam/7.jpg",
      description:
        "Transfer to the airport for your onward journey with beautiful memories.",
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
    "Sightseeing as per itinerary",
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

export default vietnam;