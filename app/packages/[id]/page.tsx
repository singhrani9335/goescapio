import { notFound } from "next/navigation";
import Image from "next/image";

import { latestHotDeals } from "@/data/latestHotDeals";

interface PackageDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PackageDetailsPage({
  params,
}: PackageDetailsPageProps) {
  const { id } = await params;

  const deal = latestHotDeals.find((item) => item.id === Number(id));

  if (!deal) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}

      <section className="relative">
        <div className="relative h-[450px] w-full overflow-hidden">
          <Image
            src={deal.image}
            alt={deal.title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Details Card */}

        <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-5">
          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
            {/* Title */}

            <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
              {deal.title}
            </h1>

            {/* Info */}

            <div className="mt-6 flex flex-wrap gap-8 text-gray-600">
              <div>
                <p className="text-sm text-gray-400">Location</p>

                <p className="mt-1 font-semibold text-gray-800">
                  {deal.location}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Duration</p>

                <p className="mt-1 font-semibold text-gray-800">
                  {deal.nights}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Starting From</p>

                <p className="mt-1 text-2xl font-bold text-blue-600">
                  ₹{deal.price}
                </p>
              </div>
            </div>

            {/* About Package */}

            <div className="mt-10 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                About This Package
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Explore {deal.title} with comfortable stays, amazing sightseeing
                experiences and a memorable travel journey planned for you.
              </p>
            </div>

            {/* Highlights */}

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Tour Highlights
              </h2>

              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                <li className="rounded-xl bg-gray-50 px-5 py-4 text-gray-700">
                  Comfortable stay with premium accommodation
                </li>

                <li className="rounded-xl bg-gray-50 px-5 py-4 text-gray-700">
                  Sightseeing at popular destinations
                </li>

                <li className="rounded-xl bg-gray-50 px-5 py-4 text-gray-700">
                  Experienced travel assistance
                </li>

                <li className="rounded-xl bg-gray-50 px-5 py-4 text-gray-700">
                  Hassle-free travel experience
                </li>
              </ul>
            </div>

            {/* Booking CTA */}

            <div
              className="
              mt-10
              flex
              flex-col
              gap-5
              rounded-2xl
              bg-blue-50
              p-6
              md:flex-row
              md:items-center
              md:justify-between
              "
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Ready to explore this destination?
                </h3>

                <p className="mt-2 text-gray-600">
                  Book your package today and start your journey.
                </p>
              </div>

              <button
                className="
                rounded-xl
                bg-blue-600
                px-8
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                "
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
