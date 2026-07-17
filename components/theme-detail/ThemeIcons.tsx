import {
  BedDouble,
  Camera,
  Car,
  UtensilsCrossed,
  Map,
} from "lucide-react";

interface ThemeIconsProps {
  features: {
    hotel: boolean;
    activity: boolean;
    sightseeing: boolean;
    transport: boolean;
    meal: boolean;
  };
}

export default function ThemeIcons({
  features,
}: ThemeIconsProps) {
  return (
    <div className="flex items-center gap-4 text-gray-500">
      {features.hotel && (
        <BedDouble
          size={20}
          className="transition hover:text-blue-600"
        />
      )}

      {features.activity && (
        <Map
          size={20}
          className="transition hover:text-blue-600"
        />
      )}

      {features.sightseeing && (
        <Camera
          size={20}
          className="transition hover:text-blue-600"
        />
      )}

      {features.transport && (
        <Car
          size={20}
          className="transition hover:text-blue-600"
        />
      )}

      {features.meal && (
        <UtensilsCrossed
          size={20}
          className="transition hover:text-blue-600"
        />
      )}
    </div>
  );
}