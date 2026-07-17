"use client";

import type { ThemePackage } from "@/types/themePackage";
import ThemePackageCard from "./ThemePackageCard";

interface ThemePackageGridProps {
  packages: ThemePackage[];
}

export default function ThemePackageGrid({
  packages,
}: ThemePackageGridProps) {
  return (
    <div
      className="
        grid
        w-full
        grid-cols-1
        gap-4
        md:grid-cols-2
      "
    >
      {packages.map((pkg) => (
        <ThemePackageCard
          key={pkg.id}
          pkg={pkg}
        />
      ))}
    </div>
  );
}