import { notFound } from "next/navigation";

import { bookNowPackages } from "@/data/bookNow";

import BookNowGallery from "@/components/bookNow/BookNowGallery";
import BookNowSummary from "@/components/bookNow/BookNowSummary";
import BookNowOverview from "@/components/bookNow/BookNowOverview";
import BookNowBreadcrumb from "@/components/bookNow/BookNowBreadcrumb";
import BookNowSidebar from "@/components/bookNow/BookNowSidebar";
import BookNowItinerary from "@/components/bookNow/BookNowItinerary";
import HotelSection from "@/components/bookNow/HotelSection";
import BookNowInclusionsExclusions from "@/components/bookNow/BookNowInclusionsExclusions";
import BookNowTermsConditions from "@/components/bookNow/BookNowTermsConditions";
import SimilarBookNow from "@/components/bookNow/SimilarBookNow";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BookNowPage({ params }: Props) {
  const { slug } = await params;

  const packageData = bookNowPackages.find((item) => item.slug === slug);

  if (!packageData) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-white pt-[120px]">
      {/* FULL WIDTH GALLERY */}

      <BookNowGallery images={packageData.gallery} />

      {/* PACKAGE SUMMARY */}

      <BookNowSummary
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

      {/* BREADCRUMB */}

      <div className="mx-auto max-w-[1380px] px-6">
        <BookNowBreadcrumb title={packageData.title || ""} />
      </div>

      {/* MAIN CONTENT + SIDEBAR */}

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
        {/* LEFT CONTENT */}

        <section className="space-y-8">
          {packageData.overview && (
            <BookNowOverview packageData={packageData} />
          )}

          {/* ITINERARY */}

          <BookNowItinerary itinerary={packageData.itinerary} />

          {/* HOTEL */}

          <HotelSection hotels={packageData.hotels} />

          {/* INCLUSIONS / EXCLUSIONS */}

          <BookNowInclusionsExclusions
            inclusions={packageData.inclusions}
            exclusions={packageData.exclusions}
          />

          {/* TERMS & CONDITIONS */}

          <BookNowTermsConditions terms={packageData.terms} />
        </section>

        {/* RIGHT SIDEBAR */}

        <aside
          className="
            sticky
            top-32
            -mt-12
            h-fit
          "
        >
          <BookNowSidebar packageData={packageData} />
        </aside>
      </div>

      {/* SIMILAR BOOK NOW PACKAGES */}

      <SimilarBookNow />
    </main>
  );
}
