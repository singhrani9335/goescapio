"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import DestinationDropdown from "./DestinationDropdown";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const slides = [
  {
    src: "/images/hero/hero6.jpg",
    title: "Kerala Tour Packages",
    description: "Where Every Trip Begins With A Dream !",
    slug: "kerala",
  },
  {
    src: "/images/hero/hero2.jpg",
    title: "Phuket & Krabi Tour Packages",
    description: "Where Every Trip Begins With A Dream !",
    slug: "phuket-krabi",
  },
  {
    src: "/images/hero/hero3.jpg",
    title: "Singapore Tour Packages",
    description: "Where Every Trip Begins With A Dream !",
    slug: "singapore",
  },
  {
    src: "/images/hero/hero4.jpg",
    title: "Bali Tour Packages",
    description: "Where Every Trip Begins With A Dream !",
    slug: "bali",
  },
  {
    src: "/images/hero/hero5.jpg",
    title: "Dubai Tour Packages",
    description: "Where Every Trip Begins With A Dream !",
    slug: "dubai",
  },
];
export default function Hero() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <section className="relative mb-20 w-full">
      <div className="relative h-[520px] overflow-hidden">
        <button
          className="
            hero-prev
            absolute
            left-5
            top-1/2
            z-30
            -translate-y-1/2
            text-white
            transition
            hover:scale-110
          "
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className="
            hero-next
            absolute
            right-5
            top-1/2
            z-30
            -translate-y-1/2
            text-white
            transition
            hover:scale-110
          "
        >
          <ChevronRight size={32} />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={900}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div className="relative h-[520px] w-full">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    items-center
                    justify-center
                    px-5
                    text-center
                  "
                >
                  <div className="max-w-4xl">
                    <p
                      className={`
                        ${greatVibes.className}
                        mb-3
                        text-3xl
                        text-white
                        drop-shadow-lg
                        md:text-5xl
                      `}
                    >
                      {slide.title}
                    </p>

                    <h1
                      className="
                        mx-auto
                        w-fit
                        whitespace-nowrap
                        text-3xl
                        font-extrabold
                        leading-tight
                        text-white
                        drop-shadow-2xl
                        md:text-4xl
                      "
                    >
                      {slide.description}
                    </h1>

                    <Link href={`/book-now/${slide.slug}`}>
                      <button
                        className="
                          mt-8
                          rounded-lg
                          border-2
                          border-white
                          bg-transparent
                          px-8
                          py-3
                          font-semibold
                          tracking-wide
                          text-white
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:bg-white
                          hover:text-black
                          hover:shadow-xl
                        "
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <DestinationDropdown />
    </section>
  );
}
