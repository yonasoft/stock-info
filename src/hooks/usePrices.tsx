// src/hooks/usePrices.ts
import { useEffect, useState } from "react";
import { getPrices } from "../api/prices";
import { TwelveDataResponse } from "../types/pricesData";

type Props = { ticker?: string; interval: string };

// Custom hook to fetch price data
const usePrices = ({ ticker, interval }: Props) => {
  const [pricesData, setPricesData] = useState<TwelveDataResponse | null>(null);
  const [pricesLoading, setPricesLoading] = useState<boolean>(true);
  const [pricesError, setPricesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;
      try {
        if (!pricesData) setPricesLoading(true);
        const data = await getPrices(ticker, interval);
        setPricesData(data);
      } catch (err) {
        setPricesError("Error fetching financial data.");
      } finally {
        setPricesLoading(false);
      }
    };
    fetchData();
  }, [ticker, interval]);

  return {
    pricesData,
    pricesLoading,
    pricesError,
  };
};

export default usePrices;
