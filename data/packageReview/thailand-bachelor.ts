import type { PackageReview } from "@/types/packageReview";

const thailandBachelor: PackageReview = {
  slug: "thailand-bachelor",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/thailand-bachelor/gallery/1.jpg",
    "/images/packageReview/thailand-bachelor/gallery/2.jpg",
    "/images/packageReview/thailand-bachelor/gallery/3.jpg",
    "/images/packageReview/thailand-bachelor/gallery/4.jpg",
    "/images/packageReview/thailand-bachelor/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Thailand Bachelor’s Trip – Pattaya & Bangkok",

  price: "25,290",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Bangkok - Thailand",

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
    Celebrate the ultimate bachelor getaway in Thailand with an action-packed
    5-day trip covering Pattaya and Bangkok. Designed especially for groups
    of friends, this trip combines beaches, wildlife encounters, cultural
    shows, island adventures, and an unforgettable yacht party. From the
    vibrant nightlife of Pattaya to the energetic streets of Bangkok, this
    experience delivers the perfect mix of thrill, relaxation, and memories
    before the big day.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title:
        "Arrival in Bangkok | Transfer to Pattaya | Tiger Topia | Alcazar Show",
      image: "/images/packageReview/thailand-bachelor/itinerary/1.jpg",
      description:
        "Arrive at Bangkok Airport (BKK/DMK), where you will meet your tour representative and proceed to Pattaya by road (approximately 2–2.5 hours). Upon arrival, check in to your hotel and relax. Later, visit Tiger Topia Pattaya for exciting wildlife experiences and photo opportunities. In the evening, enjoy the spectacular Alcazar Show featuring world-class performances, dazzling costumes, music, and dance. Overnight stay in Pattaya.",
    },

    {
      day: 2,
      title: "Coral Island (Koh Larn) Tour",
      image: "/images/packageReview/thailand-bachelor/itinerary/2.jpg",
      description:
        "After breakfast, board a speedboat to Coral Island (Koh Larn). Spend the day enjoying crystal-clear waters, white sandy beaches, swimming, sunbathing, and optional water sports (at an additional cost). Lunch will be served at a local restaurant before returning to Pattaya in the evening. Overnight stay in Pattaya.",
    },

    {
      day: 3,
      title: "Nong Nooch Village Tour",
      image: "/images/packageReview/thailand-bachelor/itinerary/3.jpg",
      description:
        "After breakfast, visit the famous Nong Nooch Tropical Garden, one of Thailand's most beautiful attractions. Explore themed gardens, Dinosaur Valley, Orchid Garden, and beautifully landscaped areas. Enjoy Thai cultural performances and the elephant show (subject to availability). Return to Pattaya in the evening and enjoy free time. Overnight stay in Pattaya.",
    },

    {
      day: 4,
      title: "Yacht Party | Transfer to Bangkok",
      image: "/images/packageReview/thailand-bachelor/itinerary/4.jpg",
      description:
        "After breakfast, experience the highlight of your bachelor trip with an exciting luxury yacht party. Enjoy music, scenic cruising, swimming opportunities, light snacks, and soft drinks while sailing around Pattaya's beautiful coastline. Later, transfer to Bangkok, check in to your hotel, and relax. Overnight stay in Bangkok.",
    },

    {
      day: 5,
      title: "Shopping Time | Bangkok Hotel to Airport Transfer",
      image: "/images/packageReview/thailand-bachelor/itinerary/5.jpg",
      description:
        "After breakfast, enjoy free time for shopping at Bangkok's famous malls and local markets. Pick up souvenirs, explore the city, or relax before your scheduled airport transfer. At the designated time, you will be transferred from your Bangkok hotel to the airport for your onward journey, concluding your memorable Thailand bachelor trip.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Bangkok Airport to Pattaya Hotel Transfer",
    "Tiger Topia Visit",
    "Daily Breakfast",
    "Alcazar Show Ticket",
    "Coral Island (Koh Larn) Tour",
    "Lunch during Coral Island Tour",
    "Nong Nooch Village Tour",
    "Yacht Party Experience",
    "Pattaya Hotel to Bangkok Hotel Transfer",
    "Bangkok Hotel to Airport Transfer",
    "All Sightseeing & Transfers as per Itinerary",
    "English-Speaking Local Assistance",
    "All Applicable Taxes",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International & Domestic Airfare",
    "Thailand Visa Fees (if applicable)",
    "Travel Insurance",
    "Passport Fees",
    "Personal Expenses",
    "Alcoholic & Non-Alcoholic Beverages",
    "Optional Water Sports & Adventure Activities",
    "Additional Meals Not Mentioned in the Itinerary",
    "Tips, Porterage & Driver Gratuities",
    "Laundry, Telephone Calls & Mini Bar Charges",
    "Early Check-in & Late Check-out Charges",
    "Additional Sightseeing Not Mentioned in the Itinerary",
    "Expenses Due to Flight Delays, Natural Calamities, Political Disturbances or Any Unforeseen Circumstances",
    "Anything Not Specifically Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change without prior notice based on hotel availability, exchange rates, or airline fare revisions.",
    "A valid passport with at least 6 months validity is mandatory for travel.",
    "Visa approval is solely at the discretion of the respective embassy or immigration authorities.",
    "Hotel check-in and check-out timings will be as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "Any unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Travel insurance is strongly recommended for all travellers.",
    "Go Escapio is not responsible for delays, cancellations, baggage loss, or schedule changes made by airlines or third-party service providers.",
    "The company reserves the right to modify the itinerary due to weather conditions, operational reasons, or unforeseen circumstances.",
    "Guests are responsible for any personal expenses incurred during the trip.",
    "Rates are subject to availability at the time of booking.",
    "Limited availability. Blackout dates may apply.",
  ],
};

export default thailandBachelor;