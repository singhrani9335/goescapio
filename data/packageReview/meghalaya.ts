import type { PackageReview } from "@/types/packageReview";

const meghalaya: PackageReview = {
  slug: "meghalaya",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/meghalaya/gallery/1.jpg",
  "/images/packageReview/meghalaya/gallery/2.jpg",
  "/images/packageReview/meghalaya/gallery/3.jpg",
  "/images/packageReview/meghalaya/gallery/4.jpg",
  "/images/packageReview/meghalaya/gallery/5.jpg",
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Magical Meghalaya Tour",

  price: "32,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Shillong - Cherrapunji - Meghalaya",

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
    Explore the natural beauty of Meghalaya with this amazing holiday package.
    Discover waterfalls, living root bridges, beautiful hills and peaceful
    landscapes. Experience the charm of Shillong, Cherrapunji and the unique
    culture of Northeast India.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival in Shillong",
    image: "/images/packageReview/meghalaya/itinerary/1.jpg",
    description:
      "Arrive at Guwahati Airport and drive to the picturesque hill station of Shillong. En route, visit the beautiful Umiam Lake, one of Meghalaya's most scenic attractions. Check in to your hotel and spend the evening at leisure exploring the local markets or relaxing amidst the pleasant weather.",
  },

  {
    day: 2,
    title: "Shillong to Cherrapunji",
    image: "/images/packageReview/meghalaya/itinerary/2.jpg",
    description:
      "Drive to Cherrapunji, one of the wettest places on Earth. Visit Elephant Falls, Mawkdok Dympep Viewpoint, Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and Eco Park while enjoying the spectacular landscapes.",
  },

  {
    day: 3,
    title: "Living Root Bridge Excursion",
    image: "/images/packageReview/meghalaya/itinerary/3.jpg",
    description:
      "After breakfast, explore the famous Double Decker Living Root Bridge at Nongriat (optional trek) or visit nearby natural attractions including Rainbow Falls and scenic viewpoints. Return to your hotel after an unforgettable day amidst Meghalaya's natural wonders.",
  },

  {
    day: 4,
    title: "Mawlynnong & Dawki Tour",
    image: "/images/packageReview/meghalaya/itinerary/4.jpg",
    description:
      "Visit Mawlynnong, renowned as Asia's Cleanest Village, and continue to Dawki to witness the crystal-clear waters of the Umngot River. Enjoy boating (optional) and visit the India-Bangladesh border before returning to Shillong.",
  },

  {
    day: 5,
    title: "Departure from Meghalaya",
    image: "/images/packageReview/meghalaya/itinerary/5.jpg",
    description:
      "After breakfast, check out from the hotel and drive to Guwahati Airport or Railway Station for your onward journey with unforgettable memories of Meghalaya's waterfalls, caves, hills, and living root bridges.",
  },
],

  // ===========================
// PACKAGE INCLUSIONS
// ===========================

inclusions: [
  "Airfare",
  "2 nights' accommodation in Shillong at a 3-star hotel",
  "2 nights' accommodation in Guwahati at a 3-star hotel",
  "Standard room accommodation with daily breakfast",
  "All road taxes and parking charges",
  "All airport transfers and sightseeing by the specified vehicle",
],

// ===========================
// PACKAGE EXCLUSIONS
// ===========================

exclusions: [
  "GST and other applicable taxes (if not mentioned)",
  "Travel insurance",
  "Personal expenses, tips, porterage, laundry, and telephone charges",
  "Lunches and dinners unless specifically mentioned in the itinerary",
  "Optional activities and sightseeing",
  "Anything not specifically mentioned under 'Inclusions'",
],

// ===========================
// TERMS & CONDITIONS
// ===========================

terms: [
  "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
  "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
  "Payments must strictly follow the defined payment policy. Non-compliance may result in cancellation of services.",
  "All cancellations must be submitted in writing. Cancellation charges will apply as per the cancellation policy.",
  "Go Escapio reserves the right to modify itineraries or services due to unforeseen circumstances beyond its control.",
  "Travellers are responsible for carrying valid travel documents. Go Escapio is not liable for documentation-related issues.",
  "Go Escapio is not responsible for flight delays, cancellations, baggage loss, or airline-related issues.",
  "Standard hotel check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and additional charges.",
  "City taxes, personal expenses, and optional tours are not included unless specifically mentioned.",
  "Visa approval is solely at the discretion of the respective embassy or immigration authorities.",
  "Travel insurance is strongly recommended and is the traveller's responsibility unless otherwise specified.",
  "Go Escapio acts only as an intermediary between travellers and service providers and is not liable for third-party service disruptions or losses.",
  "Hotel rooms, rates, and services are subject to availability at the time of booking.",
  "Limited availability. Blackout dates and peak-season surcharges may apply.",
],
};

export default meghalaya;