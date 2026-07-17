import { notFound } from "next/navigation";

import { packageReviews } from "@/data/packageReview";

import PackageGallery from "@/components/packageReview/PackageGallery";
import PackageSummary from "@/components/packageReview/PackageSummary";
import PackageOverview from "@/components/packageReview/PackageOverview";
import PackageBreadcrumb from "@/components/packageReview/PackageBreadcrumb";
import PackageSidebar from "@/components/packageReview/PackageSidebar";
import PackageItinerary from "@/components/packageReview/PackageItinerary";
import PackageInclusionsExclusions from "@/components/packageReview/PackageInclusionsExclusions";
import PackageTermsConditions from "@/components/packageReview/PackageTermsConditions";
import SimilarPackages from "@/components/packageReview/SimilarPackages";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PackageReviewPage({ params }: Props) {
  const { slug } = await params;

  const packageData = packageReviews.find((item) => item.slug === slug);

  if (!packageData) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-white pt-[120px]">
      {/* ===========================
          FULL WIDTH GALLERY
      =========================== */}

      <PackageGallery images={packageData.gallery} />

      {/* ===========================
          PACKAGE SUMMARY
      =========================== */}

      <PackageSummary
        title={packageData.title || ""}
        price={packageData.price || ""}
        priceType={packageData.priceType || ""}
        duration={packageData.duration || ""}
        location={packageData.location || ""}
        features={
          packageData.features || {
            hotel: false,
            activity: false,
            transport: false,
            meal: false,
          }
        }
      />

      {/* ===========================
          BREADCRUMB
      =========================== */}

      <div className="mx-auto max-w-[1380px] px-6">
        <PackageBreadcrumb title={packageData.title || ""} />
      </div>

      {/* ===========================
          MAIN CONTENT + SIDEBAR
      =========================== */}

      <div
        className="
          mx-auto
          grid
          items-start
          max-w-[1380px]
          grid-cols-1
          gap-8
          px-6
          pb-12
          lg:grid-cols-[minmax(0,1fr)_350px]
        "
      >
        {/* ===========================
            LEFT CONTENT
        =========================== */}

        <section className="space-y-8">
          {packageData.overview && (
            <PackageOverview packageData={packageData} />
          )}

          <PackageItinerary itinerary={packageData.itinerary} />

          <PackageInclusionsExclusions
            inclusions={packageData.inclusions}
            exclusions={packageData.exclusions}
          />

          <PackageTermsConditions terms={packageData.terms} />
        </section>

        {/* ===========================
            RIGHT SIDEBAR
        =========================== */}

        <aside
          className="
            -mt-12
            h-fit
            sticky
            top-32
          "
        >
          <PackageSidebar packageData={packageData} />
        </aside>
      </div>

      {/* ===========================
          SIMILAR PACKAGES
      =========================== */}

      <SimilarPackages />
    </main>
  );
}
