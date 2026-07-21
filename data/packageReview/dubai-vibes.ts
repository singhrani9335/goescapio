import type { PackageReview } from "@/types/packageReview";

const dubaiVibes: PackageReview = {
  slug: "dubai-vibes",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/dubai-vibes/gallery/1.jpg",
    "/images/packageReview/dubai-vibes/gallery/2.jpg",
    "/images/packageReview/dubai-vibes/gallery/3.jpg",
    "/images/packageReview/dubai-vibes/gallery/4.jpg",
    "/images/packageReview/dubai-vibes/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 nights & 5 days dubai vibes",

  price: "29,999",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Dubai - United Arab Emirates",

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
    Discover the dazzling charm of Dubai with this exciting 4-night itinerary covering iconic attractions, luxurious experiences, and thrilling desert adventures. Enjoy panoramic views from the Burj Khalifa, explore modern and cultural Dubai on guided tours, cruise along the Marina with dinner, witness the beauty of the Dubai Frame, and experience the magic of a Desert Safari. The tour also includes a full-day visit to Abu Dhabi, the stunning Sheikh Zayed Grand Mosque, and the beautiful BAPS Hindu Temple. Perfect for couples, families, and first-time travelers.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Dubai – Marina Dhow Cruise With Dinner",
      image: "/images/packageReview/dubai-vibes/itinerary/1.jpg",
      description:
        "Arrive at Dubai International Airport where our representative will greet you and assist with your transfer to the hotel. After check-in and some relaxation, spend the evening aboard a Marina Dhow Cruise featuring a delicious international buffet dinner, live entertainment, and breathtaking views of Dubai Marina's illuminated skyline. Return to the hotel for an overnight stay in Dubai.",
    },

    {
      day: 2,
      title: "Dubai City Tour + Dubai Frame",
      image: "/images/packageReview/dubai-vibes/itinerary/2.jpg",
      description:
        "After breakfast, proceed on a half-day Dubai City Tour covering popular attractions including Jumeirah Beach, Atlantis The Palm (photo stop), and Sheikh Zayed Road. Later, visit the spectacular Dubai Frame and enjoy panoramic views of both Old and New Dubai from the observation deck. Evening at leisure. Overnight stay in Dubai.",
    },
        {
      day: 3,
      title: "Dubai Mall + Burj Khalifa (124th & 125th Floor)",
      image: "/images/packageReview/dubai-vibes/itinerary/3.jpg",
      description:
        "After breakfast, visit the world-famous Dubai Mall, one of the largest shopping and entertainment destinations in the world. Later, ascend to the 124th & 125th Floors of the iconic Burj Khalifa (Non-Prime Time) and enjoy breathtaking panoramic views of Dubai's skyline. In the evening, you may watch the spectacular Dubai Fountain show before returning to your hotel. Overnight stay in Dubai.",
    },

    {
      day: 4,
      title: "Desert Safari With BBQ Dinner",
      image: "/images/packageReview/dubai-vibes/itinerary/4.jpg",
      description:
        "Enjoy breakfast at the hotel and spend the morning at leisure. In the afternoon, head into the Arabian Desert for an exciting Desert Safari. Experience thrilling dune bashing, camel rides, sandboarding, and traditional Arabian hospitality. End the evening with live cultural performances and a delicious BBQ buffet dinner before returning to your hotel for an overnight stay in Dubai.",
    },

    {
      day: 5,
      title: "Abu Dhabi City Tour + Grand Mosque + BAPS Temple – Departure",
      image: "/images/packageReview/dubai-vibes/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and proceed on a full-day excursion to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque, followed by the beautifully designed BAPS Hindu Temple. Explore the city's modern attractions before being transferred to Dubai International Airport for your onward flight. Your memorable Dubai holiday comes to an end.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "4 Nights accommodation in Dubai",
    "Daily breakfast at the hotel",
    "Private airport transfers",
    "Marina Dhow Cruise with dinner",
    "Dubai City Tour",
    "Dubai Frame entry ticket",
    "Dubai Mall visit",
    "Burj Khalifa 124th & 125th Floor (Non-Prime Time)",
    "Desert Safari with BBQ dinner",
    "Abu Dhabi City Tour",
    "Sheikh Zayed Grand Mosque visit",
    "BAPS Hindu Temple visit",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Visa charges",
    "Flight tickets",
    "Tourism Dirham fee",
    "Personal expenses such as shopping, laundry, telephone bills, and tips",
    "Meals and beverages not mentioned in the itinerary",
    "Optional activities not included in the package",
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
    "Hotel check-in is generally at 2 PM and check-out at 11 AM; early check-in or late check-out may incur extra charges.",
    "City taxes, personal expenses, and optional tours are not included in the package.",
    "Visa approval is at the discretion of the embassy; Go Escapio holds no liability for delays or rejections.",
    "Travel insurance is recommended and not included; travellers are responsible for their safety during activities.",
    "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
    "Rates and rooms are subject to availability.",
    "Limited availability. Blackout dates may apply. Book now.",
  ],
};

export default dubaiVibes;