import type { PackageReview } from "@/types/packageReview";

const blissfulKerala: PackageReview = {
  slug: "blissful-kerala",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/blissful-kerala/gallery/1.jpg",
    "/images/packageReview/blissful-kerala/gallery/2.jpg",
    "/images/packageReview/blissful-kerala/gallery/3.jpg",
    "/images/packageReview/blissful-kerala/gallery/4.jpg",
    "/images/packageReview/blissful-kerala/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days blissful kerala",

  price: "16,500",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Thekkady - India",

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
    Discover the breathtaking beauty of Kerala with this perfectly crafted 4 Nights / 5 Days itinerary covering the lush green hills of Munnar, the wildlife and spice plantations of Thekkady, and the tranquil backwaters of Alleppey aboard a deluxe houseboat. Ideal for honeymooners, families, and nature lovers, this journey blends scenic landscapes, cultural experiences, wildlife adventures, and peaceful cruising for an unforgettable Kerala holiday.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Cochin – Transfer to Munnar",
      image: "/images/packageReview/blissful-kerala/itinerary/1.jpg",
      description:
        "Arrive at Cochin Airport / Railway Station where our representative will greet you. Drive to Munnar through picturesque valleys and waterfalls including Cheeyappara & Valara Falls. Upon arrival, check in to the hotel and relax. The evening is free to explore local markets and cafés. Overnight stay in Munnar.",
    },

    {
      day: 2,
      title: "Full-Day Munnar Sightseeing",
      image: "/images/packageReview/blissful-kerala/itinerary/2.jpg",
      description:
        "After breakfast, enjoy a full-day sightseeing tour covering Eravikulam National Park, home to the endangered Nilgiri Tahr, the Tea Museum & Tea Plantations to learn about tea production, Eco Point, and Blossom Park. Spend the evening at leisure enjoying your resort facilities. Overnight stay in Munnar.",
    },

    {
      day: 3,
      title: "Munnar - Thekkady | Periyar Wildlife & Shows",
      image: "/images/packageReview/blissful-kerala/itinerary/3.jpg",
      description:
        "After breakfast, proceed to Thekkady (approx. 4 hours). Check in to your hotel and later visit Periyar Wildlife Sanctuary (optional boat safari at your own cost). Enjoy a traditional Kathakali Dance performance and witness the famous Kalaripayattu Martial Arts Show. Spend the evening exploring local spice markets and Ayurveda centres. Overnight stay in Thekkady.",
    },

    {
      day: 4,
      title: "Thekkady - Alleppey | Deluxe Houseboat",
      image: "/images/packageReview/blissful-kerala/itinerary/4.jpg",
      description:
        "After breakfast, drive to Alleppey and check in to your 1 Bedroom Deluxe Houseboat with a welcome drink. Cruise through serene backwaters, canals, lagoons and paddy fields while enjoying lunch, evening tea & snacks, and dinner onboard. Witness a beautiful sunset from the deck before enjoying an overnight stay on the houseboat.",
    },

    {
      day: 5,
      title: "Alleppey - Cochin Departure",
      image: "/images/packageReview/blissful-kerala/itinerary/5.jpg",
      description:
        "Enjoy breakfast on the houseboat and check out at 9:00 AM. Transfer to Cochin Airport / Railway Station for your onward journey with unforgettable memories of Kerala.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation in deluxe hotels/resorts for 4 nights",
    "Daily breakfast at hotels",
    "1 Bedroom Deluxe Houseboat with all meals",
    "Private cab for all transfers and sightseeing",
    "Driver allowance, fuel charges, toll, parking and taxes",
    "Pick-up from Cochin Airport / Railway Station",
    "Drop at Cochin Airport / Railway Station",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare or train fare",
    "Lunch and dinner (except breakfast at hotels and all meals on the houseboat)",
    "Entry tickets, safaris, adventure activities and cultural shows",
    "Personal expenses such as shopping, laundry, telephone calls and tips",
    "Anything not mentioned under inclusions",
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
    "Hotel check-in is generally at 2:00 PM and check-out at 11:00 AM; early check-in or late check-out may incur additional charges.",
    "City taxes, personal expenses and optional tours are not included in the package.",
    "Visa approval is at the discretion of the concerned embassy; Go Escapio holds no liability for delays or rejections.",
    "Travel insurance is recommended and not included; travellers are responsible for their safety during activities.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default blissfulKerala;