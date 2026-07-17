import type { PackageReview } from "@/types/packageReview";

const chardhamYatra: PackageReview = {
  slug: "chardham-yatra",

  // ===========================
  // PACKAGE GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/chardham-yatra/1.jpg",
    "/images/packageReview/chardham-yatra/2.jpg",
    "/images/packageReview/chardham-yatra/3.jpg",
    "/images/packageReview/chardham-yatra/4.jpg",
    "/images/packageReview/chardham-yatra/5.jpg",
    "/images/packageReview/chardham-yatra/6.jpg",
    "/images/packageReview/chardham-yatra/7.jpg",
    "/images/packageReview/chardham-yatra/8.jpg",
    "/images/packageReview/chardham-yatra/9.jpg",
    "/images/packageReview/chardham-yatra/10.jpg",
  ],

  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "9 Nights & 10 Days Chardham Yatra",

  price: "34,990",

  priceType: "Per Person | Twin Sharing Price",

  duration: "9 Nights",

  location: "Yamunotri • Gangotri • Kedarnath • Badrinath",

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
    Experience the sacred Chardham Yatra covering Yamunotri,
    Gangotri, Kedarnath and Badrinath. This spiritual journey
    takes you through the beautiful Himalayan landscapes,
    ancient temples, holy rivers and peaceful mountain towns.
    The package includes comfortable accommodation, transfers,
    sightseeing and assistance throughout the pilgrimage,
    making it ideal for families and devotees.
  `,

  // ===========================
  // PACKAGE ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Arrival at Haridwar",
      image: "/images/packageReview/chardham-yatra/1.jpg",
      description:
        "Arrive at Haridwar, meet our representative and transfer to your hotel. Evening Ganga Aarti at Har Ki Pauri.",
    },
    {
      day: 2,
      title: "Haridwar to Barkot",
      image: "/images/packageReview/chardham-yatra/2.jpg",
      description:
        "Drive through the scenic Himalayan roads to Barkot and check in at the hotel for an overnight stay.",
    },
    {
      day: 3,
      title: "Yamunotri Excursion",
      image: "/images/packageReview/chardham-yatra/3.jpg",
      description:
        "Begin the trek to Yamunotri Temple, seek blessings and return to Barkot for an overnight stay.",
    },
    {
      day: 4,
      title: "Barkot to Uttarkashi",
      image: "/images/packageReview/chardham-yatra/4.jpg",
      description:
        "Drive to Uttarkashi and visit the famous Kashi Vishwanath Temple before checking into the hotel.",
    },
    {
      day: 5,
      title: "Gangotri Darshan",
      image: "/images/packageReview/chardham-yatra/5.jpg",
      description:
        "Visit the sacred Gangotri Temple and enjoy the breathtaking Himalayan scenery before returning to Uttarkashi.",
    },
        {
      day: 6,
      title: "Uttarkashi to Guptkashi",
      image: "/images/packageReview/chardham-yatra/6.jpg",
      description:
        "Drive to Guptkashi while enjoying spectacular mountain views. Rest and prepare for the Kedarnath pilgrimage.",
    },
    {
      day: 7,
      title: "Kedarnath Darshan",
      image: "/images/packageReview/chardham-yatra/7.jpg",
      description:
        "Proceed towards Kedarnath by trek or helicopter (optional). Visit the holy Kedarnath Temple and stay overnight nearby.",
    },
    {
      day: 8,
      title: "Guptkashi to Badrinath",
      image: "/images/packageReview/chardham-yatra/8.jpg",
      description:
        "Travel to Badrinath and visit the sacred Badrinath Temple. Attend the evening aarti if time permits.",
    },
    {
      day: 9,
      title: "Mana Village & Return to Rudraprayag",
      image: "/images/packageReview/chardham-yatra/9.jpg",
      description:
        "Visit Mana Village, Vyas Gufa and Bhim Pul before driving towards Rudraprayag for an overnight stay.",
    },
    {
      day: 10,
      title: "Departure to Haridwar",
      image: "/images/packageReview/chardham-yatra/10.jpg",
      description:
        "After breakfast, drive back to Haridwar with unforgettable memories of the sacred Chardham Yatra.",
    },
  ],

  // ===========================
  // PACKAGE INCLUSIONS
  // ===========================

  inclusions: [
    "Accommodation on twin-sharing basis",
    "Daily breakfast and dinner",
    "Private AC vehicle for transfers and sightseeing",
    "Driver allowance, toll tax and parking charges",
    "All sightseeing as per itinerary",
    "Experienced tour assistance",
    "Hotel taxes",
    "Pickup and drop from Haridwar",
    "All applicable taxes (excluding GST)",
  ],

  // ===========================
  // PACKAGE EXCLUSIONS
  // ===========================

  exclusions: [
    "Airfare, train tickets or bus tickets",
    "Helicopter tickets for Kedarnath",
    "Pony, palki or porter charges",
    "Lunch and personal expenses",
    "Travel insurance",
    "Temple VIP darshan charges",
    "Camera fees wherever applicable",
    "GST and any government taxes not mentioned",
    "Anything not mentioned under inclusions",
  ],

  // ===========================
  // TERMS & CONDITIONS
  // ===========================

  terms: [
    "Package is subject to availability.",
    "Hotel check-in/check-out timings apply.",
    "Weather and road conditions may affect the itinerary.",
    "Helicopter services operate subject to weather conditions.",
    "Pilgrims must carry valid government-issued ID proof.",
    "Cancellation charges apply as per company policy.",
    "Rates are subject to change before confirmation.",
    "Travel insurance is highly recommended.",
    "Go Escapio is not responsible for delays due to natural calamities.",
    "All disputes are subject to Delhi jurisdiction.",
  ],
};

export default chardhamYatra;