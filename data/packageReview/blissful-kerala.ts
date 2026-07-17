import type { PackageReview } from "@/types/packageReview";

const blissfulKerala: PackageReview = {
  slug: "blissful-kerala",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/blissful-kerala/1.jpg",
    "/images/packageReview/blissful-kerala/2.jpg",
    "/images/packageReview/blissful-kerala/3.jpg",
    "/images/packageReview/blissful-kerala/4.jpg",
    "/images/packageReview/blissful-kerala/5.jpg",
    "/images/packageReview/blissful-kerala/6.jpg",
    "/images/packageReview/blissful-kerala/7.jpg",
    "/images/packageReview/blissful-kerala/8.jpg",
    "/images/packageReview/blissful-kerala/9.jpg",
    "/images/packageReview/blissful-kerala/10.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Blissful Kerala Tour",

  price: "34,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Munnar - Thekkady - Alleppey Kerala",

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
    Experience the natural beauty of Kerala with this wonderful holiday package.
    Explore the lush green hills of Munnar, wildlife of Thekkady and peaceful
    backwaters of Alleppey. This journey offers a perfect mix of nature,
    relaxation, sightseeing and memorable experiences.
  `,


  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival At Kochi & Transfer To Munnar",
      image: "/images/packageReview/blissful-kerala/1.jpg",
      description:
        "Arrive at Kochi and drive towards Munnar. Enjoy scenic views of waterfalls, tea plantations and beautiful landscapes.",
    },

    {
      day: 2,
      title: "Munnar Sightseeing",
      image: "/images/packageReview/blissful-kerala/2.jpg",
      description:
        "Visit famous attractions of Munnar including tea gardens, viewpoints and natural attractions.",
    },

    {
      day: 3,
      title: "Munnar To Thekkady",
      image: "/images/packageReview/blissful-kerala/3.jpg",
      description:
        "Travel to Thekkady and explore the beautiful wildlife surroundings of Periyar.",
    },

    {
      day: 4,
      title: "Thekkady To Alleppey Houseboat Stay",
      image: "/images/packageReview/blissful-kerala/4.jpg",
      description:
        "Proceed to Alleppey and enjoy a relaxing stay on the famous Kerala houseboat.",
    },

    {
      day: 5,
      title: "Alleppey To Kochi",
      image: "/images/packageReview/blissful-kerala/5.jpg",
      description:
        "Return to Kochi and explore local sightseeing places and shopping areas.",
    },

    {
      day: 6,
      title: "Departure From Kochi",
      image: "/images/packageReview/blissful-kerala/6.jpg",
      description:
        "Transfer to Kochi airport or railway station for your onward journey.",
    },
  ],


  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation in selected hotels",
    "Daily breakfast",
    "Private AC vehicle for sightseeing",
    "Airport and hotel transfers",
    "Houseboat stay in Alleppey",
    "All sightseeing as per itinerary",
    "All applicable taxes",
  ],


  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare or train tickets",
    "Personal expenses",
    "Adventure activities",
    "Travel insurance",
    "Camera charges",
    "Anything not mentioned in inclusions",
  ],


  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "Bookings are subject to hotel and transport availability.",
    "Package price may vary during peak season.",
    "Advance payment is required for confirmation.",
    "Cancellation charges apply as per policy.",
    "Travellers must carry valid documents.",
    "Go Escapio is not responsible for delays caused by third parties.",
    "Hotel check-in and check-out timings follow hotel policies.",
    "Personal expenses are not included.",
    "Travel insurance is recommended.",
    "All services are subject to availability.",
  ],
};

export default blissfulKerala;