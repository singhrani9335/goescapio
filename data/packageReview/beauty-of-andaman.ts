import type { PackageReview } from "@/types/packageReview";

const beautyOfAndaman: PackageReview = {
  slug: "beauty-of-andaman",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

 gallery: [
  "/images/packageReview/beauty-of-andaman/gallery/1.jpg",
  "/images/packageReview/beauty-of-andaman/gallery/2.jpg",
  "/images/packageReview/beauty-of-andaman/gallery/3.jpg",
  "/images/packageReview/beauty-of-andaman/gallery/4.jpg",
  "/images/packageReview/beauty-of-andaman/gallery/5.jpg",
],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Wow Andaman",

  price: "29,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Havelock - Andaman India",

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
    Explore the pristine beauty of the Andaman Islands with this luxurious
    5-day private tour. Starting in Port Blair, enjoy cultural insights at
    museums and the iconic Cellular Jail with its captivating Sound & Light show.
    Cruise to Havelock Island to unwind on stunning beaches like Radhanagar
    and Corbyn’s Cove, and enjoy complimentary snorkeling at Elephant Beach.
    This itinerary balances adventure, leisure, and luxury, making it ideal
    for couples, families, or solo travelers seeking an unforgettable island escape.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================
itinerary: [
  {
    day: 1,
    title: "Arrival At Port Blair",
    image: "/images/packageReview/beauty-of-andaman/itinerary/1.jpg",
    description:
      "Arrive at Port Blair and meet our representative. After lunch, proceed for local sightseeing including Cellular Jail and nearby attractions.",
  },
  {
    day: 2,
    title: "Port Blair To Havelock (Corbyn’s Cove Beach)",
    image: "/images/packageReview/beauty-of-andaman/itinerary/2.jpg",
    description:
      "Transfer to Havelock Island by ferry and enjoy the beautiful beaches of Andaman. Visit Corbyn’s Cove Beach and explore the island.",
  },
  {
    day: 3,
    title: "Excursion To Elephant Beach & Radhanagar Beach",
    image: "/images/packageReview/beauty-of-andaman/itinerary/3.jpg",
    description:
      "Enjoy exciting water activities at Elephant Beach and visit the world-famous Radhanagar Beach known for its scenic beauty.",
  },
  {
    day: 4,
    title: "Transfer To Port Blair & City Tour",
    image: "/images/packageReview/beauty-of-andaman/itinerary/4.jpg",
    description:
      "Return to Port Blair and enjoy the city tour covering major attractions and local sightseeing places.",
  },
  {
    day: 5,
    title: "Departure From Port Blair",
    image: "/images/packageReview/beauty-of-andaman/itinerary/5.jpg",
    description:
      "Check out from the hotel and transfer to Port Blair Airport for your onward journey with beautiful memories.",
  },
],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Arrival and departure transfers at Port Blair Airport by private AC vehicle",
    "4 nights accommodation in mentioned or similar hotels/resorts",
    "Daily breakfast (except Day 1)",
    "Gala dinner for Christmas and New Year included",
    "All sightseeing and transfers in a private air-conditioned car as per itinerary",
    "All entry and ferry tickets wherever applicable (preferably Makruzz ferry for inter-island transfers)",
    "Private tour arrangements",
    "Complimentary snorkeling at Elephant Beach (with equipment and guide)",
    "Cellular Jail and Sound & Light show entry",
    "Corbyn’s Cove Beach, Radhanagar Beach, and Elephant Beach visits",
    "All applicable taxes (except GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Any airfare, cruise fare, or inter-island travel not mentioned in inclusions",
    "Optional meals, activities, or water sports (beyond the ones included)",
    "Camera fees during sightseeing",
    "Any personal expenses (laundry, minibar, telephone, etc.)",
    "GST as per prevailing rates",
    "Anything not mentioned in the inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
    "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
    "Payments must follow the defined payment policy; non-compliance may lead to service cancellations.",
    "All cancellations must be submitted in writing; cancellation charges apply as per the policy.",
    "Go Escapio reserves the right to modify itineraries or services due to unforeseen circumstances.",
    "Travellers are responsible for valid travel documents; Go Escapio is not liable for any documentation issues.",
    "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
    "Hotel check-in is generally at 2 PM and check-out at 11 AM; early check-in or late check-out is chargeable.",
    "City taxes, personal expenses, and optional tours are not included in the package.",
    "Visa approval is at the discretion of the embassy; Go Escapio is not liable for delays or rejections.",
    "Travel insurance is recommended and not included; travellers are responsible for their safety during activities.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default beautyOfAndaman;