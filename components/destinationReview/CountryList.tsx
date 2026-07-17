import Image from "next/image";
import Link from "next/link";

type Country = {
  title: string;
  image: string;
  slug: string;
};

type CountryListProps = {
  countries: Country[];
};

export default function CountryList({ countries }: CountryListProps) {
  return (
    <section className="px-6 py-16 lg:px-10">
      {/* Heading */}
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        Country List
      </h2>

      {/* Cards Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <div key={country.slug} className="bg-white shadow-md">
            {/* Image */}
            <div className="relative h-[220px] w-full">
              <Image
                src={country.image}
                alt={country.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex min-h-[120px] flex-col px-6 py-5">
              <h3 className="text-center text-lg font-semibold leading-7 text-gray-900">
                {country.title}
              </h3>

              <div className="mt-auto flex justify-end">
                <Link
                  href={`/package/${country.slug}`}
                  className="text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-black"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}