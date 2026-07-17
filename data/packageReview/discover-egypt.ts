import type { PackageReview } from "@/types/packageReview";

const discoverEgypt: PackageReview = {
  slug: "discover-egypt",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/discover-egypt/1.jpg",
    "/images/packageReview/discover-egypt/2.jpg",
    "/images/packageReview/discover-egypt/3.jpg",
    "/images/packageReview/discover-egypt/4.jpg",
    "/images/packageReview/discover-egypt/5.jpg",
    "/images/packageReview/discover-egypt/6.jpg",
    "/images/packageReview/discover-egypt/7.jpg",
    "/images/packageReview/discover-egypt/8.jpg",
    "/images/packageReview/discover-egypt/9.jpg",
    "/images/packageReview/discover-egypt/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Discover Egypt Tour",

  price: "69,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Cairo - Nile - Egypt",

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
    Discover the timeless beauty of Egypt with this amazing holiday package.
    Explore ancient pyramids, historical monuments, the mighty Nile River and
    famous Egyptian attractions. This journey combines history, culture and
    adventure for an unforgettable travel experience.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Cairo",
      image: "/images/packageReview/discover-egypt/1.jpg",
      description:
        "Arrive at Cairo airport and transfer to your hotel. Enjoy a comfortable stay in Cairo.",
    },

    {
      day: 2,
      title: "Pyramids Of Giza & Cairo Sightseeing",
      image: "/images/packageReview/discover-egypt/2.jpg",
      description:
        "Visit the Great Pyramids, Sphinx and explore the ancient wonders of Egypt.",
    },

    {
      day: 3,
      title: "Cairo Museum & Old City Tour",
      image: "/images/packageReview/discover-egypt/3.jpg",
      description:
        "Explore Egyptian Museum, old Cairo streets and historical attractions.",
    },

    {
      day: 4,
      title: "Nile Cruise Experience",
      image: "/images/packageReview/discover-egypt/4.jpg",
      description:
        "Enjoy a beautiful Nile experience and discover the charm of Egyptian culture.",
    },

    {
      day: 5,
      title: "Egypt Cultural Exploration",
      image: "/images/packageReview/discover-egypt/5.jpg",
      description:
        "Explore local markets, famous landmarks and enjoy free time.",
    },

    {
      day: 6,
      title: "Leisure Day In Egypt",
      image: "/images/packageReview/discover-egypt/6.jpg",
      description:
        "Enjoy shopping, local food and memorable experiences before departure.",
    },

    {
      day: 7,
      title: "Departure From Egypt",
      image: "/images/packageReview/discover-egypt/7.jpg",
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
    "Sightseeing tours",
    "Transportation as per itinerary",
    "Professional assistance",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Visa fees",
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
    "Package prices may vary depending on availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid passport and travel documents are required.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel check-in and check-out timings follow hotel rules.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default discoverEgypt;