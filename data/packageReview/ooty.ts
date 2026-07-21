import type { PackageReview } from "@/types/packageReview";

const ooty: PackageReview = {
  slug: "ooty",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
  "/images/packageReview/ooty/gallery/1.jpg",
  "/images/packageReview/ooty/gallery/2.jpg",
  "/images/packageReview/ooty/gallery/3.jpg",
  "/images/packageReview/ooty/gallery/4.jpg",
  "/images/packageReview/ooty/gallery/5.jpg",
  
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "2 nights & 3 days ooty hill station getaway",

  price: "11,390",

  priceType: "Per Person | Twin Sharing Price",

  duration: "2 Nights",

  location: "Ooty - India",

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
    2 Nights & 3 Days Ooty Hill Station Getaway


  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival in Ooty",
    image: "/images/packageReview/ooty/itinerary/1.jpg",
    description:
      "Arrive in Ooty and transfer to your hotel. Complete the check-in formalities and relax amidst the pleasant weather of this beautiful hill station. In the evening, you may explore the local market or enjoy a leisurely walk around the town.",
  },

  {
    day: 2,
    title: "Ooty & Coonoor Sightseeing",
    image: "/images/packageReview/ooty/itinerary/2.jpg",
    description:
      "After breakfast, enjoy a full-day sightseeing tour covering Ooty Lake, Botanical Garden, Rose Garden, Doddabetta Peak, and the scenic tea estates of Coonoor. Experience breathtaking mountain views, lush greenery, and the charming beauty of the Nilgiris before returning to your hotel.",
  },

  {
    day: 3,
    title: "Departure from Ooty",
    image: "/images/packageReview/ooty/itinerary/3.jpg",
    description:
      "After breakfast, check out from the hotel and proceed for your onward journey with unforgettable memories of Ooty's scenic landscapes, tea gardens, and peaceful atmosphere.",
  },
],

  // ===========================
// PACKAGE INCLUSIONS
// ===========================

inclusions: [
  "Accommodation for 2 nights in Ooty",
  "Daily breakfast at the hotel",
  "All transfers and sightseeing by private deluxe tourist vehicle",
  "Parking fees, toll taxes, and driver allowances",
  "Sightseeing in the same vehicle every day after breakfast till sunset (except on arrival and departure days)",
  "Extra bed, if booked, will be provided as a folding cot or mattress as per hotel policy",
],

// ===========================
// PACKAGE EXCLUSIONS
// ===========================

exclusions: [
  "5% GST",
  "Camera and video camera fees",
  "Alcoholic and non-alcoholic beverages",
  "Travel insurance",
  "Meals other than those mentioned in the inclusions",
  "Tips, laundry, telephone calls, and porterage charges",
  "English-speaking guide or escort charges",
  "Airport / railway station taxes",
  "Personal expenses such as shopping, soft drinks, mini-bar usage, etc.",
  "Expenses due to circumstances beyond our control (flight delays, roadblocks, vehicle breakdowns, political disturbances, etc.)",
  "Domestic or international airfare unless quoted separately",
  "Any services not specifically mentioned under the inclusions",
],

// ===========================
// TERMS & CONDITIONS
// ===========================

terms: [
  "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
  "Package quotes are tentative and may change based on real-time availability and applicable rates at the time of booking.",
  "Payments must strictly follow the prescribed payment policy; failure to do so may result in cancellation of services.",
  "All cancellations must be submitted in writing and cancellation charges will apply as per company policy.",
  "Go Escapio reserves the right to modify the itinerary or services due to operational or unforeseen circumstances.",
  "Travellers are responsible for carrying valid government-issued identification and other required travel documents.",
  "Go Escapio is not responsible for flight or train delays, baggage loss, or service interruptions beyond its control.",
  "Hotel check-in is generally from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are subject to availability and additional charges.",
  "Personal expenses, optional activities, and local taxes are not included unless specifically mentioned.",
  "Travel insurance is recommended and is not included unless stated otherwise.",
  "Go Escapio acts only as an intermediary between travellers and service providers and is not liable for third-party service disruptions.",
  "Rates and hotel availability are subject to confirmation at the time of booking.",
  "Limited availability. Blackout dates may apply.",
],
};

export default ooty;