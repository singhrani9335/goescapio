import type { PackageReview } from "@/types/packageReview";

const vietnam: PackageReview = {
  slug: "vietnam",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

gallery: [
  "/images/packageReview/vietnam/gallery/1.jpg",
  "/images/packageReview/vietnam/gallery/2.jpg",
  "/images/packageReview/vietnam/gallery/3.jpg",
  "/images/packageReview/vietnam/gallery/4.jpg",
  "/images/packageReview/vietnam/gallery/5.jpg",
],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Beautiful Vietnam Tour",

  price: "59,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Hanoi - Da Nang - Ho Chi Minh Vietnam",

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
    Explore the beauty of Vietnam with this amazing holiday package.
    Discover historical cities, beautiful beaches, stunning landscapes and
    rich Vietnamese culture while enjoying comfortable stays and sightseeing.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Arrival in Hanoi",
    image: "/images/packageReview/vietnam/itinerary/1.jpg",
    description:
      "Arrive at Noi Bai International Airport in Hanoi and transfer to your hotel. Complete the check-in formalities and spend the rest of the day at leisure exploring the nearby attractions or relaxing after your journey.",
  },

  {
    day: 2,
    title: "Hanoi City Tour",
    image: "/images/packageReview/vietnam/itinerary/2.jpg",
    description:
      "After breakfast, enjoy a guided tour of Hanoi covering Ho Chi Minh Mausoleum, One Pillar Pagoda, the Temple of Literature, Hoan Kiem Lake, and the vibrant Old Quarter. Experience the rich history and culture of Vietnam's capital city.",
  },

  {
    day: 3,
    title: "Halong Bay Cruise",
    image: "/images/packageReview/vietnam/itinerary/3.jpg",
    description:
      "Proceed for a full-day excursion to the UNESCO World Heritage Site of Halong Bay. Cruise through the emerald waters surrounded by spectacular limestone islands, explore scenic caves, and enjoy the breathtaking natural beauty before returning to Hanoi.",
  },

  {
    day: 4,
    title: "Da Nang & Hoi An Tour",
    image: "/images/packageReview/vietnam/itinerary/4.jpg",
    description:
      "Travel to Da Nang and visit its beautiful beaches before continuing to the charming ancient town of Hoi An. Walk through its lantern-lit streets, historic buildings, and local markets while experiencing its unique cultural heritage.",
  },

  {
    day: 5,
    title: "Ba Na Hills & Golden Bridge",
    image: "/images/packageReview/vietnam/itinerary/5.jpg",
    description:
      "After breakfast, visit the famous Ba Na Hills by cable car and explore the iconic Golden Bridge, French Village, gardens, and entertainment zones. Enjoy panoramic mountain views and unforgettable sightseeing experiences.",
  },

  {
    day: 6,
    title: "Ho Chi Minh City Tour",
    image: "/images/packageReview/vietnam/itinerary/6.jpg",
    description:
      "Fly to Ho Chi Minh City and enjoy a sightseeing tour covering the Notre-Dame Cathedral, Central Post Office, War Remnants Museum, Ben Thanh Market, and other famous attractions while experiencing the city's vibrant atmosphere.",
  },

  {
    day: 7,
    title: "Departure from Vietnam",
    image: "/images/packageReview/vietnam/itinerary/7.jpg",
    description:
      "After breakfast, check out from the hotel and transfer to the airport for your onward journey with unforgettable memories of Vietnam's stunning landscapes, historic cities, beautiful beaches, and warm hospitality.",
  },
],


  // ===========================
// PACKAGE INCLUSIONS
// ===========================

inclusions: [
  "2 nights accommodation in Hanoi with breakfast",
  "2 nights accommodation in Da Nang with breakfast",
  "2 nights accommodation in Ho Chi Minh City with breakfast",
  "Airport arrival & departure assistance",
  "English-speaking guide for sightseeing",
  "Private airport transfers",
  "All sightseeing tours (SIC or as specified)",
  "Meals included where mentioned in the sightseeing itinerary",
  "2 bottles of mineral water per person per day",
],

// ===========================
// PACKAGE EXCLUSIONS
// ===========================

exclusions: [
  "Vietnam visa charges",
  "Items not listed under 'Package Inclusions'",
  "Tips, porterage, room service, laundry, and other personal expenses",
  "Additional meals or beverages not mentioned in the itinerary",
  "Travel insurance",
  "TCS (Tax Collected at Source)",
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
  "Travellers are responsible for carrying valid travel documents. Go Escapio is not liable for documentation-related issues.",
  "Go Escapio is not responsible for flight delays, baggage issues, or cancellations.",
  "Hotel check-in is generally at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are subject to availability and additional charges.",
  "City taxes, personal expenses, and optional tours are not included unless specifically mentioned.",
  "Visa approval is solely at the discretion of the respective embassy. Go Escapio is not liable for delays or rejections.",
  "Travel insurance is recommended and is the traveller's responsibility unless otherwise specified.",
  "Go Escapio acts as an intermediary and is not liable for third-party service disruptions or losses.",
  "Rates and hotel rooms are subject to availability at the time of booking.",
  "Limited availability. Blackout dates may apply.",
],
};

export default vietnam;