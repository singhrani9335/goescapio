import type { PackageReview } from "@/types/packageReview";

const southIndia: PackageReview = {
  slug: "south-india",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/south-india/gallery/1.jpg",
    "/images/packageReview/south-india/gallery/2.jpg",
    "/images/packageReview/south-india/gallery/3.jpg",
    "/images/packageReview/south-india/gallery/4.jpg",
    "/images/packageReview/south-india/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Incredible South India",

  price: "20,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Coonoor India",

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
    South India is a land of timeless traditions, magnificent temples, scenic hill stations, and vibrant cities. Known for its rich Dravidian heritage, diverse cuisine, and warm hospitality, the region offers a perfect blend of culture and nature. From the modern charm of Bangalore and the royal elegance of Mysore to the misty hills of Ooty, this journey showcases the true essence of South India through lush landscapes, historic monuments, and unforgettable experiences.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Bangalore | Bangalore Sightseeing",
      image: "/images/packageReview/south-india/itinerary/1.jpg",
      description:
        "Upon arrival at Bangalore Airport or Railway Station, meet our representative and transfer to the hotel. After some time to relax, proceed for Bangalore city sightseeing. Visit Lalbagh Botanical Garden, Cubbon Park, Visveswaraiah Museum, admire the majestic Vidhana Soudha (outside view), and seek blessings at the ISKCON Temple. Return to the hotel for an overnight stay in Bangalore.",
    },

    {
      day: 2,
      title: "Bangalore to Mysore",
      image: "/images/packageReview/south-india/itinerary/2.jpg",
      description:
        "After breakfast, check out and drive to Mysore. Visit the beautiful St. Philomena's Church, Mysore Zoo, the magnificent Mysore Palace, and later explore the famous Brindavan Gardens with its musical fountain and illuminated gardens. Overnight stay in Mysore.",
    },

    {
      day: 3,
      title: "Mysore to Ooty",
      image: "/images/packageReview/south-india/itinerary/3.jpg",
      description:
        "After breakfast, visit Chamundi Hills and the famous Chamundeshwari Temple before driving towards Ooty. En route, pass through Bandipur National Park and visit the scenic Pykara Waterfalls along with the popular 6th & 9th Mile Shooting Points. Upon arrival, check in to your hotel and enjoy the evening at leisure. Overnight stay in Ooty.",
    },

    {
      day: 4,
      title: "Ooty & Coonoor Sightseeing",
      image: "/images/packageReview/south-india/itinerary/4.jpg",
      description:
        "After breakfast, enjoy a full-day excursion covering Ooty and Coonoor. Visit Sim's Park, Tea Gardens, Doddabetta Peak, Botanical Garden, Rose Garden, and Ooty Lake. Guests may also enjoy an optional toy train ride between Ooty and Coonoor. Return to the hotel for an overnight stay in Ooty.",
    },

    {
      day: 5,
      title: "Ooty to Bangalore | Departure",
      image: "/images/packageReview/south-india/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and drive back to Bangalore. En route, visit the historic town of Srirangapatna, once the capital of Tipu Sultan. Continue to Bangalore Airport or Railway Station for your onward journey with unforgettable memories of South India.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation on Twin/Double Sharing Basis",
    "Daily Breakfast at All Hotels",
    "All Transfers & Sightseeing by Private Air-Conditioned Vehicle",
    "Bangalore City Sightseeing",
    "Mysore Sightseeing",
    "Ooty & Coonoor Sightseeing",
    "Driver Allowance",
    "Fuel Charges",
    "Road Tax",
    "Parking Charges",
    "Toll Taxes",
    "All Applicable Government Taxes",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare / Train Fare",
    "5% GST",
    "Lunch & Dinner Unless Specified",
    "Monument Entry Fees",
    "Camera & Video Charges",
    "Guide Charges",
    "Toy Train Tickets",
    "Personal Expenses (Laundry, Telephone, Shopping, etc.)",
    "Travel Insurance",
    "Tips & Porterage",
    "Expenses Due to Natural Calamities, Roadblocks, or Flight Delays",
    "Anything Not Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change without prior notice based on hotel availability and seasonal demand.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "All sightseeing is subject to weather and local conditions.",
    "Unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Travel insurance is recommended for all travellers.",
    "Guests are responsible for carrying valid government-issued photo identification.",
    "Go Escapio is not responsible for delays, road closures, natural disasters, or third-party service disruptions.",
    "Any increase in taxes, fuel prices, or government charges will be borne by the traveller.",
    "Rates are subject to availability until booking confirmation.",
    "Limited availability. Blackout dates may apply.",
    "Any service not specifically mentioned under 'Package Inclusions' will be treated as an exclusion.",
  ],
};

export default southIndia;