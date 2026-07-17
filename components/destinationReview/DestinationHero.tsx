"use client";

import Image from "next/image";

interface DestinationHeroProps {
  destination: {
    title: string;
    banner: string;
  };
}

export default function DestinationHero({
  destination,
}: DestinationHeroProps) {
  return (
    <section className="relative mb-4 w-full">
      <div className="relative h-[478px] overflow-hidden">
        <Image
          src={destination.banner}
          alt={destination.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="px-4 text-center text-4xl font-bold text-white drop-shadow-2xl md:text-6xl">
            {destination.title}
          </h1>
        </div>
      </div>
    </section>
  );
}