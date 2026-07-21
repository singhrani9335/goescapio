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
    <section
      className="
        bg-[#fbf7f1]
        px-8
        py-5
        md:px-16
        lg:px-24
      "
    >
      <h1
        className="
          text-[26px]
          font-bold
          text-[#263238]
        "
      >
        {title}
      </h1>

      <div
        className="
          mt-5
          flex
          flex-col
          gap-8
          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        {/* PRICE */}

        <div className="flex items-center gap-5">
          <h2
            className="
              text-[40px]
              font-extrabold
              leading-none
              text-[#6419d6]
            "
          >
            ₹{price}
          </h2>

          <div
            className="
              text-[15px]
              font-medium
              leading-5
              text-[#111827]
            "
          >
            {priceType.split("|").map((item, index) => (
              <p key={index}>{item.trim()}</p>
            ))}
          </div>
        </div>

        {/* DETAILS */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-10
          "
        >
          {/* DURATION */}

          <div className="flex items-center gap-3">
            <Clock3
              size={32}
              strokeWidth={3}
              className="shrink-0 text-[#6419d6]"
            />

            <div>
              <p className="text-[13px] font-medium text-gray-600">Duration</p>

              <p className="text-[17px] font-bold text-[#111827]">{duration}</p>
            </div>
          </div>

          {/* INCLUDES */}

          <div className="flex items-center gap-3">
            <BadgeCheck
              size={34}
              strokeWidth={3}
              className="shrink-0 text-[#6419d6]"
            />

            <div>
              <p className="text-[13px] font-medium text-gray-600">Includes</p>

              <div
                className="
                  mt-1
                  flex
                  gap-2
                  text-[#333]
                "
              >
                {features.transport && <Car size={22} strokeWidth={2.5} />}

                {features.activity && <Camera size={22} strokeWidth={2.5} />}

                {features.hotel && <BedDouble size={22} strokeWidth={2.5} />}

                {features.meal && <Utensils size={22} strokeWidth={2.5} />}
              </div>
            </div>
          </div>

          {/* LOCATION */}

          <div className="flex items-center gap-3">
            <MapPin
              size={36}
              strokeWidth={3}
              className="shrink-0 text-[#6419d6]"
            />

            <div>
              <p className="text-[13px] font-medium text-gray-600">Location</p>

              <p
                className="
                  max-w-[200px]
                  text-[17px]
                  font-bold
                  leading-5
                  text-[#111827]
                "
              >
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
