"use client";

import { ChevronRight } from "lucide-react";
import { DestinationRegion } from "@/types/navbar";

type DestinationSidebarProps = {
  regions: DestinationRegion[];
  activeRegion: string;
  onRegionChange: (id: string) => void;
};

export default function DestinationSidebar({
  regions,
  activeRegion,
  onRegionChange,
}: DestinationSidebarProps) {
  return (
    <aside className="w-[320px] border-r border-gray-200 bg-white">
      <ul className="py-4">
        {regions.map((region) => {
          const active = activeRegion === region.id;

          return (
            <li key={region.id}>
              <button
                onMouseEnter={() => onRegionChange(region.id)}
                onClick={() => onRegionChange(region.id)}
                className={`
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  px-8
                  py-4
                  text-left
                  text-[18px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    active
                      ? "bg-gray-50 text-black"
                      : "text-gray-800 hover:bg-gray-50"
                  }
                `}
              >
                <span>{region.name}</span>

                <ChevronRight
                  size={22}
                  className={`
                    transition-transform
                    duration-200
                    ${
                      active
                        ? "translate-x-1 text-black"
                        : "text-gray-500 group-hover:translate-x-1"
                    }
                  `}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
