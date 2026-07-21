import type { PackageReview } from "@/types/packageReview";

const thailandHoneymoon: PackageReview = {
  slug: "thailand-honeymoon",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/thailand-honeymoon/gallery/1.jpg",
    "/images/packageReview/thailand-honeymoon/gallery/2.jpg",
    "/images/packageReview/thailand-honeymoon/gallery/3.jpg",
    "/images/packageReview/thailand-honeymoon/gallery/4.jpg",
    "/images/packageReview/thailand-honeymoon/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 nights & 6 days thailand honeymoon special – krabi & phuket",

  price: "33,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Phuket - Thailand",

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
    Celebrate your honeymoon with the perfect blend of sun, sand, and adventure in Thailand. This 5 Nights & 6 Days honeymoon package takes you from the idyllic beaches of Krabi to the vibrant island of Phuket, offering romantic moments, scenic island tours, and unforgettable experiences. Enjoy the famous 7 Island Sunset Tour, Phi Phi Island excursion, Tiger Kingdom visit, and relaxing beach escapes while staying in comfortable 4-star hotels with private transfers. Perfect for couples seeking both relaxation and adventure.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Phuket – Transfer to Krabi",
      image: "/images/packageReview/thailand-honeymoon/itinerary/1.jpg",
      description:
        "Arrive at Phuket International Airport where our representative will welcome you. Transfer privately to your hotel in Krabi. Check in and relax after your journey. Spend the evening at leisure enjoying Ao Nang Beach or your resort facilities. Overnight stay in Krabi.",
    },

    {
      day: 2,
      title: "Krabi – 7 Island Sunset Tour",
      image: "/images/packageReview/thailand-honeymoon/itinerary/2.jpg",
      description:
        "After breakfast, enjoy the famous 7 Island Sunset Tour by Long Tail Boat on SIC basis. Visit beautiful islands, swim in crystal-clear waters, snorkel among colorful marine life, and enjoy a delicious Thai picnic dinner while watching the spectacular sunset. Overnight stay in Krabi.",
    },

    {
      day: 3,
      title: "Krabi - Phuket",
      image: "/images/packageReview/thailand-honeymoon/itinerary/3.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Phuket. Upon arrival, check in to your hotel and spend the remaining day relaxing at the beach, exploring local markets, or enjoying optional nightlife. Overnight stay in Phuket.",
    },

    {
      day: 4,
      title: "Phuket – Phi Phi Island Tour",
      image: "/images/packageReview/thailand-honeymoon/itinerary/4.jpg",
      description:
        "After breakfast, proceed for the famous Phi Phi Island Tour by Speedboat on SIC basis with lunch included. Visit breathtaking beaches, turquoise lagoons, limestone cliffs, and enjoy swimming and snorkeling before returning to Phuket. Overnight stay in Phuket.",
    },

    {
      day: 5,
      title: "Phuket – Tiger Kingdom & Leisure",
      image: "/images/packageReview/thailand-honeymoon/itinerary/5.jpg",
      description:
        "After breakfast, visit the famous Tiger Kingdom with a walk-around experience and private transfers. Spend the rest of the day relaxing at your resort, shopping, enjoying beach activities, or exploring Phuket at your own pace. Overnight stay in Phuket.",
    },

    {
      day: 6,
      title: "Departure from Phuket",
      image: "/images/packageReview/thailand-honeymoon/itinerary/6.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Phuket International Airport for your onward journey with unforgettable honeymoon memories.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation in 4-star hotels for 5 nights",
    "Daily breakfast",
    "Private transfers: Phuket Airport – Krabi – Phuket Hotel – Phuket Airport",
    "Krabi 7 Island Sunset Tour with picnic Thai dinner (Long Tail Boat, SIC)",
    "Phi Phi Island Tour by Speedboat with lunch (SIC)",
    "Tiger Kingdom walk-around ticket with private transfers",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare / Flight tickets",
    "Visa charges",
    "Taxes (GST, TCS or any applicable government taxes)",
    "Travel insurance",
    "Personal expenses such as shopping, laundry, telephone calls and tips",
    "Meals other than those mentioned in the inclusions",
    "Optional tours and adventure activities",
    "Early check-in or late check-out at hotels",
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
    "Travellers are responsible for carrying valid travel documents. Go Escapio is not liable for documentation issues.",
    "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
    "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM. Early check-in or late check-out is subject to availability and additional charges.",
    "City taxes, personal expenses, and optional tours are not included unless specifically mentioned.",
    "Visa approval is at the discretion of the concerned embassy or immigration authorities. Go Escapio is not liable for delays or rejections.",
    "Travel insurance is recommended and is not included in the package.",
    "Go Escapio acts only as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and hotel rooms are subject to availability at the time of booking.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default thailandHoneymoon;