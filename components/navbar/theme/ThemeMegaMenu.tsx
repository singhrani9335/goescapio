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
        w-[1120px]
        -translate-x-1/2
        border
        border-gray-200
        bg-white
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      "
    >
      <div
        className="
          max-h-[560px]
          overflow-y-auto
          p-3
          overscroll-auto
          scroll-smooth
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        <div className="grid grid-cols-3 gap-2">
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