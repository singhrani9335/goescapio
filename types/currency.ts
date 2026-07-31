export type CurrencyCode = "INR" | "USD" | "EUR";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
}

export interface ExchangeRates {
  [key: string]: number;
}