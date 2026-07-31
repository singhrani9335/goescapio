"use client";

import Image from "next/image";
import { Headset, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">

        {/* Left Side */}
        <div>

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Send Message
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Let's Plan Your
            <span className="block text-blue-600">
              Dream Vacation
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Tell us about your travel plans and our travel experts will help
            you choose the perfect destination, hotel, and holiday package
            according to your budget and preferences.
          </p>

          <form className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-lg">

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                className="h-14 rounded-xl border border-gray-200 bg-gray-50 px-5 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 rounded-xl border border-gray-200 bg-gray-50 px-5 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 rounded-xl border border-gray-200 bg-gray-50 px-5 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                placeholder="Preferred Destination"
                className="h-14 rounded-xl border border-gray-200 bg-gray-50 px-5 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>
        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="relative h-[560px] overflow-hidden rounded-3xl shadow-xl">

            <Image
              src="/images/contact/contact-form.jpg"
              alt="Travel"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Continue Part 2 */}
                    {/* Help Card */}
          <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white p-8 shadow-2xl">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Headset size={30} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Need Immediate Help?
                </h3>

                <p className="mt-1 text-gray-500">
                  Our travel experts are always happy to assist you.
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-3">

              <a
                href="tel:+917744848000"
                className="block text-xl font-bold text-blue-600 transition hover:text-blue-700"
              >
                +91 77448 48000
              </a>

              <a
                href="mailto:sales@goescapio.in"
                className="block text-gray-600 transition hover:text-blue-600"
              >
                sales@goescapio.in
              </a>

            </div>

            <div className="mt-6 rounded-2xl bg-blue-50 p-4">
              <p className="text-sm leading-6 text-gray-700">
                We usually respond within a few business hours. Feel free to
                call or email us for holiday packages, customized trips, visa
                guidance, or any travel-related assistance.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}