import type { BookNow } from "@/types/bookNow";

const kerala: BookNow = {
  slug: "kerala",

  // ===========================
  // GALLERY
  // ===========================

  gallery: [
    "/images/packageReview/kerala/1.jpg",
    "/images/packageReview/kerala/2.jpg",
    "/images/packageReview/kerala/3.jpg",
    "/images/packageReview/kerala/4.jpg",
    "/images/packageReview/kerala/5.jpg",
  ],


  // ===========================
  // PACKAGE SUMMARY
  // ===========================

  title: "5 Nights & 6 Days Kerala Bliss",

  price: "15,999",

  priceType: "Per Person | Twin Sharing Price",

  duration: "5 Nights",

  location: "Kerala, India",


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
    Welcome to God's Own Country, Kerala - where the glimmering backwaters
    blend seamlessly with stunning scenic beauty. This 6 days and 5 nights
    Kerala Bliss package offers the perfect escape to explore Cochin,
    Munnar, Thekkady and Alleppey.
  `,


  // ===========================
  // ITINERARY
  // ===========================

  itinerary: [
    {
      day: 1,
      title: "Cochin Arrival",
      image: "/images/packageReview/kerala/1.jpg",
      description:
        "Our representative welcomes you at Cochin Airport and transfers you to the hotel.",
    },

    {
      day: 2,
      title: "Cochin To Munnar",
      image: "/images/packageReview/kerala/2.jpg",
      description:
        "Proceed towards Munnar and enjoy waterfalls, tea plantations and scenic views.",
    },

    {
      day: 3,
      title: "Munnar Sightseeing",
      image: "/images/packageReview/kerala/3.jpg",
      description:
        "Explore Mattupetty Dam, Echo Point, Tea Museum and beautiful viewpoints.",
    },

    {
      day: 4,
      title: "Munnar To Thekkady",
      image: "/images/packageReview/kerala/4.jpg",
      description:
        "Visit Periyar Wildlife Sanctuary and enjoy optional activities.",
    },

    {
      day: 5,
      title: "Thekkady To Alleppey",
      image: "/images/packageReview/kerala/5.jpg",
      description:
        "Enjoy beautiful backwaters and peaceful surroundings of Alleppey.",
    },

    {
      day: 6,
      title: "Cochin Departure",
      image: "/images/packageReview/kerala/1.jpg",
      description:
        "Transfer to Cochin Airport for your onward journey.",
    },
  ],



  // ===========================
  // HOTELS
  // ===========================

  hotels: [
    {
      name: "Broad Bean Cochin",
      image: "/images/packageReview/kerala/hotel-1.jpg",
      rating: 3,
      location: "Cochin",
      category: "Standard (STD)",
      nights: "1",
      description:
        "For those of you who visit the fastest-growing city of Kerala, Broad Bean Hotel takes you as close as it gets to the city’s wondrous beauty and amenities. Located along NH 47, you’ll discover the best luxury and convenience at your disposal.",
    },


    {
      name: "The Whispering Meadows",
      image: "/images/packageReview/kerala/hotel-2.jpg",
      rating: 3,
      location: "Munnar",
      category: "Standard (STD)",
      nights: "2",
      description:
        "The Whispering Meadows offers a comfortable stay surrounded by the beautiful landscapes of Munnar.",
    },


    {
      name: "Tiger Trails Thekkady",
      image: "/images/packageReview/kerala/hotel-3.jpg",
      rating: 3,
      location: "Thekkady",
      category: "Standard (STD)",
      nights: "1",
      description:
        "Tiger Trails Thekkady provides a peaceful stay close to nature and wildlife attractions.",
    },


    {
      name: "Pagoda Resorts Alleppey",
      image: "/images/packageReview/kerala/hotel-4.jpg",
      rating: 3,
      location: "Alleppey",
      category: "Standard (STD)",
      nights: "1",
      description:
        "Pagoda Resorts Alleppey offers a relaxing stay experience near Kerala backwaters.",
    },
  ],



  // ===========================
  // INCLUSIONS
  // ===========================

  inclusions: [
    "Daily breakfast will be provided.",
    "Comfortable hotel accommodation.",
    "All transfers and sightseeing.",
    "Driver allowance, fuel and parking charges included.",
  ],



  // ===========================
  // EXCLUSIONS
  // ===========================

  exclusions: [
    "Personal expenses.",
    "Travel insurance.",
    "Entry tickets.",
    "Tips and porter charges.",
  ],



  // ===========================
  // TERMS
  // ===========================

  terms: [
    "All bookings are confirmed after advance payment.",
    "Package rates depend on availability.",
    "Cancellation charges apply as per policy.",
  ],


};


export default kerala;