import type { PackageReview } from "@/types/packageReview";

const marvelousKashmir: PackageReview = {
  slug: "marvelous-kashmir",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/marvelous-kashmir/gallery/1.jpg",
    "/images/packageReview/marvelous-kashmir/gallery/2.jpg",
    "/images/packageReview/marvelous-kashmir/gallery/3.jpg",
    "/images/packageReview/marvelous-kashmir/gallery/4.jpg",
    "/images/packageReview/marvelous-kashmir/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 nights & 6 days marvelous kashmir",

  price: "18,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Pahalgam - India",

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
    Experience the unparalleled beauty of Kashmir, known as "Paradise on Earth," with this 5 Nights / 6 Days holiday. Explore Srinagar, Sonmarg, Pahalgam and Gulmarg while enjoying scenic valleys, snow-capped mountains, Mughal Gardens, Dal Lake Shikara rides and unforgettable Himalayan landscapes. This tour is ideal for couples, families and nature lovers seeking relaxation, adventure and authentic Kashmiri hospitality.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Srinagar",
      image: "/images/packageReview/marvelous-kashmir/itinerary/1.jpg",
      description:
        "Arrive at Srinagar Airport where our representative will receive you and transfer you to your hotel. After check-in, enjoy local sightseeing including the famous Mughal Gardens, Nishat Bagh, Shalimar Bagh and Chashme Shahi. In the evening, enjoy a peaceful Shikara ride on Dal Lake. Overnight stay in Srinagar.",
    },

    {
      day: 2,
      title: "Srinagar – Sonmarg Excursion",
      image: "/images/packageReview/marvelous-kashmir/itinerary/2.jpg",
      description:
        "After breakfast, proceed for a full-day excursion to Sonmarg, also known as the 'Meadow of Gold'. Enjoy breathtaking mountain views, glaciers and beautiful valleys. Optional pony rides to Thajiwas Glacier are available at your own expense. Return to Srinagar by evening. Overnight stay in Srinagar.",
    },

    {
      day: 3,
      title: "Srinagar – Pahalgam",
      image: "/images/packageReview/marvelous-kashmir/itinerary/3.jpg",
      description:
        "After breakfast, drive to Pahalgam via Pampore saffron fields and the historic Avantipura ruins. Enjoy the beautiful Lidder River, lush valleys and pine forests before checking into your hotel. Evening at leisure. Overnight stay in Pahalgam.",
    },
        {
      day: 4,
      title: "Pahalgam Sightseeing",
      image: "/images/packageReview/marvelous-kashmir/itinerary/4.jpg",
      description:
        "After breakfast, enjoy a full day exploring the beautiful valleys of Pahalgam. Visit Aru Valley, Betaab Valley and Chandanwari (by local taxi at your own cost, if applicable). Spend the day amidst breathtaking scenery before returning to the hotel. Overnight stay in Pahalgam.",
    },

    {
      day: 5,
      title: "Pahalgam – Gulmarg – Srinagar",
      image: "/images/packageReview/marvelous-kashmir/itinerary/5.jpg",
      description:
        "After breakfast, drive to Gulmarg, one of India's most popular hill stations. Enjoy panoramic views, visit the famous golf course and take the optional Gondola Cable Car ride (at extra cost). Later, return to Srinagar and check in to a traditional houseboat for an unforgettable overnight stay.",
    },

    {
      day: 6,
      title: "Departure",
      image: "/images/packageReview/marvelous-kashmir/itinerary/6.jpg",
      description:
        "After breakfast, check out from the houseboat/hotel and transfer to Srinagar Airport for your onward journey with unforgettable memories of Kashmir.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation in the mentioned base category rooms",
    "Daily buffet breakfast & dinner at all hotels",
    "Welcome drink on arrival",
    "01 hour Shikara ride on Dal Lake",
    "Airport pick-up & drop at Srinagar",
    "All sightseeing and transfers as per itinerary",
    "Private vehicle for the complete tour",
    "Driver allowance, fuel charges and parking",
    "All applicable taxes",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare / Train tickets",
    "Lunch and any meals not mentioned",
    "Gondola ride charges in Gulmarg",
    "Pony rides and local union vehicles",
    "Personal expenses such as shopping, laundry and tips",
    "Travel insurance",
    "5% GST",
    "Anything not mentioned under inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
    "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
    "Payments must strictly follow the defined payment policy; non-compliance may lead to service cancellations.",
    "All cancellations must be submitted in writing; cancellation charges apply as per policy.",
    "Go Escapio reserves the right to modify itineraries or services due to unforeseen circumstances.",
    "Travellers are responsible for valid travel documents; Go Escapio is not liable for any documentation issues.",
    "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
    "Hotel check-in is generally at 2 PM and check-out at 11 AM; early check-in/late check-out is subject to availability and additional charges.",
    "City taxes, personal expenses and optional activities are not included unless specifically mentioned.",
    "Travel insurance is recommended and not included in the package.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and hotel rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default marvelousKashmir;