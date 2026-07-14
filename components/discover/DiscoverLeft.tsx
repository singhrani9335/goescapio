"use client";

import DiscoverCard from "./DiscoverCard";
import { discoverCities } from "@/data/discoverCities";

export default function DiscoverLeft() {
  return (
    <div className="flex h-[530px] flex-col justify-center">
      {/* Heading */}
      <span
        className="
          text-sm
          font-extrabold
          uppercase
          tracking-[0.1em]
          text-blue-700
        "
      >
        Go & Discover
      </span>

      <h2
        className="
          mt-5
          text-3xl
          font-bold
          leading-tight
          text-gray-900
          lg:text-[42px]
        "
      >
        Breathtaking Cities
      </h2>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-[600px]
          text-[14px]
          leading-6
          text-gray-900
          md:text-[15px]
        "
      >
        Experience paradise with our Beach Bliss Package! Enjoy pristine white
        sands, crystal-clear waters, and sun-soaked days with luxurious
        accommodations, complimentary beachside drinks, and exclusive access to
        water sports and local excursions.
      </p>

      {/* Small Cards */}
      <div
        className="
          mt-20
          grid
          grid-cols-2
          gap-6
        "
      >
        {discoverCities.map((city) => (
          <DiscoverCard
            key={city.id}
            image={city.image}
            title={city.title}
            href={city.href}
          />
        ))}
      </div>
    </div>
  );
}