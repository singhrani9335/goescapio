import type { PackageReview } from "@/types/packageReview";

const kenyaSafari: PackageReview = {
  slug: "kenya-safari",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/kenya-safari/1.jpg",
    "/images/packageReview/kenya-safari/2.jpg",
    "/images/packageReview/kenya-safari/3.jpg",
    "/images/packageReview/kenya-safari/4.jpg",
    "/images/packageReview/kenya-safari/5.jpg",
    "/images/packageReview/kenya-safari/6.jpg",
    "/images/packageReview/kenya-safari/7.jpg",
    "/images/packageReview/kenya-safari/8.jpg",
    "/images/packageReview/kenya-safari/9.jpg",
    "/images/packageReview/kenya-safari/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "6 Nights & 7 Days Kenya Safari Adventure",

  price: "99,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "6 Nights",

  location: "Nairobi - Maasai Mara Kenya",

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
    Experience the thrill of African wildlife with this exciting Kenya Safari
    package. Explore famous national parks, witness amazing wildlife, enjoy
    beautiful landscapes and create unforgettable memories in the heart of Africa.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival In Nairobi",
      image: "/images/packageReview/kenya-safari/1.jpg",
      description:
        "Arrive at Nairobi airport and transfer to your hotel. Relax and prepare for your safari adventure.",
    },

    {
      day: 2,
      title: "Nairobi To Maasai Mara",
      image: "/images/packageReview/kenya-safari/2.jpg",
      description:
        "Travel to Maasai Mara National Reserve and enjoy your first wildlife safari experience.",
    },

    {
      day: 3,
      title: "Maasai Mara Safari",
      image: "/images/packageReview/kenya-safari/3.jpg",
      description:
        "Enjoy morning and evening game drives to spot lions, elephants and other wildlife.",
    },

    {
      day: 4,
      title: "Lake Nakuru Visit",
      image: "/images/packageReview/kenya-safari/4.jpg",
      description:
        "Explore Lake Nakuru National Park famous for birds and wildlife.",
    },

    {
      day: 5,
      title: "Amboseli National Park",
      image: "/images/packageReview/kenya-safari/5.jpg",
      description:
        "Visit Amboseli and enjoy breathtaking views with Mount Kilimanjaro in the background.",
    },

    {
      day: 6,
      title: "Return To Nairobi",
      image: "/images/packageReview/kenya-safari/6.jpg",
      description:
        "Return to Nairobi and enjoy leisure time exploring the city.",
    },

    {
      day: 7,
      title: "Departure From Kenya",
      image: "/images/packageReview/kenya-safari/7.jpg",
      description:
        "Transfer to the airport for your onward journey with unforgettable safari memories.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Hotel and lodge accommodation",
    "Daily breakfast",
    "Safari transportation",
    "Wildlife game drives",
    "Airport transfers",
    "Sightseeing as per itinerary",
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
    "Package prices may change depending on season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per company policy.",
    "Valid passport and travel documents are required.",
    "Go Escapio is not responsible for weather conditions.",
    "Hotel and safari lodge policies will apply.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default kenyaSafari;