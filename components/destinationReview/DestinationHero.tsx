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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Left Heading */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-16">
            <h1
              className="
                text-left
                text-4xl
                font-bold
                text-white
                drop-shadow-2xl
                md:text-6xl
              "
            >
              {destination.title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}