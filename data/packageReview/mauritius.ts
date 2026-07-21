import type { PackageReview } from "@/types/packageReview";

const mauritius: PackageReview = {
  slug: "mauritius",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/mauritius/gallery/1.jpg",
    "/images/packageReview/mauritius/gallery/2.jpg",
    "/images/packageReview/mauritius/gallery/3.jpg",
    "/images/packageReview/mauritius/gallery/4.jpg",
    "/images/packageReview/mauritius/gallery/5.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Luxurious Mauritius",

  price: "51,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "4 Nights",

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
    Experience the magic of Mauritius with crystal-clear lagoons, luxury
    hospitality, romantic island tours, and breathtaking landscapes.
    This perfectly curated 5-day escape includes a stay in a premium
    beachfront resort, thrilling adventures at Ile Aux Cerfs, exploration
    of Port Louis and North Island attractions, exotic cuisine, leisure
    time to enjoy pristine beaches and resort amenities. Ideal for couples,
    families, and honeymooners seeking the perfect blend of relaxation
    and exploration.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival in Mauritius",
      image: "/images/packageReview/mauritius/itinerary/1.jpg",
      description:
        "Arrive at Sir Seewoosagur Ramgoolam International Airport where our representative will greet you and assist with your transfer to the hotel. Complete the check-in formalities and spend the remainder of the day relaxing at the resort or exploring the nearby beach. Enjoy dinner at the hotel and an overnight stay in Mauritius.",
    },

    {
      day: 2,
      title: "Ile Aux Cerfs Island Tour",
      image: "/images/packageReview/mauritius/itinerary/2.jpg",
      description:
        "After breakfast, enjoy a full-day excursion to the famous Ile Aux Cerfs Island. Relax on pristine white-sand beaches, swim in crystal-clear lagoons, or participate in optional water sports such as parasailing, undersea walk, tube ride, and banana boat ride (at an additional cost). Return to the hotel in the evening for dinner and an overnight stay.",
    },

    {
      day: 3,
      title: "Leisure Day",
      image: "/images/packageReview/mauritius/itinerary/3.jpg",
      description:
        "Enjoy breakfast at the hotel before spending the day at your leisure. Relax by the beach or pool, explore local cafés and markets, or indulge in optional experiences like a catamaran cruise, submarine ride, or scuba diving (at an additional cost). Dinner and overnight stay at the hotel.",
    },

    {
      day: 4,
      title: "North Island Tour",
      image: "/images/packageReview/mauritius/itinerary/4.jpg",
      description:
        "After breakfast, proceed on a full-day North Island sightseeing tour. Visit Port Louis, La Citadelle Fortress, Marie Reine de la Paix Viewpoint, Champ de Mars Racecourse, Caudan Waterfront, and Jumbo Shopping Mall. Explore the city's vibrant culture before returning to the hotel for dinner and an overnight stay.",
    },

    {
      day: 5,
      title: "Departure",
      image: "/images/packageReview/mauritius/itinerary/5.jpg",
      description:
        "After breakfast, check out from the hotel and transfer to Mauritius International Airport for your return flight. Depart with unforgettable memories of your luxurious island holiday.",
    },
  ],
    // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Return Airport Transfers on Seat-in-Coach (SIC) Basis",
    "4 Nights Accommodation in a Luxury 4-Star Beachfront Resort",
    "Daily Breakfast",
    "Daily Dinner",
    "Meet & Greet Assistance at Mauritius Airport",
    "Full-Day Ile Aux Cerfs Island Tour",
    "Full-Day North Island Tour",
    "Port Louis City Sightseeing",
    "Caudan Waterfront Visit",
    "Air-Conditioned Shared Coach for Sightseeing & Transfers",
    "Complimentary Resort Wi-Fi",
    "All Applicable Taxes (Excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "International Airfare",
    "Mauritius Visa Charges (if applicable)",
    "5% GST & TCS as per Government Rules",
    "Travel Insurance",
    "Optional Water Sports & Adventure Activities",
    "Catamaran Cruise, Submarine Ride & Scuba Diving",
    "Personal Expenses (Laundry, Telephone, Mini Bar, Room Service, etc.)",
    "Early Check-in & Late Check-out Charges",
    "Meals Not Mentioned in the Itinerary",
    "Tips & Gratuities",
    "Anything Not Specifically Mentioned Under 'Package Inclusions'",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "All bookings are confirmed only after receipt of the required advance payment and are subject to availability.",
    "Package prices are subject to change without prior notice based on hotel availability, airfare, and exchange rates.",
    "A valid passport with at least six months validity is mandatory.",
    "Visa approval is solely at the discretion of the respective embassy or immigration authorities.",
    "Hotel check-in and check-out timings are as per hotel policy.",
    "Early check-in and late check-out are subject to availability and additional charges.",
    "Unused services included in the package are non-refundable.",
    "Cancellation charges will apply as per Go Escapio cancellation policy.",
    "Travel insurance is recommended for all travellers.",
    "Go Escapio is not responsible for airline delays, baggage loss, schedule changes, or third-party service disruptions.",
    "The itinerary may be modified due to weather conditions or operational requirements.",
    "Guests are responsible for all personal expenses incurred during the trip.",
    "Rates are subject to availability until the booking is confirmed.",
    "Limited availability. Blackout dates and peak season surcharges may apply.",
  ],
};

export default mauritius;