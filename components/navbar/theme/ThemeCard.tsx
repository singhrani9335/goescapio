"use client";

import Image from "next/image";
import Link from "next/link";

import { ThemeItem } from "@/types/navbar";

interface ThemeCardProps {
  theme: ThemeItem;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <div
      className="
        group
        relative
        h-[250px]
        overflow-hidden
        shadow-md
      "
    >
      <Image
        src={theme.image}
        alt={theme.title}
        fill
        priority
        sizes="260px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Default Bottom Gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
          transition-opacity
          duration-300
          group-hover:opacity-0
        "
      />

      {/* Default Title */}

      <div
        className="
          absolute
          bottom-5
          left-5
          z-10
          transition-opacity
          duration-300
          group-hover:opacity-0
        "
      >
        <h3 className="text-lg font-semibold text-white">
          {theme.title}
        </h3>
      </div>

      {/* Hover Overlay */}

      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-end
          bg-black/60
          p-5
          opacity-0
          translate-y-3
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <h3 className="text-lg font-semibold text-white">
          {theme.title}
        </h3>

        <p
          className="
            mt-2
            line-clamp-4
            text-sm
            leading-5
            text-white/90
          "
        >
          {theme.description}
        </p>

        <Link
          href={theme.href}
          className="
            mt-4
            inline-flex
            h-10
            items-center
            justify-center
            border
            border-white/70
            text-sm
            font-medium
            text-white
            transition
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}