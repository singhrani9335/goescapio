"use client";

import Image from "next/image";
import DestinationDropdown from "../hero/DestinationDropdown";

interface ThemeHeroProps {
  theme: {
    title: string;
    banner: string;
  };
}

export default function ThemeHero({ theme }: ThemeHeroProps) {
  return (
    <section className="relative mb-20 w-full">
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src={theme.banner}
          alt={theme.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1
            className="
              px-4
              text-center
              text-4xl
              font-bold
              text-white
              drop-shadow-2xl
              md:text-6xl
            "
          >
            {theme.title}
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <DestinationDropdown />
    </section>
  );
}