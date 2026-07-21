import type { PackageReview } from "@/types/packageReview";

const iceland: PackageReview = {
  slug: "iceland",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/iceland/gallery/1.jpg",
    "/images/packageReview/iceland/gallery/2.jpg",
    "/images/packageReview/iceland/gallery/3.jpg",
    "/images/packageReview/iceland/gallery/4.jpg",
    "/images/packageReview/iceland/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Iceland Holiday",

  price: "1,09,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Reykjavik - Iceland",

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
Discover the raw beauty of Iceland, a land shaped by fire and ice, where dramatic waterfalls, volcanic landscapes, glaciers, and Arctic skies come together to create an unforgettable experience. Based in Reykjavík, this carefully curated itinerary combines guided sightseeing with leisure time, allowing you to explore Iceland’s iconic South Coast, immerse yourself in Viking history, and optionally chase the magical Northern Lights.

Ideal for first-time visitors, this tour offers flexibility, comfort, and breathtaking natural wonders at every turn.
`,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Reykjavik",
      image: "/images/packageReview/iceland/itinerary/1.jpg",
      description:
        "Upon arrival at Keflavik International Airport (KEF), you will be met by a local representative and transferred privately to your hotel in Reykjavík. Hotel check-in will be as per standard timings; early check-in is subject to availability and may incur additional charges. The rest of the day is free for you to relax or explore the city at your own pace. Dinner will be on your own. Optional Activity (Evening): Northern Lights Mystery Tour. Experience one of nature’s most spectacular phenomena as you venture out on a guided Northern Lights hunt. Your guide will take you to the best viewing locations away from city lights. Sightings depend on weather and solar activity and cannot be guaranteed. Approximate supplement: EUR 75 per person.",
    },

    {
      day: 2,
      title: "Golden Circle Tour",
      image: "/images/packageReview/iceland/itinerary/2.jpg",
      description:
        "Explore Iceland’s famous Golden Circle route featuring Þingvellir National Park, the Geysir geothermal area, and the magnificent Gullfoss Waterfall. Enjoy breathtaking scenery and learn about Iceland’s fascinating geological history.",
    },

    {
      day: 3,
      title: "South Coast Adventure",
      image: "/images/packageReview/iceland/itinerary/3.jpg",
      description:
        "Embark on a full-day journey along Iceland’s spectacular South Coast. Visit the iconic Seljalandsfoss and Skógafoss waterfalls, admire the dramatic Reynisfjara Black Sand Beach, and witness unforgettable coastal landscapes surrounded by glaciers and volcanic cliffs.",
    },
        {
      day: 4,
      title: "Glacier & Nature Experience",
      image: "/images/packageReview/iceland/itinerary/4.jpg",
      description:
        "Spend the day discovering Iceland’s spectacular glaciers and untouched natural beauty. Enjoy breathtaking mountain views, lava fields, and picturesque landscapes while experiencing the unique charm of Iceland's wilderness.",
    },

    {
      day: 5,
      title: "Blue Lagoon Experience",
      image: "/images/packageReview/iceland/itinerary/5.jpg",
      description:
        "Relax and rejuvenate at the world-famous Blue Lagoon geothermal spa. Soak in the mineral-rich warm waters surrounded by lava fields and enjoy one of Iceland’s most iconic wellness experiences.",
    },

    {
      day: 6,
      title: "Departure from Iceland",
      image: "/images/packageReview/iceland/itinerary/6.jpg",
      description:
        "After breakfast, check out from the hotel. A private transfer will be arranged approximately 3–4 hours prior to your departure flight to Keflavik International Airport (KEF). Depart Iceland with unforgettable memories of its extraordinary landscapes, natural wonders, and unique experiences.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "5 nights accommodation in Reykjavík (hotel category as selected or similar)",
    "Daily breakfast (except Day 1)",
    "Private return airport transfers in Reykjavík",
    "Reykjavík Walking Tour (shared basis)",
    "South Coast Full-Day Small Group Tour (SIC basis)",
    "Overseas Travel Insurance (up to 60 years of age)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International & domestic airfare",
    "Airport taxes & visa charges",
    "Lunches and dinners (unless specified)",
    "Drinks during meals",
    "TCS & GST (charged extra on final amount)",
    "Laundry, telephone, optional excursions & personal expenses",
    "Mandatory tipping: EUR 10 per person per day (guide/driver)",
    "City taxes / resort fees (payable directly at hotel)",
    "Cost of foreign exchange for personal use",
    "Any item not mentioned under 'Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
    "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
    "Payments must strictly follow the defined payment policy; non-compliance may lead to service cancellations.",
    "All cancellations must be be submitted in writing; cancellation charges apply as per policy.",
    "Go Escapio reserves the right to modify itineraries or services due to unforeseen circumstances.",
    "Travellers are responsible for valid travel documents; Go Escapio is not liable for any documentation issues.",
    "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
    "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM; early check-in/late check-out is chargeable.",
    "City taxes, personal expenses, and optional tours are not included in the package.",
    "Visa approval is at the discretion of the embassy; Go Escapio holds no liability for delays or rejections.",
    "Travel insurance is recommended and the traveller is responsible for safety during activities.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default iceland;