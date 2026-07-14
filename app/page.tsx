import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

import HandpickedPackages from "@/components/HandpickedPackages";
import LatestHotDeals from "@/components/LatestHotDeals";
import PopularPackages from "@/components/PopularPackages";
import LimitedTimeOffers from "@/components/LimitedTimeOffers";
import HolidayThemes from "@/components/HolidayThemes";
import PopularDestinations from "@/components/PopularDestinations";

import DomesticPackages from "@/components/packages/DomesticPackages";
import InternationalPackages from "@/components/packages/InternationalPackages";

import DiscoverSection from "@/components/discover/DiscoverSection";
import AboutSection from "@/components/about/AboutSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white pt-[112px] ">
        <Hero />

        <HandpickedPackages />

        <LatestHotDeals />

        <PopularPackages />

        <LimitedTimeOffers />

        <HolidayThemes />

        <PopularDestinations />

        {/* Domestic Tour Packages */}
        <DomesticPackages />

        {/* International Tour Packages */}
        <InternationalPackages />

        {/* Discover Section */}
        <DiscoverSection />

        {/* About Section */}
        <AboutSection />

        {/* Testimonial Section */}
        <TestimonialSection />

        <Footer />
      </main>
    </>
  );
}