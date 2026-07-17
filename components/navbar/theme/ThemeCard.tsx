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
      h-[290px]
      overflow-hidden
      rounded-xl
      "
    >
      <Image
        src={theme.image}
        alt={theme.title}
        fill
        className="
        object-cover
        transition
        duration-500
        group-hover:scale-105
        "
      />

      {/* Bottom Dark Overlay */}

      <div
        className="
        absolute
        inset-x-0
        bottom-0
        h-24
        bg-gradient-to-t
        from-black/80
        to-transparent
        "
      />

      {/* Default Title */}

      <div
        className="
        absolute
        bottom-5
        left-5
        "
      >
        <h3
          className="
          text-xl
          font-bold
          text-white
          "
        >
          {theme.title}
        </h3>
      </div>

      {/* Hover Content */}

      <div
        className="
        absolute
        inset-0
        flex
        flex-col
        justify-end
        bg-black/70
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
        "
      >
        <h3
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          {theme.title}
        </h3>

        <p
          className="
          mt-3
          line-clamp-5
          text-sm
          leading-6
          text-white/90
          "
        >
          {theme.description}
        </p>

        <Link
          href={theme.href}
          className="
          mt-5
          flex
          h-12
          items-center
          justify-center
          border
          border-white/60
          text-white
          transition
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
