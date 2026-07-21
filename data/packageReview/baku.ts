import type { PackageReview } from "@/types/packageReview";

const baku: PackageReview = {
  slug: "baku",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/baku/gallery/1.jpg",
    "/images/packageReview/baku/gallery/2.jpg",
    "/images/packageReview/baku/gallery/3.jpg",
    "/images/packageReview/baku/gallery/4.jpg",
    "/images/packageReview/baku/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days baku tour",

  price: "27,490",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Baku - Azerbaijan",

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
    Experience the best of Azerbaijan’s vibrant capital with this budget-friendly Baku Super Saver package, perfect for leisure travellers, couples, and first-time international visitors. This thoughtfully designed holiday includes comfortable accommodation, daily breakfast, private airport transfers, and guided sightseeing. Explore Baku’s historic Old City, admire the futuristic skyline, visit scenic viewpoints overlooking the Caspian Sea, and enjoy leisure time to discover the city's cafés, shopping streets, and local culture at your own pace.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Baku",
      image: "/images/packageReview/baku/itinerary/1.jpg",
      description:
        "Arrive at Baku International Airport, where you will be greeted by our representative and transferred privately to your hotel. Check in and relax after your journey. The rest of the day is free for leisure—explore nearby cafés or simply unwind at the hotel. Overnight stay in Baku.",
    },

    {
      day: 2,
      title: "Baku City Tour",
      image: "/images/packageReview/baku/itinerary/2.jpg",
      description:
        "After breakfast, proceed for a half-day guided Baku City Tour. Visit the historic Old City (Icherisheher), enjoy a photo stop at the iconic Maiden Tower, and admire the Shirvanshah’s Palace from outside. Continue to Highland Park for panoramic views of the Caspian Sea and the famous Flame Towers before returning to the hotel. Overnight stay in Baku.",
    },

    {
      day: 3,
      title: "Gobustan & Mud Volcano Tour",
      image: "/images/packageReview/baku/itinerary/3.jpg",
      description:
        "After breakfast, proceed for an excursion to Gobustan National Park, famous for its ancient rock carvings and unique mud volcanoes. Explore this UNESCO World Heritage Site and experience one of Azerbaijan’s most remarkable natural attractions before returning to Baku. Overnight stay in Baku.",
    },

    {
      day: 4,
      title: "Baku Leisure & Shopping",
      image: "/images/packageReview/baku/itinerary/4.jpg",
      description:
        "After breakfast, enjoy the day at leisure. Explore Baku Boulevard, visit shopping malls, cafés, or local markets, or choose an optional sightseeing excursion at your own expense. Overnight stay in Baku.",
    },

    {
      day: 5,
      title: "Departure From Baku",
      image: "/images/packageReview/baku/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer privately to Baku International Airport for your onward journey with wonderful memories of Azerbaijan.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "04 nights accommodation at Wyndham Baku or similar hotel",
    "Daily breakfast at the hotel",
    "Private Airport – Hotel – Airport transfers",
    "Half-day Baku City Tour",
    "Gobustan & Mud Volcano Tour",
    "Meet & Greet service at Baku International Airport",
    "Private transportation as per itinerary",
    "English-speaking driver/guide during sightseeing",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Azerbaijan visa charges",
    "Travel insurance",
    "GST & TCS",
    "Early check-in & late check-out",
    "Entrance fees not mentioned under inclusions",
    "Optional tours & activities",
    "Meals not mentioned in the itinerary",
    "Personal expenses such as laundry, shopping, minibar, telephone calls, etc.",
    "Tips for driver & guide",
    "Any service not specifically mentioned under inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only upon receipt of the specified deposit amount and are subject to availability.",
    "Package quotes are tentative and may change based on real-time availability and exchange rates at the time of advance payment.",
    "Payments must strictly follow the defined payment policy; non-compliance may lead to service cancellations.",
    "All cancellations must be submitted in writing; cancellation charges apply as per company policy.",
    "Go Escapio reserves the right to modify itineraries or services due to operational or unforeseen circumstances.",
    "Travellers are responsible for carrying valid passports, visas, and all required travel documents.",
    "Go Escapio is not responsible for flight delays, baggage loss, missed connections, or airline cancellations.",
    "Hotel check-in is generally from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are subject to hotel policy and additional charges.",
    "City taxes, optional tours, entrance fees (unless mentioned), and personal expenses are not included.",
    "Visa approval is solely at the discretion of the Embassy or Immigration Authorities.",
    "Travel insurance is recommended and is not included unless specifically mentioned.",
    "Go Escapio acts only as an intermediary between travellers and service providers and is not liable for third-party service disruptions.",
    "Rates and hotel rooms are subject to availability at the time of booking.",
    "Limited availability. Blackout dates may apply. Book early to secure your preferred travel dates.",
  ],
};

export default baku;