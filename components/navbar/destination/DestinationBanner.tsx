"use client";

import Image from "next/image";
import Link from "next/link";

import {
  DestinationRegion,
  DestinationItem,
} from "@/types/navbar";

interface DestinationBannerProps {
  region: DestinationRegion;
  activeDestination: DestinationItem | null;
}

export default function DestinationBanner({
  activeDestination,
}: DestinationBannerProps) {
  if (!activeDestination) return null;

  return (
    <div className="flex-1 bg-white p-8">
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <Image
          src={activeDestination.image}
          alt={activeDestination.name}
          fill
          priority
          className="object-cover transition-all duration-300"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-8 left-8">
          <h2 className="mb-4 text-4xl font-bold text-white">
            {activeDestination.name}
          </h2>

          <Link
            href={activeDestination.href}
            className="inline-flex items-center rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
          >
            View Destination
          </Link>
        </div>
      </div>
    </div>
  );
}