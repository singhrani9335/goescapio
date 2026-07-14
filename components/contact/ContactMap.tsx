"use client";

import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            <MapPin size={16} />
            Our Location
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            We'd love to meet you in person. Visit our office or get in touch
            with our travel experts for personalized holiday planning.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            title="GoEscapio Office Location"
            src="https://www.google.com/maps?q=Raipur&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>

        {/* Bottom Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-900">
              Office Address
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              GoEscapio Travels
              <br />
              Raipur, Chhattisgarh
              <br />
              India
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-900">
              Office Hours
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Monday – Saturday
              <br />
              09:00 AM – 07:00 PM
              <br />
              Sunday Closed
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-900">
              Customer Support
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Phone: +91 77448 48000
              <br />
              Email: sales@goescapio.in
              <br />
              24×7 Online Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}