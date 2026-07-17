import { PackageReview } from "@/types/packageReview";

import BookNowPriceCard from "./BookNowPriceCard";
import BookNowInfoCard from "./BookNowInfoCard";
import BookNowHelpCard from "./BookNowHelpCard";

type Props = {
  packageData: PackageReview;
};

export default function BookNowSidebar({
  packageData,
}: Props) {
  return (
    <aside
      className="
        w-full
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
        "
      >
        {/* Price Card */}

        <BookNowPriceCard
          price={packageData.price || ""}
        />

        {/* Package Info */}

        <BookNowInfoCard
          duration={packageData.duration || ""}
          location={packageData.location || ""}
        />

        {/* Help Card */}

        <BookNowHelpCard />

      </div>
    </aside>
  );
}