"use client";

import Image from "next/image";
import { Images } from "lucide-react";

type BookNowGalleryProps = {
  images: string[];
};

export default function BookNowGallery({
  images,
}: BookNowGalleryProps) {
  const hasImages = images.length > 0;

  const mainImage = hasImages ? images[0] : null;

  const galleryImages = hasImages
    ? images.slice(1, 5)
    : Array.from({ length: 4 }, () => "");

  return (
    <section className="w-full bg-white px-[4px] pt-[4px]">
      <div className="w-full overflow-hidden">
        <div
          className="
            grid
            h-[470px]
            grid-cols-1
            gap-[2px]
            lg:grid-cols-2
          "
        >
          {/* ===========================
              LEFT BIG IMAGE
          =========================== */}

          <div
            className="
              relative
              h-full
              overflow-hidden
              bg-gray-100
            "
          >
            {mainImage ? (
              <Image
                src={mainImage}
                alt="Book Now Image"
                fill
                priority
                className="object-cover"
              />
            ) : (
              <div
                className="
                  flex
                  h-full
                  items-center
                  justify-center
                  text-center
                  text-gray-400
                "
              >
                <div>
                  <Images
                    size={70}
                    className="mx-auto mb-4"
                  />

                  <p className="text-xl font-semibold">
                    Main Image
                  </p>

                  <p className="mt-2 text-sm">
                    Image Coming Soon
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ===========================
              RIGHT 4 IMAGES
          =========================== */}

          <div
            className="
              grid
              h-full
              grid-cols-2
              grid-rows-2
              gap-[2px]
            "
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="
                  relative
                  h-full
                  overflow-hidden
                  bg-gray-100
                "
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`Book Now Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      items-center
                      justify-center
                      text-center
                      text-gray-400
                    "
                  >
                    <div>
                      <Images
                        size={40}
                        className="mx-auto mb-3"
                      />

                      <p className="text-sm font-medium">
                        Image {index + 2}
                      </p>

                      <p className="mt-2 text-xs">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}