import type { PackageReview } from "@/types/packageReview";

const gorgeousKashmir: PackageReview = {
  slug: "gorgeous-kashmir",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/gorgeous-kashmir/gallery/1.jpg",
    "/images/packageReview/gorgeous-kashmir/gallery/2.jpg",
    "/images/packageReview/gorgeous-kashmir/gallery/3.jpg",
    "/images/packageReview/gorgeous-kashmir/gallery/4.jpg",
    "/images/packageReview/gorgeous-kashmir/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Gorgeous Kashmir",

  price: "16,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Gulmarg  India",

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
    Discover the enchanting beauty of Kashmir, often referred to as the "Paradise on Earth." This 5-day journey takes you through the serene Dal Lake, majestic Sonmarg meadows, the snow-covered landscapes of Gulmarg, and the timeless Mughal Gardens of Srinagar. Cruise on a traditional Shikara, admire breathtaking Himalayan scenery, and experience authentic Kashmiri hospitality for an unforgettable holiday.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Srinagar Arrival & Dal Lake Shikara Ride",
      image: "/images/packageReview/gorgeous-kashmir/itinerary/1.jpg",
      description:
        "Arrive at Srinagar Airport where our representative will welcome you and transfer you to your hotel. After check-in, enjoy a relaxing one-hour Shikara ride on the famous Dal Lake, passing floating gardens, local markets, and beautiful mountain scenery. Spend the evening at leisure before your overnight stay in Srinagar.",
    },

    {
      day: 2,
      title: "Srinagar to Sonmarg",
      image: "/images/packageReview/gorgeous-kashmir/itinerary/2.jpg",
      description:
        "After breakfast, proceed for a full-day excursion to Sonmarg, popularly known as the 'Meadow of Gold'. Enjoy spectacular views of snow-capped mountains, rivers, and lush valleys. Optional pony rides are available to visit the beautiful Thajiwas Glacier (at an additional cost). Return to Srinagar for dinner and an overnight stay.",
    },

    {
      day: 3,
      title: "Srinagar to Gulmarg",
      image: "/images/packageReview/gorgeous-kashmir/itinerary/3.jpg",
      description:
        "After breakfast, drive to Gulmarg, one of India's most beautiful hill stations. Explore the famous Gulmarg Golf Course, scenic meadows, and enjoy optional activities like the Gulmarg Gondola Cable Car ride, skiing, or snow sledging (at additional cost). Return to Srinagar in the evening for an overnight stay.",
    },

    {
      day: 4,
      title: "Gulmarg to Srinagar",
      image: "/images/packageReview/gorgeous-kashmir/itinerary/4.jpg",
      description:
        "After breakfast, spend time exploring Srinagar's famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Visit the historic Shankaracharya Temple and browse local handicraft shops for authentic Kashmiri souvenirs. In the evening, check in to a traditional Kashmiri Houseboat on Dal Lake for a unique overnight experience.",
    },

    {
      day: 5,
      title: "Srinagar Departure",
      image: "/images/packageReview/gorgeous-kashmir/itinerary/5.jpg",
      description:
        "After breakfast, check out from the houseboat/hotel and transfer to Srinagar Airport for your onward journey, taking home unforgettable memories of the beautiful Kashmir Valley.",
    },
  ],

    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation on Twin/Double Sharing Basis",
    "Daily Buffet Breakfast & Dinner",
    "Welcome Drink on Arrival",
    "01 Hour Shikara Ride on Dal Lake",
    "Srinagar Airport Pick-up & Drop",
    "Sonmarg Excursion",
    "Gulmarg Excursion",
    "Srinagar Local Sightseeing",
    "Houseboat Stay in Srinagar",
    "All Transfers & Sightseeing by Private Vehicle",
    "Driver Allowance",
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
    "Gulmarg Gondola Cable Car Tickets",
    "Pony Ride Charges at Sonmarg & Gulmarg",
    "Monument & Garden Entry Fees",
    "Camera & Video Charges",
    "Lunch",
    "Travel Insurance",
    "Personal Expenses (Laundry, Telephone, Shopping, etc.)",
    "Tips & Porterage",
    "Expenses Due to Weather, Roadblocks, or Flight Delays",
    "Anything Not Specifically Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change depending on hotel availability, season, and government regulations.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "Unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Guests must carry valid government-issued photo identification.",
    "Travel insurance is strongly recommended.",
    "Go Escapio is not responsible for airline delays, weather conditions, road closures, or third-party service disruptions.",
    "Optional activities such as Gondola rides, pony rides, and snow activities are payable directly.",
    "Rates are subject to availability until booking confirmation.",
    "Limited availability. Blackout dates may apply.",
    "Any service not specifically mentioned under 'Package Inclusions' will be treated as an exclusion.",
    "Personal expenses incurred during the trip are the traveller's responsibility.",
  ],
};

export default gorgeousKashmir;
