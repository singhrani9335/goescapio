import type { PackageReview } from "@/types/packageReview";

const cambodiaTour: PackageReview = {
  slug: "cambodia-tour",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/cambodia-tour/gallery/1.jpg",
    "/images/packageReview/cambodia-tour/gallery/2.jpg",
    "/images/packageReview/cambodia-tour/gallery/3.jpg",
    "/images/packageReview/cambodia-tour/gallery/4.jpg",
    "/images/packageReview/cambodia-tour/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Cambodia Tour: Phnom Penh – Battambang – Siem Reap",

  price: "51,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Battambang • Cambodia",

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
    Travel across Cambodia on an exclusive VAN Tour, designed for individuals,
    families, and small groups seeking comfort, flexibility, and deeper cultural
    experiences. This journey takes you from the vibrant capital of Phnom Penh,
    through the charming riverside town of Battambang, and finally to Siem Reap,
    home of the world-famous Angkor Wat temples.

    Travel is conducted in private vans with experienced English-speaking
    drivers and guides, ensuring a personalized and relaxed pace. Discover
    Cambodia's rich history, French colonial heritage, rural village life,
    breathtaking temples, and warm local hospitality. A highlight of the tour
    is the traditional Apsara Dance Show, showcasing Cambodia's classical
    culture through graceful performances and ancient legends.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Phnom Penh | Sunset River Cruise",
      image: "/images/packageReview/cambodia-tour/itinerary/1.jpg",
      description:
        "Arrive at Phnom Penh International Airport, meet our representative, and transfer to your hotel. Complete the check-in formalities and relax before enjoying a scenic sunset cruise on the Mekong River, offering spectacular views of Phnom Penh's skyline.",
    },

    {
      day: 2,
      title: "Phnom Penh City Tour | Drive to Battambang",
      image: "/images/packageReview/cambodia-tour/itinerary/2.jpg",
      description:
        "After breakfast, explore Phnom Penh's major attractions including the Royal Palace, Silver Pagoda, Independence Monument, and other landmarks. Later, drive to the charming riverside town of Battambang and check in to your hotel.",
    },

    {
      day: 3,
      title: "Battambang Exploration | Bamboo Train | Drive to Siem Reap",
      image: "/images/packageReview/cambodia-tour/itinerary/3.jpg",
      description:
        "Discover Battambang's colonial architecture and local attractions. Experience the famous Bamboo Train before continuing your journey to Siem Reap, the gateway to the magnificent Angkor temples.",
    },

    {
      day: 4,
      title: "Angkor Wat Complex Tour | Apsara Dance Show",
      image: "/images/packageReview/cambodia-tour/itinerary/4.jpg",
      description:
        "Visit the UNESCO World Heritage Site of Angkor Wat, Angkor Thom, Bayon Temple, and Ta Prohm. In the evening, enjoy a traditional Khmer dinner accompanied by the spectacular Apsara Dance cultural performance.",
    },

    {
      day: 5,
      title: "Kbal Spean | Banteay Srei | Floating Village",
      image: "/images/packageReview/cambodia-tour/itinerary/5.jpg",
      description:
        "Visit the sacred River of a Thousand Lingas at Kbal Spean, explore the beautiful pink sandstone temple of Banteay Srei, and later enjoy a relaxing boat ride through the fascinating Floating Village on Tonle Sap Lake.",
    },

    {
      day: 6,
      title: "Departure from Siem Reap",
      image: "/images/packageReview/cambodia-tour/itinerary/6.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Siem Reap International Airport for your onward flight. Depart with unforgettable memories of Cambodia's temples, culture, and breathtaking landscapes.",
    },
  ],

    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Private VAN transportation for the entire tour",
    "English-speaking driver / guide (as required)",
    "Airport transfers on private basis",
    "Accommodation at specified or similar hotels",
    "Meals, sightseeing, and entrance fees as mentioned in the itinerary",
    "Phnom Penh city tour, Battambang sightseeing & Bamboo Train",
    "Angkor Wat Complex tour",
    "Apsara Dance Show",
    "Floating Village boat ride",
    "Medical insurance for the tour duration (up to 60 years)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International & domestic airfare",
    "Cambodia visa fees",
    "Compulsory tips for driver & guide: USD 5 per person per day",
    "City / tourism tax (if applicable)",
    "Optional tours and activities",
    "Personal expenses (laundry, minibar, drinks, phone calls, porterage, etc.)",
    "Additional meals not mentioned in the itinerary",
    "Exchange rate fluctuations or government tax increases",
    "POE and passport charges",
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
    "Travellers are responsible for valid travel documents; Go Escapio is not liable for any documentation issues.",
    "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
    "Hotel check-in is generally at 2 PM and check-out at 11 AM; early check-in or late check-out may incur extra charges.",
    "City taxes, personal expenses, and optional tours are not included in the package.",
    "Visa approval is at the discretion of the embassy; Go Escapio holds no liability for delays or rejections.",
    "Travel insurance is recommended and not included; travellers are responsible for their safety during activities.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default cambodiaTour;