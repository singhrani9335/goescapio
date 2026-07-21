import type { PackageReview } from "@/types/packageReview";

const kenyaSafari: PackageReview = {
  slug: "kenya-safari",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/kenya-safari/gallery/1.jpg",
    "/images/packageReview/kenya-safari/gallery/2.jpg",
    "/images/packageReview/kenya-safari/gallery/3.jpg",
    "/images/packageReview/kenya-safari/gallery/4.jpg",
    "/images/packageReview/kenya-safari/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Kenyan Safari Adventure",

  price: "1,62,790",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Masai Mara National Reserve, Kenya",

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
    Step into the heart of Africa on an unforgettable Kenyan safari
    adventure where vast savannahs, dramatic landscapes, and extraordinary
    wildlife come together. From the legendary plains of the Masai Mara
    to the bird-filled shores of Lake Nakuru and the scenic Rift Valley,
    every day reveals a new story of nature and culture. Witness majestic
    wildlife on thrilling game drives, interact with the vibrant Maasai
    community, and relax in carefully selected safari lodges that blend
    comfort with wilderness charm.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Nairobi",
      image: "/images/packageReview/kenya-safari/itinerary/1.jpg",
      description:
        "Arrive at Jomo Kenyatta International Airport, Nairobi, where you will be welcomed by our representative. Transfer to your hotel via the complimentary shuttle service and complete the check-in formalities. Spend the rest of the day relaxing or exploring the hotel surroundings. Overnight stay in Nairobi.",
    },

    {
      day: 2,
      title: "Nairobi to Masai Mara National Reserve",
      image: "/images/packageReview/kenya-safari/itinerary/2.jpg",
      description:
        "After breakfast, depart Nairobi and travel through the scenic Great Rift Valley towards the world-famous Masai Mara National Reserve. Pass picturesque landscapes, fertile farmlands, and the town of Narok before arriving at your safari camp in time for lunch. Later in the afternoon, enjoy your first exciting game drive across the vast savannah in search of lions, elephants, giraffes, zebras, and other wildlife. Dinner and overnight stay at the safari camp.",
    },

    {
      day: 3,
      title: "Masai Mara National Reserve",
      image: "/images/packageReview/kenya-safari/itinerary/3.jpg",
      description:
        "Begin the day with an early morning game drive when wildlife is most active. Return to the lodge for breakfast and leisure time. In the afternoon, head out for another thrilling game drive and visit a traditional Maasai Village to experience the local culture and traditions. Optional hot air balloon safari is available at an additional cost. Dinner and overnight stay in Masai Mara.",
    },

    {
      day: 4,
      title: "Masai Mara to Lake Nakuru National Park via Lake Elementaita",
      image: "/images/packageReview/kenya-safari/itinerary/4.jpg",
      description:
        "After breakfast, depart Masai Mara and drive towards Lake Elementaita. Enjoy lunch at your lodge before continuing to Lake Nakuru National Park for an afternoon game drive. The park is famous for its flamingos, black and white rhinos, Rothschild giraffes, and abundant birdlife. Return to your lodge in the evening for dinner and an overnight stay.",
    },

    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/kenya-safari/itinerary/5.jpg",
      description:
        "After breakfast, travel to Lake Naivasha for a scenic boat ride where you may spot hippos and a variety of bird species. Continue your journey back to Nairobi and enjoy lunch before being transferred to Jomo Kenyatta International Airport for your onward flight. We recommend booking flights departing after 4:30 PM.",
    },
  ],

    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "1 Night Accommodation in Nairobi (Hilton Garden Inn or Similar) on Bed & Breakfast Basis",
    "2 Nights Accommodation in Masai Mara (Sentrim Mara Camp or Similar) on Full Board Basis",
    "1 Night Accommodation at Lake Elementaita (Sentrim Elementaita Lodge or Similar) on Full Board Basis",
    "Shared 4x4 Safari Vehicle with Guaranteed Window Seat",
    "Services of an Experienced English-Speaking Driver Guide",
    "Game Drives as per the Itinerary",
    "Visit to a Traditional Maasai Village",
    "Lake Naivasha Boat Ride",
    "Lake Nakuru National Park Game Drive",
    "All National Park Entrance Fees",
    "Filtered Drinking Water During Safari",
    "All Government Taxes",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International Airfare",
    "Kenya Visa Fees",
    "Travel Insurance",
    "Optional Hot Air Balloon Safari",
    "Personal Expenses (Laundry, Telephone, Mini Bar, etc.)",
    "Alcoholic & Non-Alcoholic Beverages",
    "Tips for Driver Guide & Hotel Staff",
    "Early Check-in & Late Check-out Charges",
    "Meals Not Mentioned in the Itinerary",
    "GST & TCS as Applicable",
    "Anything Not Specifically Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only after receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change without prior notice depending on hotel availability, park fees, and exchange rates.",
    "A valid passport with at least six months validity is mandatory for travel.",
    "Visa approval is solely at the discretion of the Kenyan immigration authorities.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "Unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Travel insurance is highly recommended for all travellers.",
    "Go Escapio is not responsible for airline delays, baggage loss, weather conditions, wildlife sightings, or third-party service disruptions.",
    "The itinerary may be modified due to operational requirements, weather conditions, or park regulations.",
    "Guests are responsible for all personal expenses incurred during the trip.",
    "Rates are subject to availability until the booking is confirmed.",
    "Limited availability. Blackout dates and peak season surcharges may apply.",
  ],
};

export default kenyaSafari;