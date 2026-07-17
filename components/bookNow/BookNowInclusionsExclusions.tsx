interface BookNowInclusionsExclusionsProps {
  inclusions?: string[];
  exclusions?: string[];
}

export default function BookNowInclusionsExclusions({
  inclusions = [],
  exclusions = [],
}: BookNowInclusionsExclusionsProps) {
  if (!inclusions.length && !exclusions.length) {
    return null;
  }

  return (
    <section className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2">
      {/* ===========================
          INCLUSIONS
      =========================== */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#24d39a]
          bg-[#f2fff3]
          shadow-sm
        "
      >
        <div className="relative px-6 pt-6 pb-4">
          <span
            className="
              absolute
              left-0
              top-6
              h-7
              w-[4px]
              rounded-r-full
              bg-[#19c37d]
            "
          />

          <h2 className="text-[21px] font-bold text-[#2a2a2a]">
            Inclusions
          </h2>
        </div>

        <div
          className="
            scrollbar-hide
            h-[300px]
            overflow-y-auto
            px-6
            pb-6
          "
        >
          <ul className="space-y-0">
            {inclusions.map((item, index) => (
              <li key={index} className="py-[1px]">
                <p
                  className="
                    text-[15px]
                    font-normal
                    leading-6
                    text-[#555]
                  "
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===========================
          EXCLUSIONS
      =========================== */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#ff6b6b]
          bg-[#fff3f3]
          shadow-sm
        "
      >
        <div className="relative px-6 pt-6 pb-4">
          <span
            className="
              absolute
              left-0
              top-6
              h-7
              w-[4px]
              rounded-r-full
              bg-[#ff4d4f]
            "
          />

          <h2 className="text-[21px] font-bold text-[#2a2a2a]">
            Exclusions
          </h2>
        </div>

        <div
          className="
            scrollbar-hide
            h-[300px]
            overflow-y-auto
            px-6
            pb-6
          "
        >
          <ul className="space-y-0">
            {exclusions.map((item, index) => (
              <li key={index} className="py-[1px]">
                <p
                  className="
                    text-[15px]
                    font-normal
                    leading-6
                    text-[#555]
                  "
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}