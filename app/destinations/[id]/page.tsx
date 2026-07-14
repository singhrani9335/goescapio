import Image from "next/image";
import Link from "next/link";

import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* HEADER */}

      <section className="py-16 text-center">
        <h1
          className="
          text-4xl
          md:text-5xl
          font-extrabold
          uppercase
          "
        >
          <span className="text-[#2856D7]">Popular</span>{" "}
          <span className="text-[#222]">Destinations</span>
        </h1>

        <p
          className="
          mt-5
          text-gray-600
          max-w-3xl
          mx-auto
          px-6
          "
        >
          Explore amazing destinations and plan your next unforgettable journey
          with us.
        </p>
      </section>

      {/* DESTINATION CARDS */}

      <section
        className="
        max-w-[1400px]
        mx-auto
        px-6
        pb-16
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
        "
      >
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            href={`/destinations/${destination.id}`}
            className="
            group
            relative
            h-[300px]
            overflow-hidden
            rounded-xl
            "
          >
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              to-transparent
              "
            />

            <h2
              className="
              absolute
              bottom-6
              left-6
              text-white
              text-2xl
              font-bold
              uppercase
              "
            >
              {destination.title}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
