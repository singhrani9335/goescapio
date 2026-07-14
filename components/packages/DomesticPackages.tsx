"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import TourPackageCard from "@/components/packages/TourPackageCard";
import { domesticPackages } from "@/data/domesticPackages";

export default function DomesticPackages() {
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
            Domestic Packages
          </h2>
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
              domestic-prev
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
              domestic-next
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
              prevEl: ".domestic-prev",
              nextEl: ".domestic-next",
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
            {domesticPackages.map((pack) => (
              <SwiperSlide key={pack.id} className="!h-auto">
                <div className="h-full">
                  <TourPackageCard packageData={pack} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
