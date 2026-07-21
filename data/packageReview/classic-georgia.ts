import type { PackageReview } from "@/types/packageReview";

const classicGeorgia: PackageReview = {
  slug: "classic-georgia",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/classic-georgia/gallery/1.jpg",
    "/images/packageReview/classic-georgia/gallery/2.jpg",
    "/images/packageReview/classic-georgia/gallery/3.jpg",
    "/images/packageReview/classic-georgia/gallery/4.jpg",
    "/images/packageReview/classic-georgia/gallery/5.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days classic georgia",

  price: "39,290",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Tbilisi - Georgia",

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
  Discover the charm of Georgia with this perfectly curated 5-day journey covering historic Tbilisi, the romantic wine region of Kakheti, and the breathtaking Caucasus Mountains. Explore ancient churches, vibrant old towns, scenic mountain roads, and enjoy authentic Georgian wine tasting—all with private transfers and guided sightseeing for a comfortable and immersive experience.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [

    {
      day: 1,
      title: "Arrival in Tbilisi",
      image: "/images/packageReview/classic-georgia/itinerary/1.jpg",
      description:
        "Welcome to Georgia! Upon arrival at Tbilisi International Airport, you will be met by our representative and transferred to your hotel on a private basis. Check in at the hotel (standard check-in time around 14:00 hrs). The rest of the day is free to relax after your journey or explore the surroundings at leisure. Overnight stay in Tbilisi.",
    },


    {
      day: 2,
      title: "Tbilisi City Tour (Private Basis)",
      image: "/images/packageReview/classic-georgia/itinerary/2.jpg",
      description:
        "After breakfast at the hotel, proceed for a guided Tbilisi City Tour. Visit the Holy Trinity Cathedral, one of the largest Orthodox churches in the world. Continue to Metekhi Church and the monument of Vakhtang Gorgasali, the legendary founder of Tbilisi. Walk through the Sulphur Bath district, passing the only mosque in the city. Explore the charming Sharden Street with its narrow lanes, cafés, wine bars, and souvenir shops. Visit Sioni Cathedral, Anchiskhati Basilica, and the famous Rezo Gabriadze Clock Tower. Cross the Bridge of Peace to Rike Park, from where you will take a cable car ride to Narikala Fortress for panoramic city views. Return to the hotel. Overnight stay in Tbilisi.",
    },


    {
      day: 3,
      title: "Tbilisi – Sighnaghi – Kakheti – Tbilisi (Private Basis)",
      image: "/images/packageReview/classic-georgia/itinerary/3.jpg",
      description:
        "After breakfast, depart for the Kakheti region, famous for its wine culture and scenic landscapes. Visit Sighnaghi, also known as the “City of Love,” offering beautiful views over the Alazani Valley. Continue to Bodbe Monastery, an important religious site set amidst serene surroundings. Later, visit the KTW Wine Factory for a guided wine tasting experience. After a full day of exploration, return to Tbilisi. Overnight stay in Tbilisi.",
    },


    {
      day: 4,
      title: "Tbilisi – Ananuri – Gudauri – Tbilisi (Private Basis)",
      image: "/images/packageReview/classic-georgia/itinerary/4.jpg",
      description:
        "Enjoy breakfast at the hotel and proceed towards the Caucasus Mountains via the Georgian Military Highway. En route, visit the historic Ananuri Fortress overlooking the Zhinvali Reservoir. Continue to Gudauri, a scenic mountain resort located at an altitude of around 3,000 meters. Stop at the Gudauri Panorama (Georgia–Russia Friendship Monument) to enjoy breathtaking views of the Caucasus range. Weather permitting, travel to Stepantsminda and visit the iconic Gergeti Trinity Church by 4x4 vehicle. Return to Tbilisi in the evening. Overnight stay in Tbilisi.",
    },


    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/classic-georgia/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Tbilisi International Airport on a private basis for your return flight back to India, carrying beautiful memories of Georgia.",
    },

  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "04 nights accommodation in Tbilisi at selected hotel or similar",
    "Daily breakfast (except Day 1)",
    "Airport – Hotel – Airport transfers on Private basis",
    "Private sightseeing tours as per itinerary:",
    "Tbilisi City Tour",
    "Tbilisi – Sighnaghi – Kakheti – Tbilisi",
    "Tbilisi – Ananuri – Gudauri – Tbilisi",
    "Entrance fees included:",
    "Tbilisi Cable Car (two-way)",
    "KTW Wine Factory – Wine Tasting",
    "Gergeti Trinity Church visit by 4x4 vehicle",
    "Travel Insurance (valid for passengers up to 60 years of age)",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Visa charges",
    "TCS & GST",
    "Departure PCR test (if applicable)",
    "Meals not mentioned in the itinerary",
    "Tips for guide & driver (approx. SGD 05 per person per day)",
    "Personal expenses such as minibar, laundry, telephone calls, camera fees, etc.",
    "Drinks and beverages",
    "Midnight surcharge, if applicable",
    "Tourism tax (if applicable)",
    "Any services not mentioned under inclusions",
    "Hotel promotional rates not valid during Blackout / Surcharge / Stop Sale dates",
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
    "Hotel check-in is generally 2 PM and check-out at 11 AM; early check-in/late check-out is extra.",
    "City taxes, personal expenses, and optional tours are not included in the package.",
    "Visa approval is at the discretion of the embassy; Go Escapio holds no liability for delays or rejections.",
    "Travel insurance is recommended and not included; the traveller is responsible for safety during activities.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],

};

export default classicGeorgia;