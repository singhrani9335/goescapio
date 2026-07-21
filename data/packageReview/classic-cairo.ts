import type { PackageReview } from "@/types/packageReview";

const classicCairo: PackageReview = {
  slug: "classic-cairo",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/classic-cairo/gallery/1.jpg",
    "/images/packageReview/classic-cairo/gallery/2.jpg",
    "/images/packageReview/classic-cairo/gallery/3.jpg",
    "/images/packageReview/classic-cairo/gallery/4.jpg",
    "/images/packageReview/classic-cairo/gallery/5.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days classic cairo with alexandria excursion",

  price: "54,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Cairo - Egypt",

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
    Discover the timeless charm of Egypt’s capital on this immersive Cairo getaway. From the awe-inspiring Pyramids of Giza and the legendary Sphinx to the priceless treasures of the Egyptian Museum, Cairo offers a journey through thousands of years of history. Explore the Mediterranean beauty of Alexandria, experience the heritage of Old Cairo, and discover ancient churches, bazaars, and cultural landmarks. This journey perfectly combines history, culture, and unforgettable Egyptian experiences.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [

    {
      day: 1,
      title: "Arrival In Cairo",
      image: "/images/packageReview/classic-cairo/itinerary/1.jpg",
      description:
        "Arrive at Cairo International Airport, where you will be met and assisted by our representative with immigration and customs formalities. Transfer by deluxe coach to your hotel in Cairo and check in. Rest of the day is at leisure. Overnight stay in Cairo.",
    },


    {
      day: 2,
      title: "Cairo City Tour & Pyramids Visit",
      image: "/images/packageReview/classic-cairo/itinerary/2.jpg",
      description:
        "After breakfast, proceed for a full-day guided tour of Cairo’s most iconic attractions. Visit the Great Pyramids of Giza and the legendary Sphinx. Continue to the Egyptian Museum, home to thousands of ancient artifacts and royal treasures. Explore local attractions including papyrus institute, cotton shop, perfume factory, and the famous Khan El Khalili Bazaar. Return to your hotel. Overnight stay in Cairo.",
    },


    {
      day: 3,
      title: "Cairo – Alexandria – Cairo",
      image: "/images/packageReview/classic-cairo/itinerary/3.jpg",
      description:
        "After breakfast, depart for Alexandria, the beautiful Mediterranean city of Egypt. Explore the Catacombs of Kom El Shoqafa, Pompey’s Pillar, and enjoy an exterior visit of the historic Citadel of Qaitbay. Discover the charm of Alexandria’s Greco-Roman heritage before returning to Cairo in the evening. Overnight stay in Cairo.",
    },


    {
      day: 4,
      title: "Old Cairo Tour",
      image: "/images/packageReview/classic-cairo/itinerary/4.jpg",
      description:
        "After breakfast, proceed for a half-day Old Cairo tour. Visit the Hanging Church and Abu Serga Church, important historical Christian landmarks. Explore the ancient streets of Old Cairo and enjoy some free time for shopping and local experiences. Return to the hotel. Overnight stay in Cairo.",
    },


    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/classic-cairo/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Cairo International Airport for your onward journey, carrying unforgettable memories of Egypt.",
    },

  ],
      // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Daily breakfast",
    "All airport and hotel transfers in Cairo (Airport–Hotel–Airport)",
    "Sightseeing tours as per itinerary including transportation by deluxe coach",
    "Entrance fees to mentioned monuments",
    "Qualified English-speaking guide",
    "04 nights accommodation in Cairo on bed & breakfast basis (standard room)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Extra meals not mentioned",
    "Entrance inside the Pyramids",
    "Egypt entry visa",
    "Optional tours",
    "Tips (USD 7 per person per day × 5 days)",
    "Beverages, drinks, and mineral water during meals",
    "Personal expenses",
    "Anything not mentioned in inclusions",
    "GST 5% & TCS 5% or as applicable",
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

export default classicCairo;