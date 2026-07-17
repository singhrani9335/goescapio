"use client";

import { useMemo, useState } from "react";

import type { ThemePackage } from "@/types/themePackage";

import ThemeSidebar from "./ThemeSidebar";
import ThemeSort from "./ThemeSort";
import ThemePackageGrid from "./ThemePackageGrid";

interface ThemePackagesSectionProps {
  packages: ThemePackage[];
}

export default function ThemePackagesSection({
  packages,
}: ThemePackagesSectionProps) {
  const prices = packages.map((item) => Number(item.price.replace(/,/g, "")));

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [range, setRange] = useState([minPrice, maxPrice]);

  const [sortBy, setSortBy] = useState("name");

  const filteredPackages = useMemo(() => {
    let data = packages.filter((item) => {
      const price = Number(item.price.replace(/,/g, ""));

      return price >= range[0] && price <= range[1];
    });

    switch (sortBy) {
      case "price-low":
        data.sort(
          (a, b) =>
            Number(a.price.replace(/,/g, "")) -
            Number(b.price.replace(/,/g, "")),
        );
        break;

      case "price-high":
        data.sort(
          (a, b) =>
            Number(b.price.replace(/,/g, "")) -
            Number(a.price.replace(/,/g, "")),
        );
        break;

      default:
        data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [packages, range, sortBy]);

  return (
    <section className="bg-[#fafafa] py-12">
      <div className="mx-auto max-w-[1450px] px-6">
        <div className="grid grid-cols-[360px_1fr] gap-8">
          {/* Price Range */}

          <ThemeSidebar
            values={range}
            min={minPrice}
            max={maxPrice}
            onChange={setRange}
          />

          {/* Right Side */}

          <div className="w-full">
            <ThemeSort
              totalResults={filteredPackages.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <ThemePackageGrid packages={filteredPackages} />
          </div>
        </div>
      </div>
    </section>
  );
}
