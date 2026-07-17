import type { PackageReview } from "@/types/packageReview";

const classicGeorgia: PackageReview = {
  slug: "classic-georgia",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/classic-georgia/1.jpg",
    "/images/packageReview/classic-georgia/2.jpg",
    "/images/packageReview/classic-georgia/3.jpg",
    "/images/packageReview/classic-georgia/4.jpg",
    "/images/packageReview/classic-georgia/5.jpg",
    "/images/packageReview/classic-georgia/6.jpg",
    "/images/packageReview/classic-georgia/7.jpg",
    "/images/packageReview/classic-georgia/8.jpg",
    "/images/packageReview/classic-georgia/9.jpg",
    "/images/packageReview/classic-georgia/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Classic Georgia Tour",

  price: "44,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Tbilisi - Gudauri - Georgia",

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
    Explore the breathtaking beauty of Georgia with this classic holiday
    package. Discover the historic charm of Tbilisi, stunning mountain views
    of Gudauri and the cultural treasures of this beautiful country.
    Enjoy scenic landscapes, local experiences and unforgettable memories.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Tbilisi",
      image: "/images/packageReview/classic-georgia/1.jpg",
      description:
        "Arrive at Tbilisi airport and transfer to your hotel. Relax and explore the city surroundings.",
    },

    {
      day: 2,
      title: "Tbilisi City Tour",
      image: "/images/packageReview/classic-georgia/2.jpg",
      description:
        "Explore Tbilisi old town, historic monuments, famous streets and cultural attractions.",
    },

    {
      day: 3,
      title: "Tbilisi To Gudauri",
      image: "/images/packageReview/classic-georgia/3.jpg",
      description:
        "Travel towards Gudauri and enjoy beautiful mountain roads, viewpoints and scenic landscapes.",
    },

    {
      day: 4,
      title: "Gudauri & Kazbegi Sightseeing",
      image: "/images/packageReview/classic-georgia/4.jpg",
      description:
        "Visit famous attractions including Kazbegi mountains and enjoy the natural beauty of Georgia.",
    },

    {
      day: 5,
      title: "Return To Tbilisi",
      image: "/images/packageReview/classic-georgia/5.jpg",
      description:
        "Return to Tbilisi and enjoy shopping, cafes and leisure activities.",
    },

    {
      day: 6,
      title: "Departure From Georgia",
      image: "/images/packageReview/classic-georgia/6.jpg",
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
    "Sightseeing as per itinerary",
    "Local guide assistance",
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
    "Bookings are subject to availability.",
    "Package cost may change based on availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per policy.",
    "Valid travel documents are required.",
    "Go Escapio is not responsible for airline delays.",
    "Hotel policies will apply.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default classicGeorgia;