"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            <MessageCircle size={16} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Find answers to the most common questions about bookings,
            cancellations, travel packages, visa assistance, payments,
            and customer support.
          </p>
        </div>

        {/* FAQ List */}

        <div className="space-y-6">
                    {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                active === index
                  ? "border-blue-500 bg-white shadow-xl"
                  : "border-gray-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <h3 className="pr-6 text-lg font-semibold text-gray-900 md:text-xl">
                  {faq.question}
                </h3>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                    active === index
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <ChevronDown size={22} />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-7 py-6">
                    <p className="leading-8 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
        