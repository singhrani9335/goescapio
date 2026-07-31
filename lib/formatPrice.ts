import type { CurrencyCode, ExchangeRates } from "@/types/currency";

const symbols: Record<CurrencyCode, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

export function formatPrice(
  price: number,
  currency: CurrencyCode,
  rates: ExchangeRates
) {
  const rate = rates[currency] ?? 1;

  const convertedPrice = price * rate;

  return `${symbols[currency]}${convertedPrice.toLocaleString(undefined, {
    minimumFractionDigits: currency === "INR" ? 0 : 2,
    maximumFractionDigits: currency === "INR" ? 0 : 2,
  })}`;
}