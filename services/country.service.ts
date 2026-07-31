import { API } from "@/lib/api";
import type { Country } from "@/types/country";

const TOKEN = process.env.NEXT_PUBLIC_REST_COUNTRIES_TOKEN;

export async function searchCountries(
  search: string
): Promise<Country[]> {
  if (!search.trim()) {
    return [];
  }

  try {
    const response = await fetch(
      `${API.REST_COUNTRIES_BASE_URL}/countries/v5/names.common/${search}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    return await response.json();
  } catch (error) {
    console.error("Country API Error:", error);
    return [];
  }
}