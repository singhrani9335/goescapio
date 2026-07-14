"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  MapPin,
  Hotel,
  UtensilsCrossed,
  Camera,
  Bus,
  Plane,
} from "lucide-react";

import type { Package } from "@/types/package";

type TourPackageCardProps = {
  packageData: Package;
};

export default function TourPackageCard({
  packageData,
}: TourPackageCardProps) {
  return (
    <article
      className="
        flex
        h-[500px]
        w-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-indigo-300
        bg-white
      "
    >
      {/* Image */}

      <Link href={`/packages/${packageData.id}`}>
        <div
          className="
            relative
            h-[260px]
            w-full
            overflow-hidden
          "
        >
          <Image
            src={packageData.image}
            alt={packageData.title}
            fill
            sizes="(max-width:768px)100vw,33vw"
            className="object-cover"
          />
        </div>
      </Link>

      {/* Card Body */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-6
          py-5
        "
      >
        {/* Package Title */}

        <Link href={`/packages/${packageData.id}`}>
          <h3
            className="
              h-[55px]
              overflow-hidden
              text-[22px]
              font-semibold
              leading-8
              text-[#222222]
            "
          >
            {packageData.title}
          </h3>
        </Link>

        {/* Divider */}

        <div className="my-5 h-px w-full bg-indigo-300" />

        {/* Nights & Location */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-2
            text-sm
          "
        >
          <CalendarDays
            size={18}
            className="text-slate-800"
          />

          <span>
            <b className="text-slate-800">
              Nights:
            </b>{" "}
            <span className="text-gray-700">
              {packageData.nights}
            </span>
          </span>

          <span className="text-gray-400">
            |
          </span>

          <span className="text-gray-700">
            {packageData.location}
          </span>
        </div>
                {/* Features & Price */}

        <div
          className="
            mt-auto
            flex
            items-start
            justify-between
            gap-5
          "
        >
          {/* ICONS */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-indigo-900
            "
          >
            {packageData.features.activity && (
              <Plane
                size={18}
                strokeWidth={2.5}
              />
            )}

            {packageData.features.hotel && (
              <Hotel
                size={18}
                strokeWidth={2.5}
              />
            )}

            {packageData.features.sightseeing && (
              <Camera
                size={18}
                strokeWidth={2.5}
              />
            )}

            {packageData.features.transport && (
              <Bus
                size={18}
                strokeWidth={2.5}
              />
            )}

            {packageData.features.meal && (
              <UtensilsCrossed
                size={18}
                strokeWidth={2.5}
              />
            )}
          </div>

          {/* PRICE */}

          <div className="shrink-0">
            <p
              className="
                text-xs
                tracking-[0.18em]
                text-indigo-700
              "
            >
              From
            </p>

            <h4
              className="
                mt-2
                text-[22px]
                font-bold
                leading-none
                text-slate-700
              "
            >
              {packageData.price}
            </h4>
          </div>
        </div>
              </div>
    </article>
  );
}