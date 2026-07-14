"use client";

import Image from "next/image";
import { DestinationRegion } from "@/types/navbar";

type DestinationBannerProps = {
  region: DestinationRegion;
};

export default function DestinationBanner({
  region,
}: DestinationBannerProps) {
  return (
    <div className="flex-1 bg-white p-8">
      <div className="relative h-[460px] w-full overflow-hidden rounded-xl">
        <Image 
        
          src={region.banner}
          alt={region.name}
          fill
          priority
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}