"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  Hotel,
  Camera,
  Car,
  Plane,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import type { LatestHotDeal } from "@/types/latestHotDeal";

interface DealCardProps {
  deal: LatestHotDeal;
}

export default function DealCard({ deal }: DealCardProps) {
  return (
    <article
      className="
      flex
      h-[500px]
      w-full
      flex-col
      overflow-hidden
      rounded-2xl
      bg-white
      shadow-md
      transition
      duration-300
      hover:shadow-xl
      "
    >
      {/* IMAGE */}

      <div
        className="
      relative
      h-[260px]
      w-full
      "
      >
        <Image
  src={deal.image}
  alt={deal.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="
  object-cover
  "
/>
      </div>

      {/* CONTENT */}

      <div
        className="
        flex
        flex-1
        flex-col
        px-6
        py-5
        "
      >
        {/* TITLE */}

        <h3
          className="
          h-[55px]
          overflow-hidden
          text-[19px]
          font-bold
          leading-7
          text-slate-700
          "
        >
          {deal.title}
        </h3>

        {/* NIGHT LOCATION */}

        <div
          className="
    mt-8
    flex
    items-center
    gap-2
    text-sm
  "
        >
          <CalendarDays size={18} className="text-slate-800" />

          <span>
            <b className="text-slate-800">Nights:</b>{" "}
            <span className="text-gray-700">{deal.nights}</span>
          </span>

          <span className="text-gray-400">|</span>

          <span className="text-gray-700">{deal.location}</span>
        </div>

        {/* ICONS */}

        <div
          className="
    mt-5
    flex
    items-center
    gap-2
    text-indigo-900
  "
        >
          {deal.features.activity && <Plane size={22} strokeWidth={2.5} />}

          {deal.features.hotel && <Hotel size={22} strokeWidth={2.5} />}

          {deal.features.sightseeing && <Camera size={22} strokeWidth={2.5} />}

          {deal.features.transport && <Car size={22} strokeWidth={2.5} />}

          {deal.features.meal && (
            <UtensilsCrossed size={22} strokeWidth={2.5} />
          )}
        </div>

        
{/* BOTTOM */}

<div
  className="
    mt-4
    flex
    items-center
    justify-between
  "
>
  {/* PRICE */}

  <div className="-ml-2 flex items-baseline gap-2">
    <span className="text-xs text-gray-600">
      Starting from
    </span>

    <span className="text-xl font-bold text-slate-800">
      ₹{deal.price}
    </span>
  </div>

  {/* BUTTON */}

  <Link
    href={`/package/${deal.slug}`}
    className="
      rounded-md
      bg-purple-600
      px-5
      py-2
      text-sm
      font-bold
      text-white
      transition
      hover:bg-purple-700
    "
  >
    VIEW DETAILS
  </Link>
</div>
      </div>
    </article>
  );
}  