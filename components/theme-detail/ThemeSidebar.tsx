"use client";

import { Range, getTrackBackground } from "react-range";

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
  return (
    <aside className="w-full">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

        <h3 className="text-lg font-semibold text-gray-900">
          Price Range
        </h3>

        <div className="my-4 border-b border-gray-200" />


        <div className="mb-6 flex items-center justify-between text-sm font-medium text-gray-700">
          <span>
            ₹{values[0].toLocaleString("en-IN")}
          </span>

          <span>
            ₹{values[1].toLocaleString("en-IN")}
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
                  colors: [
                    "#d1d5db",
                    "#1f275c",
                    "#d1d5db",
                  ],
                  min,
                  max,
                }),
                cursor: "default",
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
                  border: "3px solid #fff",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,.25)",
                  cursor: "default",
                }}
              />
            );
          }}
        />

      </div>
    </aside>
  );
}