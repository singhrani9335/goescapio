"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative mt-[112px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact/contact-banner.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#0B1B2B]/80 to-[#071B2D]/90" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-5 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[300px] max-w-7xl flex-col items-center justify-center px-5 py-10 text-center text-white lg:min-h-[360px] lg:px-8">
        {/* Badge */}
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur-md">
          Get In Touch
        </span>

        {/* Heading */}
        <h1 className="mt-5 max-w-5xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Let's Plan Your
          <span className="block text-blue-400">Next Amazing Journey</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-200 md:text-base">
          Whether you're planning a honeymoon, family vacation, luxury escape,
          or international adventure, our travel experts are here to make your
          journey smooth, memorable, and stress-free.
        </p>

        {/* Breadcrumb */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm backdrop-blur-md">
          <Link href="/" className="transition hover:text-blue-300">
            Home
          </Link>

          <ChevronRight size={15} />

          <span className="font-semibold text-white">Contact Us</span>
        </div>
      </div>
    </section>
  );
}
