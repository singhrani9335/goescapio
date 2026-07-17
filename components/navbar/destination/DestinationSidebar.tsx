"use client";

import { ChevronRight } from "lucide-react";
import { DestinationRegion } from "@/types/navbar";

interface DestinationSidebarProps {
  regions: DestinationRegion[];
  activeRegion: DestinationRegion | null;
  onRegionChange: (region: DestinationRegion) => void;
}

export default function DestinationSidebar({
  regions,
  activeRegion,
  onRegionChange,
}: DestinationSidebarProps) {
  return (
    <div className="w-[280px] border-r border-gray-200 bg-white">
      <ul className="py-4">
        {regions.map((region) => {
          const isActive = activeRegion?.id === region.id;

          return (
            <li key={region.id}>
              <button
                type="button"
                onMouseEnter={() => onRegionChange(region)}
                className={`flex w-full items-center justify-between px-8 py-4 text-left transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 font-semibold text-[#0A4DA3]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#0A4DA3]"
                }`}
              >
                <span>{region.name}</span>

                <ChevronRight
                  size={18}
                  className={`transition-all duration-200 ${
                    isActive
                      ? "translate-x-1 text-[#0A4DA3]"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}