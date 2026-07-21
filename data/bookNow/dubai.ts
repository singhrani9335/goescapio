import type { BookNow } from "@/types/bookNow";

const dubai: BookNow = {
  slug: "dubai",


  // ===========================
  // GALLERY
  // ===========================

  gallery: [
  "/images/bookNow/dubai/gallery/1.jpg",
  "/images/bookNow/dubai/gallery/2.jpg",
  "/images/bookNow/dubai/gallery/3.jpg",
  "/images/bookNow/dubai/gallery/4.jpg",
  "/images/bookNow/dubai/gallery/5.jpg",
],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Dubai Delight",

  price: "39,999",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Dubai, UAE",


  features: {
    hotel: true,
    activity: true,
    transport: true,
    meal: true,
  },



  // ===========================
  // OVERVIEW
  // ===========================

  overview: `
    Explore the glamour and luxury of Dubai with this 5 Nights and 6 Days
    Dubai Delight package. Experience world-famous attractions, stunning
    skyscrapers, desert adventures, shopping destinations and unforgettable
    Arabian hospitality.
  `,



  // ===========================
  // ITINERARY
  // ===========================

itinerary: [
  {
    day: 1,
    title: "Dubai Arrival",
    image: "/images/bookNow/dubai/itinerary/day-1.jpg",
    description:
      "Arrive at Dubai International Airport and transfer to your hotel. Relax and enjoy your first evening in Dubai.",
  },

  {
    day: 2,
    title: "Dubai City Tour",
    image: "/images/bookNow/dubai/itinerary/day-2.jpg",
    description:
      "Explore Dubai's famous attractions including Burj Khalifa, Dubai Mall, Jumeirah Beach and other iconic landmarks.",
  },

  {
    day: 3,
    title: "Desert Safari Experience",
    image: "/images/bookNow/dubai/itinerary/day-3.jpg",
    description:
      "Enjoy an exciting desert safari with dune bashing, Arabian dinner, cultural performances and beautiful sunset views.",
  },

  {
    day: 4,
    title: "Dubai Marina & Leisure",
    image: "/images/bookNow/dubai/itinerary/day-4.jpg",
    description:
      "Visit Dubai Marina and enjoy free time for shopping, sightseeing and exploring the city's modern lifestyle.",
  },

  {
    day: 5,
    title: "Shopping & Free Day",
    image: "/images/bookNow/dubai/itinerary/day-5.jpg",
    description:
      "Spend the day shopping at Dubai's famous malls and explore local markets at your own pace.",
  },

  
],




  // ===========================
  // HOTELS
  // ===========================

  hotels: [

    {
      name: "Citymax Hotel Bur Dubai",
      image: "/images/bookNow/dubai/hotel-1.jpg",
      rating: 3,
      location: "Bur Dubai",
      category: "3 Star Hotel",
      nights: "3",
      description:
        "Citymax Hotel Bur Dubai offers comfortable accommodation with modern facilities and easy access to Dubai attractions.",
    },


    

  ],




  // ===========================
  // INCLUSIONS
  // ===========================

  inclusions: [

    "Daily breakfast will be provided.",
    "Comfortable hotel accommodation.",
    "Airport transfers included.",
    "Dubai city tour included.",
    "Desert safari experience included.",
    "Sightseeing as per itinerary.",

  ],




  // ===========================
  // EXCLUSIONS
  // ===========================

  exclusions: [

    "International flight tickets.",
    "Visa charges.",
    "Personal expenses.",
    "Travel insurance.",
    "Tips and porter charges.",

  ],




  // ===========================
  // TERMS
  // ===========================

  terms: [

    "All bookings are confirmed after advance payment.",
    "Package rates depend on availability.",
    "Cancellation charges apply as per policy.",
    "Hotel confirmation depends on availability.",
    "Personal expenses are not included.",

  ],


};


export default dubai;