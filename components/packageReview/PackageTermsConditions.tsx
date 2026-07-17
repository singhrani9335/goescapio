interface PackageTermsConditionsProps {
  terms?: string[];
}

export default function PackageTermsConditions({
  terms = [],
}: PackageTermsConditionsProps) {
  if (!terms.length) {
    return null;
  }

  return (
    <section
      className="
        mt-8
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
      "
    >
      <div className="px-6 py-6">
        <h2
          className="
            mb-5
            text-[21px]
            font-bold
            text-[#222]
          "
        >
          Terms and Conditions
        </h2>

        <div
          className="
            scrollbar-hide
            max-h-[420px]
            overflow-y-auto
            pr-2
          "
        >
          <ul className="space-y-0">
            {terms.map((item, index) => (
              <li
                key={index}
                className="
                  py-[1px]
                  text-[15px]
                  font-normal
                  leading-6
                  text-[#555]
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}