import Link from "next/link";

interface DestinationBreadcrumbProps {
  title: string;
}

export default function DestinationBreadcrumb({
  title,
}: DestinationBreadcrumbProps) {
  return (
    <div className="w-full px-6 lg:px-24 pt-2 pb-8">
      <div className="flex items-center gap-3 text-base font-semibold text-gray-600">

        <Link
          href="/"
          className="hover:text-[#2856D7] transition-colors"
        >
          Home
        </Link>

        <span>/</span>

        <Link
          href="/destination"
          className="hover:text-[#2856D7] transition-colors"
        >
          Destination
        </Link>

        <span>/</span>

        <Link
          href="/destination/africa"
          className="text-lg font-bold text-gray-900 hover:text-[#2856D7]"
        >
          {title}
        </Link>

      </div>
    </div>
  );
}