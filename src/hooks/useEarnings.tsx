// src/hooks/useAlphaVantage.ts
import { useEffect, useState } from "react";
import { EarningsData } from "../types/earningsData";
import { getEarnings } from "../api/earnings";

type Props = { ticker?: string };

const useEarnings = ({ ticker }: Props) => {
  const [earningsData, setEarningsData] = useState<EarningsData | null>(null);
  const [earningsLoading, setEarningsLoading] = useState<boolean>(true);
  const [earningsError, setEarningsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;
      try {
        setEarningsLoading(true);
        const data = await getEarnings(ticker);
        setEarningsData(data);
      } catch (err) {
        setEarningsError("Error fetching financial data.");
      } finally {
        setEarningsLoading(false);
      }
    };

    
  }, [ticker]);

  return { earningsData, earningsLoading, earningsError };
};

export default useEarnings;
