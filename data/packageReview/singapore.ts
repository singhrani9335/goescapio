import type { PackageReview } from "@/types/packageReview";

const singapore: PackageReview = {
  slug: "singapore",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/singapore/gallery/1.jpg",
  "/images/packageReview/singapore/gallery/2.jpg",
  "/images/packageReview/singapore/gallery/3.jpg",
  "/images/packageReview/singapore/gallery/4.jpg",
  "/images/packageReview/singapore/gallery/5.jpg",
],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Singapore Highlights",

  price: "54,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Singapore",

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
    Explore the modern city of Singapore with its iconic skyline,
    beautiful gardens, world-class attractions and vibrant nightlife.
    Visit Marina Bay Sands, Gardens by the Bay, Sentosa Island,
    Universal Studios Singapore and enjoy a perfect blend of
    sightseeing, shopping and entertainment during this memorable holiday.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival in Singapore & Night Safari",
    image: "/images/packageReview/singapore/itinerary/1.jpg",
    description:
      "Arrive at Singapore Changi Airport and transfer to your hotel. After check-in, spend the evening visiting the famous Night Safari, where you can experience a unique wildlife adventure in a natural nocturnal environment.",
  },

  {
    day: 2,
    title: "Singapore City Tour",
    image: "/images/packageReview/singapore/itinerary/2.jpg",
    description:
      "After breakfast, enjoy a guided city tour covering Merlion Park, Marina Bay Sands, Gardens by the Bay, Chinatown, Little India, and other iconic landmarks while experiencing Singapore's modern skyline and multicultural heritage.",
  },

  {
    day: 3,
    title: "Sentosa Island & Universal Studios",
    image: "/images/packageReview/singapore/itinerary/3.jpg",
    description:
      "Spend the day exploring Sentosa Island and enjoy exciting attractions including Universal Studios Singapore, Cable Car rides (if included), beautiful beaches, live entertainment, and unforgettable experiences for all ages.",
  },

  {
    day: 4,
    title: "Departure from Singapore",
    image: "/images/packageReview/singapore/itinerary/4.jpg",
    description:
      "After breakfast, check out from the hotel and transfer to Singapore Changi Airport for your onward journey with unforgettable memories of your Singapore holiday.",
  },
],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "4 nights accommodation on twin-sharing basis",
    "Daily breakfast at the hotel",
    "Airport transfers on SIC basis",
    "Singapore city tour",
    "Night Safari entry tickets",
    "Sentosa Island tour with Cable Car",
    "Universal Studios Singapore admission",
    "All sightseeing and transfers as per itinerary",
    "All applicable taxes (excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Singapore Visa charges",
    "Travel insurance",
    "Lunch and dinner unless specified",
    "Personal expenses such as shopping and laundry",
    "Optional sightseeing and activities",
    "Tips, porterage and driver gratuity",
    "GST and government taxes not mentioned",
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
  "Travellers are responsible for carrying valid travel documents. Go Escapio is not liable for any documentation issues.",
  "Go Escapio is not responsible for flight delays, baggage issues, missed connections, or cancellations.",
  "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.",
  "City taxes, personal expenses, optional tours, and services not specifically mentioned in the inclusions are not included in the package.",
  "Visa approval is solely at the discretion of the respective embassy or immigration authorities. Go Escapio is not liable for visa delays or rejections.",
  "Travel insurance is highly recommended and is not included in the package. Travellers are responsible for their own safety during all activities.",
  "Go Escapio acts only as an intermediary for airlines, hotels, transport providers, and other service providers, and is not liable for third-party service disruptions or losses.",
  "Hotel rates, room categories, and all services are subject to availability at the time of booking.",
  "Limited availability. Blackout dates may apply. Book your package in advance to avoid disappointment.",
],
};

export default singapore;