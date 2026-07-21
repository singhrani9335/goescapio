import type { PackageReview } from "@/types/packageReview";

const disneyAdventureCruise: PackageReview = {
  slug: "disney-adventure-cruise",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/disney-adventure-cruise/gallery/1.jpg",
    "/images/packageReview/disney-adventure-cruise/gallery/2.jpg",
    "/images/packageReview/disney-adventure-cruise/gallery/3.jpg",
    "/images/packageReview/disney-adventure-cruise/gallery/4.jpg",
    "/images/packageReview/disney-adventure-cruise/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days disney adventure cruise with 1 free night at singapore",

  price: "88,890",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Singapore - Singapore",

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
    Embark on a magical family getaway combining the excitement of a Disney Adventure Cruise with a complimentary stay in Singapore, one of Asia’s most vibrant cities. This unforgettable holiday brings together world-class entertainment, Broadway-style Disney shows, thrilling Marvel adventures, immersive kids’ zones, and character meet-and-greets—along with a guided Singapore city tour. Perfect for families, couples, and Disney fans of all ages, this journey promises fun, fantasy, and unforgettable memories at sea and on land.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Singapore & City Tour",
      image: "/images/packageReview/disney-adventure-cruise/itinerary/1.jpg",
      description:
        "Arrive at Singapore Changi Airport and meet your representative for a shared transfer to the hotel. After check-in (standard time around 14:00 hrs), enjoy a half-day Singapore City Tour on a SIC basis. Drive past Suntec City, Parliament House, Supreme Court, and City Hall before exploring Chinatown and Little India. Visit the iconic Merlion Park and capture memorable photographs before returning to the hotel. Overnight stay in Singapore.",
    },

    {
      day: 2,
      title: "Singapore – Board Disney Adventure Cruise",
      image: "/images/packageReview/disney-adventure-cruise/itinerary/2.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to the Singapore Cruise Terminal. Boarding for the Disney Adventure Cruise begins between 12:00 PM and 3:00 PM, with departure scheduled at approximately 4:00 PM. Explore the beautifully themed zones inspired by Disney, Pixar and Marvel, enjoy themed restaurants, shopping, lounges, and spectacular Broadway-style entertainment before the magical sail-away celebration. Overnight stay onboard the cruise.",
    },

    {
      day: 3,
      title: "Day at Sea – Disney Imagination Garden Experience",
      image: "/images/packageReview/disney-adventure-cruise/itinerary/3.jpg",
      description:
        "Wake up to an exciting day at sea filled with Disney magic. Enjoy breakfast before experiencing Broadway-style performances, Disney character meet-and-greets, family pools, and entertainment throughout the ship. Spend time at Disney Imagination Garden, featuring lively stage performances, dance parties, and immersive attractions. Relish delicious international cuisine at the themed restaurants. Overnight stay onboard the cruise.",
    },
        {
      day: 4,
      title: "Day at Sea – Marvel Landing & Toy Story Place",
      image: "/images/packageReview/disney-adventure-cruise/itinerary/4.jpg",
      description:
        "Enjoy another exciting day onboard the Disney Adventure Cruise. Experience Marvel Landing featuring thrilling attractions like Groot Galaxy Spin, Pym Quantum Racers and Ironcycle Test Run, the longest roller coaster at sea. Later, visit Toy Story Place where you can enjoy interactive splash zones, family pools, exciting water slides, Disney movies on giant screens, and delicious snacks from themed food outlets. Overnight stay onboard the cruise.",
    },

    {
      day: 5,
      title: "Disembarkation & Departure from Singapore",
      image: "/images/packageReview/disney-adventure-cruise/itinerary/5.jpg",
      description:
        "The Disney Adventure Cruise arrives at the Singapore Cruise Terminal at approximately 7:00 AM. After breakfast, complete the disembarkation process and proceed on a shared transfer to Singapore Changi Airport for your onward flight. Your magical Disney Adventure Cruise holiday concludes with unforgettable memories.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "3 Nights Disney Adventure Cruise in an Inside Stateroom",
    "1 Night accommodation in Singapore",
    "Daily breakfast at the hotel (except Day 1)",
    "All meals onboard the Disney Adventure Cruise",
    "Half-Day Singapore City Tour (SIC basis)",
    "Airport – Hotel – Airport transfers on SIC basis",
    "Singapore Hotel – Cruise Terminal transfer on SIC basis",
    "Broadway-style Disney shows & live entertainment",
    "Meet & Greet with Disney characters",
    "Access to Marvel Landing & Toy Story Place",
    "Disney Imagination Garden experiences",
    "Live shows including Moana – Call of the Sea",
    "Kids club & onboard family activities",
    "Port taxes",
    "Travel Insurance (valid up to 60 years of age)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "TCS & GST",
    "Cruise gratuity (USD 38 per person for 3 nights – payable onboard)",
    "Singapore Visa charges",
    "International & domestic airfare",
    "Airport taxes",
    "PCR test (if applicable)",
    "Lunch or meals not mentioned",
    "All beverages & alcoholic drinks",
    "Personal expenses such as laundry, minibar, telephone & shopping",
    "Tips for guides & drivers",
    "Midnight surcharge (if applicable)",
    "Tourism tax (if applicable)",
    "Peak season / blackout date surcharge",
    "Pre & post tour services",
    "English-speaking guide",
    "Any service not mentioned under 'Inclusions'",
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
    "Hotel check-in is generally at 2 PM and check-out at 11 AM; early check-in or late check-out may incur additional charges.",
    "City taxes, personal expenses, and optional tours are not included in the package.",
    "Visa approval is at the sole discretion of the embassy; Go Escapio is not responsible for delays or rejections.",
    "Travel insurance is recommended and travellers are responsible for their own safety during the trip.",
    "Go Escapio acts only as an intermediary and is not liable for third-party service disruptions.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default disneyAdventureCruise;