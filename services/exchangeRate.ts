import type { ExchangeRates } from "@/types/currency";

export async function getExchangeRates(): Promise<ExchangeRates> {
  try {
    const response = await fetch("/api/exchange-rate");

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates.");
    }

    const data = await response.json();

    return data.conversion_rates;
  } catch (error) {
    console.error("Exchange Rate Error:", error);

    return {
      INR: 1,
      USD: 0.01045,
      EUR: 0.009087,
    };
  }
}