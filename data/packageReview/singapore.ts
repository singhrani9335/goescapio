import type { PackageReview } from "@/types/packageReview";

const singapore: PackageReview = {
  slug: "singapore",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/singapore/1.jpg",
    "/images/packageReview/singapore/2.jpg",
    "/images/packageReview/singapore/3.jpg",
    "/images/packageReview/singapore/4.jpg",
    "/images/packageReview/singapore/5.jpg",
    "/images/packageReview/singapore/6.jpg",
    "/images/packageReview/singapore/7.jpg",
    "/images/packageReview/singapore/8.jpg",
    "/images/packageReview/singapore/9.jpg",
    "/images/packageReview/singapore/10.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Singapore Highlights",

  price: "54,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Singapore",

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
    Explore the modern city of Singapore with its iconic skyline,
    beautiful gardens, world-class attractions and vibrant nightlife.
    Visit Marina Bay Sands, Gardens by the Bay, Sentosa Island,
    Universal Studios Singapore and enjoy a perfect blend of
    sightseeing, shopping and entertainment during this memorable holiday.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Singapore",
      image: "/images/packageReview/singapore/1.jpg",
      description:
        "Arrive at Singapore Airport, transfer to the hotel and enjoy a relaxing evening with the famous Night Safari.",
    },
    {
      day: 2,
      title: "Singapore City Tour",
      image: "/images/packageReview/singapore/2.jpg",
      description:
        "Visit Merlion Park, Marina Bay Sands, Gardens by the Bay, Chinatown and Little India.",
    },
    {
      day: 3,
      title: "Sentosa Island",
      image: "/images/packageReview/singapore/3.jpg",
      description:
        "Enjoy a full-day excursion to Sentosa Island including Cable Car, Wings of Time and other attractions.",
    },
    {
      day: 4,
      title: "Universal Studios Singapore",
      image: "/images/packageReview/singapore/4.jpg",
      description:
        "Spend an exciting day at Universal Studios Singapore with thrilling rides, live shows and entertainment.",
    },
    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/singapore/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Singapore Airport for your onward journey.",
    },

        
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "4 nights accommodation on twin-sharing basis",
    "Daily breakfast at the hotel",
    "Airport transfers on SIC basis",
    "Singapore city tour",
    "Night Safari entry tickets",
    "Sentosa Island tour with Cable Car",
    "Universal Studios Singapore admission",
    "All sightseeing and transfers as per itinerary",
    "All applicable taxes (excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Singapore Visa charges",
    "Travel insurance",
    "Lunch and dinner unless specified",
    "Personal expenses such as shopping and laundry",
    "Optional sightseeing and activities",
    "Tips, porterage and driver gratuity",
    "GST and government taxes not mentioned",
    "Anything not mentioned under inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "Package confirmation is subject to availability.",
    "Passport must be valid for at least 6 months from the date of travel.",
    "Visa approval is subject to the Singapore Immigration Authorities.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Unused services are non-refundable.",
    "Itinerary may change due to operational reasons.",
    "Cancellation charges apply as per company policy.",
    "Travel insurance is strongly recommended.",
    "Go Escapio is not responsible for flight delays or cancellations.",
    "All disputes are subject to Delhi jurisdiction.",
  ],
};

export default singapore;