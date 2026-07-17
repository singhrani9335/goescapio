import type { PackageReview } from "@/types/packageReview";

const dubaiExtravaganza: PackageReview = {
  slug: "dubai-extravaganza",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/dubai-extravaganza/1.jpg",
    "/images/packageReview/dubai-extravaganza/2.jpg",
    "/images/packageReview/dubai-extravaganza/3.jpg",
    "/images/packageReview/dubai-extravaganza/4.jpg",
    "/images/packageReview/dubai-extravaganza/5.jpg",
    "/images/packageReview/dubai-extravaganza/6.jpg",
    "/images/packageReview/dubai-extravaganza/7.jpg",
    "/images/packageReview/dubai-extravaganza/8.jpg",
    "/images/packageReview/dubai-extravaganza/9.jpg",
    "/images/packageReview/dubai-extravaganza/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Dubai Extravaganza",

  price: "59,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Dubai - UAE",

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
    Experience the luxury and excitement of Dubai with this amazing holiday
    package. Explore iconic skyscrapers, desert adventures, shopping malls,
    beautiful beaches and world-famous attractions. Enjoy a perfect blend of
    adventure, entertainment and unforgettable memories in Dubai.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Dubai",
      image: "/images/packageReview/dubai-extravaganza/1.jpg",
      description:
        "Arrive at Dubai airport and transfer to your hotel. Enjoy leisure time after check-in.",
    },

    {
      day: 2,
      title: "Dubai City Tour",
      image: "/images/packageReview/dubai-extravaganza/2.jpg",
      description:
        "Explore Dubai's famous attractions including Burj Al Arab, Jumeirah Beach and Dubai Marina.",
    },

    {
      day: 3,
      title: "Desert Safari Experience",
      image: "/images/packageReview/dubai-extravaganza/3.jpg",
      description:
        "Enjoy thrilling desert safari with dune bashing, entertainment shows and dinner.",
    },

    {
      day: 4,
      title: "Dubai Mall & Burj Khalifa Visit",
      image: "/images/packageReview/dubai-extravaganza/4.jpg",
      description:
        "Visit Dubai Mall and experience the world's tallest building, Burj Khalifa.",
    },

    {
      day: 5,
      title: "Leisure & Shopping Day",
      image: "/images/packageReview/dubai-extravaganza/5.jpg",
      description:
        "Enjoy shopping, local attractions and explore Dubai at your own pace.",
    },

    {
      day: 6,
      title: "Departure From Dubai",
      image: "/images/packageReview/dubai-extravaganza/6.jpg",
      description:
        "Check out from the hotel and transfer to Dubai airport for your return journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Dubai city tour",
    "Desert safari with dinner",
    "Private transfers as per itinerary",
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
    "Package rates may change based on availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per policy.",
    "Valid passport and travel documents are mandatory.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "Services are subject to availability.",
  ],
};

export default dubaiExtravaganza;