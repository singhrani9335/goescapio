import type { PackageReview } from "@/types/packageReview";

const maldives: PackageReview = {
  slug: "maldives",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/maldives/gallery/1.jpg",
  "/images/packageReview/maldives/gallery/2.jpg",
  "/images/packageReview/maldives/gallery/3.jpg",
  "/images/packageReview/maldives/gallery/4.jpg",
  "/images/packageReview/maldives/gallery/5.jpg",
],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Maldives Escape",

  price: "69,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

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
    Escape to the tropical paradise of the Maldives with crystal-clear
    lagoons, white sandy beaches and luxurious overwater villas.
    Relax by the ocean, enjoy water sports, snorkeling, sunset cruises
    and unforgettable island experiences. This package is perfect for
    honeymooners, couples and anyone looking for a peaceful beach vacation.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

 itinerary: [
  {
    day: 1,
    title: "Arrival in Maldives",
    image: "/images/packageReview/maldives/itinerary/1.jpg",
    description:
      "Arrive at Velana International Airport (Malé) and transfer to your resort by speedboat. Complete the check-in formalities and relax amidst the crystal-clear waters and white sandy beaches before enjoying a beautiful Maldivian sunset.",
  },

  {
    day: 2,
    title: "Water Activities",
    image: "/images/packageReview/maldives/itinerary/2.jpg",
    description:
      "After breakfast, enjoy exciting water activities such as snorkeling, kayaking, or optional scuba diving while exploring the vibrant coral reefs and colorful marine life of the Maldives.",
  },

  {
    day: 3,
    title: "Leisure & Sunset Cruise",
    image: "/images/packageReview/maldives/itinerary/3.jpg",
    description:
      "Spend the day at leisure enjoying the resort's luxurious facilities. In the evening, experience a memorable sunset cruise across the Indian Ocean while witnessing breathtaking ocean views.",
  },

  {
    day: 4,
    title: "Departure from Maldives",
    image: "/images/packageReview/maldives/itinerary/4.jpg",
    description:
      "After breakfast, check out from the resort and transfer to Velana International Airport for your onward journey with unforgettable memories of your Maldives holiday.",
  },
],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "4 nights accommodation in a beach villa or water villa",
    "Daily breakfast and dinner",
    "Return speedboat transfers",
    "Welcome drink on arrival",
    "Complimentary Wi-Fi at the resort",
    "Access to resort facilities",
    "Selected non-motorized water sports",
    "All sightseeing and transfers as per itinerary",
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
    "Personal expenses such as shopping and laundry",
    "Tips and porterage",
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
  "Travellers are responsible for carrying valid travel documents; Go Escapio is not liable for any documentation issues.",
  "Go Escapio is not responsible for flight delays, baggage issues, missed connections, or cancellations.",
  "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.",
  "City taxes, personal expenses, optional tours, and services not specifically mentioned in the inclusions are not included in the package.",
  "Visa approval is solely at the discretion of the respective embassy or immigration authorities. Go Escapio is not liable for visa delays or rejections.",
  "Travel insurance is highly recommended and is not included in the package. Travellers are responsible for their own safety during all activities.",
  "Go Escapio acts only as an intermediary for hotels, airlines, transport providers, and other service providers, and is not liable for third-party service disruptions or losses.",
  "Hotel rates, room categories, and other services are subject to availability at the time of booking.",
  "Limited availability. Blackout dates may apply. Book your package in advance to avoid disappointment.",
],
};

export default maldives;