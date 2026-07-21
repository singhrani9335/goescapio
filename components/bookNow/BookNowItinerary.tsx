"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Images as ImageIcon } from "lucide-react";

import type { PackageReview } from "@/types/packageReview";

interface BookNowItineraryProps {
  itinerary?: PackageReview["itinerary"];
}

export default function BookNowItinerary({ itinerary }: BookNowItineraryProps) {
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
        p-6
        shadow-sm
        md:p-7
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
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-5
                  text-left
                  transition
                  ${isOpen ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
                `}
              >
                <h3
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    text-[16px]
                    font-semibold
                    text-gray-900
                    md:text-[17px]
                  "
                >
                  <span className="font-bold">Day {item.day}</span>

                  <span className="text-gray-400">—</span>

                  <span>{item.title}</span>
                </h3>

                {isOpen ? (
                  <ChevronUp size={22} className="shrink-0 text-gray-700" />
                ) : (
                  <ChevronDown size={22} className="shrink-0 text-gray-700" />
                )}
              </button>

              {isOpen && (
                <div
                  className="
                    grid
                    gap-6
                    bg-white
                    px-5
                    pb-6
                    pt-3
                    md:grid-cols-[280px_1fr]
                    md:px-6
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      h-[200px]
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
                          text-center
                          text-gray-400
                        "
                      >
                        <div>
                          <ImageIcon size={45} className="mx-auto mb-3" />

                          <p className="text-sm">Image Coming Soon</p>
                        </div>
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
