"use client";

import { themeMenu } from "@/data/navbar/themeMenu";
import ThemeCard from "./ThemeCard";

interface ThemeMegaMenuProps {
  isOpen: boolean;
}

export default function ThemeMegaMenu({
  isOpen,
}: ThemeMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
      absolute
      left-1/2
      top-full
      z-50
      mt-0
      w-[1200px]
      -translate-x-1/2
      rounded-[20px]
      border
      border-gray-200
      bg-white
      shadow-[0_25px_70px_rgba(0,0,0,0.15)]
      "
    >

      {/* Scroll Area */}
      <div
        className="
        max-h-[600px]
        overflow-y-auto
        p-5
        "
      >

        <div
          className="
          grid
          grid-cols-3
          gap-5
          "
        >

          {themeMenu.map((theme) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
            />
          ))}

        </div>

      </div>

    </div>
  );
}