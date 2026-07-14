"use client";

import Image from "next/image";
import Link from "next/link";

type DiscoverCardProps = {
  image: string;
  title: string;
  href: string;
};

export default function DiscoverCard({
  image,
  title,
  href,
}: DiscoverCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-md
      "
    >
      {/* Image */}
      <div className="relative h-[170px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="inline-block">
          <h3
            className="
              mt-2
              text-lg
              font-extrabold
              leading-7
              text-gray-900
            "
          >
            {title}
          </h3>

          {/* Hover Underline */}
          <span
            className="
              mt-1
              block
              h-[2px]
              w-0
              bg-gray-900
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </div>
      </div>
    </Link>
  );
}