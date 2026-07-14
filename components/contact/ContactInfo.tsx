"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: "Office Address",
    details: [
      "GoEscapio Travels",
      "Raipur, Chhattisgarh",
      "India",
    ],
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 77448 48000",
      "+91 98765 43210",
    ],
  },
  {
    id: 3,
    icon: Mail,
    title: "Email Address",
    details: [
      "sales@goescapio.in",
      "support@goescapio.in",
    ],
  },
  {
    id: 4,
    icon: Clock,
    title: "Working Hours",
    details: [
      "Mon - Sat : 09:00 AM - 07:00 PM",
      "Sunday : Closed",
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Contact Information
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            We Are Always Ready To Help
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Have questions about your next trip? Contact our travel experts
            anytime. We are happy to assist you with bookings, tour packages,
            visa guidance, and more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Details */}
                <div className="space-y-2">
                  {item.details.map((text, index) => (
                    <p
                      key={index}
                      className="text-[15px] leading-7 text-gray-600"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}