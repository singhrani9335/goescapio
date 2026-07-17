import { Clock3, MapPin, Car, Camera, BedDouble, Utensils } from "lucide-react";

type Props = {
  duration: string;
  location: string;
};

export default function PackageInfoCard({ duration, location }: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#e6e6e6]
        bg-white
        shadow-sm
      "
    >
      {/* INFO */}

      <div
        className="
          space-y-4
          px-5
          pt-4
          pb-6
        "
      >
        <div className="flex items-center gap-3 text-[15px] text-black">
          <Clock3 size={18} strokeWidth={3} className="shrink-0 text-[#333]" />

          <p>
            <span className="font-bold">Duration:</span> {duration}
          </p>
        </div>

        <div className="flex items-center gap-3 text-[15px] text-black">
          <MapPin size={19} strokeWidth={3} className="shrink-0 text-[#333]" />

          <p>
            <span className="font-bold">Location:</span> {location}
          </p>
        </div>
      </div>

      {/* INCLUDE TITLE */}

      <div
        className="
          relative
          border-t
          border-[#e6e6e6]
        "
      >
        <div
          className="
            absolute
            -top-5
            left-1/2
            -translate-x-1/2
            rounded-full
            border
            border-[#d7d7d7]
            bg-[#f5f5f5]
            px-5
            py-2
            text-[14px]
            font-medium
            text-[#555]
            whitespace-nowrap
          "
        >
          Package Includes
        </div>

        {/* ITEMS */}

        <div
          className="
            grid
            grid-cols-4
            gap-0
            px-3
            pt-11
            pb-4
            text-center
          "
        >
          <div>
            <Car size={23} strokeWidth={2.5} className="mx-auto text-[#333]" />

            <p className="mt-0.5 text-[12px] font-medium text-[#333]">
              Transfer
            </p>
          </div>

          <div>
            <Camera
              size={23}
              strokeWidth={2.5}
              className="mx-auto text-[#333]"
            />

            <p className="mt-0.5 text-[12px] font-medium text-[#333]">
              SightSeeing
            </p>
          </div>

          <div>
            <BedDouble
              size={23}
              strokeWidth={2.5}
              className="mx-auto text-[#333]"
            />

            <p className="mt-0.5 text-[12px] font-medium text-[#333]">Hotel</p>
          </div>

          <div>
            <Utensils
              size={23}
              strokeWidth={2.5}
              className="mx-auto text-[#333]"
            />

            <p
              className="
                mt-0.5
                text-[12px]
                font-medium
                leading-3
                text-[#333]
              "
            >
              Bed &
              <br />
              Breakfast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
