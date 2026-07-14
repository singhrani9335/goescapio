"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function WatchVideoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          inline-flex
          w-fit
          items-center
          gap-3
          rounded-full
          bg-white
          px-5
          py-[7px]
          shadow-lg
        "
      >
        <span
  className="
    text-[15px]
    font-extrabold
    tracking-[0.04em]
    text-slate-600
  "
>
  Watch Video
</span>
        {/* Play Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            cursor-pointer
            transition
            duration-300
            hover:scale-110
          "
        >
          <Play
            size={15}
            className="ml-0.5 fill-current"
          />
        </button>
      </div>

      {/* Video Modal */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
          "
        >
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                absolute
                -top-12
                right-0
                text-white
                hover:text-red-400
              "
            >
              <X size={32} />
            </button>

            {/* YouTube Video */}
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/4HO7sd3pVsA?autoplay=1"
                title="GoEscapio Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}