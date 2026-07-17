import { PackageReview } from "@/types/packageReview";

import PackagePriceCard from "./PackagePriceCard";
import PackageInfoCard from "./PackageInfoCard";
import PackageHelpCard from "./PackageHelpCard";


type Props = {
  packageData: PackageReview;
};


export default function PackageSidebar({
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
        <PackagePriceCard
          price={packageData.price || ""}
        />


        {/* Package Info */}
        <PackageInfoCard
          duration={packageData.duration || ""}
          location={packageData.location || ""}
        />


        {/* Help Card */}
        <PackageHelpCard />

      </div>

    </aside>
  );
}