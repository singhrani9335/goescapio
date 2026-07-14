import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { holidayThemes } from "@/data/holidayThemes";

interface ThemeDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ThemeDetailsPage({
  params,
}: ThemeDetailsPageProps) {
  const { id } = await params;

  const theme = holidayThemes.find(
    (item) => item.id === Number(id)
  );

  if (!theme) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}

      <section className="relative">
        <div className="relative h-[420px] w-full overflow-hidden">
          <Image
            src={theme.image}
            alt={theme.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-5 text-center text-white">
            <h1 className="text-4xl font-bold md:text-6xl">
              {theme.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200">
              Discover unforgettable experiences and explore the
              best destinations specially curated for your travel
              style.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              About this Theme
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Whether you're looking for adventure, relaxation,
              culture or luxury, our {theme.title.toLowerCase()}
              holidays are designed to create unforgettable
              memories. Explore carefully selected destinations,
              premium stays and exciting experiences tailored for
              every traveler.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✔ Premium Hotels</li>
              <li>✔ Guided Sightseeing</li>
              <li>✔ Comfortable Transport</li>
              <li>✔ Best Price Guarantee</li>
              <li>✔ 24×7 Travel Support</li>
            </ul>
          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={theme.image}
              alt={theme.title}
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready for your next holiday?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Explore our handpicked packages and start planning your
            dream vacation today.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Explore Packages
          </Link>
        </div>
      </section>
    </main>
  );
}