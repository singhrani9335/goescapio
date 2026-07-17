type PackageBreadcrumbProps = {
  title: string;
};

export default function PackageBreadcrumb({
  title,
}: PackageBreadcrumbProps) {
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
      <span>Home</span>
      <span>/</span>

      <span>Destinations</span>
      <span>/</span>

      <span>Asia</span>
      <span>/</span>

      <span>India</span>
      <span>/</span>

      <span className="text-gray-900">
        {title}
      </span>
    </div>
  );
}