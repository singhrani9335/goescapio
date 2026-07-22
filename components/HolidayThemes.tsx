"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { holidayThemes } from "@/data/holidayThemes";

export default function HolidayThemes() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Holidays By Theme
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-gray-900 md:text-[16px]">
            Find your perfect getaway, tailored to your interests.
          </p>
        </div>

        {/* Slider */}

        <div className="relative overflow-visible px-2">
          {/* Left Arrow */}

          <button
            className="
              holiday-prev
              absolute
              -left-5
              top-[50%]
              z-20
              flex
              h-7
              w-7
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              shadow-md
              transition
              hover:bg-blue-700
            "
            aria-label="Previous Slide"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Right Arrow */}

          <button
            className="
              holiday-next
              absolute
              -right-5
              top-[50%]
              z-20
              flex
              h-7
              w-7
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              shadow-md
              transition
              hover:bg-blue-700
            "
            aria-label="Next Slide"
          >
            <ChevronRight size={14} />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={28}
            navigation={{
              prevEl: ".holiday-prev",
              nextEl: ".holiday-next",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },

              640: {
                slidesPerView: 3,
              },

              768: {
                slidesPerView: 4,
              },

              1200: {
                slidesPerView: 5,
              },
            }}
            className="overflow-visible"
          >
            {holidayThemes.map((theme) => (
              <SwiperSlide key={theme.id} className="!h-auto">
                <div className="flex justify-center">
                  <div
                    className="
                      group
                      relative
                      h-56
                      w-56
                      overflow-hidden
                      rounded-full
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-95
                      hover:shadow-xl
                    "
                  >
                    <Image
                      src={theme.image}
                      alt={theme.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                      <h3 className="text-lg font-semibold leading-6">
                        {theme.title}
                      </h3>

                      <Link
                        href={`/themes/${theme.slug}`}
                        className="
                          mt-3
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-white/70
                          px-4
                          py-1.5
                          text-xs
                          font-medium
                          text-white
                          transition
                          duration-300
                          hover:bg-transparent
                        "
                      >
                        Explore Now
                        <ArrowRight size={13} />
                      </Link>
                    </div>
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
