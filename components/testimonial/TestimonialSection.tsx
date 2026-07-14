"use client";

import Image from "next/image";
import TestimonialCard from "@/components/testimonial/TestimonialCard";

export default function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/testimonial-bg.jpg"
        alt="Testimonials Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div
        className="
        relative
        z-10
        mx-auto
        grid
        min-h-[520px]
        max-w-[1400px]
        items-center
        gap-10
        px-5
        py-16
        lg:grid-cols-2
        lg:px-10
        "
      >
        {/* Left Content */}

        <div className="max-w-xl text-center lg:text-left">
          <p
            className="
            mb-3
            text-xl
            font-bold
            tracking-wide
            text-violet-400
            "
          >
            Go & Discover
          </p>

          <h2
            className="
            text-4xl
            font-extrabold
            leading-tight
            text-white
            md:text-5xl
            "
          >
            Hear From
            <br />
            Our Clients
          </h2>

          <p
            className="
            mt-6
            text-base
            leading-8
            text-white/80
            md:text-lg
            "
          >
            See what our happy travelers are saying. Real stories from our
            satisfied travellers who enjoyed unforgettable holidays with Go
            Escapio.
          </p>
        </div>

        {/* Card */}

        <div className="flex justify-center lg:justify-end">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
