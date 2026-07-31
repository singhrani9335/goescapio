"use client";

import { MapPin, Navigation, Clock3 } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            <MapPin size={16} />
            Our Office Location
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Visit Us Anytime
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            We'd love to meet you in person. Visit our office to discuss your
            dream vacation with our travel experts or simply stop by for travel
            guidance and personalized holiday planning.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              title="GoEscapio Office Location"
              src="https://www.google.com/maps?q=Raipur&output=embed"
              width="100%"
              height="560"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Address Card */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <Navigation size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Office Address
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              GoEscapio Travels
              <br />
              Raipur, Chhattisgarh
              <br />
              India
            </p>
                      </div>

          {/* Office Hours */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
              <Clock3 size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Office Hours
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Monday – Saturday
              <br />
              09:00 AM – 07:00 PM
              <br />
              Sunday : Closed
            </p>
          </div>

          {/* Customer Support */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
              <MapPin size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Customer Support
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Phone:
              <br />
              <a
                href="tel:+917744848000"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                +91 77448 48000
              </a>

              <br />
              <br />

              Email:
              <br />
              <a
                href="mailto:sales@goescapio.in"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                sales@goescapio.in
              </a>

              <br />
              <br />

              24×7 Online Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}