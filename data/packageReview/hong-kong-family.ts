import type { PackageReview } from "@/types/packageReview";

const hongKongFamily: PackageReview = {
  slug: "hong-kong-family",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/hong-kong-family/gallery/1.jpg",
    "/images/packageReview/hong-kong-family/gallery/2.jpg",
    "/images/packageReview/hong-kong-family/gallery/3.jpg",
    "/images/packageReview/hong-kong-family/gallery/4.jpg",
    "/images/packageReview/hong-kong-family/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Hong Kong Family Special",

  price: "81,690",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Hong Kong",

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
    Hong Kong is a fascinating blend of modern skyscrapers, traditional culture, vibrant street markets, and world-class attractions. This 5-day family holiday introduces you to the very best of Hong Kong, from its iconic skyline and cultural landmarks to a magical day at Disneyland. Enjoy comfortable accommodation, guided sightseeing, and leisure time, making it the perfect getaway for families seeking unforgettable experiences.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Hong Kong",
      image: "/images/packageReview/hong-kong-family/itinerary/1.jpg",
      description:
        "Arrive at Hong Kong International Airport where our representative will greet you and transfer you to your hotel on a private basis. Check in and spend the remainder of the day at leisure. You may relax, explore nearby markets, or enjoy local cuisine. Overnight stay in Hong Kong.",
    },

    {
      day: 2,
      title: "Half Day Hong Kong City Tour",
      image: "/images/packageReview/hong-kong-family/itinerary/2.jpg",
      description:
        "After breakfast, proceed for a half-day Hong Kong city tour on a shared basis. Visit Yaumatei, Tin Hau Temple, West Kowloon Art Park, admire views of the Hong Kong Palace Museum and Xiqu Centre, explore 1881 Heritage, and stop at a Jewellery & Souvenir Shop. The tour concludes at Tsim Sha Tsui, where you may continue exploring on your own before returning to the hotel. Overnight stay in Hong Kong.",
    },

    {
      day: 3,
      title: "Full Day Disneyland Tour",
      image: "/images/packageReview/hong-kong-family/itinerary/3.jpg",
      description:
        "After breakfast, enjoy a magical full-day excursion to Hong Kong Disneyland. Experience exciting rides, themed attractions, colourful parades, live entertainment, and spectacular fireworks (subject to schedule). Spend quality time with your family before returning to the hotel in the evening. Overnight stay in Hong Kong.",
    },

    {
      day: 4,
      title: "Day at Leisure",
      image: "/images/packageReview/hong-kong-family/itinerary/4.jpg",
      description:
        "Enjoy breakfast at the hotel before spending the day at your own pace. Visit famous shopping districts like Mong Kok or Causeway Bay, take an optional Victoria Harbour Cruise, explore Lantau Island, or simply relax. Overnight stay in Hong Kong.",
    },

    {
      day: 5,
      title: "Departure from Hong Kong",
      image: "/images/packageReview/hong-kong-family/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Hong Kong International Airport on a shared basis for your onward flight. Your memorable Hong Kong family holiday comes to an end.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "4 Nights Accommodation in a Selected Hotel",
    "Daily Breakfast",
    "Half-Day Hong Kong City Tour on SIC Basis",
    "Full-Day Hong Kong Disneyland Tour on SIC Basis",
    "Return Airport Transfers",
    "Sightseeing by Shared Air-Conditioned Vehicle",
    "English-Speaking Tour Assistance",
    "All Applicable Taxes (Except GST/TCS)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International Airfare",
    "Hong Kong Visa Charges (If Applicable)",
    "Travel Insurance",
    "Personal Expenses (Laundry, Shopping, Telephone, etc.)",
    "Meals Not Mentioned in the Itinerary",
    "Alcoholic & Non-Alcoholic Beverages",
    "Camera & Video Charges",
    "Tips for Driver & Guide",
    "Optional Tours & Activities",
    "Early Check-in & Late Check-out Charges",
    "5% GST & TCS as Applicable",
    "Anything Not Specifically Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change without prior notice based on hotel availability and currency fluctuations.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "Unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Guests must carry valid passports and all required travel documents.",
    "Travel insurance is strongly recommended.",
    "Go Escapio is not responsible for airline delays, baggage loss, weather conditions, or third-party service disruptions.",
    "Sightseeing schedules may change due to operational or weather conditions.",
    "Personal expenses incurred during the trip are the traveller's responsibility.",
    "Rates are subject to availability until booking confirmation.",
    "Limited availability. Blackout dates may apply.",
    "Any service not specifically mentioned under 'Package Inclusions' will be treated as an exclusion.",
  ],
};

export default hongKongFamily;