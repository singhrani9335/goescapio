"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How can I book a holiday package?",
    answer:
      "You can book directly through our website, call our travel experts, or submit the contact form. Our team will guide you through the complete booking process.",
  },
  {
    id: 2,
    question: "Can I customize my travel package?",
    answer:
      "Yes. Every package can be customized according to your budget, destination, hotel preference, sightseeing, and travel dates.",
  },
  {
    id: 3,
    question: "Do you provide visa assistance?",
    answer:
      "Yes. We provide complete visa guidance and documentation support for selected international destinations.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Debit Card, Credit Card, Net Banking, and Bank Transfer for secure and convenient payments.",
  },
  {
    id: 5,
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes. Cancellation and rescheduling depend on the airline, hotel, and package policy. Our support team will assist you with the available options.",
  },
  {
    id: 6,
    question: "How do I contact customer support?",
    answer:
      "You can reach us via phone, email, WhatsApp, or by filling out the contact form on this page. Our travel experts are always happy to help.",
  },
];

export default function ContactFaq() {
  const [active, setActive] = useState(0);

  const toggle = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Have Any Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Find answers to the most common questions about our travel
            packages, bookings, cancellations, and support services.
          </p>
        </div>

        {/* FAQ List */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-gray-100 px-7 py-6 leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}