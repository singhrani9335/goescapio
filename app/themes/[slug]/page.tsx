import { notFound } from "next/navigation";

import Navbar from "@/components/navbar/Navbar";
import ThemeHero from "@/components/theme-detail/ThemeHero";
import ThemePackagesSection from "@/components/theme-detail/ThemePackagesSection";

import { themeDetails } from "@/data/themeDetails";
import { themePackages } from "@/data/themePackages";

export default async function ThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const theme = themeDetails.find(
    (item) => item.slug === slug
  );

  if (!theme) {
    notFound();
  }

  // Abhi testing ke liye saare packages dikhayenge
  const packages = themePackages;

  return (
    <>
      

      <main className="min-h-screen bg-white">
        <ThemeHero theme={theme} />

        <ThemePackagesSection
          packages={packages}
        />
      </main>
    </>
  );
}