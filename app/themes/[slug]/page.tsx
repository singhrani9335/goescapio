import { notFound } from "next/navigation";

import ThemeHero from "@/components/theme-detail/ThemeHero";
import ThemePackagesSection from "@/components/theme-detail/ThemePackagesSection";

import { themeDetails } from "@/data/themeDetails";
import { themePackages } from "@/data/themePackages";


export default async function ThemePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;


  const theme = themeDetails.find(
    (item) => item.slug === slug
  );


  if (!theme) {
    notFound();
  }


  const packages = themePackages;


  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <ThemeHero
        theme={theme}
      />


      {/* PACKAGES */}

      <ThemePackagesSection
        packages={packages}
      />

    </main>
  );
}