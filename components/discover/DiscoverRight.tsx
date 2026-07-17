"use client";

import Image from "next/image";
import Link from "next/link";

import WatchVideoButton from "./WatchVideoButton";
import { discoverBanner } from "@/data/discoverCities";

export default function DiscoverRight() {
  return (
    <div
      className="
        relative
        h-[530px]
        overflow-visible
      "
    >
      {/* Watch Video Button */}
      <div
        className="
          absolute
          top-10
          -left-[80px]
          z-30
        "
      >
        <WatchVideoButton />
      </div>

      {/* Clickable Card */}
      <Link
        href={`/package/${discoverBanner.slug}`}
        className="
          group
          relative
          block
          h-full
          cursor-pointer
          overflow-hidden
          rounded-[30px]
        "
      >
        {/* Background Image */}
        <Image
          src={discoverBanner.image}
          alt={discoverBanner.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Bottom Content */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            justify-end
            p-8
            lg:p-10
          "
        >
          <div>
            <div className="inline-block">
              <h3
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  lg:text-4xl
                "
              >
                {discoverBanner.title}
              </h3>

              {/* Underline */}
              <span
                className="
                  mt-2
                  block
                  h-[2px]
                  w-0
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}