// src/hooks/usePrices.ts
import { useEffect, useState } from "react";
import { getPrices } from "../api/prices";

type Props = { ticker?: string; interval: string };

const usePrices = ({ ticker, interval }: Props) => {
  const [pricesData, setPricesData] = useState<any>(null);
  const [pricesLoading, setPricesLoading] = useState<boolean>(true);
  const [pricesError, setPricesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;
      try {
        setPricesLoading(true);
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
