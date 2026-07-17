import type { PackageReview } from "@/types/packageReview";

const mauritius: PackageReview = {
  slug: "mauritius",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/mauritius/1.jpg",
    "/images/packageReview/mauritius/2.jpg",
    "/images/packageReview/mauritius/3.jpg",
    "/images/packageReview/mauritius/4.jpg",
    "/images/packageReview/mauritius/5.jpg",
    "/images/packageReview/mauritius/6.jpg",
    "/images/packageReview/mauritius/7.jpg",
    "/images/packageReview/mauritius/8.jpg",
    "/images/packageReview/mauritius/9.jpg",
    "/images/packageReview/mauritius/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Mauritius Paradise Holiday",

  price: "69,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Mauritius",

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
    Experience the tropical beauty of Mauritius with this amazing holiday
    package. Relax on stunning beaches, explore beautiful islands, enjoy
    exciting activities and discover the perfect combination of adventure
    and relaxation in this island paradise.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Mauritius",
      image: "/images/packageReview/mauritius/1.jpg",
      description:
        "Arrive at Mauritius airport and transfer to your hotel. Enjoy the beautiful island surroundings.",
    },

    {
      day: 2,
      title: "North Island Tour",
      image: "/images/packageReview/mauritius/2.jpg",
      description:
        "Explore famous attractions, beaches and cultural spots of North Mauritius.",
    },

    {
      day: 3,
      title: "Ile Aux Cerfs Island Trip",
      image: "/images/packageReview/mauritius/3.jpg",
      description:
        "Enjoy a beautiful island excursion with water activities and stunning ocean views.",
    },

    {
      day: 4,
      title: "South Mauritius Sightseeing",
      image: "/images/packageReview/mauritius/4.jpg",
      description:
        "Visit scenic locations, waterfalls and natural attractions of South Mauritius.",
    },

    {
      day: 5,
      title: "Leisure & Beach Day",
      image: "/images/packageReview/mauritius/5.jpg",
      description:
        "Relax at the beach or enjoy optional activities during your free day.",
    },

    {
      day: 6,
      title: "Departure From Mauritius",
      image: "/images/packageReview/mauritius/6.jpg",
      description:
        "Check out from the hotel and transfer to the airport for your onward journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Island sightseeing tours",
    "Private transportation",
    "Local assistance",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International airfare",
    "Visa charges",
    "Travel insurance",
    "Personal expenses",
    "Optional activities",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are subject to availability.",
    "Package rates may change according to availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid travel documents are required.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel policies will apply for check-in and check-out.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default mauritius;