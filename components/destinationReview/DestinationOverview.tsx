interface DestinationOverviewProps {
  description: string;
}

export default function DestinationOverview({
  description,
}: DestinationOverviewProps) {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-6 lg:px-24 pb-20">
        <p
  className="
    max-w-[1300px]
    text-[14px]
    leading-6
    text-gray-600
    md:text-[15px]
  "
>
  {description}
</p>
      </div>
    </section>
  );
}