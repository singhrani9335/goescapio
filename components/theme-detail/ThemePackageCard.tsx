"use client";

import Image from "next/image";
import Link from "next/link";

import type { ThemePackage } from "@/types/themePackage";
import ThemeIcons from "./ThemeIcons";

interface ThemePackageCardProps {
  pkg: ThemePackage;
}

export default function ThemePackageCard({ pkg }: ThemePackageCardProps) {
  return (
    <div
      className="
        min-h-[520px]
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative h-[280px] w-full">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white
            px-4
            py-1
            text-sm
            font-semibold
            text-gray-800
            shadow
          "
        >
          Nights: {pkg.nights}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
            min-h-[58px]
            text-xl
            font-bold
            leading-7
            text-gray-900
          "
        >
          {pkg.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{pkg.location}</p>

        <div className="mt-5">
          <ThemeIcons features={pkg.features} />
        </div>

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <div>
            <p className="text-sm text-gray-500">Starting From</p>

            <h4
              className="
                text-2xl
                font-bold
                text-blue-600
              "
            >
              ₹{pkg.price}
            </h4>
          </div>

          <Link
            href={`/package/${pkg.slug}`}
            className="
              rounded-lg
              bg-blue-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}
