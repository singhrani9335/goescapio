"use client";

import Image from "next/image";
import { Images as ImageIcon } from "lucide-react";

type PackageGalleryProps = {
  images: string[];
};

export default function PackageGallery({ images }: PackageGalleryProps) {
  const mainImage = images?.[0] || null;

  const galleryImages = images?.length
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
                alt="Package main image"
                fill
                priority
                sizes="
                  (max-width:1024px) 100vw,
                  50vw
                "
                className="
                  object-cover
                "
              />
            ) : (
              <PlaceholderImage title="Main Image" />
            )}
          </div>

          {/* ===========================
              RIGHT FOUR IMAGES
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
                    alt={`Package gallery image ${index + 2}`}
                    fill
                    sizes="
                      (max-width:1024px) 50vw,
                      25vw
                    "
                    className="
                      object-cover
                    "
                  />
                ) : (
                  <PlaceholderImage title={`Image ${index + 2}`} small />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   IMAGE PLACEHOLDER
=========================== */

function PlaceholderImage({
  title,
  small = false,
}: {
  title: string;
  small?: boolean;
}) {
  return (
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
        <ImageIcon size={small ? 40 : 70} className="mx-auto mb-3" />

        <p className={small ? "text-sm font-medium" : "text-xl font-semibold"}>
          {title}
        </p>

        <p className={small ? "mt-1 text-xs" : "mt-2 text-sm"}>
          Image Coming Soon
        </p>
      </div>
    </div>
  );
}
