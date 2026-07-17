import { notFound } from "next/navigation";

import { destinationReviews } from "@/data/destinationReview";

import DestinationHero from "@/components/destinationReview/DestinationHero";
import DestinationBreadcrumb from "@/components/destinationReview/DestinationBreadcrumb";
import DestinationOverview from "@/components/destinationReview/DestinationOverview";
import CountryList from "@/components/destinationReview/CountryList";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination = destinationReviews.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-30">
      <DestinationHero destination={destination} />

      <DestinationBreadcrumb title={destination.title} />

      <DestinationOverview
        description={destination.description}
      />

      <CountryList
        countries={destination.countries}
      />
    </main>
  );
}