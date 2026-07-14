import type { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: 1,
    image: "/images/destinations/africa.png",
    title: "Africa",
    description:
      "Experience thrilling wildlife safaris, breathtaking landscapes, vibrant cultures and unforgettable adventures across Africa.",

    packages: 18,
    countries: 12,

    highlights: [
      "Kenya Safari",
      "Tanzania Wildlife",
      "South Africa",
      "Victoria Falls",
    ],

    bestTime: "June - October",
  },

  {
    id: 2,
    image: "/images/destinations/asia.png",
    title: "Asia",
    description:
      "Explore ancient temples, vibrant cities, tropical islands and rich cultural heritage across Asia.",

    packages: 42,
    countries: 15,

    highlights: [
      "Thailand",
      "Vietnam",
      "Singapore",
      "Bali",
    ],

    bestTime: "October - March",
  },

  {
    id: 3,
    image: "/images/destinations/australasia-pacific.png",
    title: "Australasia & Pacific",
    description:
      "Discover Australia's iconic cities, New Zealand's natural beauty and tropical Pacific islands.",

    packages: 14,
    countries: 6,

    highlights: [
      "Sydney",
      "Melbourne",
      "New Zealand",
      "Fiji",
    ],

    bestTime: "September - April",
  },

  {
    id: 4,
    image: "/images/destinations/europe.png",
    title: "Europe",
    description:
      "Travel through charming cities, historic landmarks, scenic countryside and unforgettable European experiences.",

    packages: 35,
    countries: 18,

    highlights: [
      "Paris",
      "Switzerland",
      "Italy",
      "Prague",
    ],

    bestTime: "April - October",
  },

  {
    id: 5,
    image: "/images/destinations/indian-ocean.png",
    title: "Indian Ocean",
    description:
      "Relax on pristine beaches, luxury resorts and crystal-clear lagoons across the Indian Ocean islands.",

    packages: 12,
    countries: 4,

    highlights: [
      "Maldives",
      "Mauritius",
      "Seychelles",
      "Luxury Resorts",
    ],

    bestTime: "November - April",
  },

  {
    id: 6,
    image: "/images/destinations/middle-east.png",
    title: "Middle East",
    description:
      "Experience futuristic cities, desert adventures, luxury shopping and remarkable cultural attractions.",

    packages: 20,
    countries: 7,

    highlights: [
      "Dubai",
      "Abu Dhabi",
      "Qatar",
      "Jordan",
    ],

    bestTime: "October - March",
  },

  {
    id: 7,
    image: "/images/destinations/usa-canada.png",
    title: "USA & Canada",
    description:
      "Discover vibrant cities, national parks, scenic road trips and unforgettable experiences across North America.",

    packages: 16,
    countries: 2,

    highlights: [
      "New York",
      "Toronto",
      "Niagara Falls",
      "Rocky Mountains",
    ],

    bestTime: "May - September",
  },
];