import type { PackageReview } from "@/types/packageReview";

const dubaiExtravaganza: PackageReview = {
  slug: "dubai-extravaganza",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/dubai-extravaganza/gallery/1.jpg",
    "/images/packageReview/dubai-extravaganza/gallery/2.jpg",
    "/images/packageReview/dubai-extravaganza/gallery/3.jpg",
    "/images/packageReview/dubai-extravaganza/gallery/4.jpg",
    "/images/packageReview/dubai-extravaganza/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days family time in dubai with free miracle garden",

  price: "43,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Dubai - UAE",

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
    Enjoy a perfect family getaway to Dubai, a city where modern wonders meet rich traditions. This 4-night Dubai holiday offers a relaxed yet exciting experience with iconic attractions such as the Burj Khalifa (124th Floor), a traditional Dhow Cruise with dinner, an adventurous Desert Safari with BBQ, and a guided Dubai City Tour. With comfortable hotel stays, daily breakfast, Dubai visa, and shared sightseeing transfers included, this package is ideal for families looking for value, comfort, and unforgettable moments.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Dubai – Evening Dhow Cruise",
      image: "/images/packageReview/dubai-extravaganza/itinerary/1.jpg",
      description:
        "Arrive at Dubai International Airport, where you will be greeted by our representative and transferred to your hotel. Check in and relax. In the evening, enjoy a traditional Dhow Cruise along Dubai Creek or Dubai Marina. Relish a delicious buffet dinner while admiring the illuminated skyline and enjoying live entertainment. Overnight stay in Dubai.",
    },

    {
      day: 2,
      title: "Dubai City Tour – Burj Khalifa (124th Floor)",
      image: "/images/packageReview/dubai-extravaganza/itinerary/2.jpg",
      description:
        "After breakfast, proceed for a guided Dubai City Tour covering the city's famous landmarks and attractions. Later, visit the iconic Burj Khalifa and enjoy panoramic views of Dubai from the 124th Floor observation deck. Return to the hotel for an overnight stay.",
    },

    {
      day: 3,
      title: "Desert Safari with BBQ Dinner",
      image: "/images/packageReview/dubai-extravaganza/itinerary/3.jpg",
      description:
        "After breakfast, enjoy the morning at leisure. In the afternoon, head for an exciting Desert Safari experience featuring thrilling dune bashing, camel riding, henna painting, and optional adventure activities. End the evening with live Belly Dance, Tanoura performances, and a delicious BBQ dinner before returning to your hotel.",
    },

    {
      day: 4,
      title: "Free Day for Leisure / Miracle Garden Visit",
      image: "/images/packageReview/dubai-extravaganza/itinerary/4.jpg",
      description:
        "After breakfast, spend the day at leisure exploring Dubai at your own pace. Visit shopping malls, relax at the hotel, or enjoy the complimentary Miracle Garden visit (subject to seasonal operation). Overnight stay in Dubai.",
    },

    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/dubai-extravaganza/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and enjoy some free time for last-minute shopping if time permits. Later, transfer to Dubai International Airport for your return flight with unforgettable family memories.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
        "Meet & Greet at Dubai Airport",
    "4 Nights accommodation in Dubai",
    "Daily breakfast at hotel",
    "Tea/Coffee kettle in the room",
    "Free Wi-Fi",
    "Dubai Tourist Visa",
    "Airport Pick-up & Drop-off",
    "Sightseeing in shared vehicle (SIC basis)",
    "Dubai City Tour",
    "Dhow Cruise with Dinner",
    "Burj Khalifa – 124th Floor (Non-Prime Hours)",
    "Desert Safari with BBQ Dinner & live entertainment",
    "FREE Miracle Garden visit (seasonal)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare / Train fare",
    "5% GST",
    "Alcoholic / Non-alcoholic beverages",
    "Optional adventure activities (Quad Biking, Dune Buggy, etc.)",
    "Personal expenses such as laundry, telephone calls, room service, and tips",
    "Travel insurance",
    "Any services not mentioned under inclusions",
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
    "Travellers are responsible for carrying valid travel documents and passports.",
    "Go Escapio is not responsible for flight delays, baggage issues, or airline cancellations.",
    "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM. Early check-in or late check-out is subject to hotel availability and additional charges.",
    "City taxes, tourism fees, personal expenses, and optional tours are not included unless specifically mentioned.",
    "Visa approval is solely at the discretion of the UAE immigration authorities.",
    "Travel insurance is recommended and is not included unless mentioned.",
    "Go Escapio acts only as an intermediary between travellers and service providers and is not liable for third-party service disruptions.",
    "Rates and hotel rooms are subject to availability at the time of booking.",
    "Limited availability. Blackout dates may apply. Book early to secure your preferred travel dates.",
  ],
};

export default dubaiExtravaganza;