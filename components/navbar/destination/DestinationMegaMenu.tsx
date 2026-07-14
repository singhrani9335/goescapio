"use client";

import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";

import { destinationMenu } from "@/data/navbar/destinationMenu";

type Props = {
  isOpen: boolean;
};

export default function DestinationMegaMenu({ isOpen }: Props) {
  const [activeRegionId, setActiveRegionId] = useState(
    destinationMenu[0]?.id
  );

  const activeRegion = useMemo(() => {
    return (
      destinationMenu.find((item) => item.id === activeRegionId) ??
      destinationMenu[0]
    );
  }, [activeRegionId]);

  if (!isOpen) return null;

  return (
    <div
      className="
        absolute
        left-1/2
        top-full
        z-50
        mt-4
        w-[1180px]
        max-w-[95vw]
        -translate-x-1/2
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      "
    >
      {/* Header */}

      <div className="border-b border-gray-100 px-10 py-6">
        <h2
          className="
            text-lg
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#081B2A]
          "
        >
          Destinations
        </h2>
      </div>

      {/* Body */}

      <div className="flex h-[500px]">

        {/* Sidebar */}

        <aside
          className="
            w-[300px]
            shrink-0
            border-r
            border-gray-100
            bg-white
            py-4
          "
        >
          {destinationMenu.map((region) => {
            const active = region.id === activeRegion.id;

            return (
              <button
                key={region.id}
                onMouseEnter={() => setActiveRegionId(region.id)}
                onClick={() => setActiveRegionId(region.id)}
                className={`
                  group
                  flex
                  h-[64px]
                  w-full
                  items-center
                  justify-between
                  px-8
                  text-left
                  text-[17px]
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }
                `}
              >
                <span>{region.name}</span>

                <ChevronRight
                  size={20}
                  className={`
                    transition-all
                    duration-300

                    ${
                      active
                        ? "translate-x-1 text-blue-600"
                        : "text-gray-400 group-hover:translate-x-1"
                    }
                  `}
                />
              </button>
            );
          })}
        </aside>

        {/* Right Section */}

        <div className="flex flex-1">
                    {/* Region Content */}

          <div className="flex-1 px-10 py-10">
            <h2 className="mb-3 text-3xl font-semibold text-[#081B2A]">
              {activeRegion.title ?? activeRegion.name}
            </h2>

            <p className="mb-8 max-w-xl text-[15px] leading-7 text-gray-600">
              Explore our carefully curated destinations and discover
              unforgettable experiences tailored to every type of traveler.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {activeRegion.places?.map((place: string) => (
                <button
                  key={place}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-transparent
                    px-4
                    py-3
                    text-left
                    text-[15px]
                    font-medium
                    text-gray-700
                    transition-all
                    duration-300
                    hover:border-blue-100
                    hover:bg-blue-50
                    hover:text-blue-600
                  "
                >
                  <span>{place}</span>

                  <ChevronRight
                    size={16}
                    className="text-gray-400"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Banner */}

          <div className="w-[420px] shrink-0 bg-gray-50 p-6">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <img
                src={activeRegion.banner}
                alt={activeRegion.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                  p-6
                "
              >
                <h3 className="text-2xl font-semibold text-white">
                  {activeRegion.name}
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Plan your next unforgettable journey with GoEscapio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
        