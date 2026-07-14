"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import DealCard from "@/components/DealCard";
import { limitedTimeOffers } from "@/data/limitedTimeOffers";

export default function LimitedTimeOffers() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <section
      className="
      overflow-hidden
      bg-white
      py-20
      lg:py-24
      "
    >
      <div
        className="
        mx-auto
        max-w-[1400px]
        px-5
        lg:px-10
        "
      >
        {/* Heading */}

        <div
          className="
          mx-auto
          mb-14
          max-w-3xl
          text-center
          "
        >

          <h2
            className="
            mt-4
            text-4xl
            font-bold
            text-gray-900
            md:text-5xl
            "
          >
            Limited Time Offers
          </h2>

          <p
  className="
    mx-auto
    mt-6
    max-w-4xl
    text-[15px]
    leading-7
    text-gray-900
    md:text-[16px]
  "
>
  Grab exclusive savings on top holiday packages – whether it's a tropical getaway,
  snowy retreat, or city escape. Book now before these special prices disappear!
</p>
        </div>

        {/* Slider */}

        <div
          className="
          relative
          overflow-hidden
          px-2
          "
        >
          {/* Left Arrow */}

          <button
            className="
            limited-prev
            absolute
            left-[14px]
            top-[42%]
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
            <ChevronLeft size={16} />
          </button>

          {/* Right Arrow */}

          <button
            className="
            limited-next
            absolute
            right-[14px]
            top-[42%]
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
            <ChevronRight size={16} />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={30}
            navigation={{
              prevEl: ".limited-prev",
              nextEl: ".limited-next",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
            className="overflow-hidden"
          >
            {limitedTimeOffers.map((deal) => (
              <SwiperSlide key={deal.id} className="!h-auto">
                <div className="h-full">
                  <DealCard deal={deal} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
