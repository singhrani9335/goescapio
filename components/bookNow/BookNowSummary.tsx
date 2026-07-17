"use client";

import {
  Clock3,
  BadgeCheck,
  Car,
  Camera,
  BedDouble,
  Utensils,
  MapPin,
} from "lucide-react";

type BookNowSummaryProps = {
  title: string;
  price: string;
  priceType: string;
  duration: string;
  location: string;

  features: {
    hotel: boolean;
    activity: boolean;
    transport: boolean;
    meal: boolean;
  };
};

export default function BookNowSummary({
  title,
  price,
  priceType,
  duration,
  location,
  features,
}: BookNowSummaryProps) {
  return (
    <section className="bg-[#fbf7f1] px-12 py-4 md:px-24">
      {/* TITLE */}

      <h1 className="text-[24px] font-bold tracking-tight text-[#263238]">
        {title}
      </h1>

      <div className="mt-4 flex items-center justify-between">
        {/* PRICE AREA */}

        <div className="flex items-center gap-5">
          <h2 className="text-[38px] font-extrabold leading-none text-[#6419d6]">
            ₹{price}
          </h2>

          <div className="text-[15px] font-medium leading-5 text-[#111827]">
            {priceType.split("|").map((item, index) => (
              <p key={index}>
                {item.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* DETAILS AREA */}

        <div className="translate-x-3 flex items-center gap-6">

          {/* DURATION */}

          <div className="flex items-center gap-3">
            <Clock3
              size={32}
              strokeWidth={2.6}
              className="text-[#6419d6]"
            />

            <div>
              <p className="text-[14px] font-medium text-gray-700">
                Duration
              </p>

              <p className="text-[17px] font-semibold text-[#111827]">
                {duration}
              </p>
            </div>
          </div>


          {/* INCLUDES */}

          <div className="flex items-center gap-3">
            <BadgeCheck
              size={34}
              strokeWidth={2.6}
              className="text-[#6419d6]"
            />

            <div>
              <p className="text-[14px] font-medium text-gray-700">
                Includes
              </p>

              <div className="mt-1 flex gap-1 text-[#374151]">
                {features.transport && (
                  <Car size={21} strokeWidth={2.4} />
                )}

                {features.activity && (
                  <Camera size={21} strokeWidth={2.4} />
                )}

                {features.hotel && (
                  <BedDouble size={21} strokeWidth={2.4} />
                )}

                {features.meal && (
                  <Utensils size={21} strokeWidth={2.4} />
                )}
              </div>
            </div>
          </div>


          {/* LOCATION */}

          <div className="flex items-center gap-3">
            <MapPin
              size={34}
              strokeWidth={2.6}
              className="fill-[#6419d6] text-[#6419d6]"
            />

            <div>
              <p className="text-[14px] font-medium text-gray-700">
                Location
              </p>

              <p className="max-w-[180px] text-[17px] font-semibold leading-5 text-[#111827]">
                {location}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}