import type { PackageReview } from "@/types/packageReview";

const maldivesSerenity: PackageReview = {
  slug: "maldives-serenity",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/maldives-serenity/1.jpg",
    "/images/packageReview/maldives-serenity/2.jpg",
    "/images/packageReview/maldives-serenity/3.jpg",
    "/images/packageReview/maldives-serenity/4.jpg",
    "/images/packageReview/maldives-serenity/5.jpg",
    "/images/packageReview/maldives-serenity/6.jpg",
    "/images/packageReview/maldives-serenity/7.jpg",
    "/images/packageReview/maldives-serenity/8.jpg",
    "/images/packageReview/maldives-serenity/9.jpg",
    "/images/packageReview/maldives-serenity/10.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Maldives Serenity",

  price: "89,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Maldives",

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
    Discover the peaceful side of the Maldives with an unforgettable
    stay in luxurious beachfront and overwater villas. Relax on white
    sandy beaches, explore crystal-clear lagoons, enjoy romantic
    candlelight dinners, island excursions and spectacular sunsets.
    This package is perfect for honeymooners, couples and luxury
    travellers looking for a serene tropical escape.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Maldives",
      image: "/images/packageReview/maldives-serenity/1.jpg",
      description:
        "Arrive at Male International Airport and transfer to your luxury resort by speedboat or seaplane. Check in and relax by the beach.",
    },
    {
      day: 2,
      title: "Beach Leisure",
      image: "/images/packageReview/maldives-serenity/2.jpg",
      description:
        "Enjoy a relaxing day at the resort with access to private beaches, infinity pools and wellness facilities.",
    },
    {
      day: 3,
      title: "Snorkeling & Island Excursion",
      image: "/images/packageReview/maldives-serenity/3.jpg",
      description:
        "Explore vibrant coral reefs through snorkeling and enjoy an optional island hopping experience.",
    },
    {
      day: 4,
      title: "Water Villa Experience",
      image: "/images/packageReview/maldives-serenity/4.jpg",
      description:
        "Upgrade your experience with a stay in a luxurious overwater villa and enjoy breathtaking ocean views.",
    },
    {
      day: 5,
      title: "Sunset Cruise & Romantic Dinner",
      image: "/images/packageReview/maldives-serenity/5.jpg",
      description:
        "Spend the evening on a sunset cruise followed by a romantic candlelight dinner by the beach.",
    },
    {
      day: 6,
      title: "Departure",
      image: "/images/packageReview/maldives-serenity/6.jpg",
      description:
        "After breakfast, check out from the resort and transfer to Male International Airport for your onward journey.",
    },
  ],

    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "5 nights accommodation in Beach Villa / Water Villa",
    "Daily breakfast and dinner",
    "Return speedboat or seaplane transfers",
    "Welcome drink on arrival",
    "Complimentary Wi-Fi",
    "Snorkeling equipment (one session)",
    "Sunset cruise experience",
    "Candlelight dinner for couples",
    "Access to resort facilities",
    "All applicable taxes (excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Travel insurance",
    "Lunch unless specified",
    "Scuba diving and premium water sports",
    "Spa and wellness treatments",
    "Mini bar charges",
    "Personal expenses",
    "GST and government taxes not mentioned",
    "Anything not mentioned under inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "Package confirmation is subject to availability.",
    "Passport must be valid for at least 6 months from the date of travel.",
    "Hotel check-in and check-out timings are as per resort policy.",
    "Unused services are non-refundable.",
    "Itinerary may change due to weather or operational reasons.",
    "Cancellation charges apply as per company policy.",
    "Travel insurance is strongly recommended.",
    "Water sports and excursions are subject to weather conditions.",
    "Go Escapio is not responsible for airline delays or cancellations.",
    "All disputes are subject to Delhi jurisdiction.",
  ],
};

export default maldivesSerenity;