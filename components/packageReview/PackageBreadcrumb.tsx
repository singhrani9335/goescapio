import Link from "next/link";

type PackageBreadcrumbProps = {
  title: string;
};

export default function PackageBreadcrumb({ title }: PackageBreadcrumbProps) {
  return (
    <div
      className="
        mt-14
        mb-6
        flex
        flex-wrap
        items-center
        gap-3
        text-[15px]
        font-semibold
        text-gray-500
      "
    >
      <Link href="/" className="hover:text-[#2856D7] transition-colors">
        Home
      </Link>

      <span>/</span>

      <Link
        href="/destination"
        className="hover:text-[#2856D7] transition-colors"
      >
        Destinations
      </Link>

      <span>/</span>

      <Link
        href="/destination/asia"
        className="hover:text-[#2856D7] transition-colors"
      >
        Asia
      </Link>

      <span>/</span>

      <Link
        href="/destination/india"
        className="hover:text-[#2856D7] transition-colors"
      >
        India
      </Link>

      <span>/</span>

      <span className="text-gray-900">{title}</span>
    </div>
  );
}
