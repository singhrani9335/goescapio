"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { destinationMenu } from "@/data/navbar/destinationMenu";

import { DestinationItem, DestinationRegion } from "@/types/navbar";

import DestinationSidebar from "./DestinationSidebar";
import DestinationLinks from "./DestinationLinks";
import DestinationBanner from "./DestinationBanner";

interface DestinationMegaMenuProps {
  isOpen: boolean;
}

export default function DestinationMegaMenu({
  isOpen,
}: DestinationMegaMenuProps) {
  const [activeRegion, setActiveRegion] = useState<DestinationRegion | null>(
    null,
  );

  const [activeDestination, setActiveDestination] =
    useState<DestinationItem | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveRegion(null);
      setActiveDestination(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (activeRegion) {
      setActiveDestination(
        activeRegion.destinations.length
          ? activeRegion.destinations[0]
          : null,
      );
    }
  }, [activeRegion]);

  if (!isOpen) return null;

  return (
    <div
      className="
        absolute
        left-1/2
        top-full
        z-50
        mt-0
        w-[1120px]
        -translate-x-1/2
        overflow-hidden
        border
        border-gray-200
        bg-white
        shadow-[0_25px_70px_rgba(0,0,0,0.15)]
      "
      onMouseLeave={() => {
        setActiveRegion(null);
        setActiveDestination(null);
      }}
    >
      {/* Header */}
      <div
        className="
          border-b
          border-gray-200
          px-8
          py-4
        "
      >
        <h2
          className="
            text-lg
            font-semibold
            uppercase
            tracking-[2px]
            text-gray-900
          "
        >
          Destinations
        </h2>
      </div>

      {/* Body */}
      <div className="flex h-[440px]">
        {/* Sidebar */}
        <DestinationSidebar
          regions={destinationMenu}
          activeRegion={activeRegion}
          onRegionChange={setActiveRegion}
        />

        {/* Default Banner */}
        {!activeRegion && (
          <div className="flex-1 p-6">
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-none
              "
            >
              <Image
                src="/images/destinationReview/default-banner.jpg"
                alt="Destinations"
                fill
                priority
                className="object-cover rounded-none"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                "
              />
            </div>
          </div>
        )}

        {/* Selected Region */}
        {activeRegion && (
          <>
            <DestinationLinks
              destinations={activeRegion.destinations}
              activeDestination={activeDestination}
              onDestinationChange={setActiveDestination}
            />

            <DestinationBanner
              region={activeRegion}
              activeDestination={activeDestination}
            />
          </>
        )}
      </div>
    </div>
  );
}