"use client";

import Link from "next/link";
import { DestinationItem } from "@/types/navbar";

interface DestinationLinksProps {
  destinations: DestinationItem[];
  activeDestination: DestinationItem | null;
  onDestinationChange: (destination: DestinationItem) => void;
}

export default function DestinationLinks({
  destinations,
  activeDestination,
  onDestinationChange,
}: DestinationLinksProps) {
  return (
    <div className="w-[260px] flex-shrink-0 border-r border-gray-200 bg-white">
      <ul className="py-6">
        {destinations.map((destination) => {
          const isActive = activeDestination?.id === destination.id;

          return (
            <li key={destination.id}>
              <Link
                href={destination.href}
                onMouseEnter={() => onDestinationChange(destination)}
                onFocus={() => onDestinationChange(destination)}
                className={`block px-8 py-3 text-[16px] transition-all duration-200 ${
                  isActive
                    ? "bg-gray-50 font-semibold text-[#0A4DA3]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#0A4DA3]"
                }`}
              >
                {destination.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}