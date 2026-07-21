import Image from "next/image";
import Link from "next/link";
import { Navigation } from "lucide-react";

import type { LatestHotDeal } from "@/types/latestHotDeal";

type Props = {
  packageData: LatestHotDeal;
};

export default function SimilarBookNowCard({
  packageData,
}: Props) {
  return (
    <div
      className="
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-gray-200
        bg-white
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          h-[240px]
          w-full
        "
      >
        <Image
          src={packageData.image}
          alt={packageData.title}
          fill
          sizes="(max-width:768px) 100vw,25vw"
          className="object-cover"
        />

        {/* NIGHT TAG */}

        <div
          className="
            absolute
            left-0
            top-5
            bg-yellow-400
            px-3
            py-1.5
            text-xs
            font-bold
            text-white
            clip-path-banner
          "
        >
          {packageData.nights}
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-3
        "
      >
        <h3
          className="
            line-clamp-2
            min-h-[44px]
            text-[16px]
            font-bold
            leading-6
            text-gray-900
          "
        >
          {packageData.title}
        </h3>

        {/* LOCATION BOX */}

        <div
          className="
            mt-3
            flex
            items-center
            justify-between
            rounded-lg
            bg-[#faf5ee]
            px-3
            py-2
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-gray-700
            "
          >
            <Navigation
              size={14}
              fill="black"
              className="rotate-[-45deg]"
            />

            <span>{packageData.location}</span>
          </div>

          <Link
            href={`/package/${packageData.slug}`}
            className="
              rounded-md
              bg-purple-600
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
              transition
              hover:bg-purple-700
            "
          >
            VIEW
          </Link>
        </div>
      </div>
    </div>
  );
}