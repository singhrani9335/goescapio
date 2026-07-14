"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-bg.jpg"
          alt="About Go Escapio"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>


      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[520px]
          max-w-[1400px]
          items-center
          gap-12
          px-5
          py-20
          lg:grid-cols-2
          lg:px-10
        "
      >

        {/* Left Content */}
        <div className="max-w-xl text-white">

          {/* Small Heading */}
          <p
            className="
              mb-3
              text-xl
              font-extrabold
              uppercase
              tracking-wide
            "
          >
            About
          </p>


          {/* Main Heading */}
          <h2
            className="
              mb-6
              text-4xl
              font-extrabold
              uppercase
              md:text-5xl
            "
          >
            <span className="text-blue-600">
              Go
            </span>{" "}
            <span className="text-white">
              Escapio
            </span>
          </h2>


          {/* Description */}
          <p
            className="
              text-base
              leading-7
              text-white/90
              md:text-[17px]
            "
          >
            At Go Escapio we believe that every journey should be an
            unforgettable experience. With a passion for exploration and a
            commitment to exceptional service, our team of travel experts
            curates personalized itineraries that cater to your unique
            preferences and budget. From dream vacations to spontaneous
            getaways, we provide insider tips, exclusive deals, and seamless
            booking processes to ensure your travels are stress-free.
          </p>

        </div>



        {/* Right Video */}
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            bg-black/40
            shadow-2xl
          "
        >

          <iframe
            className="
              aspect-video
              h-full
              w-full
            "
            src="https://www.youtube.com/embed/eBYoXLnA9Y8"
            title="Go Escapio Video"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture
            "
            allowFullScreen
          />

        </div>


      </div>

    </section>
  );
}