"use client";

import Link from "next/link";
import { PhoneCall, PlaneTakeoff, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/images/contact/contact-cta.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#0B1B2B]/85 to-[#071B2D]/95" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold backdrop-blur-md">
            <Sparkles size={16} />
            Start Your Journey Today
          </span>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Let's Turn Your
            <span className="block text-blue-400">
              Dream Vacation Into Reality
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-200">
            Whether you're planning a romantic honeymoon, family vacation,
            adventure tour, luxury escape, or international holiday, our
            travel experts are ready to create unforgettable experiences
            tailored just for you.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href="tel:+917744848000"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              <PhoneCall size={20} />
              Call Now
            </a>

            <Link
              href="/#packages"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#071B2D]"
            >
              <PlaneTakeoff size={20} />
              Explore Packages
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
              {
                value: "10K+",
                label: "Happy Travelers",
              },
              {
                value: "150+",
                label: "Destinations",
              },
              {
                value: "500+",
                label: "Holiday Packages",
              },
              {
                value: "24/7",
                label: "Customer Support",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <h3 className="text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm font-medium tracking-wide text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
          