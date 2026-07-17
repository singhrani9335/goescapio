"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import type { BookNow } from "@/types/bookNow";

interface HotelSectionProps {
  hotels?: BookNow["hotels"];
}

export default function HotelSection({ hotels }: HotelSectionProps) {
  const [openHotel, setOpenHotel] = useState<number>(0);

  if (!hotels || hotels.length === 0) {
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
        Hotel
      </h2>

      <div className="space-y-4">
        {hotels.map((hotel, index) => {
          const isOpen = openHotel === index;

          return (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-xl
                border
                border-gray-200
              "
            >
              <button
                type="button"
                onClick={() => setOpenHotel(isOpen ? -1 : index)}
                className={`
                  flex
                  w-full
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
                    text-[17px]
                    font-semibold
                    capitalize
                    text-gray-900
                  "
                >
                  {hotel.name}
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
                  <div
                    className="
                      relative
                      h-[190px]
                      overflow-hidden
                      rounded-xl
                    "
                  >
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="
                        object-cover
                        transition
                        duration-300
                        hover:scale-105
                      "
                    />
                  </div>

                  <div>
                    <div
                      className="
                        mb-4
                        space-y-2
                        text-sm
                        text-gray-700
                      "
                    >
                      {hotel.category && (
                        <p>
                          <b>Category:</b> {hotel.category}
                        </p>
                      )}

                      {hotel.location && (
                        <p>
                          <b>City:</b> {hotel.location}
                        </p>
                      )}

                      {hotel.nights && (
                        <p>
                          <b>Night:</b> {hotel.nights}
                        </p>
                      )}
                    </div>

                    {hotel.amenities && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {hotel.amenities.map((item, i) => (
                          <span
                            key={i}
                            className="
                              rounded-full
                              bg-gray-100
                              px-3
                              py-1
                              text-xs
                              text-gray-700
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
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
