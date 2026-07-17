import type { PackageReview } from "@/types/packageReview";

const maldives: PackageReview = {
  slug: "maldives",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/maldives/1.jpg",
    "/images/packageReview/maldives/2.jpg",
    "/images/packageReview/maldives/3.jpg",
    "/images/packageReview/maldives/4.jpg",
    "/images/packageReview/maldives/5.jpg",
    "/images/packageReview/maldives/6.jpg",
    "/images/packageReview/maldives/7.jpg",
    "/images/packageReview/maldives/8.jpg",
    "/images/packageReview/maldives/9.jpg",
    "/images/packageReview/maldives/10.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Maldives Escape",

  price: "69,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

  location: "Maldives",

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
    Escape to the tropical paradise of the Maldives with crystal-clear
    lagoons, white sandy beaches and luxurious overwater villas.
    Relax by the ocean, enjoy water sports, snorkeling, sunset cruises
    and unforgettable island experiences. This package is perfect for
    honeymooners, couples and anyone looking for a peaceful beach vacation.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Maldives",
      image: "/images/packageReview/maldives/1.jpg",
      description:
        "Arrive at Male International Airport and transfer by speedboat to your resort. Check in and enjoy the beautiful sunset.",
    },
    {
      day: 2,
      title: "Relax at the Resort",
      image: "/images/packageReview/maldives/2.jpg",
      description:
        "Spend the day relaxing on the beach, swimming in the lagoon or enjoying resort facilities and spa treatments.",
    },
    {
      day: 3,
      title: "Water Activities",
      image: "/images/packageReview/maldives/3.jpg",
      description:
        "Enjoy snorkeling, kayaking or optional scuba diving while exploring the vibrant marine life of the Maldives.",
    },
    {
      day: 4,
      title: "Leisure & Sunset Cruise",
      image: "/images/packageReview/maldives/4.jpg",
      description:
        "Spend the day at leisure followed by a memorable sunset cruise across the Indian Ocean.",
    },
    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/maldives/5.jpg",
      description:
        "After breakfast, check out from the resort and transfer to Male Airport for your onward journey.",
    },

        
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "4 nights accommodation in a beach villa or water villa",
    "Daily breakfast and dinner",
    "Return speedboat transfers",
    "Welcome drink on arrival",
    "Complimentary Wi-Fi at the resort",
    "Access to resort facilities",
    "Selected non-motorized water sports",
    "All sightseeing and transfers as per itinerary",
    "All applicable taxes (excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Travel insurance",
    "Lunch unless specified",
    "Scuba diving and premium water sports",
    "Spa and wellness treatments",
    "Personal expenses such as shopping and laundry",
    "Tips and porterage",
    "GST and government taxes not mentioned",
    "Anything not mentioned under inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "Package confirmation is subject to availability.",
    "Passport must be valid for at least 6 months from the date of travel.",
    "Hotel check-in and check-out timings are as per resort policy.",
    "Unused services are non-refundable.",
    "Itinerary may change due to weather or operational reasons.",
    "Cancellation charges apply as per company policy.",
    "Travel insurance is strongly recommended.",
    "Water sports are subject to weather conditions.",
    "Go Escapio is not responsible for flight delays or cancellations.",
    "All disputes are subject to Delhi jurisdiction.",
  ],
};

export default maldives;