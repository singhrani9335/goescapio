"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type {
  CurrencyCode,
  ExchangeRates,
} from "@/types/currency";

import { getExchangeRates } from "@/services/exchangeRate";

interface CurrencyContextType {
  currency: CurrencyCode;
  rates: ExchangeRates;
  setCurrency: (currency: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  const [rates, setRates] = useState<ExchangeRates>({
    INR: 1,
    USD: 0.01045,
    EUR: 0.009087,
  });

  useEffect(() => {
    async function loadRates() {
      const exchangeRates = await getExchangeRates();
      setRates(exchangeRates);
    }

    loadRates();
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        rates,
        setCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );
  }

  return context;
}