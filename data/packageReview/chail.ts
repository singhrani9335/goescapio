import type { PackageReview } from "@/types/packageReview";

const chail: PackageReview = {
  slug: "chail",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/chail/gallery/1.jpg",
  "/images/packageReview/chail/gallery/2.jpg",
  "/images/packageReview/chail/gallery/3.jpg",
  "/images/packageReview/chail/gallery/4.jpg",
  "/images/packageReview/chail/gallery/5.jpg",
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "3 Nights & 4 Days Chail Himachal Tour",

  price: "19,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "3 Nights",

  location: "Chail - Himachal Pradesh India",

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
    Escape the city bustle and unwind amidst the serene hills of Chail, a charming hill station nestled in the Solan district of Himachal Pradesh. Surrounded by dense deodar forests, colonial-era architecture, and tranquil landscapes, Chail offers a perfect short break for nature lovers and peace seekers. Located approximately 45 km from Solan and 44 km from Shimla, this weekend getaway promises fresh mountain air, scenic views, and relaxed exploration.


  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival in Chail",
    image: "/images/packageReview/chail/itinerary/1.jpg",
    description:
      "Arrive in Chail and transfer to your hotel. Complete the check-in formalities and relax amidst the peaceful surroundings. In the evening, enjoy a leisurely walk and take in the fresh mountain air.",
  },

  {
    day: 2,
    title: "Chail Sightseeing",
    image: "/images/packageReview/chail/itinerary/2.jpg",
    description:
      "After breakfast, explore the famous attractions of Chail including Chail Palace, the World's Highest Cricket Ground, Kali Tibba Temple, and the Chail Wildlife Sanctuary. Enjoy the scenic beauty and peaceful atmosphere before returning to your hotel.",
  },

  {
    day: 3,
    title: "Departure from Chail",
    image: "/images/packageReview/chail/itinerary/3.jpg",
    description:
      "After breakfast, check out from the hotel and proceed for your onward journey with unforgettable memories of Chail's serene landscapes and Himalayan charm.",
  },
],


  // ===========================
// PACKAGE INCLUSIONS
// ===========================

inclusions: [
  "Accommodation on twin-sharing basis",
  "Daily breakfast at the hotel",
  "Air-conditioned car for the entire trip as per itinerary",
  "Toll taxes, parking charges, and driver allowances",
  "All applicable hotel taxes",
],

// ===========================
// PACKAGE EXCLUSIONS
// ===========================

exclusions: [
  "5% GST",
  "Airfare or train fare",
  "Expenses for optional activities",
  "Personal expenses such as porterage, tips, laundry, and phone calls",
  "Any additional meals not mentioned in the inclusions",
  "Expenses arising due to unforeseen circumstances such as natural calamities, strikes, roadblocks, or emergency evacuations",
  "Anything not specifically mentioned under the inclusions",
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
  "Travellers are responsible for carrying valid travel documents. Go Escapio is not liable for documentation issues.",
  "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
  "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM. Early check-in and late check-out are subject to availability and additional charges.",
  "City taxes, personal expenses, and optional tours are not included in the package unless specified.",
  "Travel insurance is recommended and is the traveller's responsibility unless otherwise mentioned.",
  "Go Escapio acts only as an intermediary and is not liable for third-party service disruptions or losses.",
  "Rates and hotel rooms are subject to availability at the time of booking.",
  "Limited availability. Blackout dates may apply.",
],
};

export default chail;