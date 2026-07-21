import type { PackageReview } from "@/types/packageReview";

const maldivesSerenity: PackageReview = {
  slug: "maldives-serenity",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

 gallery: [
  "/images/packageReview/maldives-serenity/gallery/1.jpg",
  "/images/packageReview/maldives-serenity/gallery/2.jpg",
  "/images/packageReview/maldives-serenity/gallery/3.jpg",
  "/images/packageReview/maldives-serenity/gallery/4.jpg",
  "/images/packageReview/maldives-serenity/gallery/5.jpg",
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
    title: "Arrival In Srinagar & Dal Lake Shikara Ride",
    image: "/images/packageReview/marvelous-kashmir/itinerary/1.jpg",
    description:
      "Arrive at Srinagar Airport where our representative will receive you and transfer you to your hotel. After check-in, visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh and Chashme Shahi. In the evening, enjoy a relaxing Shikara ride on the beautiful Dal Lake. Overnight stay in Srinagar.",
  },

  {
    day: 2,
    title: "Srinagar To Sonmarg & Return",
    image: "/images/packageReview/marvelous-kashmir/itinerary/2.jpg",
    description:
      "After breakfast, proceed for a full-day excursion to Sonmarg, popularly known as the 'Meadow of Gold'. Enjoy breathtaking mountain views, lush meadows and the scenic Sindh Valley. Optional pony rides to Thajiwas Glacier are available at an additional cost. Return to Srinagar by evening for an overnight stay.",
  },

  {
    day: 3,
    title: "Srinagar To Pahalgam",
    image: "/images/packageReview/marvelous-kashmir/itinerary/3.jpg",
    description:
      "After breakfast, drive to Pahalgam via the famous Pampore saffron fields and the historic Avantipura ruins. Enjoy the picturesque Lidder River, pine forests and beautiful valleys before checking into your hotel. Evening at leisure. Overnight stay in Pahalgam.",
  },

  {
    day: 4,
    title: "Pahalgam – Leisure & Sightseeing",
    image: "/images/packageReview/marvelous-kashmir/itinerary/4.jpg",
    description:
      "After breakfast, enjoy a leisurely day exploring the beauty of Pahalgam. Visit Aru Valley, Betaab Valley and Chandanwari (by local taxi at your own expense if applicable). Spend time amidst the stunning Himalayan landscapes before returning to the hotel. Overnight stay in Pahalgam.",
  },

  {
    day: 5,
    title: "Pahalgam To Gulmarg & Srinagar",
    image: "/images/packageReview/marvelous-kashmir/itinerary/5.jpg",
    description:
      "After breakfast, drive to Gulmarg, one of India's most famous hill stations. Enjoy panoramic mountain views, explore the beautiful meadows and take an optional Gondola Cable Car ride (at additional cost). Later, drive back to Srinagar and check into a traditional houseboat or hotel for an overnight stay.",
  },

  {
    day: 6,
    title: "Departure From Srinagar",
    image: "/images/packageReview/marvelous-kashmir/itinerary/6.jpg",
    description:
      "After breakfast, check out from the hotel or houseboat and transfer to Srinagar Airport for your onward journey with unforgettable memories of the breathtaking Kashmir Valley.",
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