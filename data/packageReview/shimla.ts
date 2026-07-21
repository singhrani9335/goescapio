import type { PackageReview } from "@/types/packageReview";

const shimla: PackageReview = {
  slug: "shimla",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/shimla/gallery/1.jpg",
    "/images/packageReview/shimla/gallery/2.jpg",
    "/images/packageReview/shimla/gallery/3.jpg",
    "/images/packageReview/shimla/gallery/4.jpg",
    "/images/packageReview/shimla/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days The Allure of Shimla",

  price: "8,390",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Shimla - India",

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
    Discover the timeless charm of Shimla, the former summer capital of British India,
    nestled amidst the majestic Himalayas. This 5-day journey offers a perfect blend of
    scenic beauty, colonial heritage, and leisurely exploration. From Mall Road strolls
    and Kufri's snow-kissed landscapes to comfortable Volvo travel and personalized
    sightseeing, this package is designed for a relaxed and memorable hill-station escape.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Shimla",
      image: "/images/packageReview/shimla/itinerary/1.jpg",
      description:
        "Arrive in Delhi and report on your own to I.S.B.T. Bus Stand by 09:00 PM. Board the AC Volvo bus for an overnight journey to Shimla, enjoying a comfortable ride through the hills. Overnight travel by Volvo.",
    },

    {
      day: 2,
      title: "Shimla Local Sightseeing",
      image: "/images/packageReview/shimla/itinerary/2.jpg",
      description:
        "Arrive in Shimla in the morning and meet your driver. Transfer to the hotel (early check-in subject to availability; standard check-in at 12:00 noon). After freshening up, proceed for Shimla local sightseeing. Visit the Indian Institute of Advanced Study, followed by a walking tour of Mall Road covering Scandal Point, The Ridge, Gaiety Theatre, Christ Church, Lakkar Bazaar, Heritage Museum, Rani Jhansi Park, and Johnnie's Wax Museum. Return to the hotel for dinner and overnight stay.",
    },

    {
      day: 3,
      title: "Kufri Excursion",
      image: "/images/packageReview/shimla/itinerary/3.jpg",
      description:
        "After breakfast, proceed to Kufri, a charming hill retreat known for its snow views, dense forests, and panoramic Himalayan scenery. Visit attractions such as Indira Gandhi Holiday Home and enjoy optional horse riding through apple orchards (at your own expense). Return to Shimla in the evening. Spend free time exploring Mall Road or relaxing at a café.",
    },

    {
      day: 4,
      title: "Leisure Day & Departure",
      image: "/images/packageReview/shimla/itinerary/4.jpg",
      description:
        "After breakfast, check out from the hotel. Enjoy leisure time exploring Shimla at your own pace. In the evening, transfer to the Volvo Bus Stand and board your overnight AC Volvo bus back to Delhi.",
    },

    {
      day: 5,
      title: "Arrival in Delhi",
      image: "/images/packageReview/shimla/itinerary/5.jpg",
      description:
        "Arrive in Delhi in the morning with unforgettable memories of your beautiful Shimla holiday. Tour ends.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Welcome drink on arrival",
    "2 nights accommodation in Shimla hotel",
    "02 buffet breakfasts and dinners at the hotel",
    "Delhi - Shimla - Delhi travel by AC Volvo Bus",
    "Pick-up and drop from Shimla Bus Stand",
    "Sightseeing by private/personal car",
    "Two full-day sightseeing tours (Shimla Local & Kufri)",
    "Breakfast and dinner as per itinerary",
    "Parking charges",
    "Toll tax",
    "Road tax",
    "Fuel charges",
    "Driver allowance",
    "All tours and transfers by personal car",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Camera fees",
    "Alcoholic and non-alcoholic beverages",
    "Travel insurance",
    "5% GST",
    "Airfare / Train fare",
    "Monument and museum entrance fees",
    "Tips, laundry, phone calls, and personal expenses",
    "Additional sightseeing or vehicle usage beyond the itinerary",
    "4x4 chain vehicle charges",
    "Expenses due to unforeseen circumstances such as roadblocks, delays, political disturbances, or vehicle breakdowns",
    "Only one sightseeing option can be covered: Kufri or Naldehra",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
    "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
    "Payments must follow the defined payment policy. Failure to do so may result in cancellation of services.",
    "All cancellations must be submitted in writing. Cancellation charges apply as per company policy.",
    "Go Escapio reserves the right to modify itineraries or services due to unforeseen circumstances.",
    "Travellers are responsible for carrying valid travel documents.",
    "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
    "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM. Early check-in and late check-out are subject to availability and additional charges.",
    "City taxes, personal expenses, and optional tours are not included in the package price.",
    "Visa approval is solely at the discretion of the respective embassy.",
    "Travel insurance is recommended and is not included in the package.",
    "Go Escapio acts only as an intermediary and is not liable for third-party service disruptions.",
    "Rates and room availability are subject to change without prior notice.",
    "Limited availability. Blackout dates may apply.",
  ],
};

export default shimla;