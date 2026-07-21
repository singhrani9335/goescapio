import type { PackageReview } from "@/types/packageReview";

const jordan: PackageReview = {
  slug: "jordan",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/jordan/gallery/1.jpg",
    "/images/packageReview/jordan/gallery/2.jpg",
    "/images/packageReview/jordan/gallery/3.jpg",
    "/images/packageReview/jordan/gallery/4.jpg",
    "/images/packageReview/jordan/gallery/5.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days classic jordan",

  price: "46,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Petra - Jordan",

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
    Step into a land where history, legend, and breathtaking landscapes come alive. Classic Jordan is a perfectly balanced journey through ancient civilizations, dramatic deserts, and natural wonders. Walk through the rose-red city of Petra, explore the historic sites of Madaba and Mount Nebo, experience Bedouin hospitality under the stars in Wadi Rum, and relax in the mineral-rich waters of the Dead Sea. This journey offers the perfect combination of heritage, adventure, and unforgettable experiences.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Amman",
      image: "/images/packageReview/jordan/itinerary/1.jpg",
      description:
        "Arrive at Queen Alia International Airport, where you will be welcomed by our representative. After meet and assist, transfer to your hotel in Amman, Jordan's capital city known for its ancient heritage and modern lifestyle. Check in at the hotel and relax after your journey. Overnight stay in Amman.",
    },

    {
      day: 2,
      title: "Amman – Madaba – Mount Nebo – Petra (King’s Highway)",
      image: "/images/packageReview/jordan/itinerary/2.jpg",
      description:
        "After breakfast, begin your journey along the historic King’s Highway. Visit Madaba, famous for its ancient mosaic map of the Holy Land at St. George’s Church. Continue to Mount Nebo, where Moses is believed to have viewed the Promised Land, and enjoy spectacular views of the Jordan Valley and Dead Sea. Later proceed towards Petra through scenic landscapes. Check in at the hotel and overnight stay in Petra.",
    },

    {
      day: 3,
      title: "Petra – Wadi Rum",
      image: "/images/packageReview/jordan/itinerary/3.jpg",
      description:
        "After breakfast, explore Petra, the famous rose-red city and one of the New Seven Wonders of the World. Walk through the narrow Siq leading to the iconic Treasury, and discover ancient Nabatean monuments including the Street of Facades and Royal Tombs. Later drive to Wadi Rum, also known as the Valley of the Moon. Enjoy a thrilling 4x4 Jeep Safari through the desert landscapes, natural rock formations, and ancient inscriptions. Experience a beautiful sunset followed by traditional Bedouin dinner and overnight stay at the desert camp.",
    },

    {
      day: 4,
      title: "Wadi Rum – Dead Sea",
      image: "/images/packageReview/jordan/itinerary/4.jpg",
      description:
        "After breakfast at the camp, continue your journey towards the Dead Sea, the lowest point on Earth. Enjoy a relaxing experience floating in the mineral-rich waters and applying natural Dead Sea mud. Spend leisure time enjoying the beautiful surroundings and peaceful atmosphere. Overnight stay at Dead Sea.",
    },

    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/jordan/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Queen Alia International Airport for your onward journey. Depart Jordan with unforgettable memories of Petra, Wadi Rum, and the Dead Sea experience.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Meet & assist upon arrival at Queen Alia International Airport",
    "4 nights accommodation in selected or similar hotels",
    "1 night accommodation in Amman",
    "1 night accommodation in Petra",
    "1 night accommodation in Wadi Rum Desert Camp",
    "1 night accommodation at Dead Sea",
    "Daily breakfast and dinner as per itinerary",
    "Jordan entry visa for eligible nationalities",
    "All airport transfers and sightseeing by air-conditioned vehicle",
    "Private English-speaking guide throughout the tour",
    "Entrance fees to attractions mentioned in the itinerary",
    "Horse ride in Petra from Visitors Centre to the beginning of the Siq",
    "4x4 Jeep Safari experience in Wadi Rum",
    "Daily bottled drinking water during sightseeing",
    "All applicable local taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Lunch during the tour",
    "Drinks during meals",
    "Personal expenses such as laundry, shopping, telephone calls, and minibar",
    "Porterage at airports and hotels",
    "Carriage ride in Petra",
    "Tips for guide, driver, and camp staff",
    "Optional activities not mentioned in the itinerary",
    "Travel insurance",
    "Any service not mentioned under inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
    "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
    "Payments must strictly follow the defined payment policy. Non-compliance may lead to cancellation of services.",
    "All cancellations must be submitted in writing and cancellation charges will apply as per policy.",
    "Go Escapio reserves the right to modify itineraries or services due to unforeseen circumstances.",
    "Travellers are responsible for carrying valid passports, visas, and required travel documents.",
    "Go Escapio is not responsible for flight delays, cancellations, baggage issues, or airline-related problems.",
    "Hotel check-in is generally at 2 PM and check-out at 11 AM. Early check-in or late check-out is subject to availability and extra charges.",
    "City taxes, personal expenses, and optional tours are not included unless specifically mentioned.",
    "Visa approval is solely at the discretion of immigration authorities.",
    "Travel insurance is recommended and remains the traveller's responsibility.",
    "Go Escapio acts as an intermediary and is not responsible for third-party service disruptions.",
    "Hotel rooms, rates, and services are subject to availability at the time of booking.",
    "Limited availability. Blackout dates and peak season surcharges may apply.",
  ],
};

export default jordan;