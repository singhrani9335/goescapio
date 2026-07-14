"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, Plane } from "lucide-react";
import { useRouter } from "next/navigation";

import { destinations } from "@/data/hero/destinations";
import { Destination } from "@/types/hero";

export default function DestinationDropdown() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setSearchText(destination.name);
    setOpen(false);
  };

  const handleSearch = () => {
    if (selectedDestination) {
      router.push(`/destinations/${selectedDestination.id}`);
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className="
        absolute
        bottom-0
        left-1/2
        z-40
        w-full
        max-w-4xl
        -translate-x-1/2
        translate-y-1/2
        px-5
      "
    >
      <div
        ref={dropdownRef}
        className="
          relative
          grid
          grid-cols-[1fr_170px]
          rounded-2xl
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        "
      >
        {/* LEFT SEARCH AREA */}

        <div
          className="
            flex
            items-center
            gap-4
            px-6
            py-4
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-50
              text-blue-600
            "
          >
            <Plane size={20} />
          </div>

          <div className="flex-1">
            <p
              className="
                text-xs
                font-semibold
                tracking-wide
                text-gray-500
              "
            >
              Select Destination
            </p>

            <div
              onClick={() => setOpen(true)}
              className="
                mt-1
                flex
                cursor-pointer
                items-center
                gap-2
              "
            >
              <Search size={16} className="text-gray-500" />

              <input
                readOnly
                value={selectedDestination?.name || ""}
                placeholder="Select Destination"
                className="
                  w-full
                  cursor-pointer
                  bg-transparent
                  text-base
                  font-semibold
                  text-gray-800
                  placeholder:text-gray-700
                  outline-none
                "
              />
            </div>
          </div>

          {/* DROPDOWN */}

          {open && (
            <div
              className="
                absolute
                bottom-[65%]
                left-1/2
                -translate-x-1/2
                w-[360px]
                overflow-hidden
                rounded-xl
                border
                border-gray-100
                bg-white
                shadow-[0_15px_40px_rgba(0,0,0,0.15)]
              "
            >
              <div className="p-3">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-gray-100
                    px-3
                    py-2
                  "
                >
                  <Search size={17} className="text-gray-500" />

                  <input
                    autoFocus
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search Destination"
                    className="
                      w-full
                      bg-transparent
                      text-sm
                      font-semibold
                      text-gray-800
                      placeholder:text-gray-500
                      outline-none
                    "
                  />
                </div>
              </div>

              <div className="border-t border-gray-100" />

              <div
                className="
                  max-h-56
                  overflow-y-auto
                  scrollbar-hide
                  p-2
                "
              >
                {filteredDestinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => handleSelect(destination)}
                    className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2
                        text-left
                        transition
                        hover:bg-blue-50
                      "
                  >
                    <div
                      className="
                          relative
                          h-6
                          w-9
                          overflow-hidden
                          rounded
                          border
                        "
                    >
                      <Image
                        src={destination.flag}
                        alt={destination.name}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>

                    <span
                      className="
                          text-sm
                          font-semibold
                          text-gray-800
                        "
                    >
                      {destination.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SEARCH BUTTON */}

        <button
          onClick={handleSearch}
          className="
            rounded-r-2xl
            border-l
            border-gray-200
            bg-blue-600
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-white
            transition
            hover:bg-blue-700
          "
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}
