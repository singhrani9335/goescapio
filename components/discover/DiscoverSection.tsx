"use client";

import DiscoverLeft from "./DiscoverLeft";
import DiscoverRight from "./DiscoverRight";

export default function DiscoverSection() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {/* Main Layout */}
        <div
          className="
            grid
            items-stretch
            gap-12
            lg:grid-cols-[5fr_6fr]
          "
        >
          {/* Left */}
          <DiscoverLeft />

          {/* Right */}
          <DiscoverRight />
        </div>
      </div>
    </section>
  );
}