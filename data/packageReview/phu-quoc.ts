import type { PackageReview } from "@/types/packageReview";

const phuQuoc: PackageReview = {
  slug: "phu-quoc",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/phu-quoc/gallery/1.jpg",
    "/images/packageReview/phu-quoc/gallery/2.jpg",
    "/images/packageReview/phu-quoc/gallery/3.jpg",
    "/images/packageReview/phu-quoc/gallery/4.jpg",
    "/images/packageReview/phu-quoc/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Phu Quoc Escape",

  price: "70,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Phu Quoc - Vietnam",

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
    Discover the tropical paradise of Phu Quoc, Vietnam, with this
    5-day holiday offering a perfect blend of adventure, nature, and
    relaxation. Explore Vin Safari – Vietnam's largest wildlife
    conservation park, thrill yourself at VinWonders amusement park,
    enjoy Grand World's vibrant entertainment, and experience pristine
    islands through an exciting island-hopping tour and Hon Thom Cable
    Car ride. Relax on white-sand beaches, take in spectacular ocean
    views, and create memories to last a lifetime.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival at Phu Quoc",
      image: "/images/packageReview/phu-quoc/itinerary/1.jpg",
      description:
        "Arrive at Phu Quoc International Airport where you will be welcomed by your driver. Transfer to your hotel and complete the check-in formalities (standard check-in from 2:00 PM). The remainder of the day is at leisure. Relax at the resort, explore the nearby beach, or enjoy the peaceful island atmosphere. Overnight stay in Phu Quoc.",
    },

    {
      day: 2,
      title: "Vin Safari, VinWonders & Grand World (SIC Basis)",
      image: "/images/packageReview/phu-quoc/itinerary/2.jpg",
      description:
        "After breakfast, visit Vin Safari, Vietnam's largest wildlife conservation park, home to hundreds of animal species from around the world. Continue to VinWonders, a world-class amusement park featuring thrilling rides, themed attractions, an aquarium, and live entertainment shows. In the evening, explore Grand World, known for its colorful architecture, shopping streets, canals, and lively atmosphere before returning to your hotel.",
    },

    {
      day: 3,
      title: "Island Hopping & Hon Thom Cable Car (SIC Basis)",
      image: "/images/packageReview/phu-quoc/itinerary/3.jpg",
      description:
        "After breakfast, head to An Thoi Harbour and begin an exciting island-hopping adventure. Visit beautiful islands including Mong Tay, Gam Ghi, and May Rut where you can swim, snorkel, relax on pristine beaches, and capture stunning photographs. Continue to Hon Thom Island and experience the world's longest over-sea cable car, offering breathtaking panoramic views of the ocean and surrounding islands before returning to your hotel.",
    },

    {
      day: 4,
      title: "Phu Quoc: Day at Leisure",
      image: "/images/packageReview/phu-quoc/itinerary/4.jpg",
      description:
        "Enjoy breakfast at the hotel before spending the day at your own pace. Relax on the beach, make use of the resort facilities, explore local cafés and markets, or choose from optional activities available on the island. Overnight stay in Phu Quoc.",
    },

    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/phu-quoc/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and enjoy free time until your scheduled airport transfer. You will then be transferred to Phu Quoc International Airport for your onward flight, taking back unforgettable memories of your Vietnam island holiday.",
    },
  ],

    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "04 Nights accommodation on Twin/Double Sharing basis",
    "Airport - Hotel - Airport transfers on SIC (Seat-in-Coach) basis",
    "Vin Safari Tour (SIC Basis)",
    "VinWonders Theme Park Visit (SIC Basis)",
    "Grand World Visit (SIC Basis)",
    "Island Hopping Tour (SIC Basis)",
    "Hon Thom Cable Car Experience",
    "Local English-speaking guide during tours",
    "Daily Breakfast",
    "2 Bottles of Mineral Water per person during sightseeing",
    "Travel Insurance (Valid up to 60 Years)",
    "All Sightseeing & Transfers as per Itinerary",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International & Domestic Airfare",
    "Vietnam Visa Fees (if applicable)",
    "Meals not mentioned in the itinerary",
    "Travel Insurance beyond the included coverage",
    "Tips for Guide & Driver (USD 3 per person per day)",
    "Laundry, Telephone Calls & Personal Expenses",
    "Camera Fees & Optional Activities",
    "RT-PCR Test or Other Health-related Requirements",
    "Early Check-in & Late Check-out Charges",
    "Blackout Surcharges during Festivals & Peak Dates",
    "Any Expenses Due to Flight Delays, Natural Calamities, Political Disturbances, or Unforeseen Circumstances",
    "Anything Not Specifically Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only after receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change without prior notice depending on hotel availability, airline fares, and exchange rates.",
    "A valid passport with at least 6 months validity is mandatory for travel.",
    "Visa approval is solely at the discretion of the Embassy or Immigration Authorities.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "Any unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Travel insurance is recommended for all travellers.",
    "Go Escapio is not responsible for flight delays, cancellations, baggage loss, or schedule changes made by airlines or third-party suppliers.",
    "The company reserves the right to amend the itinerary due to weather conditions, operational requirements, or unforeseen circumstances.",
    "Guests are responsible for all personal expenses incurred during the trip.",
    "Rates and room availability are subject to change until the booking is confirmed.",
    "Limited availability. Blackout dates and peak season surcharges may apply.",
  ],
};

export default phuQuoc;