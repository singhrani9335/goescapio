"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ThemeSortProps {
  totalResults: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function ThemeSort({
  totalResults,
  sortBy,
  onSortChange,
}: ThemeSortProps) {
  const [open, setOpen] = useState(false);

  const options = [
    {
      label: "Package Name",
      value: "name",
    },
    {
      label: "Price",
      value: "price-low",
    },
  ];

  const selectedLabel = options.find((item) => item.value === sortBy)?.label;

  return (
    <div className="mb-8 flex w-full items-center justify-between">
      {/* Left */}
      <h2
        className="
          text-[22px]
          font-semibold
          text-gray-900
        "
      >
        Showing {totalResults} Result
      </h2>

      {/* Right */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            w-[170px]
            items-center
            justify-between
            rounded-lg
            border
            border-gray-300
            bg-white
            px-4
            py-2.5
            text-sm
            font-medium
            text-gray-700
            transition
            hover:border-gray-400
          "
        >
          {selectedLabel || "Sort by"}

          <ChevronDown size={18} className="text-gray-500" />
        </button>

        {open && (
          <div
            className="
              absolute
              right-0
              z-20
              mt-2
              w-[170px]
              overflow-hidden
              rounded-lg
              border
              border-gray-200
              bg-white
              shadow-lg
            "
          >
            {options.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onSortChange(item.value);
                  setOpen(false);
                }}
                className="
                  block
                  w-full
                  px-4
                  py-3
                  text-left
                  text-sm
                  text-gray-700
                  hover:bg-gray-100
                "
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
