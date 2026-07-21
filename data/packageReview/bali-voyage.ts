import type { PackageReview } from "@/types/packageReview";

const baliVoyage: PackageReview = {
  slug: "bali-voyage",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/bali-voyage/gallery/1.jpg",
  "/images/packageReview/bali-voyage/gallery/2.jpg",
  "/images/packageReview/bali-voyage/gallery/3.jpg",
  "/images/packageReview/bali-voyage/gallery/4.jpg",
  "/images/packageReview/bali-voyage/gallery/5.jpg",
],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Bali Voyage",

  price: "59,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Bali, Indonesia",

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
    Discover the enchanting island of Bali with this carefully crafted
    5-day holiday package. Visit ancient temples, lush rice terraces,
    breathtaking waterfalls, pristine beaches and vibrant local markets.
    Experience Balinese culture, enjoy exciting water sports, witness
    spectacular sunsets at Tanah Lot Temple and relax amidst tropical
    landscapes. This itinerary is perfect for honeymooners, families and
    friends looking for a memorable island escape.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival In Bali & Leisure Day",
    image: "/images/packageReview/bali-voyage/itinerary/1.jpg",
    description:
      "Arrive at Ngurah Rai International Airport, meet our representative and transfer to your hotel. Spend the rest of the day at leisure exploring nearby beaches or relaxing at the resort.",
  },
  {
    day: 2,
    title: "Kintamani Volcano & Ubud Tour",
    image: "/images/packageReview/bali-voyage/itinerary/2.jpg",
    description:
      "Visit the famous Kintamani Volcano, Tegenungan Waterfall, Ubud Art Market, coffee plantations and the beautiful Tegallalang Rice Terraces.",
  },
  {
    day: 3,
    title: "Water Sports & Uluwatu Temple",
    image: "/images/packageReview/bali-voyage/itinerary/3.jpg",
    description:
      "Enjoy thrilling water sports at Tanjung Benoa followed by a visit to the iconic Uluwatu Temple overlooking the Indian Ocean. Witness a spectacular sunset before returning to the hotel.",
  },
  {
    day: 4,
    title: "Tanah Lot Temple & Local Sightseeing",
    image: "/images/packageReview/bali-voyage/itinerary/4.jpg",
    description:
      "Explore Bali's cultural attractions including Tanah Lot Temple, local handicraft villages and enjoy shopping for traditional Balinese souvenirs.",
  },
  {
    day: 5,
    title: "Departure From Bali",
    image: "/images/packageReview/bali-voyage/itinerary/5.jpg",
    description:
      "Check out from the hotel and transfer to the airport for your onward journey with unforgettable memories of Bali.",
  },
],

    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Return airport transfers in private AC vehicle",
    "5 nights accommodation at selected hotels/resorts",
    "Daily breakfast at hotel",
    "Private sightseeing as per itinerary",
    "Intercity transfers during the tour",
    "English-speaking local guide for selected attractions",
    "All applicable parking, toll and driver charges",
    "Entrance tickets to attractions mentioned in the itinerary",
    "All applicable taxes (excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International or domestic airfare",
    "Lunch and dinner unless specifically mentioned",
    "Personal expenses such as shopping, laundry and minibar",
    "Travel insurance",
    "Visa fees (if applicable)",
    "Adventure activities not mentioned in inclusions",
    "Tips, porterage and optional tours",
    "GST and any increase in government taxes",
    "Anything not specifically mentioned under inclusions",
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
  "Travellers are responsible for carrying valid travel documents; Go Escapio is not liable for any documentation issues.",
  "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
  "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM; early check-in or late check-out may incur additional charges.",
  "City taxes, personal expenses, and optional tours are not included in the package unless specifically mentioned.",
  "Visa approval is at the sole discretion of the respective embassy or immigration authorities; Go Escapio holds no liability for delays or rejections.",
  "Travel insurance is recommended and not included; travellers are responsible for their safety during all activities.",
  "Go Escapio acts as an intermediary and is not liable for any third-party service disruptions, delays, or losses.",
  "Rates and room availability are subject to confirmation at the time of booking.",
  "Limited availability. Blackout dates may apply. Book now.",
],
};

export default baliVoyage;