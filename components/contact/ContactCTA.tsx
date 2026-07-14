"use client";

import Link from "next/link";
import { PhoneCall, PlaneTakeoff } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/contact/contact-cta.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071B2D]/80" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            Start Your Journey Today
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Let's Make Your Dream Vacation
            <br />
            A Beautiful Reality
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Whether you're planning a romantic honeymoon, family vacation,
            adventure trip, or luxury holiday, our travel experts are ready
            to help you create unforgettable memories.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href="tel:+917744848000"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              <PhoneCall size={20} />
              Call Now
            </a>

            <Link
              href="/#packages"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-white px-8 text-base font-semibold text-white transition duration-300 hover:bg-white hover:text-[#0B1B2B]"
            >
              <PlaneTakeoff size={20} />
              Explore Packages
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="mt-2 text-sm text-gray-300">
                Happy Travelers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="mt-2 text-sm text-gray-300">
                Destinations
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="mt-2 text-sm text-gray-300">
                Holiday Packages
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="mt-2 text-sm text-gray-300">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}