"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative mt-[112px] overflow-hidden bg-[#0B1B2B]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact/contact-banner.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[320px] max-w-7xl flex-col items-center justify-center px-5 text-center text-white md:h-[380px]">
        <span className="mb-4 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
          Get In Touch
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Contact Us
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 md:text-base">
          We'd love to hear from you. Whether you have questions about your next
          holiday, need help with bookings, or simply want travel advice, our
          team is here to help.
        </p>

        {/* Breadcrumb */}
        <div className="mt-8 flex items-center gap-2 text-sm text-gray-200">
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="font-semibold text-white">
            Contact Us
          </span>
        </div>
      </div>
    </section>
  );
}