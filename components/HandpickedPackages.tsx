"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Hotel,
  Car,
  MapPinned,
  BadgeIndianRupee,
} from "lucide-react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

import { packages } from "@/data/packages";

export default function HandpickedPackages() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Handpicked Holiday Packages
          </h2>

          <p
            className="
    mx-auto
    mt-6
    max-w-2xl
    text-[15px]
    leading-7
    text-gray-900
    md:text-[16px]
  "
          >
            Re-discover the joy of travel with handpicked packages designed to
            offer the perfect getaway. Meticulously tailored to cater diverse
            interests.
          </p>
        </div>

        {/* Slider */}

        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Left Arrow */}

          <button
            className="
              handpicked-prev
              absolute
              -left-8
              top-1/2
              z-30
              -translate-y-1/2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              shadow-lg
              transition
              hover:bg-blue-700
            "
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}

          <button
            className="
              handpicked-next
              absolute
              -right-8
              top-1/2
              z-30
              -translate-y-1/2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              shadow-lg
              transition
              hover:bg-blue-700
            "
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".handpicked-prev",
              nextEl: ".handpicked-next",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={900}
            slidesPerView={1}
            spaceBetween={0}
            className="rounded-3xl overflow-hidden"
          >
            {packages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-[540px] overflow-hidden">
                  {/* Background Image */}

                  <div
                    className="
    absolute
    right-0
    top-0
    h-[320px]
    w-[86%]
    overflow-hidden
    rounded-2xl
    shadow-xl
    md:h-[470px]
    md:w-[72%]
  "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={item.id === packages[0].id}
                      sizes="(max-width:768px) 100vw, 72vw"
                      className="
    object-cover
    object-center
  "
                    />

                    <div
                      className="
                      absolute
                      top-16
                     -right-1

                      z-20
                      flex
                      items-center
                      gap-2
                      rounded-sm
                      bg-white/95
                      px-4
                      py-2
                      shadow-lg
                      backdrop-blur-sm
                     "
                    >
                      <BadgeIndianRupee
                        size={18}
                        strokeWidth={2.5}
                        className="text-blue-700"
                      />

                      <span className="text-sm font-medium text-gray-600">
                        Starting From
                      </span>

                      <span className="text-xl font-bold text-blue-700">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* White Content Card */}

                  <div
                    className="
                    absolute
                    left-0
                    top-[44%]
                    z-20
                    w-[88%]
                    max-w-[520px]
                    -translate-y-1/2
                    rounded-2xl
                    border-2
                   border-blue-300
                   bg-white
                   p-8
                   shadow-[0_18px_60px_rgba(0,0,0,0.12)]
                   md:w-[52%]
                   md:p-10
                   "
                  >
                    <h3
                      className="
                   line-clamp-2
                   text-2xl
                   font-bold
                   leading-tight
                   text-gray-900
                   md:text-3xl
                   "
                    >
                      {item.title}
                    </h3>

                    {/* Icons */}

                    <div
                      className="
                      mt-5
                      flex
                      items-center
                      gap-3
                     not-last:text-[#082A72]
                      "
                    >
                      <Clock3 size={18} strokeWidth={2.6} />

                      <Hotel size={18} strokeWidth={2.6} />

                      <Car size={18} strokeWidth={2.6} />

                      <MapPinned size={18} strokeWidth={2.6} />
                    </div>

                    <p
                      className="
                      mt-5
                      min-h-[120px]
                      line-clamp-4
                      text-base
                      leading-8
                     text-gray-600
                    "
                    >
                      {item.description}
                    </p>

                    <Link
                      href={`/packages/${item.id}`}
                      className="
                      mt-6
                      inline-block
                      rounded-xl
                     bg-blue-600
                      px-8
                     py-3
                     font-semibold
                     text-white
                      transition
                      duration-300
                      hover:bg-blue-700
                     "
                    >
                      VIEW PACKAGE
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
