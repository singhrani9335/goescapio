"use client";

import Image from "next/image";
import { Headset, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}
        <div>
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Send Message
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Let's Plan Your Dream Vacation
          </h2>

          <p className="mt-5 text-gray-600">
            Fill out the form below and one of our travel experts will get back
            to you shortly.
          </p>

          <form className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 rounded-xl border border-gray-300 px-5 outline-none transition focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 rounded-xl border border-gray-300 px-5 outline-none transition focus:border-blue-600"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 rounded-xl border border-gray-300 px-5 outline-none transition focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Destination"
                className="h-14 rounded-xl border border-gray-300 px-5 outline-none transition focus:border-blue-600"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="h-14 w-full rounded-xl border border-gray-300 px-5 outline-none transition focus:border-blue-600"
            />

            <textarea
              rows={6}
              placeholder="Write Your Message..."
              className="w-full rounded-xl border border-gray-300 p-5 outline-none transition focus:border-blue-600"
            />

            <button
              type="submit"
              className="flex h-14 items-center gap-2 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between">
          <div className="relative h-[450px] overflow-hidden rounded-3xl">
            <Image
              src="/images/contact/contact-form.jpg"
              alt="Travel"
              fill
              className="object-cover"
            />
          </div>

          <div className="-mt-16 mx-6 rounded-3xl bg-white p-8 shadow-2xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Headset size={30} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Need Immediate Help?
            </h3>

            <p className="mt-3 text-gray-600">
              Our travel consultants are available to help you choose the best
              destination and package for your next trip.
            </p>

            <a
              href="tel:+917744848000"
              className="mt-6 inline-block text-lg font-bold text-blue-600"
            >
              +91 77448 48000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}