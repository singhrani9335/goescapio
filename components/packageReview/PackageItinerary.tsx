"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Images as ImageIcon } from "lucide-react";

import type { PackageReview } from "@/types/packageReview";

interface PackageItineraryProps {
  itinerary?: PackageReview["itinerary"];
}

export default function PackageItinerary({ itinerary }: PackageItineraryProps) {
  const [openDay, setOpenDay] = useState<number>(itinerary?.[0]?.day ?? 1);

  if (!itinerary || itinerary.length === 0) {
    return null;
  }

  return (
    <section
      className="
        mt-8
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-sm
      "
    >
      <h2
        className="
          mb-7
          text-2xl
          font-bold
          text-gray-900
        "
      >
        Itinerary
      </h2>

      <div className="space-y-4">
        {itinerary.map((item) => {
          const isOpen = openDay === item.day;

          return (
            <div
              key={item.day}
              className="
                overflow-hidden
                rounded-xl
                border
                border-gray-200
              "
            >
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? 0 : item.day)}
                className={`
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                  ${isOpen ? "bg-white" : "bg-gray-50"}
                `}
              >
                <h3
                  className="
                    flex
                    items-center
                    gap-3
                    text-[17px]
                    font-semibold
                    text-gray-900
                  "
                >
                  <span className="font-bold text-gray-800">
                    Day {item.day}
                  </span>

                  <span className="text-gray-400">—</span>

                  <span>{item.title}</span>
                </h3>

                {isOpen ? (
                  <ChevronUp size={21} className="text-gray-700" />
                ) : (
                  <ChevronDown size={21} className="text-gray-700" />
                )}
              </button>

              {isOpen && (
                <div
                  className="
                    grid
                    gap-6
                    bg-white
                    px-6
                    pb-6
                    pt-2
                    md:grid-cols-[280px_1fr]
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      h-[190px]
                      overflow-hidden
                      bg-gray-100
                    "
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="
                          (max-width:768px) 100vw,
                          280px
                        "
                        className="
                          object-cover
                        "
                      />
                    ) : (
                      <div
                        className="
                          flex
                          h-full
                          items-center
                          justify-center
                          text-gray-400
                        "
                      >
                        <ImageIcon size={45} className="mb-2" />
                      </div>
                    )}
                  </div>

                  {/* DESCRIPTION */}

                  <div
                    className="
                      flex
                      items-center
                    "
                  >
                    <p
                      className="
                        text-[15px]
                        leading-8
                        text-gray-600
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
