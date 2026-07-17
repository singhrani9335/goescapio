import { Users } from "lucide-react";

type BookNowPriceCardProps = {
  price: string;
};

export default function BookNowPriceCard({
  price,
}: BookNowPriceCardProps) {
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
      {/* ===========================
          PRICE HEADER
      =========================== */}

      <div
        className="
          bg-gradient-to-r
          from-[#c68cff]
          via-[#b3a9ff]
          to-[#87cfff]
          px-6
          pt-4
          pb-5
        "
      >
        <p
          className="
            text-[15px]
            font-medium
            text-[#222]
          "
        >
          Starting from
        </p>

        <div
          className="
            mt-2
            flex
            items-end
          "
        >
          <h2
            className="
              text-[42px]
              font-extrabold
              leading-none
              tracking-[-1px]
              text-black
            "
          >
            ₹{price}
          </h2>

          <span
            className="
              mb-[5px]
              ml-2
              text-[14px]
              font-medium
              text-[#222]
            "
          >
            Per Person
          </span>
        </div>

        <div
          className="
            mt-5
            flex
            items-center
            gap-2
          "
        >
          <Users
            size={19}
            strokeWidth={2.4}
            className="text-black"
          />

          <span
            className="
              text-[15px]
              font-medium
              text-[#222]
            "
          >
            Twin Sharing Price
          </span>
        </div>
      </div>

      {/* ===========================
          BUTTON
      =========================== */}

      <div className="bg-white px-5 py-5">
        <button
          className="
            w-full
            rounded-full
            bg-[#6d12d9]
            py-[14px]
            text-[15px]
            font-bold
            tracking-wide
            text-white
            transition-colors
            duration-200
            hover:bg-[#5d0ec0]
          "
        >
          ENQUIRE NOW
        </button>
      </div>
    </div>
  );
}