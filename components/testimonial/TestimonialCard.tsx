"use client";

import { useRef, useEffect } from "react";
import { Quote } from "lucide-react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { testimonials } from "@/data/testimonials";

export default function TestimonialCard() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <div
      className="
      relative
      flex
      h-[430px]
      w-[430px]
      items-center
      justify-center
      "
    >
      {/* Outer Border */}

      <div
        className="
        absolute
        inset-0
        rounded-full
        p-[5px]
        "
        style={{
          background: "linear-gradient(135deg,#ffffff,#a855f7,#4c1d95)",
        }}
      >
        {/* Dark Ring */}

        <div
          className="
          h-full
          w-full
          rounded-full
          bg-[#160b2e]
          p-[8px]
          "
        >
          {/* Main Circle */}

          <div
            className="
            relative
            flex
            h-full
            w-full
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-full
            px-14
            text-center
            "
            style={{
              background: "linear-gradient(145deg,#d8c5ff,#9b6cff,#6428c9)",
            }}
          >
            {/* Quote Fixed */}

            <Quote
              size={45}
              fill="white"
              strokeWidth={3}
              className="
              mb-5
              text-white
              "
            />

            {/* Content Slider */}

            <div className="w-full overflow-hidden">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Autoplay]}
                loop={true}
                speed={900}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                className="w-full"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.name}>
                    <div
                      className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      "
                    >
                      <h3
                        className="
                        mb-4
                        text-xl
                        font-bold
                        text-white
                        "
                      >
                        {item.name} says:
                      </h3>

                      <p
                        className="
                        max-w-[300px]
                        text-[15px]
                        leading-7
                        text-white
                        "
                      >
                        {item.review}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Decorative Dots */}

            <span
              className="
              absolute
              left-24
              top-24
              h-3
              w-3
              rounded-full
              bg-white/40
              "
            />

            <span
              className="
              absolute
              bottom-28
              right-24
              h-4
              w-4
              rounded-full
              bg-white/30
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
