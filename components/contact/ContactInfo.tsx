"use client";

import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: "Visit Our Office",
    subtitle: "Meet our travel experts in person.",
    color: "from-blue-600 to-cyan-500",
    details: ["GoEscapio Travels", "Raipur, Chhattisgarh", "India"],
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Our Experts",
    subtitle: "Speak directly with our travel consultants.",
    color: "from-emerald-500 to-teal-500",
    details: ["+91 77448 48000", "+91 98765 43210"],
  },
  {
    id: 3,
    icon: Mail,
    title: "Email Us",
    subtitle: "We'll reply as quickly as possible.",
    color: "from-orange-500 to-pink-500",
    details: ["sales@goescapio.in", "support@goescapio.in"],
  },
  {
    id: 4,
    icon: Clock3,
    title: "Working Hours",
    subtitle: "We're available throughout the week.",
    color: "from-violet-500 to-indigo-500",
    details: ["Mon - Sat : 09:00 AM - 07:00 PM", "Sunday : Closed"],
  },
];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Contact Information
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            We're Always Here
            <span className="block text-blue-600">
              To Help You Travel Better
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Whether you're planning your next holiday, searching for the perfect
            package, or need travel assistance, our experienced team is ready to
            help you at every step.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  relative
                  flex
                  min-h-[390px]
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-300
                  hover:shadow-xl
                "
              >
                {/* Top Line */}

                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.color}`}
                />

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${item.color}
                    text-white
                    shadow-lg
                    transition-all
                    duration-500
                    group-hover:scale-110
                  `}
                >
                  <Icon size={34} />
                </div>

                {/* Title */}

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Subtitle */}

                <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-600">
                  {item.subtitle}
                </p>

                {/* Details */}

                <div className="mt-auto space-y-3">
                  {item.details.map((text, index) => {
                    const isPhone = item.title === "Call Our Experts";

                    const isEmail = item.title === "Email Us";

                    if (isPhone) {
                      return (
                        <a
                          key={index}
                          href={`tel:${text.replace(/\s/g, "")}`}
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-blue-50
                            hover:text-blue-600
                          "
                        >
                          {text}

                          <ArrowUpRight size={17} />
                        </a>
                      );
                    }

                    if (isEmail) {
                      return (
                        <a
                          key={index}
                          href={`mailto:${text}`}
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-blue-50
                            hover:text-blue-600
                          "
                        >
                          <span className="break-all">{text}</span>

                          <ArrowUpRight size={17} />
                        </a>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className="
                          rounded-2xl
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          text-slate-700
                        "
                      >
                        {text}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
