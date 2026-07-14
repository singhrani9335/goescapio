type Props = {
  region: any;
};

export default function RegionContent({ region }: Props) {
  return (
    <div
      className="
flex-1
px-10
py-10
"
    >
      <h2
        className="
text-3xl
font-semibold
mb-8
"
      >
        {region.title}
      </h2>

      <div
        className="
grid
grid-cols-2
gap-x-12
gap-y-5
"
      >
        {region.places.map((place: string) => (
          <div
            key={place}
            className="
text-gray-700
hover:text-black
cursor-pointer
"
          >
            {place}
          </div>
        ))}
      </div>
    </div>
  );
}
