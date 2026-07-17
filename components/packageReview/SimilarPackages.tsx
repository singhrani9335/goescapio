"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { similarPackages } from "@/data/packageReview/similarPackages";

import SimilarPackageCard from "./SimilarPackageCard";

export default function SimilarPackages() {
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
        py-16
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
            mb-10
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              text-gray-900
            "
          >
            Similar Packages
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
              similar-prev
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
          >
            <ChevronLeft size={16} />
          </button>



          {/* Right Arrow */}
          <button
            className="
              similar-next
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
          >
            <ChevronRight size={16} />
          </button>



          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            observer={true}
            observeParents={true}
            loop={true}
            speed={900}
            spaceBetween={5}
            navigation={{
              prevEl: ".similar-prev",
              nextEl: ".similar-next",
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
                slidesPerView: 4,
              },
            }}
            className="overflow-hidden"
          >

            {similarPackages.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!h-[390px]"
              >
                <SimilarPackageCard
                  packageData={item}
                />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
}