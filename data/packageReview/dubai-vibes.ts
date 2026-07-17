import type { PackageReview } from "@/types/packageReview";

const dubaiVibes: PackageReview = {
  slug: "dubai-vibes",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/dubai-vibes/1.jpg",
    "/images/packageReview/dubai-vibes/2.jpg",
    "/images/packageReview/dubai-vibes/3.jpg",
    "/images/packageReview/dubai-vibes/4.jpg",
    "/images/packageReview/dubai-vibes/5.jpg",
    "/images/packageReview/dubai-vibes/6.jpg",
    "/images/packageReview/dubai-vibes/7.jpg",
    "/images/packageReview/dubai-vibes/8.jpg",
    "/images/packageReview/dubai-vibes/9.jpg",
    "/images/packageReview/dubai-vibes/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "4 Nights & 5 Days Dubai Vibes Holiday",

  price: "49,990",

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
    Enjoy an exciting Dubai vacation with this specially designed holiday
    package. Explore modern attractions, enjoy thrilling desert adventures,
    experience luxury shopping and discover the vibrant lifestyle of Dubai.
    Perfect for families, couples and travellers looking for an unforgettable
    city escape.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Dubai",
      image: "/images/packageReview/dubai-vibes/1.jpg",
      description:
        "Arrive at Dubai airport and transfer to your hotel. Spend the evening relaxing and exploring nearby places.",
    },

    {
      day: 2,
      title: "Dubai City Tour",
      image: "/images/packageReview/dubai-vibes/2.jpg",
      description:
        "Explore Dubai Marina, Jumeirah Beach, Burj Al Arab and other famous attractions.",
    },

    {
      day: 3,
      title: "Desert Safari Adventure",
      image: "/images/packageReview/dubai-vibes/3.jpg",
      description:
        "Experience exciting dune bashing, camel rides, cultural shows and delicious dinner in the desert.",
    },

    {
      day: 4,
      title: "Shopping & Leisure Day",
      image: "/images/packageReview/dubai-vibes/4.jpg",
      description:
        "Enjoy shopping at Dubai Mall and explore the city's entertainment attractions.",
    },

    {
      day: 5,
      title: "Departure From Dubai",
      image: "/images/packageReview/dubai-vibes/5.jpg",
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
    "Dubai city tour",
    "Desert safari experience",
    "Transportation as per itinerary",
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
    "Bookings are subject to availability.",
    "Package prices may change depending on availability.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid travel documents are required.",
    "Go Escapio is not responsible for flight delays.",
    "Hotel check-in and check-out timings follow hotel rules.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default dubaiVibes;