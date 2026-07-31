"use client";

import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/lib/formatPrice";

interface ThemeSidebarProps {
  values: number[];
  min: number;
  max: number;
  onChange: (values: number[]) => void;
}

export default function ThemeSidebar({
  values,
  min,
  max,
  onChange,
}: ThemeSidebarProps) {
  const { currency, rates } = useCurrency();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="w-full">
      <div
        className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
        "
      >
        <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>

        <div className="my-4 border-b border-gray-200" />

        <div
          className="
            mb-6
            flex
            items-center
            justify-between
            text-sm
            font-medium
            text-gray-700
          "
        >
          <span>
            {mounted ? formatPrice(values[0], currency, rates) : "₹0"}
          </span>

          <span>
            {mounted ? formatPrice(values[1], currency, rates) : "₹0"}
          </span>
        </div>

        <Range
          values={values}
          step={100}
          min={min}
          max={max}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <div
              ref={props.ref}
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                height: "6px",
                width: "100%",
                borderRadius: "999px",

                background: getTrackBackground({
                  values,
                  colors: ["#d1d5db", "#1f275c", "#d1d5db"],
                  min,
                  max,
                }),

                cursor: "pointer",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...rest } = props;

            return (
              <div
                key={key}
                {...rest}
                style={{
                  ...props.style,

                  height: "18px",
                  width: "18px",

                  borderRadius: "50%",

                  backgroundColor: "#1f275c",

                  border: "3px solid white",

                  boxShadow: "0 2px 8px rgba(0,0,0,.25)",

                  cursor: "pointer",
                }}
              />
            );
          }}
        />
      </div>
    </aside>
  );
}
