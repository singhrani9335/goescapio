"use client";

import Image from "next/image";
import Link from "next/link";

import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  const firstRow = destinations.slice(0, 4);
  const secondRow = destinations.slice(4, 7);

  return (
    <section className="bg-white overflow-hidden">
      {/* ================= HEADER ================= */}

      <div className="mx-auto max-w-[1600px] px-6 lg:px-20 pt-14 lg:pt-20">
        <div className="flex items-start justify-between">
          {/* LEFT CONTENT */}

          <div className="w-full lg:w-[75%]">
            <h2
              className="
              uppercase
              font-extrabold
              tracking-tight
              leading-none
              text-[34px]
              md:text-[48px]
              "
            >
              <span className="text-[#2856D7]">Popular</span>{" "}
              <span className="text-[#222]">Destinations</span>
            </h2>

            <div className="mt-7 h-[1px] w-full bg-gray-400" />

            <p
              className="
              mt-6
              max-w-5xl
              text-[15px]
              md:text-[17px]
              leading-7
              text-gray-600
              "
            >
              Discover the world's most captivating destinations with our travel
              company, where adventure awaits around every corner! Our curated
              selection of popular destinations will inspire your next
              unforgettable journey!
            </p>
          </div>

          {/* TRAVELLER IMAGE */}

          {/* TRAVELLER IMAGE */}

          <div
            className="
  hidden
  lg:block
  w-[360px]
  -mt-16
  "
          >
            <Image
              src="/images/destinations/travel-girl.png"
              alt="Traveller"
              width={360}
              height={300}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ================= DESTINATION GRID ================= */}

      <div className="mt-10">
        {/* FIRST ROW */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-[2px]
          "
        >
          {firstRow.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* SECOND ROW */}

        <div
          className="
          mt-[2px]
          "
        >
          <div
            className="
            grid
            w-full
            lg:w-[75%]
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[2px]
            "
          >
            {secondRow.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= CARD =================

function DestinationCard({ destination }: any) {
  return (
    <Link
      href={`/destination/${destination.slug}`}
      className="
      group
      relative
      h-[260px]
      md:h-[280px]
      overflow-hidden
      bg-black
      "
    >
      <Image
        src={destination.image}
        alt={destination.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="
  object-cover
  transition-transform
  duration-700
  group-hover:scale-110
  "
      />
      {/* DARK OVERLAY */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        via-black/20
        to-transparent
        "
      />

      {/* TITLE */}

      <h3
        className="
        absolute
        left-6
        bottom-6
        text-white
        uppercase
        font-extrabold
        text-[22px]
        md:text-[24px]
        tracking-wide
        "
      >
        {destination.title}
      </h3>

      {/* VIEW BUTTON */}

      <div
        className="
        absolute
        right-5
        bottom-5
        bg-white
        px-5
        py-2
        text-[12px]
        font-bold
        tracking-wide
        text-[#2957D3]
        opacity-0
        translate-y-3
        transition-all
        duration-300
        group-hover:opacity-100
        group-hover:translate-y-0
        "
      >
        VIEW
      </div>
    </Link>
  );
}
