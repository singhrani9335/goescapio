import type { PackageReview } from "@/types/packageReview";

const amsterdamParis: PackageReview = {
  slug: "amsterdam-paris",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
  "/images/packageReview/amsterdam-paris/gallery/1.jpg",
  "/images/packageReview/amsterdam-paris/gallery/2.jpg",
  "/images/packageReview/amsterdam-paris/gallery/3.jpg",
  "/images/packageReview/amsterdam-paris/gallery/4.jpg",
  "/images/packageReview/amsterdam-paris/gallery/5.jpg",
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Amsterdam Paris Tour",

  price: "89,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Amsterdam - Paris Europe",

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
    Experience the charm of Europe with this amazing Amsterdam and Paris tour.
    Explore the beautiful canals of Amsterdam, iconic landmarks, museums and
    enjoy the magical beauty of Paris including world-famous attractions.
    This package offers comfortable stays, sightseeing, transfers and memorable
    experiences across two of Europe's most beautiful destinations.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
  {
    day: 1,
    title: "Arrival in Amsterdam",
    image: "/images/packageReview/amsterdam-paris/itinerary/1.jpg",
    description:
      "Arrive at Amsterdam Schiphol Airport and transfer to your hotel. Check in and spend the rest of the day at leisure exploring the nearby canals, cafés, and charming streets.",
  },
  {
    day: 2,
    title: "Amsterdam City Tour",
    image: "/images/packageReview/amsterdam-paris/itinerary/2.jpg",
    description:
      "After breakfast, enjoy a guided city tour covering Dam Square, the Royal Palace, the Anne Frank House (outside), Museum Square, and a scenic Amsterdam canal cruise.",
  },
  {
    day: 3,
    title: "Zaanse Schans & Volendam Excursion",
    image: "/images/packageReview/amsterdam-paris/itinerary/3.jpg",
    description:
      "Visit the picturesque Dutch countryside including Zaanse Schans windmills, a traditional cheese factory, wooden shoe workshop, and the charming fishing village of Volendam.",
  },
  {
    day: 4,
    title: "Amsterdam to Paris",
    image: "/images/packageReview/amsterdam-paris/itinerary/4.jpg",
    description:
      "Travel from Amsterdam to Paris by high-speed train or coach. Upon arrival, transfer to your hotel and enjoy the evening exploring the beautiful streets of Paris.",
  },
  {
    day: 5,
    title: "Paris City Tour",
    image: "/images/packageReview/amsterdam-paris/itinerary/5.jpg",
    description:
      "Discover the highlights of Paris including the Eiffel Tower (2nd Level if included), Arc de Triomphe, Champs-Élysées, Place de la Concorde, and a panoramic city tour.",
  },
  {
    day: 6,
    title: "Disneyland Paris Excursion",
    image: "/images/packageReview/amsterdam-paris/itinerary/6.jpg",
    description:
      "Spend an exciting day at Disneyland Paris enjoying thrilling rides, spectacular parades, themed attractions, shopping, and entertainment for all ages.",
  },
  {
    day: 7,
    title: "Seine River Cruise & Leisure",
    image: "/images/packageReview/amsterdam-paris/itinerary/7.jpg",
    description:
      "Enjoy a relaxing cruise along the Seine River while admiring Paris' iconic landmarks. Spend the remaining day shopping or exploring the city's famous cafés and boutiques.",
  },
  {
    day: 8,
    title: "Free Day in Paris",
    image: "/images/packageReview/amsterdam-paris/itinerary/8.jpg",
    description:
      "Enjoy the day at leisure or choose optional excursions such as the Louvre Museum, Palace of Versailles, Montmartre, or Galeries Lafayette for shopping.",
  },
  {
    day: 9,
    title: "Departure from Paris",
    image: "/images/packageReview/amsterdam-paris/itinerary/9.jpg",
    description:
      "After breakfast, check out from the hotel and transfer to Paris Airport for your onward journey with unforgettable memories of Amsterdam and Paris.",
  },
],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation in selected hotels",
    "Daily breakfast",
    "Airport transfers",
    "Intercity transfers between Amsterdam and Paris",
    "City sightseeing tours",
    "Professional tour assistance",
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
    "Package rates may change based on hotel and transport availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Travel documents must be valid before departure.",
    "Go Escapio is not responsible for delays caused by airlines or third-party services.",
    "Hotel check-in and check-out timings will follow property rules.",
    "Any additional expenses will be paid directly by the traveller.",
    "Travel insurance is recommended.",
    "Rates and services are subject to availability.",
  ],
};

export default amsterdamParis;