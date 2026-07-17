import { PackageReview } from "@/types/packageReview";

type BookNowOverviewProps = {
  packageData: PackageReview;
};

export default function BookNowOverview({
  packageData,
}: BookNowOverviewProps) {
  return (
    <section
      className="
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-6
        py-6
        shadow-sm
        md:px-8
        md:py-7
      "
    >
      {/* Heading */}

      <h2
        className="
          text-[24px]
          font-bold
          leading-tight
          text-gray-900
        "
      >
        Overview
      </h2>

      {/* Content */}

      <div
        className="
          mt-5
          max-w-[900px]
        "
      >
        <p
          className="
            text-[15px]
            font-medium
            leading-7
            text-gray-800
            md:text-[14px]
          "
        >
          {packageData.overview}
        </p>
      </div>
    </section>
  );
}